---
id: data
title: Working with Data and the Toolbox
sidebar_label: Data
---

As a statistical learning platform, ISLE provides the ability to interact with data tables and do data analysis. This page will give you an overview of some of the things you can do with data in ISLE.

## Data Tables

A simple way data may be displayed in ISLE is through a **Data Table**. These appear in the typical format for viewing data, similar to what data look like in an Excel spreadsheet. Each column is a **variable** with the variable name at the top. 

![Data Table](assets/images/data_table_student.png)

For a guided tour of the things you can do with data tables, click the **Show Tutorial** button (the question mark in the upper right of the data table).

## Data Explorer

While Data Tables allow you to inspect a dataset and its variables, you might want to do more with the data, such as calculate statistics, make figures and tables, and write a report. A **Data Explorer** combines a data table with a statistical toolbox with which you can perform data analysis.

![Explorer](assets/images/data_explorer.png)

The left side contains the data table, and might optionally include some additional tabs that let you write a report, explore distributions, or answer questions. The right side will show data analysis output (statistics, figures, and tables) which you will produce with the statistical toolbox.

### The Toolbox

To open the toolbox, click **Show Toolbox** in the Data Explorer. The full toolbox lets you calculate statistics, make tables and plots, create statistical models, and transform variables. Note that your instructor may choose to display only a subset of the toolbox options. If you wish to learn more about a feature of the toolbox, you can click the `?` symbol next to that feature's name.

![Toolbox](assets/gifs/toolbox.gif)

### Filtered Datasets

By selecting a range of values (for quantitative variables) or a subset of levels (for categorical variables) you can filter a dataset based on the values of one or more variables, displaying only those rows which contain the specified values.

After displaying the filtered data, you might want to perform analysis (calculate statistics, make figures and tables, etc.) on just the filtered data. This can be done by creating a **Filtered Dataset**. After applying the desired filters, click the **Create filtered dataset** button below the data explorer. All subsequent actions with the toolbox will be performed on that subset of the data, unless you restore the original data by clicking **Restore original dataset**.

![Filtered Dataset](assets/gifs/filtered_dataset.gif)

### Editing and Manipulating Plots

To edit a plot's title or axis labels, click on the title/label and edit the text:

![Edit Labels](assets/gifs/edit_figure_labels.gif)

You can also use the toolbar at the top of each figure to zoom, pan, select points, etc:

![Figure Toolbar](assets/images/figure_toolbar.png)

This is helpful if, for example, you want to inspect a specific area of the figure.