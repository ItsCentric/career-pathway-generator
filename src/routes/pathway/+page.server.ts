import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url, fetch }) => {
	const searchParams = url.searchParams;
	const response = await fetch(
		`/api/gemini?q1=${searchParams.get('q1')}&q2=${searchParams.get('q2')}&q3=${searchParams.get('q3')}&q4=${searchParams.get('q4')}`
	);

	const r = await response.json();
	const jsonData = JSON.parse(r.candidates[0].content.parts[0].text);
	console.log(jsonData);
	return { jsonData };
};
