<script>
	import { base } from '$app/paths';
	import Content from '$lib/content.svelte';
	import Header from '$lib/header.svelte';
	import Restaurant from '../restaurant.svelte';
	import { restaurantStore } from '../stores.js';
	let promise = restaurantStore.init(true);

	function isValidRestaurant(restaurant) {
		if (restaurant.name == '' || restaurant.address == '' || restaurant.category == '') {
			return false;
		}

		// TODO: probably should move this to the backend
		let notRestaurants = [
			'business park',
			'book store',
			'museum',
			'$',
			'asian grocery store',
			'non-profit organization',
			'gift shop',
			'camera store',
			'clothing store',
			'plant nursery'
		];
		if (notRestaurants.includes(restaurant.category.toLowerCase())) {
			return false;
		}

		return true;
	}
</script>

<svelte:head>
	<title>favorite restaurants</title>
</svelte:head>

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
				{#if isValidRestaurant(restaurant)}
					<Restaurant
						name={restaurant.name}
						address={restaurant.address}
						category={restaurant.category}
					/>
				{/if}
			{/each}
		{:catch error}
			{error}
		{/await}
	</div>
</Content>

<style>
	.container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
</style>
