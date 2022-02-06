<script>

const questions = [
    {id: 1, correctAnswer: false, selected: false, option: 'London'},
    {id: 2, correctAnswer: false, selected: false, option: 'Paris'},
    {id: 3, correctAnswer: true, selected: false, option: 'Rome'},
];
let buttonSuccess = false

function checkAnswers() {
    buttonSuccess = questions.every((question) => {
        return question.correctAnswer === question.selected;
    })
}

$:  answersSelected = questions.filter((question) => {
    return question.selected === true;
    })

$:  optionsSelected = answersSelected.map((question) => {
    return question.option
    })    

$:  numberAnswersSelected = answersSelected.length
    
$:  success = questions.every((question) => {
        return question.correctAnswer === question.selected;
    })

$: console.log(success)


</script>
    
<h1>Select the capital of Italy</h1>
<ul>
    {#each questions as question, index (question.id)}
        <li> 
            <input type="checkbox" id="question-{question.id}"
            on:click={() => question.selected = !question.selected} checked={question.selected}
            />{question.option}
        </li>
    {/each}
    
</ul>
<button
    on:click={checkAnswers}>Check my answers
</button>

<p>Currently you have chosen: {optionsSelected}</p>
<p>Current number of answers selected: {numberAnswersSelected}</p>
<p>Have you guessed correctly yet?: {success}</p>

<h3>After clicking button answer confirmed as: {buttonSuccess}</h3>

<style>

li {
    color: blue;
    list-style: none;
}


</style>
