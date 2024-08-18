import type { Actions, ServerLoad } from '@sveltejs/kit';

import { collaboratorWorkspaceSchema } from '$lib/helpers/schemas';
import { fail, superValidate } from 'sveltekit-superforms';
import { yup } from 'sveltekit-superforms/adapters';
import { redirect } from '@sveltejs/kit';

import httpCodes from '$lib/constants/httpCodes';

export const load: ServerLoad = async () => {
	const form = await superValidate(yup(collaboratorWorkspaceSchema));

	return { form };
};
