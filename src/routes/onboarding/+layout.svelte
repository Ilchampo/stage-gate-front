<div class="diagonal-split-bg bg-surface-100">
	<div class="relative z-10 flex h-screen w-screen flex-col items-center justify-center">
		<slot />
	</div>
</div>

<style>
	.diagonal-split-bg {
		@apply relative h-screen w-screen bg-gradient-to-br from-primary-500 to-primary-900;
	}
	.diagonal-split-bg::before {
		content: '';
		clip-path: polygon(0 100%, 100% 0, 100% 100%, 0 100%);
		@apply absolute left-0 top-0 z-0 h-full w-full bg-surface-100;
	}
</style>
