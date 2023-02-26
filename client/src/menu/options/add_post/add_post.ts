import { fetchPost } from "../../../api/fetch_post";
import { sendNewPost } from "../../../api/send_new_post";
import { STATES } from "../../../states/states";
import { clear, print, prompt } from "../../../ui/console";

export async function addPost() {
	clear("no");
	const title: string = await prompt("What is the post title? ");    
    const text: string = await prompt("What is the post text? ");
    const authorID: string = await prompt("What is the author ID? ");
    const author = {id: authorID, name: 'Diogo', creationDate: new Date().toISOString()};

	print(`📨 Adding post with title "${title}"...`);

	const success = await sendNewPost({title, text, author});

	if (success === true) print("🥳 Post added successfully!");
	else print("😵 Post NOT added.");

	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return STATES.MENU;
}
