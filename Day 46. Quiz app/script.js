const quizData = [
  {
    question: "Как называется популярная игра на бумаге?",
    a: `"Озерная стычка"`,
    b: `"Речная драка"`,
    c: `"Морской бой"`,
    d: `"Океанское побоище"`,
    correct: "c",
  },
  {
    question: "Что, как говорят, делают с интересными книгами?",
    a: "вылизывают",
    b: "прожевывают",
    c: "выпивают",
    d: "проглатывают",
    correct: "d",
  },
  {
    question: "Где не был Незнайка в проиведениях Н.Носова?",
    a: "в Солнечном городе",
    b: "в Цветочном городе",
    c: "в Горгороде",
    d: "на Луне",
    correct: "c",
  },
  {
    question: "Как называют шустрого невысокого подростка?",
    a: "крючок",
    b: "шпингалет",
    c: "засов",
    d: "задвижка",
    correct: "b",
  },
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();
function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}
function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}
function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>Вы ответили на ${score} из ${quizData.length} вопросов!</h2>
      <button onclick="location.reload()"> Начать заново</button>`;
    }
  }
});
