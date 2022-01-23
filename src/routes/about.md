# About

<script>
import Box from "./Box.svelte"
let count = 10
</script>

<button on:click={() => count = count + 1 }> Increment {count}</button>

<Box />
<Box />
<Box />
