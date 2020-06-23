const STORE = {

questions:  [


//1
   
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

    //2
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
//3 
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
	
//4
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
	question: "Which of the following is a sign of bipolar disorder",
      answers: [
        "Buying dinner for your family", 
        "A rash", 
        "Waking up at 8:00 AM every morning.", 
        "Extreme changes in mood"
      ],
      answer: "Extreme changes in mood"
	}
  
]

};


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
        const questionAnswers= STORE.questions[i].answers;
        let currentCorrect=STORE.questions[i].answer;
        let answerHtml= "";

             $('input[type=radio]').click(function() {
                let answerChosen=$('input[type=radio]:checked').val();
                console.log(answerChosen);
                if ($(answerChosen == currentCorrect)){
                    alert("You are correct!"); 
                }else{ 
                     alert(`Sorry, the correct answer was` `${currentCorrect}`) 
              }});

             $('h5').append(
                `#`+`${questionNum}`)

                for (let j=0;j<questionAnswers.length;j++){
                    const currentAnswer = questionAnswers[j];
                    answerHtml += `<input type="radio" id="${currentAnswer}" name="${currentCorrect}" value="${currentAnswer}"/>
                    <label for="${currentAnswer}">${currentAnswer}</label><br>`
                }

      $('.js-q-container').append(
            `<h3>${STORE.questions[i].question}</h3>
             <form>`+
             answerHtml+
             `<input type="submit" id="submit" name="submit" value="submit" class="startQ"></form>`)
             }

    listenForAttachRemoveStart();

    };
}



function start(){
  listenForAttachRemoveStart();
}



start();





