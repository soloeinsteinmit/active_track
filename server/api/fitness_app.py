from flask import Flask, request, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route('/api/vitals', methods=['POST', 'GET'])
def get_vitals():
    # Replace with your logic to get heart rate and SpO2
    vitals = {
        'heartRate': 80,
        'spo2': 95,      
        'temperature': 100     
    }
    return jsonify(vitals)

if __name__ == '__main__':
    # Run the Flask application in debug mode
    app.run(debug=True)