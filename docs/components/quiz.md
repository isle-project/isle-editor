# Quiz

A quiz component displaying a sequence of question components.

#### Example:

``` js
<Quiz
	count={2}
	questions={[
		<RangeQuestion
			question="Approximately in which range lie 99% of observations drawn from a standard normal distribution?"
			solution={[-3,3]}
		/>,
		<NumberQuestion
			question="What is the number PI - three digits after the period"
			solution={Math.PI}
			digits={3}
		/>
	]}
/>
```

[Open interactive preview](https://isle.heinz.cmu.edu/components/quiz/)

#### Options:

* __confidence__ | `boolean`: whether to display a Likert scale asking for the confidence of the user's answer. Default: `false`.
* __forceConfidence__ | `boolean`: controls whether a user has to supply a confidence level before moving to the next question. Default: `false`.
* __count__ | `number`: number of questions to include in the quiz. Default: `none`.
* __questions__ | `array (required)`: array of questions from which questions will be randomly selected. Default: `none`.
* __active__ | `boolean`: controls whether the timer for the quiz is active. Default: `true`.
* __duration__ | `number`: duration of the quiz; once time is up, the summary page will be displayed. Default: `none`.
* __skippable__ | `boolean`: controls whether questions in  the quiz are skippable. Default: `true`.
* __footerNodes__ | `array`: undefined. Default: `[]`.
* __nextLabel__ | `string`: undefined. Default: `'Next Question'`.
* __showFinishButton__ | `boolean`: undefined. Default: `false`.
* __finishLabel__ | `string`: undefined. Default: `'Finish Quiz'`.
* __onFinished__ | `function`: callback invoked when the quiz is finished and the results page is displayed. Default: `onFinished() {}`.
* __onSubmit__ | `function`: callback invoked when user submits an answer. Default: `onSubmit() {}`.
