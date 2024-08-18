<script lang="ts">
	import { Helper, RadioButton, Fileupload, Label } from 'flowbite-svelte';
	import {
		UserOutline,
		UsersGroupOutline,
		UserSolid,
		UsersGroupSolid
	} from 'flowbite-svelte-icons';

	import { superForm } from 'sveltekit-superforms';

	export let data;

	const { form, enhance, errors } = superForm(data, {
		resetForm: false
	});
</script>

<div class="flex flex-col gap-2 p-4 md:flex-row">
	<div class="flex w-full flex-col gap-4 md:w-1/2">
		<h3 class="h3 text-xl font-semibold">How to choose your role?</h3>
		<span class="leading-relaxed"
			>Choosing the correct role is essential to achieve your goals. Here's how you can decide what
			role to choose.</span
		>
		<div class="ml-4 flex flex-col gap-2">
			<div class="text-sm">
				<h4 class="h4 flex items-center gap-2 font-semibold">
					<UsersGroupOutline class="h-4 w-4" />
					Manager
				</h4>
				<span class="font-light leading-relaxed"
					>As a Manager, I manage workspaces, coordinate tasks, and oversee collaborators to drive
					projects forward.</span
				>
			</div>

			<div class="text-sm">
				<h4 class="h4 flex items-center gap-2 font-semibold">
					<UserOutline class="h-4 w-4" />
					Collaborator
				</h4>
				<span class="font-light leading-relaxed"
					>As a Collaborator, I contribute to projects, manage assigned tasks, and collaborate to
					achieve project goals.</span
				>
			</div>
		</div>
	</div>

	<hr class="vertical-divider" />

	<form method="POST" class="flex w-full flex-col gap-4 md:w-1/2" use:enhance>
		<div class="flex flex-col gap-2">
			<Label for="avatar" class="mb-2">Profile Picture</Label>
			<Fileupload />
			{#if $errors.avatar}
				<Helper class="mt-2" color="red">{$errors.avatar}</Helper>
			{/if}
		</div>

		<div class="flex flex-col gap-2">
			<Label for="role" class="mb-2">User Role</Label>
			<RadioButton name="role" color="primary" bind:value={$form.role}>
				<UsersGroupSolid class="h-6 w-6" />
				<span>Manager</span>
			</RadioButton>
			<RadioButton name="role" color="alternative" bind:value={$form.role}>
				<UserSolid class="h-6 w-6" />
				<span>Collaborator</span>
			</RadioButton>
			{#if $errors.role}
				<Helper class="mt-2" color="red">Please select one role before continuing</Helper>
			{/if}
		</div>
	</form>
</div>
