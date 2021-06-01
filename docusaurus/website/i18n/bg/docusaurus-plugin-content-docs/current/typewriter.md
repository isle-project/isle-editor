---
id: typewriter 
title: Typewriter
sidebar_label: Typewriter
---

Компонент на ISLE, който ви позволява да създадете ефект на пишеща машина.

## Опции

* __delay__ | `number`: първоначално забавяне преди стартиране на пишещата машина (в милисекунди). Default: `none`.
* __hold__ | `number`: ако текстът е масив от низове, функцията hold задава продължителността на показване на реда, преди да се премине към следващия елемент в масива.. Default: `2000`.
* __interval__ | `number`: интервалът на пишещата машина (в милисекунди). Default: `100`.
* __random__ | `boolean`: ако е зададена опция за случаен избор, натискането на клавишите ще се извършва с определена, "хуманна" случайност.. Default: `false`.
* __sound__ | `boolean`: ще се чуе и въведеното натискане на клавиш. Default: `false`.
* __style__ | `object`: CSS инлайн стилове. Default: `{}`.
* __text__ | `(string|array<string>)`: пълния текст, който ще се показва, или масив от текстове, които ще се показват последователно. Default: `''`.


## Примери

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

