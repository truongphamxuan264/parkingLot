let expect = require('chai').expect;
let parkingLot = require('../parkingLot');

describe('create_parking_lot 6', async () => {
    it('should create 6 parking slots', async () => {
        let shouldResult = 'Created parking lot with 6 slots';
        let result = await parkingLot.createParkingLot(6);
        
        console.log(result);
        expect(result).to.be.equal(shouldResult);
    });
})