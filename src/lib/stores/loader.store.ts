import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

export const loaderStore: Writable<boolean> = writable(false);

export const setLoaderStore = (value: boolean) => {
	loaderStore.set(value);
};
