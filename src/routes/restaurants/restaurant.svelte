<script>
	export let name;
	export let address;
	export let category;

	function generateMapsURL() {
		return `https://www.google.com/maps/search/?api=1&query=${address} ${name}`;
	}
</script>

<div class="restaurant">
	<p class="name">{name}</p>
	<div class="info">
		<p>
			<a href={generateMapsURL()} class="address" target="_blank">{address}</a>
		</p>
		<p>{category}</p>
	</div>
</div>

<style>
	p {
		padding: 0.25em;
	}

	p.name {
		font-weight: bold;
		justify-self: center;
	}

	a.address {
		color: var(--accent-color);
		text-decoration: underline;
	}

	.restaurant {
		border: 1px solid var(--accent-color);
		display: grid;
		grid-template-rows: 1fr 1fr;
		margin: 0.5em;
	}

	.info {
		width: 100%;
		display: flex;
		border-top: 1px solid var(--accent-color);
	}

	.info p:first-child {
		flex-grow: 1;
	}
</style>
