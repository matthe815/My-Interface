const readline = require('readline');
const EventEmitter = require('events');
const prompts = require('./Classes/PromptInfo.js');
var active = true;
var ask = true;

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pull up the box.
prompt();

// Handle prompts.
function prompt(forced=false)
{
    // If it's active, and asking or forced.
    if (ask && active || forced)
	{
	    // Ask a question.
        rl.question(prompts.getPrompt() + '\n', (answer) => {
            ask = true;
			
			// Handle arguments.
			answer = answer.split(" ");
			
			// Emit that question to the program.
            myEmitter.emit('command', answer[0], answer.slice(1,answer.length));
			
			// And ask again.
            prompt();
        });
	}
}

exports.setPrompt = function(text="Input a command") {
    prompts.setText(text);
	ask = true;
	prompt();
}

exports.promptInfo = prompts;

exports.getQuestion = function(forced=false) {
    prompt(forced);
}

exports.prompt = function() {
    prompt(true);
}

exports.isActive = function() {
    return active;
}

exports.getInterface = function() {
    return myEmitter;
};

exports.setActive = function(answer) {
  if (typeof answer == "boolean")
  {
      active = answer;
	  prompt();
  }
}