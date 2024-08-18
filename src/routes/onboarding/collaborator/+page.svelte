<script lang="ts">
	import OnBoardingWrapper from '$lib/components/wrappers/OnBoardingWrapper.svelte';
	import WorkspaceCodeForm from '$lib/components/forms/WorkspaceCodeForm.svelte';

	import { goto } from '$app/navigation';

	export let data;

	const onClickBack = () => {
		goto('/onboarding');
	};

	const onClickNext = () => {
		console.log('Next clicked');
	};
</script>

<OnBoardingWrapper
	step={2}
	title="Join a workspace"
	subtitle="Please enter the workspace code"
	{onClickBack}
	{onClickNext}
>
	<WorkspaceCodeForm data={data.form} />
</OnBoardingWrapper>
