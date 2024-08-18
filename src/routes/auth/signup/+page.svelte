<script lang="ts">
	import type { PageServerData } from './$types';

	import SignUpForm from '$lib/components/forms/SignUpForm.svelte';
	import MessageToast from '$lib/components/common/MessageToast.svelte';
	import CodeForm from '$lib/components/forms/auth/CodeForm.svelte';

	import { ExclamationCircleSolid } from 'flowbite-svelte-icons';
	import { page } from '$app/stores';
	import { codeStore } from '$lib/stores/code.store.js';

	export let data: PageServerData;

	$: {
		if ($page.form?.codeSuccess) {
			codeStore.set($page.form?.code);
		}
		if ($codeStore) {
			data.signUpForm.data.code = $codeStore;
		}
	}

	$: invalidPlatformCode = $page.form?.codeSuccess === false && !$codeStore;
</script>

<svelte:head>
	<title>Stage Gate | Sign Up</title>
	<meta name="description" content="Sign up to your account" />
</svelte:head>

{#if invalidPlatformCode}
	<MessageToast message="Invalid invitation code!">
		<ExclamationCircleSolid class="h-5 w-5" />
	</MessageToast>
{/if}

<SignUpForm data={data.signUpForm} disabled={!$codeStore}>
	<CodeForm data={data.validateCodeForm} />
</SignUpForm>
