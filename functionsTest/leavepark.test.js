let expect = require('chai').expect;
let parkingLot = require('../parkingLot');

describe('leave KA-01-HH-3141 4', async () => {
    it('should park the car', async () => {
        let shouldResult = 'KA-01-HH-3141 with Slot Number 6 is free with Charge 30$';
        let result = await parkingLot.leave('KA-01-HH-3141', 4);
        
        console.log(result);
        expect(result).to.be.equal(shouldResult);
    });
});