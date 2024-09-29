<script lang="ts">
	import '../app.css';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button';

	export let data;
	$: ({ session, user, supabase } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<div class="test pt-4">
	{#if user}
		<a href="/account">{user?.email}</a>
		<Button on:click={() => supabase.auth.signOut()}>Sign-out</Button>
	{:else}
		<Button href="/login">Register</Button>
		<Button href="/login">Sign-in</Button>
	{/if}
</div>
<slot></slot>

<style>
	:global(body) {
		height: 100vh;
		background: linear-gradient(rgb(150, 135, 239) 65%, paleturquoise 100%);
	}
	.test {
		margin: 0px;
		padding-right: 20px;
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: right;
		gap: 14px;
	}
</style>
