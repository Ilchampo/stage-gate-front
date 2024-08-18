<script lang="ts">
	import RecoverPassword from '$lib/components/forms/auth/PasswordForm.svelte';

	export let data;
</script>

<svelte:head>
	<title>Stage Gate | Recover Passowrd</title>
	<meta name="description" content="Recover password account" />
</svelte:head>

<RecoverPassword {data} />
