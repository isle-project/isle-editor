---
id: pages 
title: Pages
sidebar_label: Pages
---

ISLE puslapiavimo komponentas, leidžiantis naudotojui žingsnis po žingsnio pereiti puslapių seką.

## Parinktys

* __activePage__ | `number`: aktyvus puslapis. Default: `1`.
* __disabled__ | `boolean`: kontroliuoja, ar navigacijos juosta yra aktyvi, ar ne.. Default: `false`.
* __title__ | `(string|node)`: rodomas puslapių konteinerio pavadinimas. Default: `''`.
* __pagination__ | `string`: ar puslapius rodyti `top`, `bottom`, ar `both`.. Default: `'top'`.
* __size__ | `string`: puslapiavimo mygtukų dydis (`default`, `lg` arba `sm`).. Default: `'default'`.
* __height__ | `(number|string)`: didžiausias konteinerio aukštis. Jei įterptasis puslapis yra aukštesnis, pridedama vertikali slinkties juosta. Default: `none`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.
* __onSelect__ | `function`: Funkcija, iškviečiama, kai pakeičiamas aktyvus pokytis. Kaip vienintelį parametrą gauna naująjį aktyvaus puslapio indeksą. Default: `onSelect() {}`.


## Pavyzdžiai

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

