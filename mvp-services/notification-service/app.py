from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/notify', methods=['POST'])
def notify():
    data = request.json
    # simulate sending email
    print(f"Email sent to {data.get('email')} for order {data.get('orderId')}")
    return jsonify({'status': 'sent'})

if __name__ == '__main__':
    app.run(port=5001)
