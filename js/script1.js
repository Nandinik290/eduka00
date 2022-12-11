const quizDB = [
    {
        question: "Q1 : Which of the following is not a valid C variable name?",
        a: "int number;",
        b: "float rate;",
        c: "int variable_count;",
        d: " int $main;",
        ans : "ans4"
    },
    {
        question: "Q2 : All keywords in C are in ____________",
        a: "LowerCase letters",
        b: "UpperCase letters",
        c: "CamelCase letters",
        d: "None of the mentioned",
        ans : "ans1"
    },
    {
        question: "Q3 : Which of the following declaration is not supported by C language?",
        a: "String str;",
        b: "char *str;",
        c: "float str = 3e2;",
        d: "Both String str; & float str = 3e2;",
        ans : "ans1"
    },
    {
        question: "Q4 :  Which of following is not accepted in C?",
        a: "static a = 10; //static as",
        b: " static int func (int); //parameter as static",
        c: "static static int a; //a static variable prefixed with static",
        d: "all of the mentioned",
        ans : "ans3"
    },
    {
        question: "Q5 :  The correct order of evaluation for the expression “z = x + y * z / 4 % 2 – 1",
        a: "* / % = + -",
        b: "/ * % - + =",
        c: "- + = * % /",
        d: "* / % + - =",
        ans : "ans4"
    },
    {
        question: "Q6 :  Which of the following will occur if we call the free() function on a NULL pointer?",
        a: "Compilation Error",
        b: "Runtime Error",
        c: "Undefined Behaviour",
        d: "The program will execute normally",
        ans : "ans4"
    },
    {
        question: "Q7 :  Which of the following is not true about structs in C?",
        a: "No Data Hiding",
        b: "Functions are allowed inside structs.",
        c: "Constructors are not allowed inside struct.",
        d: "Cannot have static members int the struct body.",
        ans : "ans2"
    },
    {
        question: "Q8 :  Which of the following are correct file opening modes in C?",
        a: "r",
        b: "rb",
        c: "w",
        d: "all of the mentioned",
        ans : "ans4"
    },
    {
        question: "Q9 :  If p is an integer pointer with a value 1000, then what will the value of p + 5 be?",
        a: "1020",
        b: "1005",
        c: "1004",
        d: "1010",
        ans : "ans1"
    },
    {
        question: "Q10 :  What is the return type of the fopen() function in C?",
        a: "Pointer to a FILE object",
        b: "Pointer to an integer",
        c: "An integer",
        d: "None of the mentioned",
        ans : "ans1"
    }

];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

let answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () =>{
    question.innerText = (quizDB[questionCount].question);

    option1.innerText = (quizDB[questionCount].a);
    option2.innerText = (quizDB[questionCount].b);
    option3.innerText = (quizDB[questionCount].c);
    option4.innerText = (quizDB[questionCount].d);
}

loadQuestion();

const getCheckAnswer = () =>{
    let answer;
    for(i=0;i<answers.length;i++){
        if(answers[i].checked){
            answer = answers[i].id;
        }     
    }
    return answer;
   
}

const deselectAll = () =>{
    for(i = 0;i<answers.length;i++){
        answers[i].checked = false;
    }
}



submit.addEventListener('click',function(){
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    

    if(checkedAnswer == quizDB[questionCount].ans){
        score++;
    }
    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }
    else{
        document.querySelector('#showScore').innerHTML = `
        <h3>You scored ${score} / ${quizDB.length} ✌️</h3>
        <button class="btn" onclick =location.href="www.google.com">Go to Home</button>
    `
    document.querySelector('#showScore').classList.remove('showArea');

   }
  
})