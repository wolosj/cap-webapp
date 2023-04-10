import csv
import json
import os
from datetime import date

async def read_csv():
    filename = f"{date.today()}.csv"
    if not os.path.isfile(filename):
        # Create the file if it doesn't exist
        with open(filename, mode='w', newline='') as csvfile:
            fieldnames = ['Name', 'DOB', 'SessionID', 'CertificationDate', 'Notes', 'CertificationGranted', 'FacilitatorName']
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()

    data = []
    with open(filename, newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            data.append(row)
    return json.dumps({"records": data})

if __name__ == "__main__":
    import asyncio
    csv_data = asyncio.run(read_csv())
    print(csv_data)
