import { writable } from "svelte/store";
import { API } from "../api.js";

export function createRestaurantsStore() {
    const { subscribe, set } = writable([]);

    return {
        subscribe,
        init: async () => {
            API.getAllRestaurants().then(data => {
                set(data);
            });
        }
    }
}

export const restaurantStore = createRestaurantsStore();