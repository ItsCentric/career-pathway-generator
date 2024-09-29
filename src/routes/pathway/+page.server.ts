import type { PageServerLoad } from "./$types";

export const load:PageServerLoad = async ({ fetch }) => {
    const response = await fetch('/api/gemini');

    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }

    const jsonData = await response.json(); // Parse the JSON response
    return {jsonData}

}