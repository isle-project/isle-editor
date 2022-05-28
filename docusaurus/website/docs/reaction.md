---
id: reaction 
title: Reaction
sidebar_label: Reaction
---

Shows different components depending on user actions.

## Options

* __actionID__ | `string (required)`: ID of component to watch. Default: `none`.
* __banner__ | `node`: custom message displayed if the user has not yet performed the action. Default: `none`.
* __show__ | `(object|function)`: hash table of components to display given the different responses (if no `key` matches the response, the value corresponding to the `default` key will be displayed if set) or a function that returns a component to display (sole argument of function is the latest result). Default: `{}`.


## Examples

```jsx live
<div>
	<NumberQuestion
		question="What is the first prime number?"
		id="question-with-reaction"
	/>
	<Reaction actionID="question-with-reaction" show={( answer ) => {
		if ( answer === 2 ) {
			return <p>Awesome, that was correct.</p>
		}
		return <p>You might want to review the following video on prime numbers:
			<VideoPlayer url="https://www.youtube.com/watch?v=mIStB5X4U8M" />
		</p>;
	}} />
</div>
``` 

