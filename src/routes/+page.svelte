<script>
	import { API } from './api.js';

	let restaurantPromise = loadRestaurants();
	async function loadRestaurants() {
		let restaurants = await API.getAllRestaurants();
		return restaurants;
	}
</script>

{#await restaurantPromise}
	Loading restaurants
{:then restaurants}
	{#each restaurants as restaurant}
		{restaurant.name}
		<br />
	{/each}
{:catch error}
	{error}
{/await}
