export type User = {
	id?: string;
	name: string;
	creationDate?: string;
};

export function isUser(obj: any): obj is User {
    return (obj as User).name !== undefined;
  }