const readLineSync = require("readline-sync");
const chalk = require("chalk");

let score = 0;
let userName = readLineSync.question("What's your name?\n");
console.log("Welcome " + userName + ", let's test your OS knowledge!!");
console.log("For every right answer you will get 2 points and for every wrong answer you will loss 1 point\n");
let wantToPlay = readLineSync.question("To start the quiz press y else n\n");
let highestScore = 0;


function playQuiz(question, answer) {
  let userAnswer = readLineSync.question(question+"\n");
  if(userAnswer.toLowerCase() === answer) {
    score += 2;
    console.log(chalk.green("Right, your score is " + score));
  } else {
    score -= 1;
    console.log(chalk.red("Wrong, Answer is " + answer));
    console.log("your score is " + score)
  }
}

let quizQuestions = [
  {
    question: "1). Which of the following is not an operating system?\n(a) Windows (b) DOS (c) Oracle (d) Linux\n",
    answer: "c"
  },
  {
    question: "2). What is the maximum length of the filename in DOS?\n(a) 4 (b) 5 (c) 8 (d) 12\n",
    answer: "c"
  },
  {
    question: "3). Which of the following is the extension of Notepad?\n(a) .txt (b) .cpp (c) .js (d) .pptx\n",
    answer: "a"
  },
  {
    question: "4). What is full form of FAT?\n(a) File Allocation Tabel\n (b) File attribute table\n (c) Font attribute table\n (d) Format allocation table\n",
    answer: "a"
  },
  {
    question: "5). Banker's algorithm is used?\n(a) To prevent deadlock \n(b) To deadlock recovery \n(c) To solve the deadlock \n(d) None of these\n",
    answer: "a"
  },
  {
    question: "6). Which of the following is not application software?\n(a) paint (b) windows 7 (c) discord (d) photoshop\n",
    answer: "b"
  },
  {
    question: "7). Which of the following operating system does not require a command to run?\n(a) Kali Linux (b) Windows (c) Unix (d) All of the these\n",
    answer: "b"
  },
  {
    question: "8). Which method is the best among file allocation methods?\n(a) Linked (b) Contiguous (c) Indexed (d) None of the these\n",
    answer: "c"
  },
  {
    question: "9). Which of the following scheduling reduces process flow time?\n(a) FCFS (b) LIFO (c) SJF (d) All of the these\n",
    answer: "b"
  },
  {
    question: "10). How many types of buffer overflow in the operating system?\n(a) 5 (b) 7 (c) 10 (d) 2\n",
    answer: "d"
  },
]

if(wantToPlay.toLowerCase() === "n") {
  console.log("Okay no worries, comeback whenever you want to play!");
} else {
  for(let i = 0; i < quizQuestions.length; i++) {
    let question = quizQuestions[i].question;
    let answer = quizQuestions[i].answer;
    playQuiz(question, answer);
  }
  if(score > highestScore) {
    highestScore = score;
    console.log("woohhh, you scored highest!!");
  }
  console.log(chalk.green("HighestScore: " + highestScore, "Your Score: " + score));
}