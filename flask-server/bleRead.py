import asyncio
from bleak import BleakScanner, BleakClient
import time
import struct

async def print_heart_rate():
    # Scan for BLE devices
    devices = await BleakScanner.discover()

    # Find the Arduino device with the specified MAC address
    device = None
    for d in devices:
        # if d.address == "CC:DB:A7:16:E0:EE":    #Test one at home
        # if d.address == "CC:DB:A7:14:99:82":   #The one in project
        if d.address == "CC:DB:A7:16:06:F2":   #The one in project
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
        glucose_data = await client.read_gatt_char("00002a18-0000-1000-8000-00805f9b34fb")
        # Convert the data to an integer
        # heart_rate = int.from_bytes(heart_rate_data, byteorder="little", signed=False)
        # blood_pressure = int.from_bytes(blood_pressure_data, byteorder="little", signed=False)
        # glucose = int.from_bytes(glucose_data, byteorder="little", signed=False)
        # Print the heart rate
        # print(f"Heart rate: {heart_rate}, Blood Pressure: {blood_pressure}" )
        # str_val1 = b'1111' & heart_rate_data
        # str_val2 = b'1111' & heart_rate_data>>8
        val1, val2, val3, val4 = struct.unpack("<BBBB", heart_rate_data)
        val5, val6, val7, val8 = struct.unpack("<BBBB", blood_pressure_data)
        val9, val10, val11, val12 = struct.unpack("<BBBB", glucose_data)
        # Print the values
        # print(f"Value 1: {val1}, Value 2: {val2}, Value 3: {val3}, Value 4: {val4}")
        return {"readings": [f"{val1}", f"{val2}", f"{val3}", f"{val4}", f"{val5}", f"{val6}", f"{val7}", f"{val8}", f"{val9}", f"{val10}"]}
        # # str_val2 = int(str(blood_pressure)[-8:-4])
        # return {"readings": [f"{heart_rate}", f"{blood_pressure}"]}



if __name__ == "__main__":
    while True:    
# Call the print_heart_rate function
        print(asyncio.run(print_heart_rate()))