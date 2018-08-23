# Sketchpad

A drawing sketchpad for note taking on lecture slides or empty pages.

#### Example:

``` js
<Sketchpad />
```

[Open interactive preview](https://isle.heinz.cmu.edu/components/sketchpad/)

#### Options:

* __autoSave__ | `boolean`: controls whether the editor should save the current text to the local storage of the browser at a given time interval. Default: `true`.
* __intervalTime__ | `number`: time between auto saves. Default: `30000`.
* __brushSize__ | `number`: size of the brush to paint with. Default: `6`.
* __color__ | `string`: color of the brush and texts. Default: `'#444444'`.
* __canvasWidth__ | `number`: width of the canvas element (in px). Default: `1200`.
* __canvasHeight__ | `number`: height of the canvas element (in px). Default: `700`.
* __disabled__ | `boolean`: whether to make the component read-only and forbid drawing on the sketchboard. Default: `false`.
* __fontFamily__ | `string`: Font family. Default: `'Arial'`.
* __fontSize__ | `number`: Font size. Default: `24`.
* __nodes__ | `object`: components to be rendered on top of specified slides; `keys` should correspond to page numbers, `values` to the components. Default: `{}`.
* __noPages__ | `number`: initial number of pages. Default: `1`.
* __pdf__ | `string`: Link to PDF file for baked-in page backgrounds. Default: `none`.
* __showTutorial__ | `boolean`: show a tutorial for the sketchpad. Default: `false`.
* __transmitOwner__ | `boolean`: whether owner actions should be transmitted to other users in real-time. Default: `true`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
* __onChange__ | `function`: callback invoked whenever a new line element is drawn. Default: `onChange() {}`.
