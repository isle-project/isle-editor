---
id: question-components
title: How to Use Questions
sidebar_label: Using Questions
---

ISLE provides a wide variety of question components that allow different types of input, from numeric values and free text, to matching and multiple choice. Complete documentation of the different question types can be found in the [ISLE docs](https://isledocs.com/docs/free-text-question) under **Question Components**. In this tutorial, we will cover basic uses of some of the common kinds. For more customization options, see the documentation for each question component.

### Free Text Questions

Let's begin by looking at [Free Text Questions](https://isledocs.com/docs/free-text-question), which provide a text box in which users type the answer. To include a free text question, we use the `<FreeTextQuestion/>` tag. Here is a simple example:

    <FreeTextQuestion
        question="What did you do over the summer?"
    />

This is displayed as

![Free Text](assets/images/free_text_question.png)

The `question` option in the `<FreeTextQuestion/>` tag is where you specify the question. Students then answer the question in the text box, and click the **Submit** button when done. If desired, you can also provide a *solution* to the question. Once students have submitted their own answer, they can view your solution by clicking **Show Solution**. For some question types, ISLE checks the submitted answers against the provided solution, but this is not done for Free Text Questions. Here's an example of a Free Text Question with a provided solution:

    <FreeTextQuestion 
        question="Provide a geometric interpretation for the fitted values in linear regression." 
        solution="Projection of the observed response onto the columnspace of the covariate matrix."
    />
    
Clicking **Show Solution** results in the following:

![Free Text Solution](assets/images/free_text_solution.png)

## Common Question Elements

Each question component includes a `question` option. Some components (like Free Text and Number Questions) allow you to provide an optional `solution`, while for other components like Match List Questions the solution is determined by the code to construct the answer choices. All question components also include the option of `feedback` buttons and question `hints`.

### `question`

Question text for all question components is provided in the same way: through the `question` option. We've already seen simple examples of this for the Free Text Question, but in some circumstances we might want question text to be more complex. For example, we might wish to include some of the text elements covered in the Text tutorial. However, this requires adding some syntax to the `question` option.

**Markdown**:

Markdown syntax can be used with the `question` option through an HTML `<Text/>` component with the `raw` option. This can also be used to create multiple chunks of text in the question. For example, the following Free Text Question includes several different Markdown examples:

    <FreeTextQuestion
        question={<Text raw={`We can include *emphasis*, 
        
        lists:
        * item 
        * item
    
        tables:
        | column 1 | column 2 |
        | --- | --- |
        | row 1 | row 1 |
    
        even images:
        ![histograms](https://isle.heinz.cmu.edu/Demo_histograms.png)`} />}
    />
    
![Question Text Markdown](assets/images/question_text_markdown.png)

### `feedback`

![Feedback](assets/images/feedback_buttons.png)

The three feedback buttons, shown above, allow students to give feedback on individual questions. The left-hand button allows students to note that they are confused on the question; the center button allows students to note that the question makes sense; and the right-hand button allows students to give specific feedback comments in more detail. These feedback buttons are controlled by the `feedback` option, which defaults to true. To turn off feedback for a question, set the `feedback` option to false. For example:

    <FreeTextQuestion
        question="What did you do over the summer?"
        feedback={false}
    />

### `hints`

For some questions you may wish to provide hints, which is done with the `hints` option. Here is an example of a Free Text Question with three hints:

    <FreeTextQuestion
        question="What is the difference between a z-test and a t-test? How does sample size affect this difference?"
        hints={["What null distribution does each test use?", "How does sample size affect degrees of freedom for the t-distribution?", "What happens when we increase degrees of freedom for a t-distribution?"]}
    />
    
![Hints](assets/gifs/hints.gif)

Each hint is entered between quotes, with commas separating the hints. The order in which the hints are entered is the order in which they appear when the **Get Hint** or **Next Hint** button is clicked. Note that the hints must be wrapped in `{[ ]}` in the tag.


## Some Other Question Components

### Number Questions

[Number Questions](https://isledocs.com/docs/number-question) provide a box in which students type a numerical answer. Here is an example of a Number Question, with a solution provided:

    <NumberQuestion
        question="If a non-degenerate univariate distribution has the same variance and standard deviation, what must be its variance?"
        solution={1}
    />

![Number Question](assets/images/number_question.png)

By default, the **Your answer** box will be 0 until the student enters their own answer. If a solution is provided, once the student submits their response the correct solution will be displayed and the student will receive a message indicating whether their answer is correct. To prevent students from seeing the solution when they submit, you can set the `provideFeedback` option to false:

    <NumberQuestion
        question="If a non-degenerate univariate distribution has the same variance and standard deviation, what must be its variance?"
        solution={1}
        provideFeedback={false}
    />

For checking whether solutions are correct, the `digits` option is also useful. `digits` specifies the number of digits for which the answer supplied by the student must match the solution to be considered correct (defaults to 3).

### Multiple Choice Questions

[Multiple Choice Questions](https://isledocs.com/docs/multiple-choice-question) provide a set of answers for the students to choose between. Here is an example of a multiple choice question:

    <MultipleChoiceQuestion
        question="What does ISLE stand for?"
        answers={[
            {content:"Nothing", explanation:""},
            {content:"Is Statistics Like Estimation?", explanation:""},
            {content:"Integrated Statistics Learning Environment", explanation:""},
            {content:"Information Seminar on Loud Explosions", explanation:""}
        ]}
        solution={2}
        provideFeedback="full"
    />

![Multiple Choice Question](assets/images/multiple_choice_question.png)

There is are a few things to note about the syntax for a multiple choice question. First, the `answers` choices must be provided in a very specific format. Each answer choice is written as `{content:"", explanation:""}` where the `content` is the displayed answer option, and the `explanation` is optional text visible after the question has been submitted to explain why the answer choice is correct or incorrect. The number of answer choices can be varied, but each option must be separated by a comma. Also, note that the list of answer choices is wrapped in `{[ ]}` in the tag.

The `solution` field specifies the correct answer choice(s). The choices are 0-indexed, so 0 referes to the first choice, 1 to the second, 2 to the third, and so on. If the solution is given just as a number (e.g., `solution={2}`) then the students can select only one answer. To allow students to select multiple answers ("choose all that apply"), the solution must be given in square brackets (e.g., `solution={[2]}` means that students can select multiple answers, but only the third option is correct). If multiple options are correct, all correct options should be given in square brackets and separated by commas (e.g., `solution={[0, 2]}` means that students can select multiple answers, and the first and third options are correct).

Feedback on student answers for Multiple Choice Questions can be provided either as `full`, `incremental`, or `none`, using the `provideFeedback` field (the default is `incremental`). If `full`, feedback including the correct answer is displayed after learners submit their answers; if `incremental`, feedback is only displayed for the selected answer; if `none`, no feedback is returned. Try out these different feedback options with the question above and see how they behave!

## Viewing Student Responses and Feedback

Once you have posted your lesson to ISLE and students are submitting answers to questions, you can view the student submissions and any feedback. To see student responses, open the ISLE lesson in your course dashboard, and click the **Answers** button for the question. To see student feedback, click the **Responses** button next to your feedback buttons for the questions (if you have included feedback buttons).

![Answers](assets/gifs/viewing_responses.gif)

## Putting Questions Together

### Pages

For reasons of space, you may wish to put a group of related questions into the same space:

![Pages Questions](assets/gifs/pages_questions.gif)

This would allow, for example, a group of questions to reference a single dataset or image without students having to repeatedly scroll up and down. This uses `<Pages>`, a custom tag that allows users to easily move between pages, with content on each page. The ISLE code to make the Pages shown in the gif above is

    <Pages>
        <div>
        <FreeTextQuestion
            question="Here is a free text question"
        />
        </div>

        <div>
        <NumberQuestion
            question="Here is a number question" 
        />
        </div>
    </Pages>
    
Everything we want in the Pages is contained within `<Pages> </Pages>`. Each page is contained within a `<div> </div>` that divides the questions. If we want, we can also put other ISLE content into a page, not just questions. Here is an example that includes some additional text, some LaTeX, and an image:

    <Pages>
        <div>
        Let $X \sim N(\mu, \sigma^2)$. Then $X$ has the following pdf:
        $$f(x) = \frac{1}{\sqrt{2\pi \sigma^2}} e^{-\frac{(x - \mu)^2}{2\sigma^2}} $$
        <NumberQuestion
            question="If the distribution has mean 0 and variance 1, what is the height of the pdf at x=0?"
        
        />
        </div>

        <div>
        Paul the octopus correctly predicted the outcome of all 7 of Germany's matches in the 2010 World Cup. Before each match, his handlers would put food into two containers adorned with the flags of the two countries. The container that Paul chose was his prediction for the match.

        ![Paul](https://cdn1.spiegel.de/images/image-110422-860_poster_16x9-ltgh-110422.jpg "Paul the octopus")

        <FreeTextQuestion
            question="Suppose you want to predict the outcome of all of Germany's matches in the 2022 World Cup, but unlike Paul you will make all your predictions before the tournament starts. If both you and Paul are guessing, do you have the same probability of getting all the outcomes correct?"
        />
    
        </div>
    </Pages>

### Question Forms

In other cases, you may wish to have several parts to a question that all get submitted together. For example, a question may require both a free text and a numeric input. This can be done by **Question Forms**, which allow two or more questions to share the same **Submit** button:

![Question Form](assets/images/question_form.png)

The code for the image shown here is

    <QuestionForm>
        <NumberQuestion
            question="What is 2+2?"
        />
        <FreeTextQuestion
            question="What is the meaning of life?"
        />    
    </QuestionForm>

