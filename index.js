const readline = require('readline');
const EventEmitter = require('events');
var active = true;
var ask = true;

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pull up the box.
getQuestion();

function getQuestion(forced=false)
{
    if (ask && active || forced)
	{
        rl.question('Input a command\n', (answer) => {
            ask = true;
		    console.log(ask + " " + active);
            myEmitter.emit('command', answer);
			getQuestion();
        });
	}
}

exports.getQuestion = function(forced=false) {
    getQuestion(forced);
}

exports.getInterface = function() {
    return myEmitter;
};

exports.setActive = function(answer) {
  if (typeof answer == "boolean")
  {
      active = answer;
      console.log("Set interface to: " + answer);
	  getQuestion();
  }
}