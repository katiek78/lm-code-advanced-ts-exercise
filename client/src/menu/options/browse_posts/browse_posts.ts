import { fetchPost } from "../../../api/fetch_post";
import { clear, print, prompt, printNewLine } from "../../../ui/console";
import { STATES } from "../../../states/states";

export async function browsePosts() {
	clear("nope");

	let desiredPostId: string = await prompt("Enter Post ID");

	// Validate Post ID, should be a number
	while (isNaN(parseInt(desiredPostId)) || parseInt(desiredPostId) < 0) {
		print(`😣 Please enter a valid number`);
		desiredPostId = await prompt("Enter Post ID");
	}

	print(`📨 Fetching post "${desiredPostId}...`);

	const result = await fetchPost(desiredPostId);

	print(`🥳 Received post:`);

	console.log(result);

	printNewLine();
	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return STATES.MENU;
}
