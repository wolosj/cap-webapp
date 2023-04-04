import asyncio
from bleak import BleakScanner, BleakClient
import time

async def print_heart_rate():
    # Scan for BLE devices
    devices = await BleakScanner.discover()

    # Find the Arduino device with the specified MAC address
    device = None
    for d in devices:
        if d.address == "CC:DB:A7:14:99:82":
            device = d
            break

    if device is None:
        print("Arduino not found")
        return

    # Connect to the Arduino
    async with BleakClient(device.address) as client:
        # Read the heart rate data
        heart_rate_data = await client.read_gatt_char("00002a37-0000-1000-8000-00805f9b34fb")
        blood_pressure_data = await client.read_gatt_char("00002a35-0000-1000-8000-00805f9b34fb")
        # Convert the data to an integer
        heart_rate = int.from_bytes(heart_rate_data, byteorder="little")
        blood_pressure = int.from_bytes(blood_pressure_data, byteorder="little")
        # Print the heart rate
        # print(f"Heart rate: {heart_rate}, Blood Pressure: {blood_pressure}" )
        return {"readings": [f"{heart_rate}", f"{blood_pressure}"]}



if __name__ == "__main__":
    while True:    
# Call the print_heart_rate function
        print(asyncio.run(print_heart_rate()))