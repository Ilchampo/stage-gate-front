import type { Actions, Load } from '@sveltejs/kit';

import { signInSchema } from '$lib/helpers/schemas';
import { fail, superValidate } from 'sveltekit-superforms';
import { signInApi } from '$lib/api/auth.api';
import { yup } from 'sveltekit-superforms/adapters';
import { redirect } from '@sveltejs/kit';

import config from '$lib/config';
import httpCodes from '$lib/constants/httpCodes';

export const load: Load = async () => {
	const form = await superValidate(yup(signInSchema));
	return { form };
};

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const form = await superValidate(request, yup(signInSchema));

		if (!form.valid) {
			return fail(httpCodes.BAD_REQUEST, { form });
		}

		const { email, password } = form.data;

		try {
			const response = await signInApi({ email, password });

			if (response.code !== httpCodes.OK || response.error || !response.data) {
				return fail(response.code, { form, error: String(response.error) });
			}

			cookies.set('token', response.data, {
				httpOnly: true,
				path: '/',
				secure: config.environment === 'production',
				sameSite: 'strict'
			});

			return redirect(httpCodes.FOUND, '/');
		} catch (error) {
			return fail(httpCodes.INTERNAL_SERVER_ERROR, { form, error: error as string });
		}
	}
};
