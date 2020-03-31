#How to use:

Install all dependencies
"npm install"

Run application
"node index.js"

Run all tests cases
"npm test functionsTest/initTest.js"

----------------------
Problem Statement <br />
I own a parking lot that can hold up to 'n' cars at any given point in time. Each slot is given a number starting at 1 increasing with increasing distance from the entry point in steps of one. I want to create an automated ticketing system that allows my customers to use my parking lot without human intervention.
When a car enters my parking lot, I want to have a ticket issued to the driver. The ticket issuing process includes us documenting the registration number (number plate) and the colour of the car and allocating an available parking slot to the car before actually handing over a ticket to the driver (we assume that our customers are nice enough to always park in the slots allocated to them). The customer should be allocated a parking slot which is nearest to the entry. At the exit the customer returns the ticket with the time the car was parked in the lot, which then marks the slot they were using as being available. Total parking charge should be calculated as per the parking time. Charge applicable is $10 for first 2 hours and $10 for every additional hour.
We interact with the system via a simple set of commands which produce a specific output. Please take a look at the example below, which includes all the commands
you need to support - they're self explanatory. The system should accept a filename as a parameter at the command prompt and read the commands from that file. <br />


Commands <br />
• Createparkinglotofsizen:      create_parking_lot {capacity} <br />
• Parkacar:                     park{car_number} <br />
• Remove(Unpark)carfrom:        leave{car_number}{hours} <br />
• Printstatusofparkingslot:     status <br />


Inputs:
----------------------
create_parking_lot 6 <br />
park KA-01-HH-1234 Blue <br />
park KA-01-HH-9999 White <br />
park KA-01-BB-0001 Black <br />
park KA-01-HH-7777 Blue <br />
park KA-01-HH-2701 Yellow <br />
park KA-01-HH-3141 Blue <br />
leave KA-01-HH-3141 4 <br />
status <br />
park KA-01-P-333 Red <br />
park DL-12-AA-9999 Green <br />
leave KA-01-HH-1234 4 <br />
leave KA-01-BB-0001 6 <br />
leave DL-12-AA-9999 6 <br />
park KA-09-HH-0987 Red <br />
park CA-09-IO-1111 White <br />
park KA-09-HH-0123 White <br />
status <br />

Outputs: 
------------------
Created a parking lot with 6 slots <br />
Allocated slot number: 1 <br />
Allocated slot number: 2 <br />
Allocated slot number: 3 <br />
Allocated slot number: 4 <br />
Allocated slot number: 5 <br />
Allocated slot number: 6 <br />
KA-01-HH-3141 with Slot Number 6 is free with Charge 30$ <br />
Slot No.      Registration No        Colour <br />
1               KA-01-HH-1234        Blue <br />
2               KA-01-HH-9999        White <br />
3               KA-01-BB-0001        Black <br />
4               KA-01-HH-7777        Blue <br />
5               KA-01-HH-2701        Yellow <br />

Allocated slot number: 6 <br />
Parking lot is full <br />
KA-01-HH-1234 with Slot Number 1 is free with Charge 30$ <br />
KA-01-BB-0001 with Slot Number 3 is free with Charge 50$ <br />
Registration number DL-12-AA-9999 not found <br />
Allocated slot number: 1 <br />
Allocated slot number: 3 <br />
Parking lot is full <br />
Slot No.      Registration No       Colour <br />
2               KA-01-HH-9999       Blue <br />
4               KA-01-HH-7777       White <br />
5               KA-01-HH-2701       Black <br />
6               KA-01-P-333         Blue <br />
1               KA-09-HH-0987       Yellow <br />
3               CA-09-IO-1111       White <br />
