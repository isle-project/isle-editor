---
id: pages 
title: Pages
sidebar_label: Pages
---

Komponent stránkovania ISLE, ktorý umožňuje používateľovi prechádzať postupnosť stránok.

## Možnosti

* __activePage__ | `number`: aktívna stránka. Default: `1`.
* __disabled__ | `boolean`: kontroluje, či je navigačný panel aktívny alebo nie.. Default: `false`.
* __title__ | `(string|node)`: zobrazený názov kontajnera stránok. Default: `''`.
* __pagination__ | `string`: či sa má stránkovanie zobrazovať buď na `top`, `bottom` alebo `both`.. Default: `'top'`.
* __size__ | `string`: veľkosť tlačidiel stránkovania (buď `default`, `lg`, alebo `sm`). Default: `'default'`.
* __height__ | `(number|string)`: maximálna výška kontajnera. Ak je vložená stránka vyššia, pridá sa vertikálny posuvník. Default: `none`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.
* __onSelect__ | `function`: Funkcia vyvolaná pri zmene aktívnej zmeny. Ako jediný parameter prijíma nový index aktívnej stránky. Default: `onSelect() {}`.


## Príklady

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Custom Pagination', value: 'customPagination' },
        { label: 'With CSS', value: 'withCSS' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Pages title="Pages" >
    <div>
        <h1>First Page</h1>
    </div>
    <div>
        <h1>Second Page</h1>
    </div>
    <div>
        <h1>Third Page</h1>
    </div>
</Pages>
```

</TabItem>

<TabItem value="customPagination" >

```jsx live
<Pages title="Questions" pagination="both" size="sm" >
    <div>
        <NumberQuestion
            question="What is the number PI (at least up to three digits after the decimal point)?"
            solution={Math.PI}
            digits={3}
        />
    </div>
    <div>
        <FreeTextQuestion 
            question="Is this question displayed on the second page?"
            solution="Yes" 
        />
    </div>
</Pages>
```
</TabItem>

<TabItem value="withCSS">

```jsx live
<Pages 
    activePage={2}
    style={{ background: 'lightblue', height: 420, outline: '4px solid black' }} 
    title="Styled Pages"
>
    <div>
        <h1>First Page</h1>
    </div>
    <div>
        <h1>Second Page</h1>
    </div>
    <div>
        <h1>Third Page</h1>
    </div>
</Pages>
```

</TabItem>

</Tabs>

