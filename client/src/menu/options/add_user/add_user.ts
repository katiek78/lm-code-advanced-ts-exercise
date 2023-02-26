import { sendNewUser } from "../../../api/send_new_user";
import { STATES } from "../../../states/states";
import { clear, print, prompt } from "../../../ui/console";

export async function addUser() {
	clear("no");
	const name: string = await prompt("What is the username? ");
    const id: string = "8"; //Need to implement id function
    const creationDate: string = new Date().toString();

	print(`📨 Adding user "${name}"...`);

	const success = await sendNewUser({id, name, creationDate});

	if (success === true) print("🥳 User added successfully!");
	else print("😵 User NOT added.");

	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return STATES.MENU;
}
