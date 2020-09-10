---
id: quiz 
title: Quiz
sidebar_label: Quiz
---

A quiz component displaying a sequence of question components.

## Example

```jsx live
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

## Options

* __confidence__ | `boolean`: whether to display a Likert scale asking for the confidence of the user's answer. Default: `false`.
* __forceConfidence__ | `boolean`: controls whether a user has to supply a confidence level before moving to the next question. Default: `false`.
* __count__ | `number`: number of questions to include in the quiz. Default: `none`.
* __questions__ | `array (required)`: array of questions from which questions will be randomly selected. Default: `none`.
* __active__ | `boolean`: controls whether the timer for the quiz is active. Default: `true`.
* __duration__ | `number`: duration of the quiz (in minutes); once time is up, the summary page will be displayed. Default: `none`.
* __skippable__ | `boolean`: controls whether questions in  the quiz are skippable. Default: `true`.
* __footerNodes__ | `array`: array of nodes to be displayed in the footer of each question. Default: `[]`.
* __nextLabel__ | `string`: label of button to advance to next question. Default: `none`.
* __provideFeedback__ | `boolean`: controls whether to show students feedback on correctness of their answers after quiz completion. Default: `true`.
* __showFinishButton__ | `boolean`: controls whether to display button to finish quiz and jump directly to results page. Default: `false`.
* __finishLabel__ | `string`: label of button to finish quiz. Default: `none`.
* __downloadButton__ | `boolean`: controls whether to display a button for downloading the responses. Default: `true`.
* __onFinished__ | `function`: callback invoked when the quiz is finished and the results page is displayed. Default: `onFinished() {}`.
* __onSubmit__ | `function`: callback invoked when user submits an answer. Default: `onSubmit() {}`.
