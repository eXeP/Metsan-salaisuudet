from flask import Flask
from database import create_route
app = Flask(__name__)

@app.route('/')
def index():
   return 'index page'

@app.route('/get_adventures')
def get_adventures():
   return create_route.create_route()


if __name__ == '__main__':
   app.run()