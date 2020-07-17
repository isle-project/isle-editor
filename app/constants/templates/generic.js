// MAIN //

const template = `---
<preamble>
---

# This is an ISLE lesson.

## RShell

Here is an interactive R Shell to play with

<RShell code="mean( c(10, 5, 8, 2, 13) )" lines={5} />

## LaTeX

You can include LaTeX equations:

<TeX raw="\\int f(x) dx" displayMode={true} id={1}/>

## Widgets

You can include a variety of *ISLE components*, for example plotting widgets and feedback buttons:

### Question & Feedback

<FreeTextQuestion id="q1" question="Where can I find help on ISLE?" solution="Browse the docs at https://isledocs.com or ask for help on the discussion forum at https://discourse.isledocs.com" />

### Videos

You can easily embed media content:

<VideoPlayer url="https://www.youtube.com/watch?v=wPqtzj5VZus" />`;


// EXPORTS //

export default template;
