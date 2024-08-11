<script lang="ts">
	import type { PageServerData } from './$types';

	import SignUpForm from '$lib/components/SignUpForm.svelte';
	import MessageToast from '$lib/components/MessageToast.svelte';
	import CodeForm from '$lib/components/CodeForm.svelte';

	import { ExclamationCircleSolid } from 'flowbite-svelte-icons';
	import { page } from '$app/stores';
	import { codeStore } from '$lib/stores/code.store.js';
	import { get, writable } from 'svelte/store';

	export let data: PageServerData;

	$: {
		if ($page.form?.codeSuccess) {
			codeStore.set($page.form?.code);
		}
	}
</script>

{#if true}
	<MessageToast message="Invalid invitation code!">
		<ExclamationCircleSolid class="h-5 w-5" />
	</MessageToast>
{/if}

<SignUpForm data={data.signUpForm} disabled={!$codeStore}>
	<CodeForm data={data.validateCodeForm} />
</SignUpForm>
