export interface IAuthSignInArgs {
	email: string;
	password: string;
}

export interface IAuthSignUpArgs {
	firstname: string;
	lastname: string;
	email: string;
	password: string;
	code: string;
}

export interface IAuthToken {
	user: {
		id: string;
		firstname: string;
		lastname: string;
		email: string;
	};
	worskpace?: {
		id: string;
		role: string;
	};
	checks: {
		onBoarding: boolean;
		verifiedEmail: boolean;
		privacyPolicy: boolean;
	};
	iat: number;
	exp: number;
}
