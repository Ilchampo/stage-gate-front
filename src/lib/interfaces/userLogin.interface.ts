export interface IUserLogin {
	id: string;
	userId: string;
	password: string;
	onBoarding: boolean;
	verifiedEmail: boolean;
	privacyPolicy: boolean;
	defaultLanguage: string;
	platformCode?: string | null;
}

export interface IUserLoginCreateArgs {
	userId: string;
	password: string;
	onBoarding?: boolean;
	verifiedEmail?: boolean;
	privacyPolicy?: boolean;
	defaultLanguage?: string;
	platformCode?: string | null;
}

export interface IUserLoginUpdateArgs {
	userId: string;
	onBoarding?: boolean;
	verifiedEmail?: boolean;
	privacyPolicy?: boolean;
	defaultLanguage?: string;
}

export interface IUserLoginUpdatePassword {
	userId: string;
	oldPassword: string;
	newPassword: string;
}
