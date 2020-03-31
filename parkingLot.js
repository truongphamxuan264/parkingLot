
const _ = require('lodash');

let carArr = [];
let emptySlot = [];
let maxSlot = 0;


let createParkingLot = async (numberOfParkingLot) => {
  	try {
		maxSlot = parseInt(numberOfParkingLot);
  	} catch (e) {
		return "Not a number!!!";
	}
	  
	for (let i = 1; i <= maxSlot; i++) {
		emptySlot.push(i);
	}
	console.log(emptySlot);
	
	return `Created parking lot with ${emptySlot.length} slots`;
};

let park = async (licensePlates, color) => {
	if (maxSlot === 0) {
		return `Parking has not been created`;
	} else if (maxSlot === carArr.length) {
		return `Parking lot is full`;
	} else {
		let slot = emptySlot[0];
		carArr.push({
			'slot': slot,
			'licensePlates': licensePlates,
			'color': color
		});
		emptySlot.shift();
		return `Allocated slot number: ${slot}`
	}
};

let leave = async (licensePlates, hour) => {
	if (maxSlot === 0) {
		return `Parking has not been created`;
	} else if (carArr.length > 0) {
		if (await _.findIndex(carArr, { 'licensePlates': licensePlates }) > -1 ){
			let car = carArr[await _.findIndex(carArr, { 'licensePlates': licensePlates })];
			let fee = 0;

			if (hour >= 2) {
				fee = ((hour - 2) * 10 ) + 10;
			} else {
				fee = 10;
			}

			_.remove(carArr, { 'licensePlates': licensePlates });

			emptySlot.push(car.slot);
			emptySlot.sort();
			
			return `${ car.licensePlates } with Slot Number ${ car.slot } is free with Charge ${fee}$`;
		} else {
			return `Registration number ${ licensePlates } not found`;
		}
	} else {
   		return `Parking lot is empty!!!`
  	}
}

let status = async () => {
	if (maxSlot === 0) {
		return "parking lot is not initiated";
	} else if (carArr.length > 0) {
		console.log("Slot No.\tRegistration No.\tColor");
		carArr.forEach( (car) => {
			console.log(car.slot + "\t         " + car.licensePlates + "\t         " + car.color);
		} )
	} else {
		return `Parking lot is empty`;
	}
}

module.exports = {
	createParkingLot,
	park,
	leave,
	status
}