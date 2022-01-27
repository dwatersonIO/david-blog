<script>
import Box from "./Box.svelte"
let count = 10
</script>
<h1>About </h1>


<button on:click={() => count = count + 1 }> Increment {count}</button>

<Box />

<div class="flexbox-container">
    <div class="flexbox-item item-1">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, nihil illo quod corporis eligendi ipsum impedit quibusdam eius omnis facere accusamus illum autem aut amet labore? Possimus ipsum aut dolor?</p>
    </div>
    <div class="flexbox-item item-2"></div>
    <div class="flexbox-item item-3"></div>
</div>

<style>

.flexbox-container {
    display: flex;

}

.flexbox-item {
    width: 200px;
    margin: 10px;
    border: 3px solid black;
    background-color: cadetblue;
}

.item-1{
    min-height: 100px
}

.item-1{
    min-height: 200px
}

.item-2 {
    min-height: 300px
}

</style>
    

