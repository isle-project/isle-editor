---
id: r-shell
title: R Shell
sidebar_label: R Shell
---

An interactive R Shell that can be used to execute R commands in the cloud using [OpenCPU](https://www.opencpu.org/).

## Options

* __code__ | `string`: R code to be evaluated. Default: `''`.
* __solution__ | `string`: for programming questions, R code `string` representing the official solution for the problem. Default: `''`.
* __hints__ | `array<(string|node)>`: for programming questions, an array of hints providing guidance on how to approach the problem. Default: `[]`.
* __addPreceding__ | `boolean`: if set to true, the shell will evaluate all the code from the current component and all previous ones occurring in the lesson. Default: `false`.
* __libraries__ | `array`: R libraries that should be loaded automatically when the input `code` is executed. Default: `[]`.
* __precompute__ | `boolean`: controls whether the default code should be executed once the component has mounted. Default: `false`.
* __prependCode__ | `(string|array)`: R code `string` (or `array` of R code blocks) to be prepended to the code stored in `code` when evaluating. Default: `''`.
* __chat__ | `boolean`: controls whether group chat functionality should be enabled. Default: `false`.
* __disabled__ | `boolean`: controls whether to disable all user inputs and make the code block static. Default: `false`.
* __lines__ | `number`: number of lines to display. Default: `5`.
* __resettable__ | `boolean`: controls whether to display a reset button for restoring the default code input. Default: `false`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
* __onChange__ | `function`: callback invoked whenever the text field input changes. Default: `onChange() {}`.
* __onEvaluate__ | `function`: callback invoked whenever the `Evaluate` button is clicked. Default: `onEvaluate(){}`.
* __onResult__ | `function`: callback invoked whenever the result of a code execution is obtained from the cloud. The result `string` is passed as the only argument to the callback function. Default: `onResult() {}`.


## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Precompute & Disabled', value: 'precompute' },
        { label: 'Hints & Solution', value: 'hintsAndSolution' },
        { label: 'Using Libraries', value: 'usingLibraries' },
        { label: 'Add Preceding Code', value: 'addPreceding' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<RShell
    code="abs(c(-2,3,-1))"
/>
```

</TabItem>

<TabItem value="precompute" >

```jsx live
<RShell
    code="abs(c(-2,3,-1))"
    precompute
    disabled
    lines={2}
/>
```

</TabItem>

<TabItem value="hintsAndSolution" >

```jsx live
**(a)** Use the lm() function to regress `Price` on: `EngineSize`, `Origin`, `MPG.highway`, `MPG.city` and `Horsepower`.

<RShell 
    id="prob1a"
    code="" 
    solution={`cars.lm <- lm(Price ~ EngineSize + Origin + MPG.highway + MPG.city + Horsepower,
data = Cars93)
summary(cars.lm)`} 
    lines={5} 
    hints={["Use the model formula syntax to specify your regression equation. Type ?formula if you don't remember how formulas work.","You can use the summary() function to retrieve a detailed regression output for a lm object"]}
/>
```

</TabItem>

<TabItem value="usingLibraries" >

<RShell libraries={['dplyr']} code={'starwars %>% filter(species == "Droid")'} lines={2} />

</TabItem>

<TabItem value="addPreceding" >

<RShell code="library(dplyr)" lines={2} disabled />

<RShell code={'starwars %>% filter(species == "Droid")'} addPreceding lines={2} />

</TabItem>

</Tabs>
