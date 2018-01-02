const readline = require('readline');
const EventEmitter = require('events');
const InterfaceOptions = require('./InterfaceOptions');
const Prompts = require('./PromptInfo');
var ask = true;

class Interface extends EventEmitter {
	constructor(args = true) {
		super();
		
		// The line reader.
		this._lineReader = readline.createInterface({
			input: process.stdin,
			output: process.stdout
		});

		// Set up the default variables.
		this.options = new InterfaceOptions(args);
		this.prompts = new Prompts();
		
		// Pull up the box.
		this.prompt();
	}
	
	// Handle prompts.
	prompt()
	{
		// If it's active, and asking or forced.
		if (ask && this.prompts.active)
		{
			// Ask a question.
			this._lineReader.question(this.prompts.getPrompt() + '\n', (answer) => {
				ask = true;
			
				// Handle arguments.
				var answers = answer.split(" ");
			
				// Emit that question to the program.
				this.emit('command', this.options.arguments ? answer : answers[0], answer.slice(1,answer.length));
			
				// And ask again.
				this.prompt();
			});
		}
	}
	
	setPrompt(text="Input a command") {
		this.prompts.setText(text);
		ask = true;
		this.prompt();
	}
	
	setActive(answer) {
		if (typeof answer == "boolean") return;
		this.prompts.active = answer;
		this.prompt();
	}
}

module.exports = Interface;