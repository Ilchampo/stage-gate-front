import type { Actions, ServerLoad } from '@sveltejs/kit';

import { signUpSchema, validateCodeSchema } from '$lib/helpers/schemas';
import { fail, superValidate } from 'sveltekit-superforms';
import { yup } from 'sveltekit-superforms/adapters';
import { signUpApi, validateCodeApi } from '$lib/api/auth.api';
import { redirect } from '@sveltejs/kit';

import config from '$lib/config';
import httpCodes from '$lib/constants/httpCodes';

export const load: ServerLoad = async () => {
	const signUpForm = await superValidate(yup(signUpSchema));
	const validateCodeForm = await superValidate(yup(validateCodeSchema));

	return { signUpForm, validateCodeForm };
};

export const actions: Actions = {
	signup: async ({ request, cookies }) => {
		const signUpForm = await superValidate(request, yup(signUpSchema));

		if (!signUpForm.valid) {
			return fail(httpCodes.BAD_REQUEST, { signUpForm });
		}

		const { firstname, lastname, email, password, code } = signUpForm.data;

		try {
			const response = await signUpApi({ firstname, lastname, email, password, code });

			if (response.error || !response.data) {
				return fail(response.code, { signUpForm });
			}

			cookies.set('token', response.data, {
				httpOnly: true,
				path: '/',
				secure: config.environment === 'production',
				sameSite: 'strict'
			});

			return redirect(httpCodes.FOUND, '/');
		} catch (error) {
			return fail(httpCodes.INTERNAL_SERVER_ERROR, { signUpForm, error: error as string });
		}
	},
	code: async ({ request }) => {
		const validateCodeForm = await superValidate(request, yup(validateCodeSchema));

		if (!validateCodeForm.valid) {
			return fail(httpCodes.BAD_REQUEST, { validateCodeForm });
		}

		const { code } = validateCodeForm.data;
		try {
			const response = await validateCodeApi(code);

			if (response.error) {
				return fail(response.code, { validateCodeForm });
			}

			return { validateCodeForm, codeSuccess: response.data, code };
		} catch (error) {
			return fail(httpCodes.INTERNAL_SERVER_ERROR, { validateCodeForm, error: error as string });
		}
	}
};
