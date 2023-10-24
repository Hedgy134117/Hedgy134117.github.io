import { API } from "$lib/api.js";
import { writable } from "svelte/store";

export function createRestaurantsStore() {
    const { subscribe, set } = writable([]);

    return {
        subscribe,
        init: async (favorites) => {
            API.getAllRestaurants(favorites).then(data => {
                set(data);
            });
        }
    }
}

export const restaurantStore = createRestaurantsStore();