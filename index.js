const readline = require('readline');
const parkingLot = require('./parkingLot.js');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let init = () => {
	rl.on('line', async (input) => {
		input = input.split(" ");
		switch (input[0]) {
			case ('create_parking_lot'):
				try {
					const result = await parkingLot.createParkingLot(input[1]);
					console.log(result);
				} catch (e) {
					console.log(`Error: ${e}`);
				}
				break;
			case ('park'):
				console.log("input", input);
				try {
					const result = await parkingLot.park(input[1].trim(), input[2].trim());
					console.log(result);
				} catch (e) {
					console.log(`Error: ${e}`);
				}
				break;
			case ('leave'):
                try {
                    const result = await parkingLot.leave(input[1].trim(), input[2].trim());
                    console.log(result);

                } catch (e) {
                    console.log(`Error: ${e}`);
                }
                break;
			case ('status'):
				try {
					const result = await parkingLot.status();
				} catch (e) {
					console.log(`Error: ${e}`);
				}
				break;
		}
	});
};

init();