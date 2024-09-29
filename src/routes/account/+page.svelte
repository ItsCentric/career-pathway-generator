<script lang="ts">
	import type { PageData } from './$types';
	import * as Card from '$lib/components/ui/card';
	import Button from '$lib/components/ui/button/button.svelte';

	export let data: PageData;
	const { user, responses } = data;
</script>

<main class="container h-full">
	<section class="h-1/3">
		<div class="relative z-10 flex h-1/3 w-full flex-col items-center justify-center">
			<h1 class="mb-4 text-center text-3xl font-bold">Welcome, {user?.email}</h1>
			{#if responses.length === 0}
				<Button size="lg" href="/questionnaire">Start your journey</Button>
			{/if}
		</div>
	</section>
	<section class="py-4">
		<h2 class="mb-4 text-2xl font-bold">Your Responses</h2>
		<div class="grid grid-cols-3 gap-8">
			{#each responses as response}
				<Card.Root>
					<Card.Header class="text-xl font-bold">{response.question}</Card.Header>
					<Card.Content>
						<p>{response.answer}</p>
					</Card.Content>
				</Card.Root>
			{/each}
		</div>
	</section>
</main>
