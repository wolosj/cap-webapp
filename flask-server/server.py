from flask import Flask
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
        
        
        return {"readings": [f"{random.randint(81,100)}", f"{random.randint(1,100)}", f"{random.randint(1,100)}", f"{random.randint(81,100)}", f"{random.randint(1,100)}", f"{random.randint(1,100)}", f"{random.randint(81,100)}", f"{random.randint(1,100)}", f"{random.randint(1,100)}", f"{random.randint(100,200)}"]}

@app.route("/records")
async def records():
    db = await dbRead.read_csv_async('certificationData.csv')
    if db:
        return db
    else:
        return "No records found"




if __name__ == "__main__":
    app.run(debug=True)