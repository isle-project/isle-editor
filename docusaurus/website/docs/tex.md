---
id: tex
title: LaTeX Equations
sidebar_label: LaTeX Equations
---

`TeX` is an ISLE element that can be used to display LaTeX equations. Under the hood, the component uses [KaTeX](https://github.com/Khan/KaTeX) for blazingly fast rendering.

## Options

* __raw__ | `(string|number) (required)`: The literal LaTeX `string` to render. Also accepts `numbers`. Default: `none`.
* __displayMode__ | `boolean`: `boolean` indicating whether to display the equation inline or in display mode. Default: `false`.
* __numbered__ | `boolean`: controls whether to display an equation number for display mode equations. Default: `false`.
* __style__ | `object`: `object` with CSS key-value pairs to be applied to the equation container. Default: `{}`.
* __tag__ | `string`: Custom characters displayed for display equations at the right side. Defaults to the number of the equation inside the lesson. Default: `none`.
* __elems__ | `object`: `object` with `keys` denoting LaTeX characters and their corresponding values being configuration `objects` to make them interactive. Setting a `tooltip` option will show a tooltip when hovering over the LaTeX characters. Setting a `variable` property will display an input slider to change the respective state variable; in this case, additional properties `legend`, `min`, `max`, and `step` are supported. Default: `{}`.
* __popoverPlacement__ | `string`: popover position for the specified `elems` (either `top`, `right`, `bottom`, or `left`). Default: `'bottom'`.
* __onPopover__ | `function`: callback `function` when a control popover is toggled on or off; receives the display status as a boolean as its sole argument. Default: `onPopover() {}`.
* __onClick__ | `function`: callback `function` invoked whenever a user clicks on the equation. Default: `none`.


## Examples

```jsx live
<TeX
    raw="2 + 3 = 5"
    displayMode={true}
/>
```



