<script>

// next time try this data structure
// var quiz = [
//   {question: 'Question 1 text', answers: ['answer 1', 'answer 2'], correct: 0},
//   {question: 'Question 2 text', answers: ['answer 1', 'answer 2'], correct: 1}
// ];
-

    import Quiz from './Quiz.svelte'

    const quiz = [
        {questionId: 1,
         questionText: "What is the capital of Italy?",
         answers: [{optionId: 1, "Paris", valid: false},
                   {optionId: 2, "London", valid: false},
                   {optionId: 3, "Rome", valid: true}
        }];

 </script>
  
<Questions {questions}/>
