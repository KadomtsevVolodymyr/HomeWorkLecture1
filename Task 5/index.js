export function getTime(Breakfast) {
	let time = new RegExp(/(?:[01]\d|2[0123]):(?:[012345]\d)/gm);
	let exactTime = time.exec(Breakfast);
	return exactTime[0];
}
