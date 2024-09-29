<script>
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<head>
	<link rel="stylesheet" href="../app.css" />
</head>

<div class="flex flex-col items-center gap-8">
	<h1>DEVPATH</h1>
	<Button class="max-w-fit hover:bg-blue-400" href="/login">Get Started</Button>

	<Button
		class="max-w-fit hover:bg-blue-400"
		target="_blank"
		href="https://www.github.com/itscentric/career-pathway-generator">Learn More</Button
	>
</div>

<br />

<p>
	Powered by <a
		href="https://ai.google.dev/gemini-api?gad_source=1&gclid=CjwKCAjw0t63BhAUEiwA5xP54fGwUWJ2smN-4999samvYHeHm4i9du7Dvg9AuKNKl-X5lt1HkfwgxBoCLDgQAvD_BwE"
		>Gemini</a
	>
</p>

<style>
	h1 {
		margin: 0;
		padding-top: 16%;
		padding-bottom: 8%;
		text-align: center;
		font-size: 100px;
		font-weight: 600;
		font-family: 'Courier New', Courier, monospace;
		color: rgb(0, 0, 0);
	}

	p {
		text-align: right;
		padding-right: 2%;
	}
</style>
