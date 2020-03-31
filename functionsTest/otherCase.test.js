let expect = require('chai').expect;
let parkingLot = require('../parkingLot');

describe('park KA-01-P-333 Red', async () => {
    it('should park the car', async () => {
        let shouldResult = 'Allocated slot number: 6';
        let result = await parkingLot.park('KA-01-P-333', 'Red');
        
        console.log(result);
        expect(result).to.be.equal(shouldResult);
    });
});

describe('park DL-12-AA-9999 Green', async () => {
    it('should park the car', async () => {
        let shouldResult = 'Parking lot is full';
        let result = await parkingLot.park('DL-12-AA-9999', 'Green');
        
        console.log(result);
        expect(result).to.be.equal(shouldResult);
    });
});

describe('leave KA-01-HH-1234 4', async () => {
    it('should park the car', async () => {
        let shouldResult = 'KA-01-HH-1234 with Slot Number 1 is free with Charge 30$';
        let result = await parkingLot.leave('KA-01-HH-1234', 4);
    
        console.log(result);
        expect(result).to.be.equal(shouldResult);
    });
});

describe('leave KA-01-BB-0001 6', async () => {
    it('should park the car', async () => {
        let shouldResult = 'KA-01-BB-0001 with Slot Number 3 is free with Charge 50$';
        let result = await parkingLot.leave('KA-01-BB-0001', 6);
    
        console.log(result);
        expect(result).to.be.equal(shouldResult);
    });
});

describe('leave DL-12-AA-9999 6', async () => {
    it('should park the car', async () => {
        let shouldResult = 'Registration number DL-12-AA-9999 not found';
        let result = await parkingLot.leave('DL-12-AA-9999', 6);
    
        console.log(result);
        expect(result).to.be.equal(shouldResult);
    });
});

describe('park KA-09-HH-0987 Red', async () => {
    it('should park the car', async () => {
        let shouldResult = 'Allocated slot number: 1';
        let result = await parkingLot.park('KA-09-HH-0987', 'Red');
        
        console.log(result);
        expect(result).to.be.equal(shouldResult);
    });
});

describe('park CA-09-IO-1111 White', async () => {
    it('should park the car', async () => {
        let shouldResult = 'Allocated slot number: 3';
        let result = await parkingLot.park('CA-09-IO-1111', 'White');
        
        console.log(result);
        expect(result).to.be.equal(shouldResult);
    });
});

describe('park KA-09-HH-0123 White', async () => {
    it('should park the car', async () => {
        let shouldResult = 'Parking lot is full';
        let result = await parkingLot.park('KA-09-HH-0123', 'White');
        
        console.log(result);
        expect(result).to.be.equal(shouldResult);
    });
});

describe('status', async () => {
    it('should show status of parking', async () => {
        let result = await parkingLot.status();
    
        expect(result).to.be.equal(result);
    });
});