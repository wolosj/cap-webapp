from flask import Flask
import asyncio
import bleRead



app = Flask(__name__)


@app.route("/members")
def members():
    vals = asyncio.run(bleRead.print_heart_rate())
    
    if vals:
        return vals
    else:
        return {"readings": ["13", "67", "90"]}


if __name__ == "__main__":
    app.run(debug=True)