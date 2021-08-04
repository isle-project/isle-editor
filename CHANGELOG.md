# Changelog

## [v0.76.3](https://github.com/isle-project/isle-editor/releases/tag/v0.76.3) (2021-08-04)

This release comes with various enhancements and bug fixes while improving the usability of the random number generator tools in the data explorer (under `Transform -> Generate Random Data`).

It is now possible to generate multiple columns of random variates via the `:` operator to delineate a range. For example,

![image](https://user-images.githubusercontent.com/1913638/128200965-44c00107-8bb4-41fa-acb1-1e26c1e90c2f.png)

will create five new columns called `Z1`, `Z2`, `Z3`, `Z4`, and `Z5` with draws from the respective t distribution to the data table. The formula transformation tool also allows one to use such ranges, making it easy for example to calculate the row sums of `Z1` to `Z5` via `sum( datum.Z1:datum.Z5 )`.

**Implemented enhancements:**

- request some Panel functionalities in SelectQuestionMatrix [\#2257](https://github.com/isle-project/isle-editor/issues/2257)
- suggestion for different placement of "right/wrong" flags [\#2252](https://github.com/isle-project/isle-editor/issues/2252)
- Model Diagnostics: Histogram of Residuals [\#2236](https://github.com/isle-project/isle-editor/issues/2236)
- Interval Plots [\#2235](https://github.com/isle-project/isle-editor/issues/2235)
- Faceted plots [\#2228](https://github.com/isle-project/isle-editor/issues/2228)
- "select submission to view" jumps back to top upon re-opening [\#2008](https://github.com/isle-project/isle-editor/issues/2008)
- Allow re-submissions for numeric questions [\#1321](https://github.com/isle-project/isle-editor/issues/1321)

**Fixed bugs:**

- \[Bug\]: Diagnostic Plots for Simple Linear Regression not generated [\#2260](https://github.com/isle-project/isle-editor/issues/2260)
- \[bug\] vertical scale on just one histogram of panel [\#2088](https://github.com/isle-project/isle-editor/issues/2088)
- autopopup is sometimes blank [\#1701](https://github.com/isle-project/isle-editor/issues/1701)
- numbers of ordered list render in pdf as all "1"s [\#1351](https://github.com/isle-project/isle-editor/issues/1351)

## [v0.76.2](https://github.com/isle-project/isle-editor/releases/tag/v0.76.2) (2021-07-21)

This patch release fixes the rendering of several LaTeX equation tags, adds a property to govern whether a minimizable panel should be collapsed by default, and comes with other small improvements.

**Fixed bugs:**

- \[Bug\]: \bm no longer parsing in LaTeX [\#2197](https://github.com/isle-project/isle-editor/issues/2197)

## [v0.76.1](https://github.com/isle-project/isle-editor/releases/tag/v0.76.1) (2021-07-02)

This patch release further improves accessibility of lessons, including by usage of the MathJax library for the rendering of LaTeX equations. It also adds further hotkeys for usage of the text editor and other components.

**Implemented enhancements:**

- \[bug\]: "minimize" tooltip is cut off by edge of browser [\#2171](https://github.com/isle-project/isle-editor/issues/2171)
- \[typo\]: Toolbox -\> Tests:  "chi square"  [\#2137](https://github.com/isle-project/isle-editor/issues/2137)

## [v0.76.0](https://github.com/isle-project/isle-editor/releases/tag/v0.76.0) (2021-06-22)

This release fixes various translations, improves accessibility of lessons, and introduces various new hotkeys for statusbar and toolbar elements. For the data explorer, the __history__ tab is now visible by default and works for all generated output.

Starting with this release, ISLE lessons use the newest version of the socket.io client, __which requires that the ISLE server backend is running the latest version for lessons built from this release to work properly.__

**Fixed bugs:**

- Pages -\> component wizard -\> pagination:  menu is missing "both" [\#2123](https://github.com/isle-project/isle-editor/issues/2123)
- typo in LearnDiscreteCLT [\#2115](https://github.com/isle-project/isle-editor/issues/2115)
- \[bug\]: In Answers-\>Show Extended, scrolling goes haywire [\#2090](https://github.com/isle-project/isle-editor/issues/2090)

## [v0.75.8](https://github.com/isle-project/isle-editor/releases/tag/v0.75.8) (2021-06-03)

This release fixes several issues concerning the Markdown parsing of ISLE lesson code, bugs in the data explorer, and comes with translations for multiple additional languages. It also improves accessibility of lessons by more ergonomic handling of user focus and additional hotkeys for interface elements. Last but not least, it adds a new standalone `<SummaryStatistics />` component that allows one to insert any table with summary statistics outside of the data explorer:

![image](https://user-images.githubusercontent.com/1913638/120670335-4f386d00-c45e-11eb-8129-5c6c529c5ac5.png)


**Fixed bugs:**

- legend of labeled scatterplot doesn't show up until full-screen [\#2068](https://github.com/isle-project/isle-editor/issues/2068)
- diagonal line on qqplot wrong or missing with transformed data [\#2067](https://github.com/isle-project/isle-editor/issues/2067)
- toolbox doesn't appear in editor [\#2034](https://github.com/isle-project/isle-editor/issues/2034)

## [v0.75.7](https://github.com/isle-project/isle-editor/releases/tag/v0.75.7) (2021-05-18)

This patch release comes with the following improvements:

-   Fixes kmeans clustering results in case of missing data
-   Changes position of fullscreen button to not overlap with tutorial button in presentation mode
-   Handle non-numeric binary arrays properly in `<LearnConfidenceCoverageSample />` widget
-   Upgrade to new `stdlib` ndarray API for logistic and LASSO regression
-   Fixes change handler of input range in data table
-   Log interactions with `<IFrame />` component
-   Fixes various property types and property descriptions

## [v0.75.5](https://github.com/isle-project/isle-editor/releases/tag/v0.75.5) (2021-05-07)

This update comes with several bug fixes, including updates to the `<Map />` component; it also introduces a new editable text component, which renders text that be changed on the fly by instructors.
It also comes with a patch that fixes restoring original data from restricted data sets when using a shared custom data explorer.

## [v0.75.3](https://github.com/isle-project/isle-editor/releases/tag/v0.75.3) (2021-04-09)

## [v0.75.2](https://github.com/isle-project/isle-editor/releases/tag/v0.75.2) (2021-04-08)

Under `Help -> Release Notes`, one can now retrieve release notes documenting the changes that are introduced with a new editor release. In addition, the release comes with a new checkbox on the export page to indicate whether uploaded lessons should support offline access (previously enabled by default). One might want to uncheck this option when one expects to (repeatedly) change the lesson after users have already accessed it.

This update also comes with the following improvements:
- better feedback display for the `<SelectQuestionMatrix />`
- ability to customize the display of p-value labels for the `<LearnMeanTest />` and `<LearnProportionTest />` components

**Most importantly, it comes with a fix for a severe performance regression causing freezes due to infinite re-renders of the toolbar component, which occurred when customizing the toolbar via the preamble. Please update the editor as soon as possible in case you have been running into this issue.**

## [v0.75.1](https://github.com/isle-project/isle-editor/releases/tag/v0.75.1) (2021-03-30)

This update comes with small performance improvements, a new loading screen for the editor, and refactored survey components. The survey components (`FreeTextSurvey`, `NumberSurvey`, `MultipleChoiceSurvey`, and `ProportionsSurvey`) now come with a pause button that allows instructors to control whether students are able to submit answers.

In addition, the release comes with the following changes:

- Fixes installation of packages from `npm` in editor on Windows
- Remove gates from survey components, i.e. make them visible by default also for not logged-in users
- Ensures maximum observation is correctly displayed in a quantile-quantile plot
- For the `Sketchpad`, the right-click copy button is not displayed on tablets anymore; on other devices, it correctly closes when left-clicking outside the context menu
- In the `Sketchpad`, input buttons for the brush and font sizes have been replaced by dropdown menus to improve the experience on tablets and other touch devices.

## [v0.75.0](https://github.com/isle-project/isle-editor/releases/tag/v0.75.0) (2021-03-15)

This release comes with performance improvements for the editor, a new integrated tutorial for the editor and component wizards, and a context menu option accessible via right click for components inside the preview pane:

![image](https://user-images.githubusercontent.com/1913638/111175346-b856c580-857e-11eb-9edd-6ba021417e6b.png)

It is now possible to apply custom styles for standard HTML tags such as `p` to or `h1` to all elements of that types directly from the custom styling widget:

![image](https://user-images.githubusercontent.com/1913638/111193106-31124d80-8590-11eb-807e-644f243d81ee.png)

The update also comes with the following changes:
-   Increases the space reserved for bar charts and histograms in the fullscreen view of the response visualizer to ensure that the plot remains visible on smaller screen resolutions and/or long answers
-   Ensures that links in sketchpad PDFs look correctly while still being clickable

## [v0.74.9](https://github.com/isle-project/isle-editor/releases/tag/v0.74.9) (2021-03-01)

This release improves error handling in the editor: Incorrect or missing property values for components are type-checked and error messages are displayed on a component-level instead of either the entire lesson not rendering or in the worst case the editor freezing.

## [v0.74.8](https://github.com/isle-project/isle-editor/releases/tag/v0.74.8) (2021-02-22)

This small release comes with the following improvements:

- New feature that allows copying of outputs in the data explorer to the user's clipboard when clicking on the "Drag" button (e.g., for when having a text editor far away in the lesson such that dragging does not suffice)
- Starts animations for typewriter and scrolling texts only once elements enter the user's viewport
- Performance and load-time improvements of data explorer
- Fixes a bug in the positioning of the toolbox that could render it invisible
- In the editor, quick suggestions in the editor are now by default disabled. It is possible to enable them as well as a minimap display via the settings page.

## [v0.74.7](https://github.com/isle-project/isle-editor/releases/tag/v0.74.7) (2021-02-15)

This update contains the following changes & patches:

- Refactors sticky notes (insertable via right-click on a live lesson) so that they are now resizable
- Fixes behavior of the revealer for students enrolled in a cohort when content is revealed to everyone
- Use start & end values when choosing a manual number of bins for a histogram
- Deprecates ShapedImage, subsuming the functionality to Image with a new `inline` property
- Avoid sudden re-renders of sketchpad when advancing slides, which should prevent from pages being erroneously displayed upside-down



**Implemented enhancements:**

- Resize sticky notes  [\#1651](https://github.com/isle-project/isle-editor/issues/1651)
- Field for private instructor information [\#1288](https://github.com/isle-project/isle-editor/issues/1288)

**Fixed bugs:**

- return of editor bug: top bar disappears and space appears at bottom, when running output in preview [\#1700](https://github.com/isle-project/isle-editor/issues/1700)
- Cannot jump to end in editor history view [\#1694](https://github.com/isle-project/isle-editor/issues/1694)
- in report editor, underline doesn't get new text color \(but in pdf it does\) [\#1673](https://github.com/isle-project/isle-editor/issues/1673)

## [v0.74.6](https://github.com/isle-project/isle-editor/releases/tag/v0.74.6) (2021-01-31)

## [v0.74.5](https://github.com/isle-project/isle-editor/releases/tag/v0.74.5) (2021-01-31)

Most importantly, this release contains a series of bug fixes:

- fixes dragging of elements in the preview pane of the editor on Windows operating systems
- restores click behavior for elements on draggable windows such as the calculator or chats on iOS
- fixes an error which caused the data explorer to throw an error when running clustering models
- fixes behavior of multiple-choice surveys with no `id` attribute

It also comes with the following usability improvements:

- the entire "Download PDF" button of the sketchpad now triggers a download of the notes
- adds a new `mode` option called `cohort` to the text editor, which allows students from any given cohort to work with each other
- enlarges the drop area when positioning elements using the preview pane of the editor
- adds a toggle button to the component wizards that allows one to selectively show either all active or all inactive properties for the component



## [v0.74.4](https://github.com/isle-project/isle-editor/releases/tag/v0.74.4) (2021-01-31)

**Fixed bugs:**

- bottom of "select component" menu gets cut off when searching [\#1662](https://github.com/isle-project/isle-editor/issues/1662)
- explanation text cut off by right edge of editor window [\#1661](https://github.com/isle-project/isle-editor/issues/1661)

## [v0.74.3](https://github.com/isle-project/isle-editor/releases/tag/v0.74.3) (2021-01-22)

## [v0.74.0](https://github.com/isle-project/isle-editor/releases/tag/v0.74.0) (2021-01-22)

This release contains several performance improvements for the data explorer, especially when used with large datasets, and fixes a bunch of bugs. Solved issues include identifiers for revealer components not being persistent, the residuals vs. fitted values plot of linear regression, handling of empty data in a custom data explorer, and translations not being loaded correctly or being missing. 

The new `<Language />` tag allows one to include several translations of a lesson. The currently selected language will determine which translations are shown.

![image](https://user-images.githubusercontent.com/1913638/105536005-add62900-5cbd-11eb-95a3-d48a8c159191.png)

Lastly, the release comes with several improvements and fixes for the new text document history view.


**Implemented enhancements:**

- request ability to show navigation at both top and bottom of questions panel [\#1538](https://github.com/isle-project/isle-editor/issues/1538)

## [v0.73.1](https://github.com/isle-project/isle-editor/releases/tag/v0.73.1) (2021-01-15)

## [v0.73.0](https://github.com/isle-project/isle-editor/releases/tag/v0.73.0) (2021-01-15)

This release contains a refactored text editor component, which saves documents in the cloud, alongside a document history tab for the editor, which allows one to retrace the origin of the document (see screenshot below).

![image](https://user-images.githubusercontent.com/1913638/104691386-22b0ce00-56d4-11eb-92a7-49312175636d.png)

The new release also comes with a redesigned and fleshed out system for leaving persistent sticky notes when right-clicking inside a lesson. Last but not least, lessons now contain a short guide giving an overview of the various interface elements, which can be triggered by clicking on the respective button in the lower-right corner of a lesson.

## [v0.72.3](https://github.com/isle-project/isle-editor/releases/tag/v0.72.3) (2020-12-15)

## [v0.72.2](https://github.com/isle-project/isle-editor/releases/tag/v0.72.2) (2020-12-15)

## [v0.72.1](https://github.com/isle-project/isle-editor/releases/tag/v0.72.1) (2020-12-15)

This release fixes a bug that caused progress calculations to break for lessons containing match list questions and image questions due to re-assigned ids. It also updates the login behavior to support users who have enabled two-factor authentication. Finally, it comes with translations for several more languages.

## [v0.72.0](https://github.com/isle-project/isle-editor/releases/tag/v0.72.0) (2020-12-04)

This release adds a new GUI for styling components and offers quite significant performance improvements of the editor pane. It also enables users to drag elements to new positions inside the preview pane. The styling GUI can be accessed by a new color palette symbol that shows when selecting an component in the editor pane or by hovering over an element in the preview pane, see below screenshot.

![palette](https://user-images.githubusercontent.com/1913638/101127258-30e6d700-35cb-11eb-89d6-5a5505f424f6.png)


**Implemented enhancements:**

- request "visibility setting" on Upload Lesson in Editor [\#1478](https://github.com/isle-project/isle-editor/issues/1478)

**Fixed bugs:**

- 1 lesson only is unresponsive [\#1504](https://github.com/isle-project/isle-editor/issues/1504)

## [v0.71.6](https://github.com/isle-project/isle-editor/releases/tag/v0.71.6) (2020-11-14)

This patch fixes two a bug in the one-sample proportion and prevents the two-sample mean / proportion tests from crashing the website when using a grouping variable with only one level, instead printing an error message in the output pane.

## [v0.71.5](https://github.com/isle-project/isle-editor/releases/tag/v0.71.5) (2020-11-14)

**Implemented enhancements:**

- Bar Chart options misleading [\#1149](https://github.com/isle-project/isle-editor/issues/1149)

## [v0.71.4](https://github.com/isle-project/isle-editor/releases/tag/v0.71.4) (2020-11-14)

This release fixes a regression in the frequency calculations of the bar chart inside the data explorer toolbox alongside other minor improvements. It also adds a search bar to the component configuration context menu in the editor (opened via right click in the source pane or by click on the red "+" buttons in the preview pane), which makes it easier to find relevant components when inserting a component into a lesson.

**Implemented enhancements:**

- popup ordering on barchart should match ordering of bars; and request for popup enhancement [\#1272](https://github.com/isle-project/isle-editor/issues/1272)
- Add data labels to slider input [\#1253](https://github.com/isle-project/isle-editor/issues/1253)

**Fixed bugs:**

- Bar Chart Issues - Relative Frequencies broken? [\#1474](https://github.com/isle-project/isle-editor/issues/1474)

## [v0.71.3](https://github.com/isle-project/isle-editor/releases/tag/v0.71.3) (2020-11-09)

This release contains various bug fixes, internal refactoring of components, and translations for the data explorer toolbox.

**Implemented enhancements:**

- Smoothing of Density curve Data Driven Histogram [\#1277](https://github.com/isle-project/isle-editor/issues/1277)
- brainstorming enhancements to "statistics" tab [\#1165](https://github.com/isle-project/isle-editor/issues/1165)

## [v0.71.2](https://github.com/isle-project/isle-editor/releases/tag/v0.71.2) (2020-10-26)

This release adds a new error reporting system to the toolbar, which will be available in case ticketing is enabled for the respective course on the ISLE dashboard. It also augments the student responses tab on the instructor panel with grading capabilities.

## [v0.71.1](https://github.com/isle-project/isle-editor/releases/tag/v0.71.1) (2020-10-26)

## [v0.71.0](https://github.com/isle-project/isle-editor/releases/tag/v0.71.0) (2020-10-26)

**Fixed bugs:**

- ISLE Crashing when Test - Two Sample Proportion Test [\#1402](https://github.com/isle-project/isle-editor/issues/1402)

## [v0.70.0](https://github.com/isle-project/isle-editor/releases/tag/v0.70.0) (2020-10-16)

This release exposes the history action log as a new tab of the data explorer:

![image](https://user-images.githubusercontent.com/1913638/96274406-72c9a880-0f9e-11eb-98fd-a11c223dcc43.png)

Currently, the history log is disabled by default. Setting the `history` attribute of the data explorer will enable it. Alongside this change, all plots, models, and tests can now be independently consumed as their own components aside from the data explorer.

The release also fixes a bug which broke progress calculations.



## [v0.69.0](https://github.com/isle-project/isle-editor/releases/tag/v0.69.0) (2020-10-07)

This update fixes a few bugs due to new features in the data explorer: the binning transformer tool, as well as correct handling of ordered categories in boxplots and tables. The new editor version also comes with features to make filing bug reports and feature requests easier. When clicking on the light bulb that shows up when placing the cursor inside a component, one can now directly file a (pre-filled) bug report or feature request for the respective component:

![image](https://user-images.githubusercontent.com/1913638/95394616-dbdc5c80-08ca-11eb-9fba-5d5b1e426e98.png)

One can also connect the editor to one's GitHub account on the Settings page, which enables one to upload/import lesson templates from GitHub Gists.


**Implemented enhancements:**

- scatterplot and correlation matrix [\#1368](https://github.com/isle-project/isle-editor/issues/1368)

**Fixed bugs:**

- box plot; factors lose order when a second group by variable is added [\#1369](https://github.com/isle-project/isle-editor/issues/1369)

## [v0.68.1](https://github.com/isle-project/isle-editor/releases/tag/v0.68.1) (2020-10-02)

This patch fixed an issue that caused lesson uploads to break on Windows.

**Implemented enhancements:**

- Annotation in Sketchpad Not Affixed in Place in PDF [\#1156](https://github.com/isle-project/isle-editor/issues/1156)

## [v0.68.0](https://github.com/isle-project/isle-editor/releases/tag/v0.68.0) (2020-10-02)

This release contains editor improvements such as better syncing between editor and preview pane and a new footer bar of the editor window. The video player has been refactored so that autoplay via the `playing` attribute will only be triggered once the video player has entered the viewport and becomes visible.

**Implemented enhancements:**

- Enable incomplete answers in SelectQuestionMatrix [\#1339](https://github.com/isle-project/isle-editor/issues/1339)
- Overlay histogram - counts vs density [\#1338](https://github.com/isle-project/isle-editor/issues/1338)
- enhancement: background color picker on image popup [\#1326](https://github.com/isle-project/isle-editor/issues/1326)
- Add a text field to all question types including SelectQuestionMatrix [\#1255](https://github.com/isle-project/isle-editor/issues/1255)

**Fixed bugs:**

- faceted histogram axis labels overlap graphs below [\#1350](https://github.com/isle-project/isle-editor/issues/1350)

## [v0.67.1](https://github.com/isle-project/isle-editor/releases/tag/v0.67.1) (2020-09-23)

This patch release contains fixes for handling of filtered datasets in the data explorer and improvements for the editor and preview syncing.

## [v0.67.0](https://github.com/isle-project/isle-editor/releases/tag/v0.67.0) (2020-09-21)

This release changes the display of the toolbar to a horizontal, collapsible format. It improves behavior for multiple-choice questions, which now have more descriptive notifications, and adds the ability to drag tables as answers into image questions. Finally, the editor preview now comes with additional buttons in the component wrappers that allow one to re-arrange components in the preview.

**Implemented enhancements:**

- request force light background when clicking images [\#1324](https://github.com/isle-project/isle-editor/issues/1324)
- Option to Create a frequency table with counts and relative frequency [\#1311](https://github.com/isle-project/isle-editor/issues/1311)

**Fixed bugs:**

- buttons in lower left overlap text [\#1322](https://github.com/isle-project/isle-editor/issues/1322)
- Binning - Last Field is Greater than or Equal - but symbol is only Greater Than [\#1310](https://github.com/isle-project/isle-editor/issues/1310)

## [v0.66.1](https://github.com/isle-project/isle-editor/releases/tag/v0.66.1) (2020-09-11)

This patch restores the attribute table display in the component configuration menu, which was broken in the last version. It also adds `until` attributes to various questions to only accept answers up to a specified date and allows one to use custom filters in the action log of the instructor panel.

## [v0.66.0](https://github.com/isle-project/isle-editor/releases/tag/v0.66.0) (2020-09-10)

This release contains improvements of the preview rendering performance, fixes when working with ordered factor variables in the data explorer, and improvements for the revealer and gate components. It also restores the "scroll into view" behavior when double-clicking on a component in the source editor view as well as text clustering of free-text responses.

**Fixed bugs:**

- Contingency Table - Columns Total not correct \(showing under wrong column\) [\#1294](https://github.com/isle-project/isle-editor/issues/1294)
- Unable to generate plots for filtered data frame [\#1292](https://github.com/isle-project/isle-editor/issues/1292)

## [v0.65.2](https://github.com/isle-project/isle-editor/releases/tag/v0.65.2) (2020-09-03)

## [v0.64.0](https://github.com/isle-project/isle-editor/releases/tag/v0.64.0) (2020-09-01)

This release contains fixes for reading the location of sketchpads from the location hash, an error occurring when creating filtered datasets in the data explorer, and others. 

**Fixed bugs:**

- Number question embedded in table, configurator menu opens for paragraph element, not number question [\#1284](https://github.com/isle-project/isle-editor/issues/1284)
- Removing Filter Corrupting Data Frame [\#1278](https://github.com/isle-project/isle-editor/issues/1278)
- bug in editor 0.62.1 \(windows\) [\#1273](https://github.com/isle-project/isle-editor/issues/1273)

## [v0.63.1](https://github.com/isle-project/isle-editor/releases/tag/v0.63.1) (2020-08-27)

This patch fixes two errors:
- the sketchpad going blank in the editor when changing pages
- hypothesis testing questions causing tokenization to fail

## [v0.63.0](https://github.com/isle-project/isle-editor/releases/tag/v0.63.0) (2020-08-25)

This release includes fixes for bugs in the editor due to the new visual editing capabilities, various enhancements of the data explorer, as well as a new summary view of submitted answers on a per student basis in the instructor panel.

**Implemented enhancements:**

- faceted histograms [\#1249](https://github.com/isle-project/isle-editor/issues/1249)

**Fixed bugs:**

- Bar Plots with a Group by Variable [\#1274](https://github.com/isle-project/isle-editor/issues/1274)
- Multiple sketchpads on page break reading/writing current slide from URL [\#1262](https://github.com/isle-project/isle-editor/issues/1262)

## [v0.62.1](https://github.com/isle-project/isle-editor/releases/tag/v0.62.1) (2020-08-17)

## [v0.62.0](https://github.com/isle-project/isle-editor/releases/tag/v0.62.0) (2020-08-16)

This release includes improvements to the new visual editing capabilities, bug fixes, and enhancements of various components such as the data explorer.



**Implemented enhancements:**

- Enable unequal number of responses on sides of MatchList Question [\#1254](https://github.com/isle-project/isle-editor/issues/1254)
- additional options for contingency table [\#1147](https://github.com/isle-project/isle-editor/issues/1147)
- Horizontal Alignment Wording [\#128](https://github.com/isle-project/isle-editor/issues/128)

**Fixed bugs:**

- Binning Num to Cat - error when NAs present [\#1257](https://github.com/isle-project/isle-editor/issues/1257)

## [v0.61.2](https://github.com/isle-project/isle-editor/releases/tag/v0.61.2) (2020-08-10)

## [v0.61.0](https://github.com/isle-project/isle-editor/releases/tag/v0.61.0) (2020-08-10)

**Fixed bugs:**

- Issue with One Sample Proportion Hypothesis Test [\#1231](https://github.com/isle-project/isle-editor/issues/1231)
- download data not working? [\#1220](https://github.com/isle-project/isle-editor/issues/1220)

## [v0.60.1](https://github.com/isle-project/isle-editor/releases/tag/v0.60.1) (2020-08-03)

**Implemented enhancements:**

- Filter Options \(removal of individual vs restore original dataset\) [\#1168](https://github.com/isle-project/isle-editor/issues/1168)
- Additional summary statistics for numerical variables [\#1164](https://github.com/isle-project/isle-editor/issues/1164)

## [v0.59.0](https://github.com/isle-project/isle-editor/releases/tag/v0.59.0) (2020-07-25)

**Implemented enhancements:**

- Group related icons together [\#1155](https://github.com/isle-project/isle-editor/issues/1155)
- consistent ordering of levels in frequency tables grouped by [\#1146](https://github.com/isle-project/isle-editor/issues/1146)
- accept multiple numerical answers [\#1144](https://github.com/isle-project/isle-editor/issues/1144)
- Add styling to accordion [\#1142](https://github.com/isle-project/isle-editor/issues/1142)
- Alternative way to set binnng of histogram  [\#1139](https://github.com/isle-project/isle-editor/issues/1139)

**Fixed bugs:**

- Unable to click on last two buttons on Plotly modebar  [\#1154](https://github.com/isle-project/isle-editor/issues/1154)
- mosaic plot left side levels not fitting \(since written vertical\) [\#1148](https://github.com/isle-project/isle-editor/issues/1148)
- Data Display in Data Explorer [\#1138](https://github.com/isle-project/isle-editor/issues/1138)
- Box Select in Histogram not highlighting correctly [\#1137](https://github.com/isle-project/isle-editor/issues/1137)
- Update Lesson Not Working [\#1136](https://github.com/isle-project/isle-editor/issues/1136)
- Tabs component not working [\#1131](https://github.com/isle-project/isle-editor/issues/1131)

## [v0.58.0](https://github.com/isle-project/isle-editor/releases/tag/v0.58.0) (2020-07-13)

## [v0.57.1](https://github.com/isle-project/isle-editor/releases/tag/v0.57.1) (2020-07-09)



