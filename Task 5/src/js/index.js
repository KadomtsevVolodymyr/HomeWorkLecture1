console.log('Kadomtsev Volodymyr');

export function getTime(Breakfast) {
	let time = new RegExp(/(?:[01]\d|2[0123]):(?:[012345]\d)/gm);
	let exactTime = time.exec(Breakfast);
	return exactTime[0];
}

 console.log(getTime("Breakfast at 09:00"));
 console.log(getTime("Breakfast at 09:60, Dinner at 21:00"));
 console.log(getTime("Breakfast at 09:59, Dinner at 21:00"));