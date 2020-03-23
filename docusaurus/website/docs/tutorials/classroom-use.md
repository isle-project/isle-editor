---
id: classroom-use
title: Using ISLE in the Classroom
sidebar_label: Classroom Use
---

## Running Labs and In-Class Activities

### Viewing Student Responses and Feedback

To see student responses to a question, click the **Answers** button for that question component. This displays all responses and a visualization (such as a bar chart or word cloud) of the answers. 

![See Answers](assets/images/view_student_answers.png)

You can change the information displayed in a number of ways:

* To see all student answers (including multiple submissions for the same student), click *Only include latest answer for any student*. To see only the latest answer, click *Include all answers for any student*.

* To see which students submitted each answer, click **Show Extended**. To hide these names again, click **Hide Extended**.

* To search for specific answers, use the **Search** bar at the bottom of the answer view. 

* To display only the answers for a specific cohort, use the cohorts drop-down menu at the top. The default is "All Cohorts".

* To see only the most recent answers, you can filter by time to show only the last hour, day, week, month, or year.

To see student feedback (if feedback buttons are provided), click **Responses** next to the feedback buttons.

### Tracking Student Progress

The bar under the **Answers** button displays student progress on that question. The proportion filled with *blue* tracks the proportion of active users who have submitted an answer to that question. The proportion filled with *orange* tracks the number of active users who are currently working on the question.

![Answers Progress](assets/images/answers_progress.png)

Tracking progress on all questions at once can be done with the **Instructor Panel**. To access the instructor panel, click the orange arrow on the right of the screen. 

![Panel](assets/gifs/instructor_panel.gif)

The instructor panel provides information about the lesson as a whole:

* The **Active Users** tab shows the users that are currently accessing the lab.

* The **Responses** tab allows you to track the progress of students on each question. It shows what fraction of active users have answered each question:

![Responses](assets/images/instructor_panel_responses.png)

For the **Responses** tab to be useful, you need to add `id` tags to each question, to provide a way to reference the questions. Here is an example of a question with an `id` tag:

    <MultipleChoiceQuestion
        id="mc1"
        solution={1}
        answers={[
            {content:"Quantitative", explanation:""},
            {content:"Qualitative", explanation:""}
        ]}
        question={<span>Course: <i>Course Respondent was Enrolled in</i></span>}
    />
    
