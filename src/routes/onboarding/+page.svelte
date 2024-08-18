<script lang="ts">
	import OnBoardingWrapper from '$lib/components/wrappers/OnBoardingWrapper.svelte';
	import RoleForm from '$lib/components/forms/onboarding/RoleForm.svelte';

	export let data;

	const onClickBack = () => {
		console.log('Back clicked');
	};

	const onClickNext = () => {
		console.log('Next clicked');
	};
</script>

<OnBoardingWrapper
	step={1}
	title="Welcome"
	subtitle="Please choose the role that best describes you"
	{onClickBack}
	{onClickNext}
>
	<RoleForm data={data.form} />
</OnBoardingWrapper>
