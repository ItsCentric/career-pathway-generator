<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import { enhance } from '$app/forms';
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<div class="font-roboto">
	<form method="POST" use:enhance class="mx-auto max-w-fit">
		<p class="mb-2">1. What do you want to learn?</p>
		<div class="flex flex-col gap-4">
			<label>
				<input type="radio" name="web_dev" value="web development" />Web Development
			</label>
			<label>
				<input type="radio" name="web_dev" value="software engineering" />Software Engineering
			</label>
			<label>
				<input type="radio" name="web_dev" value="web development" />Artificial Intelligence/Machine
				Learning
			</label>
		</div>

		<br />
		<div class="flex w-full max-w-sm flex-col gap-1.5">
			<Label for="list">2. What relevant languages and tools do you know</Label>
			<Input type="list" id="list" name="language" placeholder="type here..." />
		</div>

		<br />
		<p class="mb-2">3. Overall, what skill level are you at in your desired field?</p>
		<div class="flex flex-col gap-4">
			<label>
				<input type="radio" name="skill" value="beginner" />Beginner
			</label>
			<label>
				<input type="radio" name="skill" value="software engineering" />Intermediate
			</label>
			<label>
				<input type="radio" name="skill" value="web development" />Advanced
			</label>
		</div>
		<br />
		<p>4. How much time per week can you commit to learning this?</p>
		<label>
			<input type="radio" name="commit" value="1-2 hours" />1-2 hours
		</label>
		<label>
			<input type="radio" name="commit" value="3-5 hours" />3-5 hours
		</label>
		<label>
			<input type="radio" name="commit" value="6-8 hours" />6-8 hours
		</label>
		<Button type="submit" class="mt-4 block">Submit</Button>
	</form>
</div>
