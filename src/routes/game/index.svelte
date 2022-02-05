<script>

let name = "Mastermind"
let nextColor
let dummy = 0

let holes = [
    {id: 0, row: 0, color: getRandomInt(4)},
    {id: 1, row: 0, color: getRandomInt(4)},
    {id: 2, row: 0, color: getRandomInt(4)},
    {id: 3, row: 0, color: getRandomInt(4)},
    {id: 4, row: 1, color: 0},
    {id: 5, row: 1, color: 0},
    {id: 6, row: 1, color: 0},
    {id: 7, row: 1, color: 0},
    {id: 8, row: 2, color: 0},
    {id: 9, row: 2, color: 0},
    {id: 10, row: 2, color: 0},
    {id: 11, row: 2, color: 0},
]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
    
$: dummy += 1;
    
let example = Array(10)
    
function changeColor(id, color) {
    nextColor = (color + 1 > 3 ? 0 : color + 1);
    holes[id] = {
        id:id,
        color: nextColor
    }
}

console.log({holes})

</script>

<h1> {name} </h1>

<div class="grid-mother">

    <div class="grid-container1">
        {#each holes as {id, color }, i}
            <div on:click="{() => changeColor(id, color)}" 
                    class="color-{color}"
                    >{color}
            </div>
        {/each}
    </div>

    <div class="grid-container2">
        <div> <button>Game on</button></div>
        <div> <button>Try</button></div>
        <div> <button>Try</button></div>

    </div>

</div>
<style>

* {
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
}

*, *::before, *::after {
  box-sizing: border-box;
}

.grid-mother {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr ;
  grid-gap: 2px;
  padding: 2px;
  width: 500px;
  background-color: rgb(140, 43, 185);
}

.grid-container1 {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2px;
  padding: 2px;
  width: 200px;
  background-color: black;
}

.grid-container2 {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2px;
  padding: 5px;
  width: 200px;
  background-color: grey;
}


/* .grid-item {
    position: relative;
    padding: 20px;
    padding-top: 50px;
    background-color: #379AD6;
    color: #222;
    border: 2px solid red;
} */

.grid-item-1 {
    background-color: lightgreen;
    /* cover cols 1 to 3 (2 whole cols) line below does same with span */
    /* grid-column: 1 / 3; */
    grid-column: span 1;  
}

.grid-item-2 {
    background-color: crimson;
}

.grid-item-3 {
    background-color:CornflowerBlue;
}

.grid-item-4 {
    background-color: MediumSeaGreen;
}

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