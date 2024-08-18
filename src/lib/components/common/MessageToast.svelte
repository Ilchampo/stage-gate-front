<script lang="ts">
	import type { ColorVariant } from 'flowbite-svelte';

	import { Toast } from 'flowbite-svelte';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { MESSAGE_TOAST_TIMEOUT } from '$lib/constants/timeouts';

	export let color: ColorVariant = 'red';
	export let message: string;

	export let toastStatus = true;

	onMount(() => {
		setTimeout(() => {
			hideToast();
		}, MESSAGE_TOAST_TIMEOUT);
	});

	const hideToast = (): void => {
		toastStatus = false;
	};
</script>

<Toast
	transition={fly}
	params={{ x: 200 }}
	{color}
	class="mb-4"
	position="top-right"
	bind:toastStatus
>
	<svelte:fragment slot="icon">
		<slot />
	</svelte:fragment>
	{message}
</Toast>
