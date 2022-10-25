const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const { EventEmitter } = require("events");

module.exports = (questions, done = () => process.exit()) => {
  const answers = [];
  const firstQuestion = questions[0];
  const emitter = new EventEmitter();
  const questionAnswered = (answer) => {
    emitter.emit("answer", answer);
    answers.push(answer);
    if (answers.length < questions.length) {
      rl.question(questions[answers.length], questionAnswered);
    } else {
      emitter.emit("complete", answers);
      done(answers);
    }
  };

  rl.question(firstQuestion, questionAnswered);

  return emitter;
};
