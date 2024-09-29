import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const { supabase, user } = locals;
	const { data, error: responseError } = await supabase
		.from('users')
		.select('responses')
		.eq('id', user?.id);
	if (responseError) {
		return error(500);
	}

	return { responses: data.at(0)?.responses ?? [] };
};
