import type { IAuthTokenDecoded } from '$lib/interfaces/auth.interface';

declare global {
	namespace App {
		interface Locals {
			user?: IAuthTokenDecoded;
		}
		interface PageData {
			user?: IAuthTokenDecoded;
		}
	}
}

export {};
