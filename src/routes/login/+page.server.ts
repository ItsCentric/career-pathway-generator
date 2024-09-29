import type { PageServerLoad } from './$types';
import { fail, superValidate } from 'sveltekit-superforms';
import { signUpFormSchema } from '$lib/schemas';
import { zod } from 'sveltekit-superforms/adapters';
import { redirect, type Actions } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(signUpFormSchema))
	};
};

export const actions = {
	signup: async (event) => {
		const { supabase } = event.locals;
		const form = await superValidate(event, zod(signUpFormSchema));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		const { error: signUpError } = await supabase.auth.signUp({
			email: form.data.email,
			password: form.data.password
		});
		if (signUpError) {
			console.log(signUpError);
			return fail(500, {
				form
			});
		}

		return redirect(303, '/login/confirm');
	},
	signin: async (event) => {
		const { supabase } = event.locals;
		const form = await superValidate(event, zod(signUpFormSchema));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		const { error: signInError } = await supabase.auth.signInWithPassword({
			email: form.data.email,
			password: form.data.password
		});
		if (signInError) {
			return fail(500, {
				form
			});
		}

		return {
			form
		};
	}
} satisfies Actions;
