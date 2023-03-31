from flask import Flask
import asyncio
import bleRead
import random


app = Flask(__name__)


@app.route("/members")
def members():
    vals = asyncio.run(bleRead.print_heart_rate())
    
    if vals:
        return vals
    else:
        
        
        return {"readings": [f"{random.randint(1,100)}", f"{random.randint(1,100)}", f"{random.randint(1,100)}"]}


if __name__ == "__main__":
    app.run(debug=True)