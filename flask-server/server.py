from flask import Flask, jsonify, request
import asyncio
import bleRead
import random
import dbRead


app = Flask(__name__)


@app.route("/members")
def members():
    vals = asyncio.run(bleRead.print_heart_rate())
    
    if vals:
        return vals
    else:
        return {"readings": [f"-1", f"-1", f"-1", f"-1", f"-1", f"-1", f"-1", f"-1", f"-1", f"-1"]}

@app.route("/records")
def records():
    csv_data = asyncio.run(dbRead.read_csv())
    if csv_data:
       print(csv_data)
       return jsonify(csv_data)
    else:
        return jsonify([])

@app.route('/certify', methods=['POST'])
def certify():
    
    data = request.get_json()
    
    dbRead.write_csv(data)
    print(data)
    return jsonify(data)



if __name__ == "__main__":
    app.run(debug=True)
