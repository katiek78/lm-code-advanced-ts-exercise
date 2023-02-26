import { User } from "../types/posts.types";
import { findNextUnusedID } from "../helpers/helpers";

const USERS = [
	{
		id: "1",
		name: "Spicy Hotfish",
		creationDate: new Date(),
	},
	{
		id: "2",
		name: "Sally-Anne Writerperson",
		creationDate: new Date(),
	},
	{
		id: "3",
		name: "Jimmy Alias",
		creationDate: new Date(),
	},
	{
		id: "4",
		name: 'Steve "The Hoop" Hooper',
		creationDate: new Date(),
	},
];

export function getAllUsers(): User[] {
	// in the absence of a true Model layer, our service can simply return a hard-coded array of users
	return USERS;
}

export function addUser(user: User) {
	user.id = findNextUnusedID(USERS).toString();
	USERS.push(user);
}

export function editUserName(userID: string, newName: string) {
	const userIndex: number = USERS.findIndex((u) => u.id === userID);
	USERS[userIndex].name = newName;
}
