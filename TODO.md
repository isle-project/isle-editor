TODO
====

For various to-do items related to the `ISLE` project.

Fall
=====
~~* Scaffolding for the labs. This would involve notes for the TAs about when to interject, what to teach, etc.~~
* Instructor notes within the instructor panel. Start out with the skeleton for the lab and have them fill it in.
* Dashboard: Have a repository with old TA notes
* Insert equation menu similar to table select
* **Calculator parser**
* Build mosiac plot
* LaTeX Equation in the explorer for the pdf
* Data transformation: generate a new column of transformed variables. 
* Minification and bundling times
* Ability to select multiple smoothing values / change them in real-time (similarly, for histogram ability to choose binwidth)
* Ability to set font family for reports
* "Undo" button for plots (investigate Plotly's capabilities in this regard)
* Include "Text to TeX" equation parser 
* Add React component for toggling between Text source / intermediate TeX representation / rendered equation. 
* Add option to display a line grid instead of a white page as sketchpad background
* Quiz component
  -   Multiple-Choice-Question: capture answer selections
* Update logging
  -   Log data table filtering and sorting operations
* Add "Request Help" button for TA to come (to feedback buttons)?
* Add save reminders in data explorer 
* Update labs to move question components instead of markdown editor for easier analyses
* Log actions in instructor bar


Priority
====
~~1. Instructor Notes~~
    A. Changed props to take array of what is needed
        Still have VoiceControl as a prop because we dont have it working
2. Parser for Calculator.
3. Instructor view

General
====
* Make dynamic titling for data-explorer
* When loading .txt files in the pre-amble, automatically convert it to a string

LONG-TERM
===
* Data Explorer Output Behavior 
* Mobile. `isle-app`. Mobile responsiveness
* Needed learning components:
    - ...
* Landing page before start of lesson showing the title, brief overview of content, learning objectives. Should include a way for users to clear the ISLE variables in localStorage.
* Many of the react components need properties for event handlers (onClick, onChange)...
* Data Explorer
   - how to handle missing data?
   - remove any R dependencies for mosaic
   - Boxplots categorized by more than one group (+ ability to reorder)
   - need a simple way to subset data, e.g. running an ANOVA only on a subset (say a few groups instead of all of them)
   - For barcharts, instead of counts, add an option to display percentages (also conditional %)
   - Display additional information when hovering over bars of barcharts (percentage, description, other variables?)
   - We have been deliberately loose with respect to terminology: z-test vs. t-test
* Gate
    This shall contain a **timed** parameter allowing scheduled gating
* Surveys
    - Handle ordered categories
    - Don't show invalid axis labels before answers are submitted
