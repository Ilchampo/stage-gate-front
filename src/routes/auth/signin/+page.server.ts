import type { Actions, Load } from '@sveltejs/kit';

import { signInSchema } from '$lib/helpers/schemas';
import { fail, superValidate } from 'sveltekit-superforms';
import { signInApi } from '$lib/api/auth.api';
import { yup } from 'sveltekit-superforms/adapters';

import httpCodes from '$lib/constants/httpCodes';

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, yup(signInSchema));

		if (!form.valid) {
			return fail(httpCodes.BAD_REQUEST, { form });
		}

		const { email, password } = form.data;
		
		const response = await signInApi({ email, password });

		if (response.error) {
			return fail(response.code, { form, error: response.error });
		}

		return { form, success: response.code };
	}
};

export const load: Load = async () => {
	const form = await superValidate(yup(signInSchema));
	return { form };
};
