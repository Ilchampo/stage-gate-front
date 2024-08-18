<script lang="ts">
	import { Hr, Button } from 'flowbite-svelte';

	import ScreenLoader from '../common/ScreenLoader.svelte';

	export let step: number;
	export let title: string;
	export let subtitle: string;
	export let onClickBack: () => void;
	export let onClickNext: () => void;

	let isLoading = false;

	const handleNext = async () => {
		isLoading = true;
		await onClickNext();
		isLoading = false;
	};
</script>

{#if isLoading}
	<ScreenLoader />
{/if}

<div
	class="flex h-full w-full flex-col space-y-4 overflow-scroll rounded-none bg-white p-4 shadow-xl md:h-auto md:w-2/3 md:rounded-xl"
>
	<div class="flex items-center gap-4">
		<div
			class="flex h-12 w-12 flex-col items-center justify-center rounded-full bg-primary-500 shadow-xl"
		>
			<span class="text-bold text-xl text-white">{step}</span>
		</div>
		<div class="flex flex-col">
			<h2 class="text-3xl font-semibold">{title}</h2>
			<span class="font-light">{subtitle}</span>
		</div>
	</div>
	<Hr />
	<slot />
	<div class="flex items-center justify-between">
		<Button type="button" color="alternative" on:click={onClickBack} disabled={step === 1}
			>Back</Button
		>
		<Button type="button" color="primary" on:click={handleNext}>Next</Button>
	</div>
</div>
