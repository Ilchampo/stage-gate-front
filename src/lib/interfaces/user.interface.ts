export interface IUser {
	id: string;
	firstname: string;
	lastname: string;
	email: string;
	avatar?: string | null;
}

export interface IUserCreateArgs {
	firstname: string;
	lastname: string;
	email: string;
	avatar?: string | null;
}

export interface IUserUpdateArgs {
	id: string;
	firstname?: string;
	lastname?: string;
	email?: string;
	avatar?: string | null;
}
