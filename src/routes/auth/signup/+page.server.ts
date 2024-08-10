import type { Load } from '@sveltejs/kit';

import { signUpSchema } from '$lib/helpers/schemas';
import { superValidate } from 'sveltekit-superforms';
import { yup } from 'sveltekit-superforms/adapters';

export const load: Load = async () => {
	const form = await superValidate(yup(signUpSchema));
	return { form };
};