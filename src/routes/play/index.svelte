<script>

import Child from "./Child.svelte"

    let board = [
        {id: 0, row: 0, color: 5},
        {id: 1, row: 0, color: 4},
    ];

    function handleClick() {
        board.row += 1
    }
console.log({...test})
</script>

<h1>Playground</h1>

<!-- <Child {board}/> -->

<Child {...board}/>

<button on:click={handleClick}>
    Add   
</button>