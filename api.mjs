const API_KEY = '405547796d2e79bec9b826b6a58d7d7b';
const BASE_URL = 'https://www.superheroapi.com/api.php/405547796d2e79bec9b826b6a58d7d7b/search/a';

async function fetchHeroes() {
    try {
        const response = await fetch(`${BASE_URL}?apikey=${API_KEY}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // return data.data.results;
        console.log (data)
    } catch (error) {
        console.error('Failed to fetch heroes:', error);
        return [];
    }
}
fetchHeroes() 
export { fetchHeroes };
