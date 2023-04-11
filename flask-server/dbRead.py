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
    return data

def write_csv(data):
    filename = f"{date.today()}.csv"
    fieldnames = ['Name', 'DOB', 'SessionID', 'CertificationDate', 'Notes', 'CertificationGranted', 'FacilitatorName']
    if not os.path.isfile(filename):
        # Create the file if it doesn't exist
        with open(filename, mode='w', newline='') as csvfile:
            fieldnames = ['Name', 'DOB', 'SessionID', 'CertificationDate', 'Notes', 'CertificationGranted', 'FacilitatorName']
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()

    # Open the file in append mode and write the data
    with open(filename, mode='a', newline='') as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writerow({
            'Name': data['userInfo']['name'],
            'DOB': data['userInfo']['dob'],
            'SessionID': data['userInfo']['sessionId'],
            'CertificationDate': data['userInfo']['date'],
            'Notes': data['data']['notes'],
            'CertificationGranted': data['data']['shouldCertify'],
            'FacilitatorName': data['data']['facilitatorName'],
        })

if __name__ == "__main__":
    import asyncio
    csv_data = asyncio.run(read_csv())
    print(type(csv_data))
