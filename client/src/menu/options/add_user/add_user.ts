import { STATES } from "../../../states/states";
import { clear, print, prompt } from "../../../ui/console";

export async function addUser() {
	clear("no");
	print("🏗️  This functionality has not been implemented!");
	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
	return STATES.MENU;
}