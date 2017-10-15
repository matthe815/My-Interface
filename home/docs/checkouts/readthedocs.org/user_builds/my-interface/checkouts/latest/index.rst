# Welcome to My Interface!
The easiest way to integrate Console Commands into your NodeJS project.

It's very simple to use, just install it with "npm install my-interface"
and add a few lines of code, and it will be fully functional.

View the example below to see how to get started.

## Example:
```js
const inter = require('my-interface');
const em = inter.getInterface();

em.on('command', (cmd) => {
    if (cmd == "ping")
	{
	    console.log("Pong!");
	}
});
```

The code above will case a simple command line interface that you can type "ping" into in order for it to reply pong.
Once you use the command, it will be ready for another command to be inputed.

You can ALSO use:

```js
inter.setActive(true/false);
```

to enable/disable the command system. And you can forcefully request another command using 

```js
inter.getQuestion(true)
```

"true" meaning the command will be forced, regardless if the system is active or not.

## You can view the full docs here:
https://my-interface.readthedocs.org/

## And you can join the Discord Server with:
https://discord.gg/QKwQdgX

Thanks!
