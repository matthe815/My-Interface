var fs = require("fs");
var data = {"text" : "Input a command", "inputNumber" : 0};

class PromptInfo {}

exports.PromptInfo = function(defaultText="Input a command")
{
    // Set the new text.
    data["text"] = defaultText;
	
	// Save the data internally.
	fs.writeFileSync("./data/savedData.json", JSON.stringify(data));
}

exports.getUseTimes = function()
{
    // Return the amount of uses.
    return data["inputNumber"];
}

exports.getPrompt = function()
{
    // Return the current text.
    return data["text"];
}

exports.setText = function(newText)
{
    // Set the new text.
    data["text"] = newText;
	
	// Save the data internally.
	fs.writeFileSync("data/savedData.json", JSON.stringify(data));
}