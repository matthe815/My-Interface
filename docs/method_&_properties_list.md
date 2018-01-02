Method & Properties List
======================================

Here is a list of methods & properties for you to use within your project!
It's all categorized by usage, so feel free to go to what you want.

Index
--------------------------------------

## PROPERTIES

### Interface Properties
[**INTERFACE**.prompts](#propPrompts)

[**INTERFACE**.options](#propOptions)

### Prompts Properties
[**PROMPTS**.active](#propActive)

## METHODS

### Prompting Information
[**INTERFACE**.prompt()](#prompt)

[**INTERFACE**.setPrompt(**STRING**)](#setprompt)

### Prompts
[**PROMPT**.getUseTimes()](#getUseTimes)

[**PROMPT**.getPrompt()](#getPrompt)

[**PROMPT**.setText(**STRING**)](#setText)

### Activity Information
[**INTERFACE**.setActive(**BOOLEAN**)](#setactive)

### propPrompts

`<Interface>.prompts` will return an Prompts object that is used for the prompting information.

POSSIBLE RETURNS:
Prompts object

### propOptions

`<Interface>.options` will return an InterfaceOptions object. This contains the information that is injected into the Interface object when you first create it.

POSSIBLE RETURNS:
InterfaceOptions object.

### propActive

`<Prompt>.propActive` will return whether or not the Interface is active.

POSSIBLE RETURNS:
`true`,
`false`

### prompt

`<Interface>.prompt()` will forcefully prompt the console (regardless of activity status).

POSSIBLE RETURNS:
NONE

### setPrompt

`<Interface>.setPrompt(<STRING>)` sets the current prompt text to the string value.

POSSIBLE RETURNS:
NONE

### isActive

`<Interface>.isActive()` will return a BOOLEAN. The value will depend on whether or not the prompting system is active.

POSSIBLE RETURNS:
`true`,
`false

### setActive

`<Interface>.setActive(\<BOOLEAN>)` will enable/disable the prompting system, depending on the argument.

POSSIBLE RETURNS:
NONE
