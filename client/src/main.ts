import { exit } from "./exit/exit";
import { showMenu } from "./menu/menu";
import { browsePosts } from "./menu/options/browse_posts/browse_posts";
import { sendMessage } from "./menu/options/send_message/send_message";
import { showAllPosts } from "./menu/options/show_all_posts/show_all_posts";
import { showAllUsers } from "./menu/options/show_all_users/show_all_users";
import { State } from "./states/state";
import { STATES } from "./states/states";
import { clear, print, printNewLine, prompt } from "./ui/console";

async function begin() {
	clear("yes");
	print("👋 Welcome to our cool blog browser!");
	await prompt("⌨️ Press [ENTER] to continue! 🕶️");
	main();
}

async function main() {
	let state: State = STATES.MENU;

	while (true) {
		switch (state) {
			case "MENU":
				const newMenuOption = await showMenu();
				state = newMenuOption;
				break;
			case "SEND_MESSAGE":
				const nextState = await sendMessage();
				state = nextState;
				break;
			case "SHOW_POSTS":
				clear("no");
				const posts = await showAllPosts();
				state = "MENU";
				break;
			case "SHOW_USERS":
				clear("no");
				const users = await showAllUsers();
				state = "MENU";
				break;
			case "BROWSE_POSTS":
				clear("no");
				const post = await browsePosts();
				state = "MENU";
				break;
			case "ADD_USER":
				clear("no");
				print("🏗️  This functionality has not been implemented!");
				await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
				state = "MENU";
				break;
			case "UNKNOWN":
				clear("no");
				print("😵 We have entered an unknown state.");
				await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
				state = "MENU";
				break;		
			default:
				clear("no");
				print(`🌋 😱 Uh-oh, we've entered an invalid state: "${state}"`);
				print("💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥", false);
				print("💥 Crashing the program now...  💥", false);
				print("💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥", false);
				printNewLine();
				exit(99);
				break;
		}
	}
	
}

begin();
