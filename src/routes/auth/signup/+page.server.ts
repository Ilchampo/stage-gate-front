import type { Actions, ServerLoad } from '@sveltejs/kit';

import { signUpSchema, validateCodeSchema } from '$lib/helpers/schemas';
import { fail, superValidate } from 'sveltekit-superforms';
import { yup } from 'sveltekit-superforms/adapters';
import { validateCodeApi } from '$lib/api/auth.api';

import httpCodes from '$lib/constants/httpCodes';
import { codeStore } from '$lib/stores/code.store';
import { get } from 'svelte/store';

export const load: ServerLoad = async () => {
	const signUpForm = await superValidate(yup(signUpSchema));
	const validateCodeForm = await superValidate(yup(validateCodeSchema));

	return { signUpForm, validateCodeForm };
};

export const actions: Actions = {
	signup: async ({ request }) => {
		const signUpForm = await superValidate(request, yup(signUpSchema));
		const code = get(codeStore);

		if (!signUpForm.valid || !code) {
			return fail(httpCodes.BAD_REQUEST, { signUpForm });
		}

		const { firstname, lastname, password } = signUpForm.data;

		console.log(firstname, lastname, password, code);
		// const response = await signUpApi({ firstname, lastname, password, code });

		// if (response.error) {
		// 	return fail(response.code, { signUpForm });
		// }

		// return { signUpForm, signUpSuccess: response.data };
	},
	code: async ({ request }) => {
		const validateCodeForm = await superValidate(request, yup(validateCodeSchema));

		if (!validateCodeForm.valid) {
			return fail(httpCodes.BAD_REQUEST, { validateCodeForm });
		}

		const { code } = validateCodeForm.data;
		const response = await validateCodeApi(code);

		if (response.error) {
			return fail(response.code, { validateCodeForm });
		}

		return { validateCodeForm, codeSuccess: response.data, code };
	}
};
