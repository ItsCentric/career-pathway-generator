<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const { user } = data;
</script>

<main>
	<p>Welcome, {user?.email}</p>
</main>
