# Welcome to My Interface!
The easiest way to integrate Console Commands into your NodeJS project.

It's very simple to use, just install it with "npm install my-interface"
and add a few lines of code, and it will be fully functional.

View the example below to see how to get started.

## Example:
```js
const inter = require('my-interface');
const em = inter.getInterface();

em.on('command', (cmd, args) => {
    if (cmd == "ping")
	{
	    console.log("Pong!");
	}
});
```

Note: 0.0.3 added arguments to the mix, so keep that in mind.

The code above will case a simple command line interface that you can type "ping" into in order for it to reply pong.
Once you use the command, it will be ready for another command to be inputed.

You can ALSO use:

```js
inter.setActive(true/false);
```

to enable/disable the command system. And you can forcefully request another command using 

```js
inter.prompt()
```

Note: inter.getQuestion(isForced) has been changed to inter.prompt() in version 0.0.3, getQuestion will still work for a little while however.

"true" meaning the command will be forced, regardless if the system is active or not.

Note: This no longer applies in version 0.0.3, it will always activate when called.

Version 0.0.3 has introduced the ability to change the prompt text, and added arguments that are passed along in an array.
You can change the prompt text by doing:

```js
inter.setPrompt("Text goes here.");
```

This will internally save the information you've told it to change.

If you want to check if the system is active, you can do:

```js
inter.isActive()
```

And it will return true/false depending on the active status.


## Notes:
Prompt Information storage has been slightly modified since 0.0.5.

## You can view the full docs here:
https://my-interface.readthedocs.org/

## And you can join the Discord Server with:
https://discord.gg/QKwQdgX

Thanks!
