TODO
====

For various to-do items related to the `ISLE` project.

Fall
=====
* Dashboard: Have a repository with old TA notes
* Insert equation menu similar to table select
* Build mosaic plot
* LaTeX Equation in the explorer for the pdf
* Ability to select multiple smoothing values / change them in real-time (similarly, for histogram ability to choose binwidth)
* Ability to set font family for reports
* "Undo" button for plots (investigate Plotly's capabilities in this regard)
* Include "Text to TeX" equation parser 
* Add React component for toggling between Text source / intermediate TeX representation / rendered equation. 
* Add option to display a line grid instead of a white page as sketchpad background
* Add save reminders in data explorer 
* Log actions in instructor bar

Priority
====
3. Instructor view

General
====
* Make dynamic titling for data-explorer

LONG-TERM
===
* Data Explorer Output Behavior 
* Mobile. `isle-app`. Mobile responsiveness
* Needed learning components:   
    - ...
* Landing page before start of lesson showing the title, brief overview of content, learning objectives. Should include a way for users to clear the ISLE variables in localStorage.
* Many of the react components need properties for event handlers (onClick, onChange)...
* Data Explorer
   - remove any R dependencies for mosaic
   - Boxplots categorized by more than one group (+ ability to reorder)
   - need a simple way to subset data, e.g. running an ANOVA only on a subset (say a few groups instead of all of them)
   - For barcharts, instead of counts, add an option to display percentages (also conditional %)
   - Display additional information when hovering over bars of barcharts (percentage, description, other variables?)
   - We have been deliberately loose with respect to terminology: z-test vs. t-test
   - Refactor two-way contingency tables? 
   - Show we display both relative and absolute frequencies in tables?
* Surveys
    - Handle ordered categories
    - Don't show invalid axis labels before answers are submitted
