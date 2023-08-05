from db import create_connection
from flask_restful import Api,Resource,reqparse,abort,fields,marshal_with
from werkzeug.security import generate_password_hash,check_password_hash
from flask import Flask,jsonify
from flask_jwt_extended import create_access_token,jwt_required,get_jwt_identity,create_refresh_token
import jwt
class User(Resource):
    def __init__(self):
        # Request arguments
        self.signup_args = reqparse.RequestParser()
        self.signup_args.add_argument("name", type=str, help="name is missing", required=True)
        self.signup_args.add_argument("email", type=str, help="email is missing", required=True)
        self.signup_args.add_argument("password", type=str, help="password is missing", required=True)
        self.signin_args = reqparse.RequestParser()
        self.signin_args.add_argument("email", type=str, help="email is missing", required=True)
        self.signin_args.add_argument("password", type=str, help="password is missing", required=True)
    def post(self):
         connection = create_connection()
         if connection.is_connected():
            cursor=connection.cursor()
            args=self.signin_args.parse_args()
            query="SELECT id,password FROM users WHERE email = %s"
            values = (args['email'],) 
            cursor.execute(query,values)
            password=cursor.fetchone()
            print(password)
            if password:
                isMatch=check_password_hash(password[1],args['password'])
                if isMatch:
                    access_token=create_access_token(identity=password[0])
                    refresh_token=create_refresh_token(identity=password[0])
                    return jsonify(message='Login Successfull',access_token=access_token,refresh_token=refresh_token)
                else:
                    abort(http_status_code=406,message="Invalid email or password")
               
            else:
                abort(http_status_code=406,message="Invalid email or password")
            
            

          
    def put(self):
         connection = create_connection()
         if connection.is_connected():
            cursor=connection.cursor()
            args=self.signup_args.parse_args()

            query="SELECT EXISTS(SELECT 1 FROM users WHERE email = %s)"
            values = (args['email'],) 
            cursor.execute(query,values)
            check=cursor.fetchone()[0]
            print(check)
            if check:
              return abort(http_status_code=406,message="Email already exists")
            else:
                query = "INSERT INTO todolistdb.users (name,email,password) VALUES (%s,%s,%s)"
                hashed_password=generate_password_hash(args['password'])
                print(args['name'],args["email"],hashed_password)
                values = (args['name'],args["email"],hashed_password,) 
                cursor.execute(query,values)
                if cursor.rowcount > 0:
                    connection.commit()
                    connection.close() 
                    return jsonify({'message':"Sign up successfull!"})
                else:
                    connection.rollback()
                    connection.close()
                    return 'Failed to Signup data.'
    @jwt_required(refresh=True)
    def patch(self):
         identity = get_jwt_identity()
         access_token=create_access_token(identity=identity)
         refresh_token=create_refresh_token(identity=identity)
         return jsonify(access_token=access_token,refresh_token=refresh_token)

   