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
        return {"readings": [f"{random.randint(93,93)}", f"{random.randint(56,56)}", f"{random.randint(94,94)}", f"{random.randint(81,100)}", f"{random.randint(1,100)}", f"{random.randint(1,100)}", f"{random.randint(81,100)}", f"{random.randint(1,100)}", f"{random.randint(1,100)}", f"{random.randint(100,200)}"]}

@app.route("/records")
def records():
    csv_data = asyncio.run(dbRead.read_csv())
    if csv_data:
       print("Goes here")
       return {csv_data}
    else:
        return ({"records": []})


if __name__ == "__main__":
    app.run(debug=True)
