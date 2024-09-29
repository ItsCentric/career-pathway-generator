import type { Actions } from "@sveltejs/kit";
import { fail } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { formSchema } from "$lib/schemas";



export const actions:Actions = {
    default: async (event) => {
        const form = await superValidate(event,zod(formScheme));
        if(!form.valid) {
            return fail(400, {
                form,
            });
        }
        return {
            form,
        };
    },
};