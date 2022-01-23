<script>
    import Nav from "$lib/Nav.svelte"
</script>

<div class="container">
    <slot/>
    <Nav />
</div>

<style>
    .container {
        max-width: 600px;
        margin: 50px auto
    }
</style>