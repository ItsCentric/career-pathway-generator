<script lang="ts">
	import type { PageData } from './$types';
	import * as Card from '$lib/components/ui/card';

	export let data: PageData;
	const { user, responses } = data;
</script>

<main class="container h-full">
	<section class="h-1/3">
		<div class="absolute left-0 top-0 h-1/3 w-full bg-red-200"></div>
		<div class="relative z-10 flex h-1/3 w-full items-center justify-center">
			<h1 class="text-center text-3xl font-bold">Welcome, {user?.email}</h1>
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
