import { baseUrl } from "./base_url";
import { Post } from "../posts/post";

export async function fetchAllPosts(): Promise<Post[] | never[]> {
	try {
		const result: Response = await fetch(baseUrl + "/api/posts/all");
		return await result.json();
	} catch {
		return [];
	}
}
