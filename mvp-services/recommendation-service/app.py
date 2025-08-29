from flask import Flask, request, jsonify
import random

app = Flask(__name__)

@app.route('/recommendations')
def recommendations():
    # return a static list of recommendations
    return jsonify({'recommendations': ['prod1', 'prod2', 'prod3']})

if __name__ == '__main__':
    app.run(port=5002)
