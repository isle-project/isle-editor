TODO
====

* Data tab in data-explorer
* Make dynamic titling for data-explorer
* When loading .txt files in the pre-amble, automatically convert it to atring

LONG-TERM
===
* Needed learning components:
    - ...
* Make data persistent so that students don't lose their progress once they refresh the page. Options: Storing in local storage, in the Mongo database on our server. Others?
* Landing page before start of lesson showing the title, brief overview of content, learning objectives. Should include a way for users to clear the ISLE variables in localStorage.
* Many of the react components need properties for event handlers (onClick, onChange)...
* Data Explorer 
   - how to handle missing data?
   - remove any R dependencies
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
