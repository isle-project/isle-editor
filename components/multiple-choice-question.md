# Multiple Choice Question

An ISLE component that renders a multiple choice question. It supports the case where the learner has to select a single answer and when there might be multiple correct answers and all correct ones must be picked.

#### Example:

``` js
<MultipleChoiceQuestion
    solution={1}
    answers={[
        {content:"There's a 0.7% chance that average birthweights are the same among smoking and non-smoking mothers", explanation:""},
        {content:"If the null were true, the probability of observing this large a difference in average birthweights in our data is 0.7%", explanation:""},
        {content:"The probability that the confidence interval does not contain the true mean difference is 0.7%", explanation:""},
        {content:"Average birthweights are 0.7% higher among babies born to non-smoking mothers", explanation:""}
    ]}
    question="4. Which of the following is an accurate interpretation of the p-value?"
/>
```

#### Options:

* __question__: the question displayed at the top of the multiple choice component.
* __solution__: a `number` denoting which answer is correct or an `Array` of the correct answer numbers in case the learner should be able to select multiple answers
* __answers__: an `Array` of answer objects. Each answer should be an object with `content` and `explanation` fields, which denote the displayed answer option and an explanation visible after the question has been submitted to explain why the answer is correct or incorrect. 
* __disabled__: `boolean` controlling whether the question is disabled. Default: `false`.
* __provideFeedback__: `boolean` indicating whether feedback including the correct answer should be displayed after learners submit their answers. Default: `true`. 
* __onSubmit__: a callback `function` invoked after an answer is submitted. Default: `null`.
