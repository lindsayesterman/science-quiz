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




function removeStart(){
	$('.startQ').submit(function(event){
		event.preventDefault();
		$(this).closest('.startQ').detach();
	});
}


/*function removeQ(){
  $('.js-q-container').submit(function(event){
    event.preventDefault();
    $(this).closest(${STORE.questions}).detach();
  });
}
*/


let clickCount = 0;

function handleClicks() {
  $('.startQ').submit(function(event) {
  clickCount++;
  });
}




function addQuestion(){
  removeStart();
  handleClicks();
for (let i=0;i<STORE.questions.length;i++){
  if (clickCount==i){
    $('.js-q-container').append(
        `<h3>"${STORE.questions[i].question}"</h3>
         <form>
         <input type="radio" id="${STORE.questions[i].answers}" name="nervous" value="${STORE.questions[i].answers}"/>
         <label for="${STORE.questions[i].answers}">${STORE.questions[i].answers}</label><br>
         <input type="submit" id="submit" name="submit" value="submit"></form>`
    )}};
}



addQuestion();





/*
var score=0;
var questionNum=0;

var qUsed = [false,false, false, false, false]


function updateNum(){
	questionNum++;
	$('.questionNum').text(questionNum+1);
}



}


*/

