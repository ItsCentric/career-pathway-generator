import type { RequestHandler } from './$types';
import { API_KEY } from '$env/static/private';

export const GET: RequestHandler = async ({ url: reqUrl }) => {
	const searchParams = reqUrl.searchParams;
	const q1 = searchParams.get('q1');
	const q2 = searchParams.get('q2');
	const q3 = searchParams.get('q3');
	const q4 = searchParams.get('q4');

	const prompt = `I am a ${q3} level programmer who is familiar with ${q2} and is looking to learn ${q1}. I am willing to commit ${q4} hours a week to learning. Please generate a learning pathway with learning resources personal projects for a ${q3} level programmer. Please provide the output in JSON with the root key being schedule and then the following keys: week, topic, description, time_estimate, resources, resources.url, resources.title, resources.type, resources.description, projects, projects.title, projects.description. Please do not include markdown formatting`;

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
