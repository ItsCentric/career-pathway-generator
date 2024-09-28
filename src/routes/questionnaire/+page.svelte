<script lang="ts">
    import type { PageData } from "./$types.js";
    import Form from "$lib/components/Form.svelte";
    export let data: PageData;
</script>

<Form data={data} />