<script lang="ts">
	import { Button, ButtonGroup, Helper, Hr, Input, InputAddon, Label } from 'flowbite-svelte';
	import { EnvelopeSolid } from 'flowbite-svelte-icons';

	import { goto } from '$app/navigation';
	import { superForm } from 'sveltekit-superforms';

	export let data;

	const { form, enhance, errors } = superForm(data, {
		resetForm: false
	});
</script>

<div class="w-full space-y-4 rounded-xl bg-white p-4 shadow-xl md:w-3/4">
	<div class="flex flex-col">
		<h2 class="text-3xl font-semibold">Password recovery</h2>
		<span class="font-light">Enter your account email and we'll send you a recovery link</span>
	</div>
	<Hr />
	<form method="POST" class="flex flex-col gap-4" use:enhance>
		<div>
			<Label for="email" class="mb-2">Email</Label>
			<ButtonGroup class="w-full">
				<InputAddon>
					<EnvelopeSolid class="h-6 w-6" />
				</InputAddon>
				<Input
					type="text"
					id="email"
					name="email"
					placeholder="Email"
					color={$errors.email ? 'red' : undefined}
					aria-invalid={$errors.email ? 'true' : undefined}
					bind:value={$form.email}
				/>
			</ButtonGroup>
			{#if $errors.email}
				<Helper class="mt-2" color="red">Please enter your email address</Helper>
			{/if}
		</div>
		<Button type="submit" class="w-full" color="primary" disabled={!$form.email}
			>Send recovery link</Button
		>
		<Button type="button" on:click={() => goto('/auth/signin')} class="w-full" color="alternative"
			>Back</Button
		>
	</form>
</div>
