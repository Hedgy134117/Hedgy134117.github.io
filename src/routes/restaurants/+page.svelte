<script>
	import Content from '../content.svelte';
	import Header from '../header.svelte';
	import { restaurantStore } from './stores.js';
	let promise = restaurantStore.init();
</script>

<Header />
<Content>
	<div class="container">
		{#await promise}
			Loading Restaurants
		{:then}
			{#each $restaurantStore as restaurant}
				<div class="restaurant">
					<p>{restaurant.name}</p>
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
