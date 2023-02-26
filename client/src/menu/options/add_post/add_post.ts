import { sendNewPost } from "../../../api/send_new_post";
import { STATES } from "../../../states/states";
import { clear, print, prompt } from "../../../ui/console";
import { fetchUser } from "../../../api/fetch_user";
import { isUser } from "../../../users/user";

export async function addPost() {
	clear("no");
	const title: string = await prompt("What is the post title? ");
	const text: string = await prompt("What is the post text? ");
	const userID: string = await prompt("What is the user ID of the author? ");
	const author = await fetchUser(userID);

	//validate the given ID
	if (!isUser(author)) {
		print(`😵 Invalid user.`);
		await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
		return STATES.MENU;
	}

	print(`📨 Adding post with title "${title}"...`);

	const success = await sendNewPost({ title, text, author });

	if (success === true) print("🥳 Post added successfully!");
	else print("😵 Post NOT added.");

	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return STATES.MENU;
}
