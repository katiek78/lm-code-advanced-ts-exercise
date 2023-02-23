import { baseUrl } from "./base_url";

export async function fetchPost(id: string) {
	try {
		const result: Response = await fetch(baseUrl + "/api/posts/" + id);
		return await result.json();		
	} catch {
		return [];
	}
}
