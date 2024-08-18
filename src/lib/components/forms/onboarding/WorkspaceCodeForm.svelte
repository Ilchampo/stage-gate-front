<script lang="ts">
	import { Button, Helper, Input, Label } from 'flowbite-svelte';
	import { superForm } from 'sveltekit-superforms';

	export let data;

	const { form, enhance, errors } = superForm(data, {
		resetForm: false
	});
</script>

<div class="flex flex-col gap-2 p-4 md:flex-row">
	<div class="flex w-full flex-col gap-4 md:w-1/2">
		<h3 class="h3 text-xl font-semibold">How do I get a workspace code?</h3>
		<span class="leading-relaxed"
			>The workspace <b>Manager</b> gets an invitation code that can be shared in order to invite collaborators
			to join a certain workspace.</span
		>
	</div>

	<hr class="vertical-divider" />

	<form method="POST" class="flex w-full flex-col gap-4 md:w-1/2" use:enhance>
		<div class="flex flex-col gap-2">
			<Label for="role" class="mb-2">Workspace code</Label>
			<Input
				type="text"
				id="code"
				name="code"
				placeholder="Workspace code"
				color={$errors.code ? 'red' : undefined}
				aria-invalid={$errors.code ? 'true' : undefined}
				bind:value={$form.code}
			/>
			{#if $errors.code}
				<Helper class="mt-2" color="red">Please select one role before continuing</Helper>
			{/if}
		</div>
		<Button type="submit" color="primary" class="mt-4 w-full shadow-xl" disabled={!$form.code}
			>Validate code</Button
		>
	</form>
</div>
