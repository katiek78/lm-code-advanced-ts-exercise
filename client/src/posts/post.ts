import { User } from "../users/user";

export type Post = {
	id?: string;
	title: string;
	text: string;
	author: User;
};
