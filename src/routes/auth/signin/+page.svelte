<script lang="ts">
	import SignInForm from '$lib/components/SignInForm.svelte';
	import MessageToast from '$lib/components/MessageToast.svelte';

	import { ExclamationCircleSolid } from 'flowbite-svelte-icons';
	import { page } from '$app/stores';

	export let data;
</script>

<svelte:head><title>Stage Gate | Sign In</title></svelte:head>

{#if $page.form?.error}
	<MessageToast message={$page.form.error}>
		<ExclamationCircleSolid class="h-5 w-5" />
	</MessageToast>
{/if}

<SignInForm data={data.form} />
