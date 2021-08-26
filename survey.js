const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/* rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
}); */

const questions = {
  1: "What's your name? Nicknames are also acceptable :)",
  2: "What's an activity you like doing?",
  3: "What do you listen to while doing that?",
  4: "Which meal is your favourite (eg: dinner, brunch, etc.)",
  5: "What's your favourite thing to eat for that meal?",
  6: "Which sport is your absolute favourite?",
  7: "What is your superpower? In a few words, tell us what you are amazing at!"
};

const answers = {
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
  7: ""
};


let i = 0;

const question = function () {
  if (i < 7) {
    rl.question(`${questions[i]}\n`, (answer) => {
      answers[i] = answer;
      i++;
    //console.log()
      question()
    });
  } 
else
{
  rl.close()

    setTimeout(() => console.log(`
    ${answers[1]} likes ${answers[2]} and listens to ${answers[3]}. 
    ${answers[1]} loves eating ${answers[5]} for favorite meal ${answers[4]}. 
    ${answers[1]} favorite sport is ${answers[5]}.
    ${answers[1]} superpower is ${answers[6]} `), 1500);
}
}
question()

    

