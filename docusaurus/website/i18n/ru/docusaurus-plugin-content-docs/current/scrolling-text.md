---
id: scrolling-text
title: Scrolling Text
sidebar_label: Scrolling Text
---

Динамическая фоновая составляющая, проходящая через список текстов с заданным интервалом.

## Options

* __text__ | `array<string>`: текст или список текстов для отображения. Default: `[]`.
* __loop__ | `boolean`: указывает, будет ли процесс отображаться бесконечно. Default: `false`.
* __direction__ | `string`: направление потока текста (либо `лево`, `право`, `вверх`, `вниз`, `трекинг`, `фокус`, либо `вихрь`).. Default: `'right'`.
* __hold__ | `number`: время, в течение которого текст остается неподвижным (в секундах).. Default: `5`.
* __wait__ | `number`: время до прихода нового текста (в секундах).. Default: `3`.
* __inTime__ | `number`: время входного эффекта (в секундах). Default: `1`.
* __outTime__ | `number`: время эффекта выхода (в секундах). Default: `1`.
* __className__ | `string`: название класса. Default: `''`.
* __style__ | `object`: CSS-стили текста. Default: `{}`.


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



