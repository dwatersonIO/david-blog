<script>

// next time try this data structure
// var quiz = [
//   {question: 'Question 1 text', answers: ['answer 1', 'answer 2'], correct: 0},
//   {question: 'Question 2 text', answers: ['answer 1', 'answer 2'], correct: 1}
// ];
-

    import Questions from './Quiz.svelte'

    const questions = [
        {id: 1, correctAnswer: false, selected: false, option: 'London'},
        {id: 2, correctAnswer: false, selected: false, option: 'Paris'},
        {id: 3, correctAnswer: true, selected: false, option: 'Rome'},
    ];

 </script>
  
<Questions {questions}/>
