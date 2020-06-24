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
      addQuestion();
  });
}



function addQuestion(){
    for (let i=0;i<STORE.questions.length;i++){
      if (clickCount==i){
        const questionOptions= STORE.questions[i].answers;
        let currentCorrect=STORE.questions[i].answer;
        let answerHtml= "";

                for (let j=0;j<questionOptions.length;j++){
                    const currentAnswer = questionOptions[j];
                    answerHtml += `<input type="radio" id="${currentAnswer}" name="${currentCorrect}" value="${currentAnswer}"/>
                    <label for="${currentAnswer}">${currentAnswer}</label><br>`
                }

      $('.js-q-container').append(

            `<div class="startQ">
            <h4>Question ${questionNum} of ${STORE.questions.length}</h4>
            <div class="numCorrect">
              <h5><h5>${numCorrect} correct out of ${STORE.questions.length}</h5></h5>
            </div>
            <h3>${STORE.questions[i].question}</h3>
             <form>`+
             answerHtml+
             `<input type="submit" id="submit" name="submit" value="submit" required="required">
             </form>
             </div>`)

    $('.startQ').submit(function() {
      event.preventDefault();
      let answerChosen=$('input[type=radio]:checked').val();
      console.log(currentCorrect);
      console.log(answerChosen);
        if (answerChosen == currentCorrect){
            alert("You are correct! The right answer was "+ `${currentCorrect}.`); 
            numCorrect++;
        }else{ 
            alert("Sorry, you are incorrect. The correct answer was " +`${currentCorrect}.`) 
    }});
      
           }

    }   

        listenForAttachRemoveStart();
}





function start(){
  listenForAttachRemoveStart();
}



start();


