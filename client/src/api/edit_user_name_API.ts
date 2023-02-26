import { baseUrl } from "./base_url";

export async function editUserNameAPI(userID: string, newName: string) {
	try {
		const result: Response = await fetch(
			baseUrl + "/api/users/edit_user_name/" + userID,
			{
				headers: {
					"Content-Type": "application/json",
				},
				method: "POST",
				body: JSON.stringify({ userID, newName }),
			}
		);

		const json = await result.json();

		return json.success;
	} catch (e) {
		console.error(e);
		return false;
	}
}
