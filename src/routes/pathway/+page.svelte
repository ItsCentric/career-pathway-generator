<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const jsonData = data.jsonData;
</script>

<header>
	<h1 class="mx-20 mt-8 max-w-3xl text-left text-4xl font-bold">
		Your personalized path to learning:
	</h1>
</header>

<div class="mb-20 mt-8">
	<div class="mx-20 space-y-16">
		{#each jsonData.schedule as week}
			<div class="rounded-lg bg-white p-4 shadow-md">
				<h2 class="text-lg font-bold">Week {week.week}: {week.topic}</h2>
				<p>{week.description}</p>
				<p><strong>Estimated Time:</strong> {week.time_estimate}</p>

				<h3 class="mt-2 font-semibold">Resources:</h3>
				<ul class="list-disc pl-5">
					{#each week.resources as resource}
						<li>
							<a href={resource.url} class="text-emerald-500 hover:underline" target="_blank">
								{resource.title} ({resource.type})
							</a>: {resource.description}
						</li>
					{/each}
				</ul>

				<h3 class="mt-2 font-semibold">Projects:</h3>
				<ul class="list-disc pl-5">
					{#each week.projects as project}
						<li>
							<strong>{project.title}</strong>: {project.description}
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</div>
