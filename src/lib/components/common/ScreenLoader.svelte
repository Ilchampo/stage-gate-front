<script lang="ts">
	import { Spinner } from 'flowbite-svelte';
</script>

<div
	class="absolute z-50 flex h-screen w-screen flex-col items-center justify-center bg-black bg-opacity-50"
>
	<div class="flex flex-col items-center justify-center gap-4">
		<Spinner size={18} />
		<span class="font-semibold text-white">Wait a moment...</span>
	</div>
</div>
