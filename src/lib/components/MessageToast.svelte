<script lang="ts">
	import type { ColorVariant } from 'flowbite-svelte';
	import { Toast } from 'flowbite-svelte';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	export let color: ColorVariant = 'red';
	export let message: string;

	let toastStatus = true;

	onMount(() => {
		setTimeout(() => {
			hideToast();
		}, 5000);
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
