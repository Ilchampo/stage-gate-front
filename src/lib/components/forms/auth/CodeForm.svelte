<script lang="ts">
	import { Button, ButtonGroup, Helper, Input, Label } from 'flowbite-svelte';

	import { superForm } from 'sveltekit-superforms';
	import { codeStore } from '$lib/stores/code.store';
	import { CheckCircleSolid } from 'flowbite-svelte-icons';

	export let data;

	const { form, enhance, errors } = superForm(data, {
		resetForm: false
	});
</script>

{#if !!$codeStore}
	<div class="flex items-center justify-between">
		<div class="flex items-center gap-2">
			<CheckCircleSolid class="h-6 w-6 text-green-500" color="green" />
			<span>Platform invitation code valid!</span>
		</div>
		<Button type="submit" color="primary" on:click={() => codeStore.set(undefined)}>Reset</Button>
	</div>
{:else}
	<form method="POST" action="?/code" use:enhance>
		<div>
			<Label class="mb-2" for="code">Invitation Code</Label>
			<span class="text-xs font-light"
				>Don't have a code? Click <a
					href="/"
					target="_blank"
					class="font-semibold text-secondary-500">here</a
				> for more information</span
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
				<Button type="submit" color="primary" disabled={!$form.code}>Validate</Button>
			</ButtonGroup>
			{#if $errors.code}
				<Helper class="mt-2" color="red">Please enter a valid invitation code</Helper>
			{/if}
		</div>
	</form>
{/if}
