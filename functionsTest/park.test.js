let expect = require('chai').expect;
let parkingLot = require('../parkingLot');

describe('park KA-01-HH-1234 Blue', async () => {
    it('should park the car', async () => {
        let shouldResult = 'Allocated slot number: 1';
        let result = await parkingLot.park('KA-01-HH-1234', 'Blue');
        
        console.log(result);
        expect(result).to.be.equal(shouldResult);
    });
});

describe('park KA-01-HH-9999 White', async () => {
    it('should park the car', async () => {
        let shouldResult = 'Allocated slot number: 2';
        let result = await parkingLot.park('KA-01-HH-9999', 'White');
        
        console.log(result);
        expect(result).to.be.equal(shouldResult);
    });
});

describe('park KA-01-BB-0001 Black', async () => {
    it('should park the car', async () => {
        let shouldResult = 'Allocated slot number: 3';
        let result = await parkingLot.park('KA-01-BB-0001', 'Black');
        
        console.log(result);
        expect(result).to.be.equal(shouldResult);
    });
});

describe('park KA-01-HH-7777 Blue', async () => {
    it('should park the car', async () => {
        let shouldResult = 'Allocated slot number: 4';
        let result = await parkingLot.park('KA-01-HH-7777', 'Blue');
        
        console.log(result);
        expect(result).to.be.equal(shouldResult);
    });
});

describe('park KA-01-HH-2701 Yellow', async () => {
    it('should park the car', async () => {
        let shouldResult = 'Allocated slot number: 5';
        let result = await parkingLot.park('KA-01-HH-2701', 'Yellow');
        
        console.log(result);
        expect(result).to.be.equal(shouldResult);
    });
});

describe('park KA-01-HH-3141 Blue', async () => {
    it('should park the car', async () => {
        let shouldResult = 'Allocated slot number: 6';
        let result = await parkingLot.park('KA-01-HH-3141', 'Blue');
        
        console.log(result);
        expect(result).to.be.equal(shouldResult);
    });
});