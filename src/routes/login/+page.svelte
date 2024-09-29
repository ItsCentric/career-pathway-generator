<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import type { PageData } from './$types';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { signUpFormSchema } from '$lib/schemas';
	import * as Form from '$lib/components/ui/form';
	import Input from '$lib/components/ui/input/input.svelte';

	export let data: PageData;
	const form = superForm(data.form, {
		validators: zodClient(signUpFormSchema)
	});

	const { form: formData, enhance } = form;
</script>

<main class="container mx-auto">
	<div class="mx-auto max-w-sm">
		<h1 class="mb-2 text-2xl font-bold">Login</h1>
		<form method="post" use:enhance class="">
			<Form.Field {form} name="email">
				<Form.Control let:attrs>
					<Form.Label>Email</Form.Label>
					<Input {...attrs} bind:value={$formData.email} placeholder="john@doe.com" />
				</Form.Control>
			</Form.Field>
			<Form.Field {form} name="password">
				<Form.Control let:attrs>
					<Form.Label>Password</Form.Label>
					<Input {...attrs} bind:value={$formData.password} placeholder="Password" />
					<Form.FieldErrors />
				</Form.Control>
			</Form.Field>
			<Form.Button formaction="?/signup" class="mt-4">Sign up</Form.Button>
		</form>
	</div>
</main>
