<script>
export const holes = [
    {id: 0, row: 1, color: 0},
    {id: 1, row: 1, color: 0},
    {id: 2, row: 1, color: 0},
    {id: 3, row: 1, color: 0},
]
 
</script>

{#each holes as {id, color }, i}
    <div class="color-{color}">{color}</div>
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