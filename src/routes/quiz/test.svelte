
<script>
import Names from './Names.svelte'

let myList = [{firstname: "David", surname: "Waterson"},
              {firstname: "Lucia", surname: "Della Cerra"}
              ];

let specificName1 = myList[0]
let specificName2 = myList[1]

</script>

<h1>Test Page</h1>


<Names myList = {specificName1} />
<Names myList = {specificName2} />