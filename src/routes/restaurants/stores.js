import { API } from "$lib/api.js";
import { writable } from "svelte/store";

export function createRestaurantsStore() {
    const { subscribe, set } = writable([]);

    return {
        subscribe,
        init: async (favorites) => {
            API.getAllRestaurants(favorites).then(data => {
                data = data.sort((a, b) => a.name.localeCompare(b.name));
                console.log(data);
                set(data);
            });
        }
    }
}

export const restaurantStore = createRestaurantsStore();