from flask import Flask, jsonify
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
       print("Goes here")
       print(type(csv_data ))

       return {"records": csv_data}
    else:
        return {"records": []}


if __name__ == "__main__":
    app.run(debug=True)
