<script>

 
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
</script>

{#each holes as {id, row, color }, i}
    <div class="color-{color}"><small>r{row}, c{color}</small></div>
{/each}

<style>
.color-0 {
    background-color: Orange;
}
.color-1 {
    background-color: crimson;
}
.color-2 {
    background-color:CornflowerBlue;
}
.color-3 {
    background-color: MediumSeaGreen;
}
</style>