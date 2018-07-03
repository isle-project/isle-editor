TODO
====
For various to-do items related to the `ISLE` project.

Summer
=====
* Font sizes and families.
~~* Scaffolding for the labs. This would involve notes for the TAs about when to interject, what to teach, etc.~~
* Instructor notes within the instructor panel. Start out with the skeleton for the lab and have them fill it in.
* Dashboard: Have a repository with old TA notes
* Insert equation menu similar to table select
* **Calculator parser**
* Build mosiac plot
* LaTeX Equation in the explorer for the pdf
* Data transformation: generate a new column of transformed variables. Beef it up.
* Minification and bundling times
* Images did not show up on .pdf
* Ability to select multiple smoothing values / change them in real-time (similarly, for histogram ability to choose binwidth)
* Ability to set font sizes and font family for reports
* "Undo" button for plots (investigate Plotly's capabilities in this regard)

Priotity
====
(To be done by summer 1 end)
~~1. Instructor Notes~~
    A. Changed props to take array of what is needed
        Still have VoiceControl as a prop because we dont have it working
3. `.pdf` poster export
    A. Change thte sizing of the pdf export
        What happens if we make it like printing a paper?
        http://pdfmake.org/#/gettingstarted
        Page dimensions
    B. Preamble for 
4. Parser.
5. Change icon of newline button and behavior such that clicking the button will work like "Enter" and insert the backslash at the end of the line
6. Instructor view
7. Restore the image side-by-side display


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
* Make data persistent so that students don't lose their progress once they refresh the page. Options: Storing in local storage, in the Mongo database on our server. Others?
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
* Add functionality to export Markdown reports as posters
