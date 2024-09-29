<script lang="ts">
	import '../app.css';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;
	$: ({ session, supabase } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<slot />
<div class="test">
	<a href='/login'>
		Register
	</a>
	<a href='/login'>Sign-in</a>
</div>
<slot></slot>

<style>
	.test{
	margin: 0px;
	padding-right: 20px;
	display: flex;
	width: 100%;
	justify-content: right;
	gap: 14px;
 }
</style>
