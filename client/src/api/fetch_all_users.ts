import { baseUrl } from "./base_url";

export async function fetchAllUsers() {
	try {
		const result: Response = await fetch(baseUrl + "/api/users/all");
		const users = result.json();
		return users;
	} catch {
		return [];
	}
}
