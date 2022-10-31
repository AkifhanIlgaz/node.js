const questions = [
  "What is your name?",
  "What would you rather be doing?",
  "What is your preferred programming language?",
];

const answers = [];

const ask = (questionIndex = 0) => {
  process.stdout.write(`${questions[questionIndex]}\n> `);
};

ask();

process.stdin.on("data", (data) => {
  answers.push(data.toString().trim());
  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

process.on("exit", () => {
  console.log(
    `Go ${answers[1]} ${answers[0]}. You can write ${answers[2]} later.`
  );
});
