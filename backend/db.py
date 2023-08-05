import mysql.connector
host = 'localhost'
port = 3306
user = 'root'
password = 'Junaid.123'
database = 'tabletennis'

def create_connection():
    connection = mysql.connector.connect(
        host=host,
        port=port,
        user=user,
        password=password,
        database=database
    )
    return connection