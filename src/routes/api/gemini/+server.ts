import { error } from '@sveltejs/kit';
// import type { RequestHandler } from './$types';
import type { RequestHandler } from '@sveltejs/kit';
import { API_KEY } from '$env/static/private';


export const GET: RequestHandler = async ({ request }) => {	

    // Assumes that prompt is in the request body
    const { prompt } = await request.json();

    const url=`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: prompt}]
                }]
            })
        });

        if (!response.ok) {
            throw new Error('Response status: ${response.status}');
        }

        const modelresponse = await response.json();
        return new Response(JSON.stringify(modelresponse), {status: 200});
        
    } catch (error) {
        console.error(`Error sending prompt to Gemini:`, error);
        return new Response(JSON.stringify({ error: error.message }), {status:500});
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