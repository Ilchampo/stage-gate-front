<script lang="ts">
	import SignUpForm from '$lib/components/SignUpForm.svelte';
	import MessageToast from '$lib/components/MessageToast.svelte';

	import { ExclamationCircleSolid } from 'flowbite-svelte-icons';
	import { page } from '$app/stores';
	import CodeForm from '$lib/components/CodeForm.svelte';

	export let data;
</script>

<SignUpForm data={data.form}>
	<CodeForm data={data.form} />
</SignUpForm>
