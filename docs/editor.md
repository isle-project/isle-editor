## ISLE Editor

The editor is split into two panes: The left-hand side allows one to create ISLE lessons using HTML-like syntax and Markdown as well as LaTeX equations, whereas the right-hand side offers a live-preview of the created lesson. By default, all standard HTML tags are supported, but in addition it is also possible to insert custom ISLE tags which insert highly interactive and customizable elements into the lesson. The components section of this guide shows an overview of the available elements and their options.

### Editor Features

#### Markdown

[Markdown](https://daringfireball.net/projects/markdown/) can be used for writing sections of text. All text outside HTML and ISLE tags will be parsed as Markdown and rendered as HTML. See [this overview](https://daringfireball.net/projects/markdown/syntax) for an introduction to the Markdown syntax.

#### Auto-completion

While typing, live auto-completion offers suggestions of possible insertions. Hitting RETURN or TAB will insert the current selection. One can use the arrow keys to cycle through all available suggestions.

#### Snippets

For the custom ISLE elements, the editor comes with snippets that allow you to quickly insert the respective elements with default settings, all the while offering a convenient way to change the default options. Using TAB, it is possible to cycle through and change the different options after the tag is inserted. CTRL-L will open up a list of all possible auto-completions, including the snippets that come with the ISLE editor.

#### Collapsing

The contents in-between a tag can be collapsed when they span multiple lines. This can help one to maintain oversight of a larger lesson. To expand or collapse the contents of a tag, simply click on the arrows next to the line numbers on the left of the editor window.

#### Error Messages

The editor also displays error messages on the left next to the lines for which a problem is detected. Hovering over the red box will display the description of the identified problem.

### Live Preview

The right-hand pane offers an interactive live-preview of the opened lesson. Whenever the content of the lesson is changed, this view will be re-rendered and all state variable are reset.
