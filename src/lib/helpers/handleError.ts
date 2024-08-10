import type { ICustomResponse } from '$lib/interfaces/customResponse';

import httpCodes from '$lib/constants/httpCodes';

const handleError = (error: unknown): ICustomResponse<unknown> => {
	if (error instanceof SyntaxError) {
		return { code: httpCodes.INTERNAL_SERVER_ERROR, data: undefined, error: error.message };
	}
	return { code: httpCodes.INTERNAL_SERVER_ERROR, data: undefined, error: error as string };
};

export default handleError;