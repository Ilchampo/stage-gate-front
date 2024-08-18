<script lang="ts">
	import SignInForm from '$lib/components/forms/auth/SignInForm.svelte';
	import MessageToast from '$lib/components/common/MessageToast.svelte';

	import { ExclamationCircleSolid } from 'flowbite-svelte-icons';
	import { page } from '$app/stores';

	import responseCodes from '$lib/constants/responseCodes';

	export let data;
	let toastVisible = false;

	const returnErrorMessage = (message?: string): string => {
		switch (message) {
			case responseCodes.USER_NOT_FOUND:
				return 'User not found. Please check your email and password.';
			case responseCodes.INVALID_PASSWORD:
				return 'Invalid password. Please check your email and password.';
			default:
				return 'An error occurred. Please try again.';
		}
	};

	$: errorMessage = returnErrorMessage($page.form?.error);

	$: toastVisible = Boolean($page.form?.error);
</script>

<svelte:head>
	<title>Stage Gate | Sign In</title>
	<meta name="description" content="Sign in to your account" />
</svelte:head>

{#if toastVisible}
	<MessageToast message={errorMessage}>
		<ExclamationCircleSolid class="h-5 w-5" />
	</MessageToast>
{/if}

<SignInForm data={data.form} />
