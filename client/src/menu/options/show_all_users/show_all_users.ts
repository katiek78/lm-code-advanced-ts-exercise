import { fetchAllUsers } from "../../../api/fetch_all_users";
import { clear, print, prompt, printNewLine } from "../../../ui/console";
import { STATES } from "../../../states/states";

export async function showAllUsers() {
	clear("yes");

	printNewLine();

	print("📨 Fetching users...");

	const result = await fetchAllUsers();

	print(`🥳 Received ${result.length} users. Here they are:`);

	console.log(result);

	printNewLine();
	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return STATES.MENU;
}
