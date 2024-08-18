import { object, string, mixed } from 'yup';
import { FILE_SIZE_LIMIT, SUPPORTED_FORMATS } from '$lib/constants/fileFormats';

export const signInSchema = object({
	email: string().email().required('Please enter your email address'),
	password: string().required('Please enter your password')
});

export const signUpSchema = object({
	firstname: string().required('Please enter your first name'),
	lastname: string().required('Please enter your last name'),
	email: string().email().required('Please enter your email address'),
	password: string()
		.required('Password is required')
		.min(8, 'Password must be at least 8 characters long')
		.matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
		.matches(/[0-9]/, 'Password must contain at least one number')
		.matches(/[\W_]/, 'Password must contain at least one special character'),
	confirmPassword: string().required('Please confirm your password'),
	code: string().required()
});

export const validateCodeSchema = object({
	code: string()
		.required('Please enter the invitation code')
		.min(6, 'Code must be 6 characters long')
});

export const recoverPasswordSchema = object({
	email: string().email().required('Please enter your email address')
});

export const roleSchema = object({
	role: string().required('Please select a role'),
	avatar: mixed()
		.test('fileSize', 'The file is too large', (value) => {
			if (value && value instanceof File) {
				return value.size <= FILE_SIZE_LIMIT;
			}
			return false;
		})
		.test('fileType', 'Unsupported file format', (value) => {
			if (value && value instanceof File) {
				return SUPPORTED_FORMATS.includes(value.type);
			}
			return false;
		})
});

export const collaboratorWorkspaceSchema = object({
	code: string().required('Please enter the workspace code')
});

export const managerWorkspaceSchema = object({
	name: string().required('Please enter the workspace name'),
	description: string().required('Please enter the workspace description'),
	repository: string().required('Please enter the repository URL'),
	logo: mixed()
		.test('fileSize', 'The file is too large', (value) => {
			if (value && value instanceof File) {
				return value.size <= FILE_SIZE_LIMIT;
			}
			return false;
		})
		.test('fileType', 'Unsupported file format', (value) => {
			if (value && value instanceof File) {
				return SUPPORTED_FORMATS.includes(value.type);
			}
			return false;
		})
});
