TODO
====
For various to-do items related to the `ISLE` project.

Summer
====
~~* Scaffolding for the labs. This would involve notes for the TAs about when to interject, what to teach, etc.~~
* Instructor notes within the instructor panel. Start out with the skeleton for the lab and have them fill it in.
* Dashboard: Have a repository with old TA notes
~~* Scatterplot: Add functionality to add smooth and linear regression at the same time~~
* `.pdf` poster export
* **Calculator parser**
* Build mosiac plot
* LaTeX Equation in the explorer for the pdf
* Data transformation: generate a new column of transformed variables. Beef it up.
* Minification and bundling times

Priotity
====
(To be done by summer 1 end)
~~1. Instructor Notes~~
~~2. Build "Tiles Popup" to select dimensions of inserted Markdown table~~
    A. Change file name to underscore
    B. onMouseOver event
        CSS styling of the table --> hover over for Rows and Cols
        Change the cursor
        No number input
        No button
3. `.pdf` poster export
4. Parser.

General
====
~~* Data tab in data-explorer~~
* Make dynamic titling for data-explorer
* When loading .txt files in the pre-amble, automatically convert it to a string

LONG-TERM
===
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
   - Should be able to change labels on graphs
* Gate
    This shall contain a **timed** parameter allowing scheduled gating
* Surveys
    - Handle ordered categories
    - Don't show invalid axis labels before answers are submitted
* Add functionality to export Markdown reports as posters
