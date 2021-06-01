---
id: scrolling-text
title: Scrolling Text
sidebar_label: Scrolling Text
---

Динамичен фонов компонент, който преминава през списък с текстове на определен интервал от време.

## Опции

* __text__ | `(string|array<string>)`: текст или списък от текстове, които да се показват. Default: `[]`.
* __loop__ | `boolean`: указва дали процесът ще се показва безкрайно. Default: `false`.
* __direction__ | `string`: посоката на движение на текста (`ляво`, `дясно`, `нагоре`, `надолу`, `проследяване`, `фокус` или `вълнение`). Default: `'right'`.
* __hold__ | `number`: времето, за което текстът остава неподвижен (в секунди). Default: `5`.
* __wait__ | `number`: времето преди пристигането на нов текст (в секунди). Default: `3`.
* __inTime__ | `number`: време на входния ефект (в секунди). Default: `1`.
* __outTime__ | `number`: време на ефекта на излизане (в секунди). Default: `1`.
* __className__ | `string`: име на класа. Default: `''`.
* __style__ | `object`: CSS стилове на текста. Default: `{}`.


## Примери


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
