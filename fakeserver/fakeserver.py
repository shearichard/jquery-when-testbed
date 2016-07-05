from flask import Flask, request
from flask_restful import Resource, Api
from json import dumps

app = Flask(__name__)
api = Api(app)

class Apples(Resource):
    def get(self):
        result = {'data': 33}
        return result

class Bananas(Resource):
    def get(self):
        result = {'data': 99}
        return result
 
api.add_resource(Apples, '/apples')
api.add_resource(Bananas, '/bananas')

if __name__ == '__main__':
     app.run()
