// MODULES //

import * as types from '../constants/actionTypes';
import Configstore from 'configstore';
import moment from 'moment';


// VARIABLES //

const exampleDoc = `---
title: "Lesson"
author: John Doe
date: ${moment().format( 'MMM Do, YYYY' )}
store:
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
    for="plot1"
/>
<FunctionPlot
    data={[
        { fun: Math.sin }
    ]}
    width={700}
    id="plot1"
/>

### Videos
You can easily embed media content:

<VideoPlayer url="https://www.youtube.com/watch?v=wPqtzj5VZus" />
`;

const config = new Configstore( 'ISLE' );
const initialState = {
	markdown: config.get( 'mostRecentFileData' ) || exampleDoc,
	isScrolling: true,
	filePath: config.get( 'mostRecentFilePath' ),
	fileName: config.get( 'mostRecentFileName' )
};


// EXPORTS //

export default function markdown( state = initialState, action ) {
	switch ( action.type ) {
	case types.FILE_LOADED:
		return {
			...state,
			fileName: action.payload.fileName,
			filePath: action.payload.filePath
		};
	case types.MARKDOWN_CHANGED:
		return Object.assign({}, state, {
			markdown: action.payload.markdown,
			html: action.payload.html
		});
	case types.TOGGLE_SCROLLING:
		return Object.assign({}, state, {
			isScrolling: !state.isScrolling
		});
	default:
		return state;
	}
}
