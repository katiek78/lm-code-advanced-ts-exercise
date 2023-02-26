import { baseUrl } from "./base_url";
import { User } from "../users/user";

export async function sendNewUser(user: User) {
	try {
		const result: Response = await fetch(baseUrl + "/api/users/add/", {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",			
            body: JSON.stringify({ user }),
		});

		const json = await result.json();

		return json.success;
	} catch (e) {
		console.error(e);
		return false;
	}
}

