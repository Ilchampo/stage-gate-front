import type { Writable } from "svelte/store";
import { writable } from "svelte/store";

export const codeStore: Writable<string | undefined> = writable(undefined);