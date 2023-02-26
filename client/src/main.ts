import { showMenu } from "./menu/menu";
import { addUser } from "./menu/options/add_user/add_user";
import { addPost } from "./menu/options/add_post/add_post";
import { editUserNameOption } from "./menu/options/edit_user/edit_user_name";
import { browsePosts } from "./menu/options/browse_posts/browse_posts";
import { sendMessage } from "./menu/options/send_message/send_message";
import { showAllPosts } from "./menu/options/show_all_posts/show_all_posts";
import { showAllUsers } from "./menu/options/show_all_users/show_all_users";
import { State } from "./states/state";
import { STATES } from "./states/states";
import { clear, print, prompt } from "./ui/console";

async function begin() {
	clear("yes");
	print("👋 Welcome to our cool blog browser!");
	await prompt("⌨️ Press [ENTER] to continue! 🕶️");
	main();
}

async function main() {
	let state: State = STATES.MENU;	

	const StateMap: Record<State, () => Promise<State>> = {
		MENU: showMenu,
		SEND_MESSAGE: sendMessage,
		SHOW_POSTS: showAllPosts,
		SHOW_USERS: showAllUsers,
		BROWSE_POSTS: browsePosts,
		ADD_USER: addUser,
		ADD_POST: addPost,
		EDIT_USER_NAME: editUserNameOption,
		UNKNOWN: handleUnknown,
	} as const;

	const getState = async (state: State): Promise<State> => {
		const result = await StateMap[state]();
		if (result in STATES) {
			return result;
		} else {
			return STATES.MENU;
		}
	};

	while (true) {
		state = await getState(state);
	}
}

async function handleUnknown() {
	clear("no");
	print("😵 We have entered an unknown state.");
	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
	return STATES.MENU;
}

begin();
