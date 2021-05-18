---
id: scrolling-text
title: Scrolling Text
sidebar_label: Scrolling Text
---

A dynamic background component that cycles through a list of texts at a specified interval.

## Options

* __text__ | `(string|array<string>)`: text or list of texts to be displayed. Default: `[]`.
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
        { label: 'List of Texts', value: 'list' },
        { label: 'Background Image', value: 'backgroundImage' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<ScrollingText
    text="This is a text re-appearing every five seconds"
    style={{ fontSize: 44, color: 'blue' }}
    wait={5}
    hold={2}
    loop
/>
```

</TabItem>

<TabItem value="list">

```jsx live
<ScrollingText
    text={[ 'One', 'Two', 'Three', 'Four'  ]}
    style={{ fontSize: 84, color: 'red', textAlign: 'center' }}
    loop
    direction="left"
    wait={.5}
    hold={2}
/>
```

</TabItem>

<TabItem value="backgroundImage">

```jsx live
<ScrollingText
    text={[ 'One', 'Two', 'Three', 'Four'  ]}
    style={{ fontSize: 84, color: 'white', textAlign: 'center', backgroundImage: 'url(https://bit.ly/3qlRgoR)', backgroundSize: '1200px 200px' }}
    loop
    direction="left"
    wait={.5}
    hold={2}
/>
```

</TabItem>

</Tabs>
