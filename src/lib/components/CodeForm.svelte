<script lang="ts">
	import { Button, ButtonGroup, Helper, Input, Label } from 'flowbite-svelte';

	import { superForm } from 'sveltekit-superforms';

	export let data;

	const { form, enhance, errors } = superForm(data);
</script>

<form action="?/code" use:enhance>
	<div>
		<Label class="mb-2" for="code">Invitation Code</Label>
		<span class="text-xs font-light"
			>Don't have a code? Click <a href="/">here</a> for more information</span
		>
		<ButtonGroup class="w-full">
			<Input
				type="text"
				id="code"
				name="code"
				placeholder="Invitation Code"
				color={$errors.code ? 'red' : undefined}
				aria-invalid={$errors.code ? 'true' : undefined}
				bind:value={$form.code}
			/>
			<Button color="primary" disabled={!$form.code}>Validate</Button>
		</ButtonGroup>
		{#if $errors.code}
			<Helper class="mt-2" color="red">Please enter a valid invitation code</Helper>
		{/if}
	</div>
</form>
