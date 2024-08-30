import type { IAuthTokenDecoded } from '$lib/interfaces/auth.interface';
import type { Writable } from 'svelte/store';

import { decodeToken } from '$lib/helpers/jwtHelpers';
import { writable } from 'svelte/store';

export const userStore: Writable<IAuthTokenDecoded | undefined> = writable(undefined);

export const setUserStore = (token: string) => {
	try {
		userStore.set(decodeToken(token));
	} catch (error) {
		if (error instanceof SyntaxError) {
			throw new Error(error.message);
		}
		throw new Error('Invalid token');
	}
};
