---
id: editor-text
title: Entering Text
sidebar_label: Text
---

## Markdown

[Markdown](https://daringfireball.net/projects/markdown/) (a readable syntax that gets converted to HTML) is used to write most of the text in ISLE lessons. If you haven't used Markdown before, don't worry! Markdown is light-weight, and much of what you want can be typed directly into the editor with little or no additional syntax. Below is a list of a few common text formatting tools; a nice summary of basic syntax can be found [here](https://www.markdownguide.org/basic-syntax/) and an extensive guide can also be found [here](https://daringfireball.net/projects/markdown/syntax).

**Headings**:
> `# Sample` is rendered as <span> <h1> Sample </h1> </span>
>
> `## Sample` is rendered as <span> <h2> Sample </h2> </span>
>
> `### Sample` is rendered as <span> <h3> Sample </h3> </span>
  
**Emphasis**:
> `*sample*` is rendered as *sample*
>
> `**sample**` is rendered as **sample**

**Links**:

> `[Ada Lovelace](https://en.wikipedia.org/wiki/Ada_Lovelace)` renders as [Ada Lovelace](https://en.wikipedia.org/wiki/Ada_Lovelace) (and you can click to follow the link)

**Lists**:

Markdown supports both ordered and unordered lists. An unordered list is made with asterisks (`*`) and hyphens (`-`) for the bullet points. For example,

    * Item 1
    * Item 2
        - sub-item

renders as

* Item 1
* Item 2
    - sub-item
    
For an ordered list, we use numbers:

    1. Item 1
    2. Item 2
    3. Item 3
    
becomes

1. Item 1
2. Item 2
3. Item 3

<br/>

**Tables**:

To make tables in Markdown, vertical bars (`|`) are used to define columns and three or more hyphens (`---`) specify the column headings. For example,

    | Book | Author |
    | --- | --- |
    | Harry Potter and the Goblet of Fire | J.K. Rowling |
    | 1984 | George Orwell |
    | Americanah | Chimamanda Ngozi Adichie |
    
is rendered similar to

| Book | Author |
| --- | --- |
| Harry Potter and the Goblet of Fire | J.K. Rowling |
| 1984 | George Orwell |
| Americanah | Chimamanda Ngozi Adichie |

## LaTeX

LaTeX equations can be included by using the special `TeX` tag. Full details of the tag options can be found in the [docs](https://isledocs.com/docs/tex); the options you will use most are
* **raw**: the LaTeX code to render.
* **displayMode**: inline (false) or display mode (true). Defaults to false.
* **numbered**: whether to display an equation number of display mode equations. Defaults to false.

For example, `<TeX raw="\frac{1}{\sqrt{2\pi}\sigma^2} e^{-\frac{1}{2\sigma^2}(x - \mu)^2}"  displayMode={true} />` is rendered as

<img src="http://latex.codecogs.com/gif.latex?\frac{1}{\sqrt{2\pi}\sigma^2} e^{-\frac{1}{2\sigma^2}(x - \mu)^2}" />

Alternatively, inline LaTeX can be written with `$ $` (or `\( \)`) and display-mode LaTeX equations can also be written with `$$ $$` (or `\[ \]`) rather than the `TeX` tag. For example, the same equation as above can be created by

    \[\frac{1}{\sqrt{2\pi}\sigma^2} e^{-\frac{1}{2\sigma^2}(x - \mu)^2}\]

and

    $$\frac{1}{\sqrt{2\pi}\sigma^2} e^{-\frac{1}{2\sigma^2}(x - \mu)^2}$$

## HTML

In addition to custom ISLE tags like `TeX`, standard HTML tags are supported by ISLE. For example,

```
    <ul> 
        <li> visualization </li>
        <li> data analysis </li>
        <li> statistical modeling </li>
    </ul>
```

is rendered as

<ul> 
    <li> visualization </li>
    <li> data analysis </li>
    <li> statistical modeling </li>
</ul>

A comprehensive cheat sheet on HTML tags can be found [here](https://digital.com/tools/html-cheatsheet/).

## Your Turn

In the ISLE editor, re-create the text pictured below. To show the solution, click the **Show solution** button below the image.

![ISLE Text Example](/img/isle_text_example.png)

<pre id="solution_text" style={{
    display: 'none', 
    wordBreak: 'normal',
    wordWrap: 'normal',
    whiteSpace: 'pre-wrap',
    color: 'rgb(191, 199, 213)',
    backgroundColor: 'rgb(41, 45, 62)',
    padding: 12
}} >
{`(Here's the solution - your preamble probably looks different)

---
title: "Tutorial example"
author: Ciaran
date: 17/07/2019
state:
---

# Intro to the ISLE Editor

The ISLE editor allows users to write and and export instructional content.

## Entering Text 

**Text** in ISLE is entered using Markdown and HTML syntax. You can learn more about Markdown at the [Markdown home page](https://daringfireball.net/projects/markdown/). 

## LaTeX Equations

*Inline* and *display mode* LaTeX equations can be included, like <TeX raw="E(X) = \int \limits_{-\infty}^\infty x f(x) dx" /> and <TeX raw="V(X) = E(X^2) - E(X)^2" displayMode={true}/>


## Sample Types of ISLE Lessons

* Labs
* Homeworks
* Projects
* Lecture Notes
`}</pre>

export const SolutionButton = ( props ) => ( <div>
    <button className="solution_button" onClick={() => {
        const x = document.getElementById( "solution_text" );
        if ( x.style.display === "none" ) {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }} > Show solution </button>
</div> );

<SolutionButton />

