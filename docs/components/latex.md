# LaTeX Equations

`TeX` is an ISLE element that can be used to display LaTeX equations. Under the hood, the component uses [KaTeX](https://github.com/Khan/KaTeX) for blazingly fast rendering.

Example:

``` html
<TeX
    raw="\int f(x) \; dx"
    displayMode={true}
/>
```

## Options:

* __raw__: The literal LaTeX `string` to render. Also accepts `numbers`. Default: `''`.
* __displayMode__: `boolean` indicating whether to display the equation inline or in display mode. Default: `false`.
* __onClick__: Callback `function` invoked whenever a user clicks on the equation. Default: `null`.
* __style__: `object` with CSS key-value pairs to be applied to the equation container. Default: `{}`.
* __tag__: Custom characters displayed for display equations at the right side. Defaults to the number of the equation inside the lesson.
