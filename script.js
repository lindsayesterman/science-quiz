const STORE = {

  questions:  [



  {
    question: "Which part of the nervous system controls our fight or flight response?",
    answers: [
    "Somatic", 
    "Parasympathetic", 
    "Central", 
    "Sympathetic"
    ],
    answer: "Sympathetic"
  },


  {
    question: "Which of the following is known as the 'I knew it all along' phenomenon?",
    answers: [
    "Learned Helplessness", 
    "Hindsight Bias", 
    "Availability Heuristic", 
    "Conservation"
    ],
    answer: "Hindsight Bias"
  },

  {
    question: "Which is caused by a mutation in the 21st chromosome?",
    answers: [
    "Cystic Fibrosis", 
    "Sickle Cell Anemia", 
    "Down Syndrome", 
    "Autism"
    ],
    answer: "Down Syndrome"
  },


  {
   question: "Who proposed the idea of evolution?",
   answers: [
   "Francis Crick", 
   "James Watson", 
   "Charles Darwin", 
   "Rachel Carson"
   ],
   answer: "Charles Darwin"
 }, 

 {
  question: "Which element on the periodic table has the highest electronegativity?",
  answers:[

  "Oxygen",
  "Flourine",
  "Francium",
  "Hydrogen"

  ],
  answer:"Flourine"
},

{

  question:"Scientists believe Earth's continents used to all be connected. What was this continent called?",
  answers: [

  "Mercury",
  "Tectonic",
  "Crassen",
  "Pangea"
  ],
  answer:"Pangea"

},

{
	question: "Which of the following is a sign of bipolar disorder",
  answers: [
  "Buying dinner for your family", 
  "A rash", 
  "Waking up at 8:00 AM every morning.", 
  "Extreme changes in mood"
  ],
  answer: "Extreme changes in mood"
},

{
  question:"Around what percentage of all the species do we know of?",
  answers:[

  "1%",
  "15%",
  "75%",
  "90%"

  ],
  answer:"15%"
}

]

};


let numCorrect=0;
let questionNum=0;
let clickCount = -1;



function listenForAttachRemoveStart(){
  $('.startQ').submit(function removeStart(event){
    event.preventDefault();
    $(this).closest('.startQ').remove();
    clickCount++;
    questionNum++;
    renderAQuestion();
    hideFeedback();
    if (questionNum>STORE.questions.length){
      checkAndSetEndScreen();
    }});
}


function hideFeedback(){
  $('input[type=radio]').click(function() {
    $('fieldset').addClass('hidden');
  })};



  function renderAQuestion(){
    for (let i=0;i<STORE.questions.length;i++){
      if (clickCount==i){
        let questionOptions= STORE.questions[i].answers;
        let currentCorrect=STORE.questions[i].answer;
        let answerHtml= "";
        
        for (let j=0;j<questionOptions.length;j++){
          const currentAnswer = questionOptions[j];
          answerHtml += `<input type="radio" id="${currentAnswer}" name="${currentCorrect}" value="${currentAnswer}" required="required">
          <label for="${currentAnswer}">${currentAnswer}</label><br>`
        }
        generateQuestion(answerHtml);
        checkCorrectAndGiveFeedback(currentCorrect);
      }
    }   
    listenForAttachRemoveStart();
  }



  function checkCorrectAndGiveFeedback(currentCorrect){
    $('.startQ').submit(function() {
      event.preventDefault();
      let answerChosen=$('input[type=radio]:checked').val();
      if (answerChosen == currentCorrect){
        prependCorrectAndChangeScore(currentCorrect);
      }else{ 
        prependIncorrect(currentCorrect);
      }
    })};


    function prependCorrectAndChangeScore(currentCorrect){
     $('.js-q-container').prepend(
      `<fieldset><h4>You are correct! The right answer was ${currentCorrect}.</h4></fieldset>`); 
     numCorrect++;
   }

   function prependIncorrect(currentCorrect){
    $('.js-q-container').prepend(
     `<fieldset><h4>Sorry, you are incorrect. The correct answer was ${currentCorrect}.</fieldset></h4?`); 
  }


  function generateQuestion(answerHtml){

    $('.js-q-container').append(
     `<main class="startQ">
     <h4>Question ${questionNum} of ${STORE.questions.length}</h4>
     <div class="numCorrect">
     <h5>${numCorrect} correct out of ${STORE.questions.length}</h5>
     </div>
     <h3>${STORE.questions[clickCount].question}</h3>
     <form>`+
     answerHtml+
     `<input type="submit" id="submit" name="submit" value="submit" required="required">
     </form>
     </main>`)
  }



  function restart(){
    questionNum=0;
    clickCount=-1;
    numCorrect=0;
  }



  function checkAndSetEndScreen(){
   $('.js-q-container').append(
    `<main class="startQ">
    <div class="numCorrect">
    <h2>Nice job! You got ${numCorrect} correct out of ${STORE.questions.length}!</h2>
    </div>
    <h3>Do you want to try again?</h3>
    <form>
    <input type="submit" id="submit" name="submit" value="Try again">
    </form>
    </main>`
    );
   restart();
 }



 $(function start() {
  listenForAttachRemoveStart();
});




