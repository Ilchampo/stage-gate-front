<script lang="ts">
	import { loaderStore } from '$lib/stores/loader.store';
	import ScreenLoader from '$lib/components/common/ScreenLoader.svelte';
</script>

{#if $loaderStore}
	<ScreenLoader />
{/if}

<div
	class="grid w-full grid-cols-1 bg-gradient-to-br from-primary-500 to-primary-900 md:grid-cols-2"
>
	<div class="hidden flex-col items-center justify-center md:visible md:flex">A</div>
	<div class="flex flex-col items-center justify-center rounded-l-full bg-surface-100 p-4">
		<slot />
	</div>
</div>
