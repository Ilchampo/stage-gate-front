<script lang="ts">
	import { Input, Label, Helper, ButtonGroup, InputAddon, Button, Hr } from 'flowbite-svelte';
	import { EnvelopeSolid, EyeOutline, EyeSlashOutline } from 'flowbite-svelte-icons';

	import { superForm } from 'sveltekit-superforms';

	export let data;

	const { form, enhance, errors } = superForm(data, {
		resetForm: false
	});

	let showPassword = false;
</script>

<div class="w-full space-y-4 rounded-xl bg-white p-4 shadow-xl md:w-3/4">
	<div class="flex flex-col">
		<h2 class="text-3xl font-semibold">Sign In</h2>
		<span class="font-light">Enter your details below</span>
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
		<div>
			<Label for="password" class="mb-2">Password</Label>
			<ButtonGroup class="w-full">
				<InputAddon>
					<button type="button" on:click={() => (showPassword = !showPassword)}>
						{#if showPassword}
							<EyeOutline class="h-6 w-6" />
						{:else}
							<EyeSlashOutline class="h-6 w-6" />
						{/if}
					</button>
				</InputAddon>
				<Input
					type={showPassword ? 'text' : 'password'}
					id="password"
					name="password"
					placeholder="Password"
					color={$errors.password ? 'red' : undefined}
					aria-invalid={$errors.password ? 'true' : undefined}
					bind:value={$form.password}
				/>
			</ButtonGroup>
			{#if $errors.password}
				<Helper class="mt-2" color="red">{$errors.password}</Helper>
			{/if}
		</div>
		<Button type="submit" class="mt-4 w-full shadow-xl" disabled={!$form.email || !$form.password}
			>Sign In</Button
		>
	</form>
	<Hr />
	<div class="flex justify-between text-xs font-light">
		<span>Don't have an account yet? <a href="/auth/signup">Sign Up</a></span>
		<span><a href="/auth/recover">Forgot password?</a></span>
	</div>
</div>
