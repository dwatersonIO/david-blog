
<script>
import Names from './Names.svelte'

let myList = [{firstname: "David", surname: "Waterson", likes: {col: "red", car: "golf"}},
              {firstname: "Lucia", surname: "Della Cerra", likes: {col: "pink", car: "audi"}}
              ]

let textitem = "What are your details?"

let specificName1 = myList[0]
let specificName2 = myList[1]

console.log(specificName1)

</script>

<h1>Test Page</h1>

<Names myList = {specificName1} textitem={textitem} /> 

<Names myList = {specificName2} textitem={textitem} /> 
