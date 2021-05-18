---
id: scrolling-text
title: Scrolling Text
sidebar_label: Scrolling Text
---

Динамическая фоновая составляющая, проходящая через список текстов с заданным интервалом.

## Варианты

* __text__ | `(string|array<string>)`: текст или список текстов для отображения. Default: `[]`.
* __loop__ | `boolean`: указывает, будет ли процесс отображаться бесконечно. Default: `false`.
* __direction__ | `string`: направление потока текста (либо `лево`, `право`, `вверх`, `вниз`, `трекинг`, `фокус`, либо `вихрь`). Default: `'right'`.
* __hold__ | `number`: время, в течение которого текст остается неподвижным (в секундах). Default: `5`.
* __wait__ | `number`: время до прихода нового текста (в секундах). Default: `3`.
* __inTime__ | `number`: время входного эффекта (в секундах). Default: `1`.
* __outTime__ | `number`: время эффекта выхода (в секундах). Default: `1`.
* __className__ | `string`: название класса. Default: `''`.
* __style__ | `object`: CSS-стили текста. Default: `{}`.


## Примеры


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
