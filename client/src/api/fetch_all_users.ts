import { baseUrl } from "./base_url";
import { User } from "../users/user";

export async function fetchAllUsers(): Promise<User[] | never[]> {
	try {
		const result: Response = await fetch(baseUrl + "/api/users/all");
		return await result.json();		
	} catch {
		return [];
	}
}
