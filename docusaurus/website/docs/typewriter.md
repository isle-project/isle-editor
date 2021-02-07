---
id: typerwriter 
title: Typerwriter
sidebar_label: Typerwriter
---

An ISLE component that allows you to create a typewriter effect.

## Options

* __delay__ | `number`: initial delay before typewriter starts (in milliseconds). Default: `none`.
* __hold__ | `number`: if text is an array of strings, hold specifies the duration the line will be displayed before it passes over to the next item in the array. Default: `2000`.
* __interval__ | `number`: the interval of the typewriter (in milliseconds). Default: `100`.
* __random__ | `boolean`: if random is set, the keystrokes will be performed with a certain, "humane" randomness. Default: `false`.
* __sound__ | `boolean`: the typed keystroke will be also heard. Default: `false`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
* __text__ | `(string|array<string>)`: the full text to be displayed or an array of texts to be displayed sequentially. Default: `''`.


## Examples

```jsx live
<Typewriter text="Lorem ipsum" />
```



