<div>
	<slot />
</div>

<style>
	div {
		display: flex;
		align-items: center;
		padding: 0 var(--body-padding);
		border-bottom: 1px solid var(--accent-color);
	}

	:global(a) {
		margin-right: 0.5em;
	}
</style>
