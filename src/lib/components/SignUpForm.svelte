<script lang="ts">
	import { Input, Label, Helper, ButtonGroup, InputAddon, Button, Hr } from 'flowbite-svelte';
	import { EnvelopeSolid, EyeOutline, EyeSlashOutline } from 'flowbite-svelte-icons';

	import { superForm } from 'sveltekit-superforms';

	export let data;
	export let disabled: boolean;

	const { form, enhance, errors } = superForm(data, {
		resetForm: true,
		dataType: 'json'
	});

	let showPassword = false;
	let showConfirmPassword = false;

	$: console.log($form)
</script>

<div class="w-full space-y-4 rounded-xl bg-white p-4 shadow-xl md:w-3/4">
	<div class="flex flex-col">
		<h2 class="text-3xl font-semibold">Sign up</h2>
		<span class="font-light">Enter your invitation code and complete the details below</span>
	</div>
	<Hr />
	<slot />
	<form method="POST" action="?/signup" class="flex flex-col gap-4" use:enhance>
		<div class="flex w-full flex-col gap-4 md:flex-row">
			<div class="w-full">
				<Label for="email" class="mb-2">First name</Label>
				<ButtonGroup class="w-full">
					<Input
						type="text"
						id="firstname"
						name="firstname"
						placeholder="First name"
						color={$errors.firstname ? 'red' : undefined}
						aria-invalid={$errors.firstname ? 'true' : undefined}
						bind:value={$form.firstname}
						{disabled}
					/>
				</ButtonGroup>
				{#if $errors.firstname}
					<Helper class="mt-2" color="red">Please enter your first name</Helper>
				{/if}
			</div>
			<div class="w-full">
				<Label for="email" class="mb-2">Last name</Label>
				<ButtonGroup class="w-full">
					<Input
						type="text"
						id="lastname"
						name="lastname"
						placeholder="Last name"
						color={$errors.lastname ? 'red' : undefined}
						aria-invalid={$errors.lastname ? 'true' : undefined}
						bind:value={$form.lastname}
						{disabled}
					/>
				</ButtonGroup>
				{#if $errors.lastname}
					<Helper class="mt-2" color="red">Please enter your last name</Helper>
				{/if}
			</div>
		</div>
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
					{disabled}
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
					{disabled}
				/>
			</ButtonGroup>
			{#if $errors.password}
				<Helper class="mt-2" color="red">{$errors.password}</Helper>
			{/if}
		</div>
		<div>
			<Label for="password" class="mb-2">Confirm Password</Label>
			<ButtonGroup class="w-full">
				<InputAddon>
					<button type="button" on:click={() => (showConfirmPassword = !showConfirmPassword)}>
						{#if showConfirmPassword}
							<EyeOutline class="h-6 w-6" />
						{:else}
							<EyeSlashOutline class="h-6 w-6" />
						{/if}
					</button>
				</InputAddon>
				<Input
					type={showConfirmPassword ? 'text' : 'password'}
					id="password"
					name="password"
					placeholder="Password"
					color={$errors.confirmPassword ? 'red' : undefined}
					aria-invalid={$errors.confirmPassword ? 'true' : undefined}
					bind:value={$form.confirmPassword}
					{disabled}
				/>
			</ButtonGroup>
			{#if $errors.confirmPassword}
				<Helper class="mt-2" color="red">{$errors.confirmPassword}</Helper>
			{/if}
		</div>
		<Button
			type="submit"
			class="mt-4 w-full shadow-xl"
			disabled={disabled ||
				!$form.firstname ||
				!$form.lastname ||
				!$form.email ||
				!$form.password ||
				!$form.confirmPassword}>Sign Up</Button
		>
	</form>
	<Hr />
	<div class="flex justify-between text-xs font-light">
		<span>Already have an account? <a href="/auth/signin">Sign In</a></span>
		<span><a href="/auth/recover">Forgot password?</a></span>
	</div>
</div>
