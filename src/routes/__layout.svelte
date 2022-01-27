<script>
    import Nav from "$lib/Nav.svelte"
</script>

<div class="container">
    <Nav />
    <slot/>
</div>


<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&family=Roboto:wght@300;400&display=swap');

:root {
    font-family: 'Roboto', sans-serif;
    --primary: red;
    --secondary: blue;

}

.container {
    max-width: 70%;
    margin: 0em auto;
    background-color: rgba(117, 115, 115, 0.219);
    }


</style>