import type { ICustomResponse } from '$lib/interfaces/customResponse';
import type { IAuthSignInArgs } from '$lib/interfaces/auth.interface';

import getAxiosInstance from '$lib/helpers/axiosInstance';
import config from '$lib/config';
import handleError from '$lib/helpers/handleError';

const BASE_API_URL = `${config.api}/auth`;

const axios = getAxiosInstance(BASE_API_URL);

export const signInApi = async (args: IAuthSignInArgs): Promise<ICustomResponse<string>> => {
	try {
		const response = await axios.post('/signin', args);

		return response.data as ICustomResponse<string>;
	} catch (error) {
		return handleError(error) as ICustomResponse<string>;
	}
};

export const validateCodeApi = async (code: string): Promise<ICustomResponse<boolean>> => {
	try {
		const response = await axios.post('/validate-code', { code });

		return response.data as ICustomResponse<boolean>;
	} catch (error) {
		return handleError(error) as ICustomResponse<boolean>;
	}
};

// export const signUp = async (email: string, password: string) => {};
