// MODULES //

import moment from 'moment';


// MAIN //

const template = `---
title: "Lesson"
author: John Doe
date: ${moment().format( 'MMM Do, YYYY' )}
state:
server: ${localStorage.getItem( 'server' ) || 'https://isle.heinz.cmu.edu'}
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

### Plotting & Feedback

<FeedbackButtons
    id="plot1"
/>
<VictoryChart id="plot1">
    <VictoryLine/>
</VictoryChart>

### Videos
You can easily embed media content:

<VideoPlayer url="https://www.youtube.com/watch?v=wPqtzj5VZus" />`;


// EXPORTS //

export default template;
