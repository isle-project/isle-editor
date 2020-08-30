---
id: classroom-use
title: Using ISLE in the Classroom
sidebar_label: Classroom Use
---

## Running Labs and In-Class Activities

### Viewing Student Responses and Feedback

To see student responses to a question, click the **Answers** button for that question component. This displays all responses and a visualization (such as a bar chart or word cloud) of the answers. 

![See Answers](/img/view_student_answers.png)

You can change the information displayed in a number of ways:

* To see all student answers (including multiple submissions for the same student), click *Only include latest answer for any student*. To see only the latest answer, click *Include all answers for any student*.

* To see which students submitted each answer, click **Show Extended**. To hide these names again, click **Hide Extended**.

* To search for specific answers, use the **Search** bar at the bottom of the answer view. 

* To display only the answers for a specific cohort, use the cohorts drop-down menu at the top. The default is "All Cohorts".

* To see only the most recent answers, you can filter by time to show only the last hour, day, week, month, or year.

To see student feedback (if feedback buttons are provided), click **Responses** next to the feedback buttons.

### Tracking Student Progress

The bar under the **Answers** button displays student progress on that question. The proportion filled with *blue* tracks the proportion of active users who have submitted an answer to that question. The proportion filled with *orange* tracks the number of active users who are currently working on the question.

![Answers Progress](/img/answers_progress.png)

For feedback buttons, red and green bars indicate the proportion of students who have indicated that they have understood the question or are confused.

Tracking progress on all questions at once can be done with the **Instructor Panel**. To access the instructor panel, click the orange arrow on the right of the screen. 

![Panel](/gifs/instructor_panel.gif)

The instructor panel provides information about the lesson as a whole:

* The **Active Users** tab shows the users that are currently accessing the lab.

* The **Activity** tab allows you to track the progress of students on each question. It shows what fraction of active users have answered each question:

![Activity](/img/instructor_panel_activity.png)

You may add custom `id` tags to each question so they will be used in the **Activity** tab. Here is an example of a question with an `id` tag:

```jsx
    <MultipleChoiceQuestion
        id="mc1"
        solution={1}
        answers={[
            {content:"Quantitative", explanation:""},
            {content:"Qualitative", explanation:""}
        ]}
        question={<span>Course: <i>Course Respondent was Enrolled in</i></span>}
    />
```

If no custom `id` is supplied, an automatically generated one will be used composed of the question type and a number representing the index of the respective instance in the list of all questions of said type in the lesson. 

:::caution
For lessons in which components are programmatically inserted, it is encouraged to assign `id` manually as the generated ones will not be deterministic in this case.
:::

* The **Responses** tab allows one to display all answers of a single student and compare them to the solutions, if supplied to the respective question components, or to the answers of another selected student.

![Responses](/img/instructor_panel_responses.png)

In case a student has submitted multiple answers for a given question, clicking on their answer allows you to cycle through their different answers. The time stamp of each submission is displayed in the upper-right corner of each answer.

* The **Active Users** tab displays the list of currently active users. The progress bar next to the user's profile picture displays the percentage of questions in the lesson the student has answered. Next to it are buttons to initiate a text or video chat with the student. When the user is interacting with an element on the page, a button with the identifier of the component the student has in focus in displayed to the right. Clicking on it will scroll the lesson to reveal the component into view. Last but not least, clicking on the thumbnail picture of a user jumps to the user's actions in the **Action Log**.

* The **Action Log** displays all actions by all users that were collected over time. They can be filtered by time or any of the other attributes via clicking on the respective value labels. The current selection of actions, optionally restricted further to only instructor, student (i.e., users enrolled in the class), or guest data can be exported optionally with artificially generated email addresses and names (when selecting "Anonymized") as a CSV or JSON file.

* The **Instructor Notes** tab contains a text editor for instructors and teaching assistants of the class to leave notes and instructions for each other.
