---
id: sketchpad 
title: Sketchpad
sidebar_label: Sketchpad
---

A drawing sketchpad for note taking on lecture slides or empty pages.

## Options

* __autoSave__ | `boolean`: controls whether the editor should save the current text to the local storage of the browser at a given time interval. Default: `true`.
* __feedbackButtons__ | `boolean`: controls whether to display feedback buttons on each slide. Default: `false`.
* __intervalTime__ | `number`: time between auto saves. Default: `10000`.
* __hideInputButtons__ | `boolean`: controls whether to hide drawing and text input buttons. Default: `false`.
* __hideNavigationButtons__ | `boolean`: controls whether to hide buttons for navigating between pages. Default: `false`.
* __hideSaveButtons__ | `boolean`: controls whether to hide the save buttons. Default: `false`.
* __hideTransmitButtons__ | `boolean`: controls whether to hide buttons for transmitting user actions. Default: `false`.
* __brushSize__ | `number`: size of the brush to paint with. Default: `4`.
* __color__ | `string`: color of the brush and texts. Default: `'#444444'`.
* __canvasWidth__ | `number`: width of the canvas element (in px). Default: `1200`.
* __canvasHeight__ | `number`: height of the canvas element (in px). Default: `700`.
* __fullscreen__ | `boolean`: controls whether to automatically resize the canvas to the width and height of the browser window. Default: `false`.
* __fill__ | `string`: if `horizontal`, fill all available horizontal space when drawing a PDF; if `vertical`, all vertical space is used to prevent y-axis overflow. Default: `'vertical'`.
* __disabled__ | `boolean`: whether to make the component read-only and forbid drawing on the sketchpad. Default: `false`.
* __fontFamily__ | `string`: font family. Default: `'Arial'`.
* __fontSize__ | `number`: font size. Default: `24`.
* __nodes__ | `object`: components to be rendered on top of specified slides; `keys` should correspond to page numbers, `values` to the components. Default: `{}`.
* __noPages__ | `number`: initial number of pages. Default: `1`.
* __pdf__ | `string`: link to PDF file for baked-in page backgrounds. Default: `none`.
* __showTutorial__ | `boolean`: show tutorial for the sketchpad on startup. Default: `false`.
* __dynamicallyHideButtons__ | `boolean`: controls whether to start hiding buttons when toolbar width is not sufficient (otherwise a new line will be started). Default: `false`.
* __transmitOwner__ | `boolean`: whether owner actions should be transmitted to other users in real-time. Default: `true`.
* __groupMode__ | `boolean`: controls whether all user's actions are transmitted to everyone else. Default: `false`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
* __onChange__ | `function`: callback invoked whenever a new line element is drawn. Default: `onChange() {}`.


## Examples

```jsx live
<Sketchpad canvasWidth={750} />
```

