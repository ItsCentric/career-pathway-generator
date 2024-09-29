import { redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		return redirect(
			303,
			`/pathway?q1=${formData.get('web_dev')}&q2=${formData.get('language')}&q3=${formData.get('skill')}&q4=${formData.get('commit')}`
		);
	}
};
