---
id: typewriter 
title: Typewriter
sidebar_label: Typewriter
---

ISLE компонент, позволяющий создать эффект печатной машинки.

## Options

* __delay__ | `number`: начальная задержка перед запуском печатной машинки (в миллисекундах). Default: `none`.
* __hold__ | `number`: если текст представляет собой массив строк, удерживайте указанную длительность, которая будет показана полностью, прежде чем он перейдет к следующему элементу в массиве. Default: `2000`.
* __interval__ | `number`: интервал печатной машинки (в миллисекундах). Default: `100`.
* __random__ | `boolean`: если установлена случайность, то нажатия клавиш будут выполняться с определенной, "гуманной" случайностью.. Default: `false`.
* __sound__ | `boolean`: также будет слышен ввод нажатой клавиши.. Default: `false`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.
* __text__ | `(string|array<string>)`: полный текст для отображения. Default: `''`.


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

