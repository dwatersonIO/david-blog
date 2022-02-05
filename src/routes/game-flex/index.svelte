<script>

    let name = "Mastermind"
    let dummy = 0
    let startBoard = [
        {first: "red", second: "green", third: "blue", fourth: "orange"}
    ]

    
    $: dummy += 1;
    
    function handleClick() {


    }

</script>

<h1> {name} </h1>

<div class="parent">
    <Board />
    <slot/>
</div>

<div class="">
<span>
    {#each example as a}
        <div class=box></div>
    {/each}
</span>
</div>

<style>

.parent {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;

}

.blue {
    background-color: blue;
}

.red {
    background-color: red;
}
.green {
    background-color: green;
}
.orange {
    background-color: orange;
}


</style>