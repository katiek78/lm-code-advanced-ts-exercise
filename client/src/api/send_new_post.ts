import { baseUrl } from "./base_url";
import { Post } from "../posts/post";

export async function sendNewPost(post: Post) {
	try {
		const result: Response = await fetch(baseUrl + "/api/posts/add/", {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",			
            body: JSON.stringify({ post }),
		});

		const json = await result.json();

		return json.success;
	} catch (e) {
		console.error(e);
		return false;
	}
}

