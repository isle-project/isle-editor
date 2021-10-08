---
id: js-shell
title: JavaScript Shell
sidebar_label: JavaScript Shell
---

An interactive Javascript shell that can be used to execute JavaScript commands. The shell contains a console that displays error messages, warnings etc.

## Options

* __code__ | `string`: JavaScript code to be evaluated. Default: `''`.
* __solution__ | `string`: for programming questions, code `string` representing the official solution for the problem. Default: `''`.
* __hints__ | `array<(string|node)>`: for programming questions, an array of hints providing guidance on how to approach the problem. Default: `[]`.
* __precompute__ | `boolean`: controls whether the default code should be executed once the component has mounted. Default: `false`.
* __chat__ | `boolean`: controls whether group chat functionality should be enabled. Default: `false`.
* __check__ | `string`: appended JavaScript code to check the `code` to be evaluated. Default: `none`.
* __disabled__ | `boolean`: controls whether to disable all user inputs and make the code block static. Default: `false`.
* __lines__ | `number`: number of lines to display. Default: `5`.
* __className__ | `string`: class name. Default: `''`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
* __onChange__ | `function`: callback invoked whenever the text field input changes. Default: `onChange() {}`.
* __onEvaluate__ | `function`: callback invoked whenever the `Evaluate` button is clicked. Default: `onEvaluate() {}`.
* __vars__ | `object`: scope object with variables that should be made available to evaluated `code`. Default: `none`.


## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'Ten Lines', value: 'mLines' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<JSShell code = {`var a = 2; 
var b = 2;
console.log(a + b);`} />
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<JSShell style={{ fontSize: 18, boxShadow: '0 0 4px black' }}  />
```

</TabItem>

<TabItem value="mLines">

```jsx live
<JSShell lines={10} />
```

</TabItem>

</Tabs>




