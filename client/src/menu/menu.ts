import { STATES } from "../states/states";
import { State } from "../states/state";
import { clear, print, printNewLine, prompt } from "../ui/console";

export async function showMenu(): Promise<State> {
	clear("yes");
	print("0. Send Server Message", false);
	print("1. Show all posts", false);
	print("2. Show all users", false);
	print("3. Browse posts", false);
	print("4. Add user", false);
	print("5. Add post", false);
	print("6. Edit user name", false);
	printNewLine();

	const result: string = await prompt("What shall we do? ");

	if (result === "0") return STATES.SEND_MESSAGE;
	if (result === "1") return STATES.SHOW_POSTS;
	if (result === "2") return STATES.SHOW_USERS;
	if (result === "3") return STATES.BROWSE_POSTS;
	if (result === "4") return STATES.ADD_USER;
	if (result === "5") return STATES.ADD_POST;
	if (result === "6") return STATES.EDIT_USER_NAME;

	return STATES.UNKNOWN;
}
