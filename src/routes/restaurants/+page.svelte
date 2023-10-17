<script>
	import { restaurantStore } from './stores.js';
	let promise = restaurantStore.init();
</script>

<div class="restaurant-list">
	{#await promise}
		Loading Restaurants
	{:then}
		{#each $restaurantStore as restaurant}
			<p>{restaurant.name}</p>
		{/each}
	{:catch error}
		{error}
	{/await}
</div>
