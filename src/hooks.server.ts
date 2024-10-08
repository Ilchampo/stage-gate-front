import type { Handle } from '@sveltejs/kit';

import { setUserStore, userStore } from '$lib/stores/user.store';
import { get } from 'svelte/store';
import { redirect } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const token = event.cookies.get('token');

	if (token) {
		setUserStore(token);
		event.locals.user = get(userStore);
	}

	const protectedPaths = ['/dashboard', '/profile'];

	const authPaths = ['/auth', '/auth/signin', '/auth/signup', '/auth/recover'];

	if (authPaths.includes(event.url.pathname) && token) {
		throw redirect(302, '/');
	}

	if (protectedPaths.some((path) => event.url.pathname.startsWith(path)) && !token) {
		throw redirect(302, '/auth/signin');
	}

	return await resolve(event);
};
