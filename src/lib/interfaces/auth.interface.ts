import type { IUserCreateArgs } from '$lib/interfaces/user.interface';
import type { IUserLoginCreateArgs } from '$lib/interfaces/userLogin.interface';

export interface IAuthSignInArgs {
	email: string;
	password: string;
}

export interface IAuthSignUpArgs extends IUserCreateArgs, Omit<IUserLoginCreateArgs, 'userId'> {}

export interface IAuthToken {
	id: string;
	firstname: string;
	lastname: string;
	email: string;
}
