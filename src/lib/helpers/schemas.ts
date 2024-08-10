import { object, string, ref } from 'yup';

export const signInSchema = object({
	email: string().email().required('Please enter your email address'),
	password: string().required('Please enter your password')
});

export const signUpSchema = object({
	firstname: string().required('Please enter your first name'),
	lastname: string().required('Please enter your last name'),
	email: string().email().required('Please enter your email address'),
	password: string().required('Please enter your password'),
	confirmPassword: string().oneOf([ref('password')], 'Passwords must match')
});

export const codeSchema = object({
	code: string().required('Please enter the code')
});