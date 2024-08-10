export const responseCodes = {
	INVALID_DATA: 'invalid-data',
	INVALID_ID: 'invalid-id',
	INVALID_TYPE: 'invalid-type',
	NOT_FOUND: 'not-found',
	SOMETHING_BROKEN: 'something-broken',
	UNEXPECTED_ERROR: 'unexpected-error',
	DUPLICATE_ENTRY: 'duplicate-entry',
	UNAUTHORIZED: 'unauthorized',
	FORBIDDEN: 'forbidden',
	BAD_REQUEST: 'bad-request',
	CONFLICT: 'conflict',
	GONE: 'gone',
	UNPROCESSABLE_ENTITY: 'unprocessable-entity',
	SERVICE_UNAVAILABLE: 'service-unavailable',
	GATEWAY_TIMEOUT: 'gateway-timeout',
	INVALID_PLATFORM_CODE: 'invalid-platform-code',
	INVALID_PASSWORD: 'invalid-password',
	WORKSPACE_SETTING_NOT_FOUND: 'workspace-setting-not-found',
	USER_NOT_FOUND: 'user-not-found'
} as const;

export default responseCodes;
