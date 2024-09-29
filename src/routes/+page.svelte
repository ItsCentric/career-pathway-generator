<script>
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<h1>Welcome to SvelteKit</h1>
<p class="mt-2 bg-red-500 pt-2">
	Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
<Button on:click={() => alert('Hello there!')}>Click me</Button>

<Button on:click={() => alert('Im learning :)')}>Click here</Button>
