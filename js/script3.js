const quizDB = [
    {
        question: "Q1 : Which of these components are used in a Java program for compilation, debugging, and execution?",
        a: "JDK",
        b: "JVM",
        c: "JRE",
        d: "JIT",
        ans : "ans1"
    },
    {
        question: "Q2 : Which of these literals can be contained in a float data type variable?",
        a: " -3.4e+050",
        b: "+1.7e+308",
        c: "-3.4e+038",
        d: "-1.7e+308",
        ans : "ans2"
    },
    {
        question: "Q3 : Out of these methods of the String class, which one can be used for testing the strings for equality?",
        a: "isequals()",
        b: "isequal()",
        c: "equals()",
        d: "equal()",
        ans : "ans3"
    },
    {
        question: "Q4 : Out of these packages, which one contains an abstract keyword?",
        a: " java.util",
        b: " java.lang",
        c: " java.system",
        d: " java.io",
        ans : "ans2"
    },
    {
        question: "Q5 : What value is returned by the compareTo() function in case the invoking string happens to be greater than the compared string?",
        a: "a value that is greater than zero",
        b: "a value that is less than zero",
        c: "zero",
        d: "none of the above",
        ans : "ans1"
    },
    {
        question: "Q6 : When an expression consists of int, double, long, float, then the entire expression will get promoted into a data type that is:",
        a: "float",
        b: "double",
        c: "int",
        d: "long",
        ans : "ans2"
    },
    {
        question: "Q7 : When does Overloading not occur?",
        a: "When more than a single method have the same name, yet different types or number of parameters and different method signature",
        b: "When more than a single method have the same name, the same signature, but have different numbers of signature",
        c: "When more than a single method have the same signature, same name, and the same number of parameters have different types",
        d: "When more than a single method have the same name, the same number and types of parameters, and yet different signatures",
        ans : "ans4"
    },
    {
        question: "Q8 : What is it called when the child object also gets killed when the parent object is killed in the program?",
        a: " Encapsulation",
        b: " Association",
        c: " Aggregation",
        d: " Composition",
        ans : "ans4"
    },
    {
        question: "Q9 :  How does one identify if a compilation unit is an interface or class from a .class file?",
        a: "Extension of the compilation unit",
        b: "Java source file header",
        c: "The class and interface cannot be differentiated",
        d: "The unit type must be used to postfix interface or class name",
        ans : "ans2"
    },
    {
        question: "Q10 :  Out of these, which one is the correct way of calling a constructor that has no parameters of the superclass A by the subclass B?",
        a: " superclass.();",
        b: "super(void);",
        c: "super();",
        d: "super.A();",
        ans : "ans3"
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