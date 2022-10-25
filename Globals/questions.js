const questions = [
  "What is your name?",
  "What would you rather be doing?",
  "What is your preferred programming language",
];

const ask = (index = 0) => {
  process.stdout.write(`\n${questions[index]}`);
  process.stdout.write(" > ");
};

ask();

const answers = [];

process.stdin.on("data", (data) => {
  answers.push(data);
  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

process.on("exit", () => {
  questions.forEach((question, index) => {
    process.stdout.write(`\n${question} => ${answers[index]}`);
  });
});
