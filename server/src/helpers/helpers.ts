import { EOL } from "os";

export function printNewLine() {
	console.log(EOL); // this imports the correct End-Of-Line for either Windows or Unix
}

export function findNextUnusedID(arr: any[]): number {
	let currentID = 1;
	let foundUnusedID = false;
	while (!foundUnusedID) {		
		if (arr.find(item => item.id === currentID.toString()) === undefined) break;
		currentID++;
	}
	return currentID;
}