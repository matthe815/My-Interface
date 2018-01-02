var fs = require("fs");

class PromptInfo {
	
	constructor()
	{
		this.text = "Input a command";
		this.usages = 0;
		this.active = true;
	}

	getUseTimes()
	{
		// Return the amount of uses.
		return this.usages;
	}
	
	getPrompt()
	{
		// Return the current text.
		return this.text;
	}
	
	setText(text)
	{
		this.text = text;
		fs.writeFileSync("data/savedData.json", JSON.stringify({ "text" : this.text }));
	}
	
}

module.exports = PromptInfo;