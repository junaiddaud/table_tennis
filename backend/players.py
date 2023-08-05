from flask import Flask,jsonify
from flask_jwt_extended import create_access_token,jwt_required,get_jwt_identity,create_refresh_token
from flask_restful import Api,Resource,reqparse,abort,fields,marshal_with
from db import create_connection
class Player(Resource):
    # def __init__(self):
        # Request arguments
        # self.signup_args = reqparse.RequestParser()
        # self.signin_args.add_argument("password", type=str, help="password is missing", required=True)
    def get(self):
         connection = create_connection()
         if connection.is_connected():
            cursor=connection.cursor(dictionary=True)
            query="SELECT p.player_id, p.player_name, COALESCE(COUNT(m.winner_id), 0) AS win_counts FROM tabletennis.player p LEFT JOIN tabletennis.match m ON p.player_id = m.winner_id GROUP BY p.player_id, p.player_name;"
            cursor.execute(query)
            players=cursor.fetchall()
            return jsonify(players=players)


          
            
            