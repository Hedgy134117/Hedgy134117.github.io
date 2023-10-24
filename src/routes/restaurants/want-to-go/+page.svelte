<script>
	import { base } from '$app/paths';
	import Content from '$lib/content.svelte';
	import Header from '$lib/header.svelte';
	import { restaurantStore } from '../stores.js';
	let promise = restaurantStore.init(false);
</script>

<Header>
	<a href={base + '/restaurants/want-to-go'}>want to go</a>
	<a href={base + '/restaurants/favorites'}>favorites</a>
</Header>
<Content>
	<div class="container">
		{#await promise}
			Loading Restaurants
		{:then}
			{#each $restaurantStore as restaurant}
				<div class="restaurant">
					<p>{Object.values(restaurant)}</p>
				</div>
			{/each}
		{:catch error}
			{error}
		{/await}
	</div>
</Content>

<style>
	.container {
		display: grid;
		grid-template-columns: repeat(10, 1fr);
	}

	.restaurant {
		border: 1px solid var(--accent-color);
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
