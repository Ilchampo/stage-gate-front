import { object, string, ref } from 'yup';

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
	confirmPassword: string()
		.oneOf([ref('password')], 'Passwords must match')
		.required('Please confirm your password')
});

export const validateCodeSchema = object({
	code: string()
		.required('Please enter the invitation code')
		.min(6, 'Code must be 6 characters long')
});
