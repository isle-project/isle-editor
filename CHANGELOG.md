# Changelog

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



