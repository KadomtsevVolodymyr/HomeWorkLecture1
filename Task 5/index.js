export function getTime(Breakfast) {
	const time = new RegExp(/(?:[01]\d|2[0123]):(?:[012345]\d)/gm);
	const exactTime = time.exec(Breakfast);
	if (exactTime === null) {
		return " "
	}
	else return exactTime[0];
}