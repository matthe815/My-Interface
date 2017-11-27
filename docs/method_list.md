Method List
======================================

Here is a list of methods for you to use within your project!
It's all categorized by usage, so feel free to go to what you want.

Index
--------------------------------------

### Prompting Information
[**INTERFACE**.prompt()](#prompt)

[**INTERFACE**.getQuestion(**BOOLEAN**)](#getquestion) ***`DEPRECATED`***

[**INTERFACE**.setPrompt(**STRING**)](#setprompt)


### Activity Information
[**INTERFACE**.isActive()](#isactive)

[**INTERFACE**.setActive(**BOOLEAN**)](#setactive)


### Interface Information.
[**INTERFACE_Module**.getInferface()](#getinterface)


### prompt

`\<Interface>.prompt()` will forcefully prompt the console (regardless of activity status).

POSSIBLE RETURNS:
NONE

### getQuestion

`\<Interface>.getQuestion(\<BOOLEAN>)` will check the activity status (if argument is false) and prompt the console if it's active.

***`DEPRECATED`***:
This is deprecated as it has been replaced with `prompt`, which doesn't require an argument, and therefore makes it more useful.
It's also shorter and more understandable.

POSSIBLE RETURNS:
NONE

### setPrompt

`\<Interface>.setPrompt(\<STRING>)` sets the current prompt text to the string value.

POSSIBLE RETURNS:
NONE

### isActive

`\<Interface>.isActive()` will return a BOOLEAN. The value will depend on whether or not the prompting system is active.

POSSIBLE RETURNS:
`true`,
`false

### setActive

`\<Interface>.setActive(\<BOOLEAN>)` will enable/disable the prompting system, depending on the argument.

POSSIBLE RETURNS:
NONE

### getInterface

`\<Module>.getInferface()` returns the currently active Interface Module. This is required to use most of the functions.

POSSIBLE RETURNS:
**INTERFACE**
