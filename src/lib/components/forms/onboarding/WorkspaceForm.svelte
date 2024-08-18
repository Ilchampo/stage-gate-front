<script lang="ts">
	import { Fileupload, Helper, Input, Label, Textarea } from 'flowbite-svelte';
	import { superForm } from 'sveltekit-superforms';

	export let data;

	const { form, enhance, errors } = superForm(data, {
		resetForm: false
	});
</script>

<div class="flex flex-col gap-4 p-4 md:flex-row">
	<div class="flex w-full flex-col gap-4 md:w-1/2">
		<h3 class="h3 text-xl font-semibold">How do I create a new workspace?</h3>
		<span class="leading-relaxed">
			A workspace is a place where you can collaborate with your team, create releases, manage
			tasks, and track progress. You can create a workspace by following these steps:
		</span>
		<ul class="ml-4 list-disc">
			<li>Enter a workspace name and description.</li>
			<li>Enter your project repository such as Github or GitLab.</li>
			<li>Add a workspace logo to customize your workspace.</li>
		</ul>
	</div>

	<hr class="vertical-divider" />

	<form method="POST" class="flex w-full flex-col gap-4 md:w-1/2" use:enhance>
		<div class="flex flex-col gap-4 md:flex-row md:gap-2">
			<div class="flex flex-col gap-2">
				<Label for="name" class="mb-2">Workspace name</Label>
				<Input
					type="text"
					id="name"
					name="name"
					placeholder="Workspace name"
					color={$errors.name ? 'red' : undefined}
					aria-invalid={$errors.name ? 'true' : undefined}
					bind:value={$form.name}
				/>
				{#if $errors.name}
					<Helper class="mt-2" color="red">Please enter your workspace name</Helper>
				{/if}
			</div>
			<div class="flex flex-col gap-2">
				<Label for="logo" class="mb-2">Workspace logo</Label>
				<Fileupload />
				{#if $errors.logo}
					<Helper class="mt-2" color="red">{$errors.logo}</Helper>
				{/if}
			</div>
		</div>
		<div class="flex flex-col gap-2">
			<Label for="name" class="mb-2">Repository link</Label>
			<Input
				type="text"
				id="repository"
				name="repository"
				placeholder="Repository link"
				color={$errors.repository ? 'red' : undefined}
				aria-invalid={$errors.repository ? 'true' : undefined}
				bind:value={$form.repository}
			/>
			{#if $errors.repository}
				<Helper class="mt-2" color="red">Please enter your workspace repository</Helper>
			{/if}
		</div>
		<div class="flex flex-col gap-2">
			<Label for="name" class="mb-2">Description</Label>
			<Textarea
				type="text"
				id="description"
				name="description"
				placeholder="Workspace description"
				color={$errors.description ? 'red' : undefined}
				aria-invalid={$errors.description ? 'true' : undefined}
				rows="4"
				bind:value={$form.description}
			/>
			{#if $errors.description}
				<Helper class="mt-2" color="red">{$errors.description}</Helper>
			{/if}
		</div>
	</form>
</div>
