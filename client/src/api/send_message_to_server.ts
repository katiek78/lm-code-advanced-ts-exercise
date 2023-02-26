import { baseUrl } from "./base_url";

export async function sendMessageToServer(message: string) {
	try {
		const result: Response = await fetch(baseUrl + "/api/send/", {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({ message: message }),
		});

		const json = await result.json();

		return json.success;
	} catch (e) {
		console.error(e);
		return false;
	}
}
