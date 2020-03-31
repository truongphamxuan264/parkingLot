let expect = require('chai').expect;
let parkingLot = require('../parkingLot');

describe('status', async () => {
    it('should show status of parking', async () => {
        let result = await parkingLot.status();
    
        expect(result).to.be.equal(result);
    });
});