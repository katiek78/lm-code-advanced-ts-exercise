import { baseUrl } from "./base_url";
import { User } from "../users/user";

export async function fetchUser(id: string): Promise<User | never[]> {
	try {
		const result: Response = await fetch(baseUrl + "/api/users/" + id);
		return await result.json();		
	} catch {
		return [];
	}
}
