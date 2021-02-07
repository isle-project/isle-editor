---
id: typewriter 
title: Typewriter
sidebar_label: Typewriter
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

