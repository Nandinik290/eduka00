const quizDB = [
    {
        question: "Q1 : Which of the following is not the type of queue?",
        a: "Priority queue",
        b: "Single ended queue",
        c: "Circular queue;",
        d: " Ordinary queue",
        ans : "ans2"
    },
    {
        question: "Q2 :  When the user tries to delete the element from the empty stack then the condition is said to be a ____",
        a: "Underflow",
        b: "Garbage collection",
        c: "Overflow",
        d: "None of the mentioned",
        ans : "ans1"
    },
    {
        question: "Q3 : Which of the following is the prefix form of A+B*C?",
        a: "A+(BC*)",
        b: "+AB*C",
        c: "ABC+*",
        d: "+A*BC",
        ans : "ans4"
    },
    {
        question: "Q4 :  If the elements '1', '2', '3' and '4' are inserted in a queue, what would be order for the removal?",
        a: "1234",
        b: "4321",
        c: "3241",
        d: "None of the mentioned",
        ans : "ans1"
    },
    {
        question: "Q5 :  Which of the following that determines the need for the Circular Queue?",
        a: "Avoid wastage of memory",
        b: "Access the Queue using priority",
        c: "Follows the FIFO principle",
        d: "None of the above",
        ans : "ans1"
    },
    {
        question: "Q6 : Which one of the following techniques is not used in the Binary tree?",
        a: "Randomized traversal",
        b: "Preorder traversal",
        c: "Postorder traversal",
        d: "Inorder traversal",
        ans : "ans1"
    },
    {
        question: "Q7 :  Which one of the following is the correct way to increment the rear end in a circular queue?",
        a: "rear =rear+1",
        b: "(rear+1) % max",
        c: "(rear % max) + 1",
        d: "None of the above",
        ans : "ans2"
    },
    {
        question: "Q8 : Which of the following is the time complexity to search an element in the linked list?",
        a: "O(1)",
        b: "O(n)",
        c: "O(logn)",
        d: "O(nlogn)",
        ans : "ans2"
    },
    {
        question: "Q9 : Which of the following statement is not true about the doubly linked list?",
        a: "We can traverse in both the directions.",
        b: "It requires extra space",
        c: "Implementation of doubly linked list is easier than the singly linked list",
        d: "It stores the addresses of the next and the previous node",
        ans : "ans3"
    },
    {
        question: "Q10 :  What is the maximum number of children that a node can have in a binary tree?",
        a: "3",
        b: "1",
        c: "4",
        d: "2",
        ans : "ans4"
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