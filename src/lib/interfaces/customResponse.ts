export interface ICustomResponse<T> {
	code: number;
	data?: T;
	error?: string;
}
