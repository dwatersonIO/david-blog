<script>

    export let quiz = [];

    let buttonSuccess = false
    
    function checkAnswers() {
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
    
    
    <h4>Select the capital of Italy</h4>
    
    <div class="grid-container">  
        <div>      
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
        </div>

        <div >  
        
            <p>Currently you have chosen: {optionsSelected}</p>
            <p>Current number of answers selected: {numberAnswersSelected}</p>
            <p>Have you guessed correctly yet?: {success}</p>
            <p>After clicking button answer confirmed as: {buttonSuccess}</p>
        </div>  
    </div> 

    <style>
    
    button {
        margin: 0 0 0 0;
        color: blue;
    }

    p {
        font-size: .8rem;
        line-height: 120%;
    }

    li {
        color: blue;
        list-style: none;
        margin: 0 0 0 0;
    }
    
    ul {
        background-color: rgb(204, 197, 197);
        margin: 0 0 0 0;        
    }

    .grid-container {
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: .8rem;
        padding: .8rem; 
        width: 50%;
        background-color: white;
        border-radius: 10px;

  }
    
    </style>
    