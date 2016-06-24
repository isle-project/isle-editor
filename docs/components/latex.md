# LaTeX Equations

`TeX` is an ISLE element that can be used to display LaTeX equations. Under the hood, the component uses [KaTeX](https://github.com/Khan/KaTeX) for blazingly fast rendering.

Example:

``` html
<TeX
    raw="\int f(x) \; dx"
    displayMode={true}
    id={1}
/>
```

## Options:

* `raw`: The literal LaTeX `string` to render. Also accepts `numbers`. Default: `''`.
* `displayMode`: `boolean` indicating whether to display the equation inline or in display mode. Default: `false`.
* `id`: `number` of the equation in the lesson. Default: `NaN`.
* `onClick`: Callback `function` invoked whenever a user clicks on the equation. Default: `null`.
* `style`: `object` with CSS key-value pairs to be applied to the equation container. Default: `{}`.
