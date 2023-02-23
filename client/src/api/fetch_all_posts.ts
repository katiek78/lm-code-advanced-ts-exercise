import { baseUrl } from "./base_url";

export async function fetchAllPosts() {
	try {
		const result: Response = await fetch(baseUrl + "/api/posts/all");
		return result.json();
	} catch {
		return [];
	}
}
