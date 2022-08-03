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

Add commas when formatting numbers in model outputs (e.g., 1230091131 -> 1,230,091,131)

add weight property to answer choices (non-negative, at least one correct answer weight is
positive)

TODOs:

- Reshape the session data (add id, component to session data)
  id, component type, value separate (as object, no JSON.stringify in components necessary)
- Logging of actions
  - Completeness
- focus hook to compute time in component
higher order component model for injecting component type etc.

- migration: keep old endpoints for backwards compatibility, but reshape database session data and add new endpoints


Data Explorer:

-   Under "Models," there should be a option for "Split Data" that opens a new window that allows you to specify the proportion of data to be put in the training set, with maybe a second data entry for setting the random number seed (so we can have reproducible results). A button at the bottom would say "Split" and when this is clicked, a new column is generated saying "Train" and "Test." If someone does this multiple times, this one column gets overwritten...no data_split1, data_split2, etc.
-   All models should have a click box that says "Apply to Training Data Only" (or something like that); all models should generate a column of predicted output. (This would be true even if we don't click on the button...there should be a generated column that includes predictions for all training (i.e., all) data.)
-   Regression models should have test-set MSE output if the training data button is clicked, otherwise the all-data MSE should be output.
Classification models should have an additional field for mapping predictions (probabilities for class 1) to actual classifications. So a classification model should lead to the generation of a predicted probability column *and* a predicted class column.
-   Allow for generation of confusion matrices (which should be a separate thing and which should provide multiple outputs...the matrix, the MCR, etc.); and
ROC curves (which need the probabilities for the test set, and which should appear as a curve with associated metrics: the AUC, and which thresholds minimize the MCR and Youden's J).
-   Variable Selection: 

    -   First, there should be a button that allows one to simply include all variables that are *not* the response variable in the predictor field, so that we don't need to go through and click on every single predictor variable we want.

    -   If the number of selected predictor variables is < 25 for a multiple linear regression model, or < 10 for a multiple logistic regression model, we should be able to perform best-subset selection. The input to BSS should include a click-box that asks for the desired metric to minimize: AIC or BIC. The output from BSS should be a plot that shows the AIC/BIC score (possibly in log-space), and a list of the variables included in the best model.
    
    -   forward- and backward-stepwise selection.

    -   For linear and logistic regression, perhaps we can include a click-button (default off) for generating variance-inflation factors for the model.
    
-   Interface:

    -   simple linear regression refers to "explanatory variable" and all other models refer to "predictor(s)." We should change this to "predictor".

    -   logistic regression should be grouped with the inferential models: simple linear regression / multiple linear regression / logistic regression / lasso

    -   As we add predictors to an RF model, the default value for # of predictors to check at each split should change to floor(sqrt(# pred)) rather than staying at 1
