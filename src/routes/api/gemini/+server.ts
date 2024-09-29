import type { RequestHandler } from './$types';
import { API_KEY } from '$env/static/private';

export const GET: RequestHandler = async ({ url: reqUrl }) => {
	const searchParams = reqUrl.searchParams;
	const q1 = searchParams.get('q1');
	const q2 = searchParams.get('q2');
	const q3 = searchParams.get('q3');
	const q4 = searchParams.get('q4');

	const prompt = `I want to learn ${q1}. I know ${q2}, and I am an ${q3}. I can commit ${q4} per week to learning this. Create an outline/schedule for me to learn ${q1}. Be detailed about time estimates as well as what resources (free and paid) are available to me. Also suggest projects I could do to learn ${q1} as an ${q3} level student. Output your response in JSON format - the output should just be JSON. The schedule should have the keys \"week\", \"topic\", \"description\", \"time_estimate\", \"resources\" for each resource which contains the following keys: \"title\", \"url\", \"type\", \"description\", and \"projects\" for each project which contains the following keys: \"title\", \"description\". Please do not include markdown formatting for the json.`;

	const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				contents: [
					{
						parts: [{ text: prompt }]
					}
				]
			})
		});

		if (!response.ok) {
			throw new Error('Response status: ${response.status}');
		}

		const modelresponse = await response.json();
		return new Response(JSON.stringify(modelresponse), { status: 200 });
	} catch (error) {
		console.error(`Error sending prompt to Gemini:`, error);
		return new Response(JSON.stringify({ error: error.message }), { status: 500 });
	}
};

// async function sendPromptToGemini(prompt) {
//     const url=`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`
//
//     try {
//         const response = await fetch(url, {
//             method: 'POST',
//             headers: 'Content-Type: application/json'
//             },
//             body: JSON.stringify({
//                 contents: [{
//                     parts: [{ text: prompt}]
//                 }]
//             })
//         );
//
//         if (!response.ok) {
//             throw new Error('Response status: ${response.status}');
//         }
//
//         const modelresponse = await response.json();
//         console.log(modelresponse);
//     } catch (error) {
//         console.error('Error sending prompt to Gemini:', error);
//     }
// }
//
// function sendResponseToPage(response) {
//     try {
//
//     } catch (error) {
//         console.error(error.message)
//     }
// }

//sendPrompt()
