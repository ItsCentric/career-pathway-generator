<script>
    import Button from '$lib/components/ui/button/button.svelte';
</script>
<head>
    <link rel="stylesheet" href="app.css">
</head>

<style>

    :global(body) {
        height: 100vh;
        background:linear-gradient(
       
            
            rgb(150, 135, 239) 65%,
            paleturquoise 100%

        );
    }

    h1 {
        margin:0;
        padding-top: 16%;
        padding-bottom: 8%;
        text-align: center;
        font-size: 100px;
        font-weight: 600;
        font-family:'Courier New', Courier, monospace;
        color: rgb(0, 0, 0);
    }

    p {
        text-align: right;
        padding-right: 2%;
    }
</style>

<div class="title-container">
    <h1>DEVPATH</h1>
</div>

<br>

<Button class="hover:bg-blue-400" href="/get_started">Get Started</Button>

<Button class="hover:bg-blue-400" href="/learn_more">Learn More</Button>

<p>
    Powered by <a href="https://ai.google.dev/gemini-api?gad_source=1&gclid=CjwKCAjw0t63BhAUEiwA5xP54fGwUWJ2smN-4999samvYHeHm4i9du7Dvg9AuKNKl-X5lt1HkfwgxBoCLDgQAvD_BwE">Gemini</a>
</p>

