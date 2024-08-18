<script lang="ts">
	import OnBoardingWrapper from '$lib/components/wrappers/OnBoardingWrapper.svelte';
	import WorkspaceForm from '$lib/components/forms/WorkspaceForm.svelte';

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
	title="Create a workspace"
	subtitle="Please enter the workspace information"
	{onClickBack}
	{onClickNext}
>
	<WorkspaceForm data={data.form} />
</OnBoardingWrapper>
