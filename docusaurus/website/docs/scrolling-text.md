---
id: scrolling-text
title: Scrolling Text
sidebar_label: Scrolling Text
---

A dynamic background component that cycles through a list of texts at a specified interval.

## Options

* __text__ | `array<string>`: text or list of texts to be displayed. Default: `[]`.
* __loop__ | `boolean`: indicates whether the process shall be displayed infinitely. Default: `false`.
* __direction__ | `string`: the direction of the text flow (either `left`, `right`, `up`, `down`, `tracking`, `focus`, or `swirl`). Default: `'right'`.
* __hold__ | `number`: the time the text remains still (in seconds). Default: `5`.
* __wait__ | `number`: the time before a new text arrives (in seconds). Default: `3`.
* __inTime__ | `number`: time of the entrance effect (in seconds). Default: `1`.
* __outTime__ | `number`: time of the exit effect (in seconds). Default: `1`.
* __className__ | `string`: class name. Default: `''`.
* __style__ | `object`: CSS styles of the text. Default: `{}`.


## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Delay and Sound', value: 'delayAndSound' },
        { label: 'With CSS', value: 'withCSS' },
        { label: 'Array of Strings', value: 'array' },
        { label: 'Humanized', value: 'humanized' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Typewriter text="Lorem ipsum" />
```

</TabItem>

<TabItem value="delayAndSound">

```jsx live
<Typewriter text="Lorem ipsum" sound delay={2000} />
```

</TabItem>

<TabItem value="withCSS">

```jsx live
<Typewriter text="Styled Text" style={{ fontSize: 66, color: 'red'}} />
```

</TabItem>

<TabItem value="array">

```jsx live
<Typewriter text={["First Entry", "Second Entry", "Third Entry"]}  hold={2000} />
```

</TabItem>

<TabItem value="humanized">

```jsx live
<Typewriter text="This is a humanized performance" random interval={170} />
```

</TabItem>

</Tabs>



