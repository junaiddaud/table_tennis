from flask import Flask
from flask_cors import CORS
from flask_restful import Api
from flask_jwt_extended import JWTManager

## routes
from players import Player
from user import User
app = Flask(__name__)
app.config['SECRET_KEY']='1f1d5008-218c-11ee-be56-0242ac120002'
api=Api(app)
CORS(app)


api.add_resource(Player,'/players')
api.add_resource(User,"/user")
# JWT Authentication
app.config['JWT_SECRET_KEY'] = app.secret_key  # This can be changed
app.config['JWT_BLACKLIST_ENABLED'] = True
app.config['JWT_BLACKLIST_TOKEN_CHECKS'] = ['access', 'refresh']
jwt = JWTManager(app)


if (__name__=='__main__'):
    app.run(debug=True)