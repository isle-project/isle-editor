# Changelog

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



