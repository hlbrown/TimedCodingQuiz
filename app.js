var pos = 0;
var score = 0;
var test, test_status, question, choice, chA, chB, chC;
var timeLeft = 60;
var elem = document.getElementById('time');
var timerId = setInterval(countDown, 1000);

function countDown() {
    if (timeLeft == -1){
        alert("Ran out of time!")
        clearTimeout(timerId);
        
 }else{
     elem.innerHTML = timeLeft + ' seconds remaining';
     timeLeft--;
 }}


var questions = [
    {
        question: "Which term is not used in JavaScript?",
        a: "else",
        b: "but",
        c: "if",
        answer: "B"
    },
    {
        question: "An array always begins with an index of:",
        a: "-1",
        b: "1",
        c: "0",
        answer: "C"
    },
    {
        question:"Which statement does not create a loop?",
        a: "switch",
        b: "for",
        c: "while",
        answer: "A"
    },
    {
        question: "What is a valuable tool to use to test minor changes when developing",
        a: "alert",
        b: "prompt",
        c: "console.log()",
        answer: "C"
    }
];
function get(x){
    return document.getElementById(x);
}

function renderQuestion(){
    test = get("test");
    if(pos >= questions.length ){
        test.innerHTML = "<h2>You got " +score+" of "+questions.length+" questions correct</h2>";
        get("test_status").innerHTML = "Quiz completed";
        //reset variable to allow multiple uses of quiz
		clearInterval(timerId);
        pos = 0;
        correct = 0;

        //prevent the questions from popping when the quiz is completed
        return false;
    }
    get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  
    question = questions[pos].question;
    chA = questions[pos].a;
    chB = questions[pos].b;
    chC = questions[pos].c;
     // display the question
  test.innerHTML = "<h3>"+question+"</h3>";
  // display the answer options
  // the += appends to the data we started on the line above
  test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
    // use getElementsByName because we have an array which it will loop through
    choices = document.getElementsByName("choices");
    for(var i = 0; i < choices.length; i++){
      if(choices[i].checked){
        choice = choices[i].value;
      }
    }//checks to see if the password does not match and removes time if incorrect
    if(choice != questions[pos].answer){
        timeLeft -= 5;
    }
    // checks if answer matches the correct choice
    if(choice == questions[pos].answer){
      //each time the answer is correct, adds a 1 to the score
      score++;
    
	}

    
    // changes position of which character user is on
    pos++;
    // then the renderQuestion function shows the next question
    renderQuestion();
  }

 

   
  // Add event listener to call renderQuestion on page load event
  window.addEventListener("load", renderQuestion);
