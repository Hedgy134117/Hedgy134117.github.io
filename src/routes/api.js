const baseURL = process.env.NODE_ENV === 'production' ? 'https://hedgy134117.pythonanywhere.com/' : 'http://127.0.0.1:8000/'

export class API {
    static async getAllRestaurants() {
        const res = await fetch(baseURL + "restaurants/");
        return res.json();
    }
}