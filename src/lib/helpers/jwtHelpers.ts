import type { IAuthTokenDecoded } from '$lib/interfaces/auth.interface';

import { jwtDecode } from 'jwt-decode';

export const decodeToken = (token: string): IAuthTokenDecoded => {
	try {
		return jwtDecode(token) as IAuthTokenDecoded;
	} catch (error) {
		if (error instanceof SyntaxError) {
			throw new Error(error.message);
		}
		throw new Error('Invalid token');
	}
};
