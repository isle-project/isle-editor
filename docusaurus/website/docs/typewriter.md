---
id: typerwriter 
title: Typerwriter
sidebar_label: Typerwriter
---

An ISLE component that allows you to create a typewriter effect.

## Example

```jsx live
<Typewriter text="Lorem ipsum" />
```

[Open interactive preview](https://isle.heinz.cmu.edu/components/typerwriter/)

## Options

* __deviation__ | `number`: allows you to specify the randomness. Default: `30`.
* __delay__ | `number`: initial delay before typewriter starts (in milliseconds). Default: `none`.
* __hold__ | `number`: if text is an array of strings, hold specified the duration the full will be displayed before it passes over to the next item in the array. Default: `2000`.
* __interval__ | `number`: the interval of the typewriter (in milliseconds). Default: `100`.
* __random__ | `boolean`: if random is set, the keystrokes will be performed with a certain, "humane" randomness. Default: `false`.
* __sound__ | `boolean`: the typed keystroke will be also heard. Default: `false`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
* __text__ | `string`: the full text to be displayed. Default: `''`.
