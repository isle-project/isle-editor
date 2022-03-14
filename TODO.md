TODO
====

* Port equation menu from czi-prosemirror?
* Build mosaic plot
* Support LaTeX Equation in exported PDFs
* Ability to select multiple smoothing values / change them in real-time (similarly, for histogram ability to choose binwidth)
* Ability to set font family for reports
* "Undo" button for plots (investigate Plotly's capabilities in this regard)
* Include "Text to TeX" equation parser 
* Add React component for toggling between Text source / intermediate TeX representation / rendered equation. 
* Add option to display a line grid instead of a white page as sketchpad background
* Add save reminders in data explorer 
* Log actions in instructor bar
* Consider adding vertical gridlines to plots
* Automatic email reminders for uncompleted labs
* Allow expressions in number question input fields
* Mobile responsiveness
* Remove any R dependencies for the mosaic plot
* Display additional information when hovering over bars of barcharts (percentage, description, other variables?)

Completion for components in lessons

- Completion Status
  -   Lesson ID
  -   Component ID
  -   Viewed / Interacted / Completed

cmetric: [name, all|exclusions|inclusions, rule, time-filter, type]

type weigthing vector

type=#|missing
type=boolean

rules: binary proportion (0/1), binary trimmed proportion, thresholded proportion, average, weighted average, average with exclusions, median, ...

- Attach IDs to components in build step
