import type { Actions } from "@sveltejs/kit";
import { fail } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { formSchema } from "$lib/schemas";



export const actions:Actions = {
    default: async ({fetch, request}) => {
        const formdata = await request.formData();
        const response = await fetch('/api/gemini', {
            method: 'POST',
            body: formdata,
          });
    },
};