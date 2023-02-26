import { baseUrl } from "./base_url";
import { Post } from "../posts/post";

export async function fetchPost(id: string): Promise<Post | never[]> {
	try {
		const result: Response = await fetch(baseUrl + "/api/posts/" + id);
		return await result.json();		
	} catch {
		return [];
	}
}
