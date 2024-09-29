<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
</script>

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

<br />
<div class="flex w-full max-w-sm flex-col gap-1.5">
	<Label for="list">2. What relevant languages and tools do you know</Label>
	<Input type="list" id="list" name="language" placeholder="type here..." />
</div>

<br />
<label>
	<input type="radio" name="skill" value="beginner" />Beginner
</label>
<label>
	<input type="radio" name="skill" value="software engineering" />Intermediate
</label>
<label>
	<input type="radio" name="skill" value="web development" />Advanced
</label>
<br />
<label>
	<input type="radio" name="commit" value="1-2 hours" />1-2 hours
</label>
<label>
	<input type="radio" name="commit" value="3-5 hours" />3-5 hours
</label>
<label>
	<input type="radio" name="commit" value="6-8 hours" />6-8 hours
</label>
