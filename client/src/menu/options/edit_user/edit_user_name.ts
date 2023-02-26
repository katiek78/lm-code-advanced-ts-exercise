import { STATES } from "../../../states/states";
import { clear, print, prompt } from "../../../ui/console";
import { fetchUser } from "../../../api/fetch_user";
import { isUser } from "../../../users/user";
import { editUserNameAPI } from "../../../api/edit_user_name_API";

export async function editUserNameOption() {
	clear("no");
	const userID: string = await prompt("What is the user ID? ");
	const user = await fetchUser(userID);

	//validate the given ID
	if (!isUser(user)) {
		print(`😵 Invalid user.`);
		await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
		return STATES.MENU;
	}

	const newName: string = await prompt(
		"What would you like to change the name to? "
	);

	print(`📨 Renaming "${user.name}"...`);

	const success = await editUserNameAPI(userID, newName);

	if (success === true) print("🥳 User renamed successfully!");
	else print("😵 User NOT renamed.");

	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return STATES.MENU;
}
