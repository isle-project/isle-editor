---
id: pages 
title: Pages
sidebar_label: Pages
---

ISLE lehekülgede liigendamise komponent, mis võimaldab kasutajal liikuda lehekülgede järjestuse kaudu.

## Valikud

* __activePage__ | `number`: aktiivne lehekülg. Default: `1`.
* __disabled__ | `boolean`: kontrollib, kas navigatsiooniriba on aktiivne või mitte. Default: `false`.
* __title__ | `(string|node)`: kuvatakse lehekülgede konteineri pealkiri. Default: `''`.
* __pagination__ | `string`: kas kuvada lehekülgede kaupa kas `top`, `bottom` või `both`.. Default: `'top'`.
* __size__ | `string`: leheküljenuppude suurus (kas `default`, `lg` või `sm`). Default: `'default'`.
* __height__ | `(number|string)`: konteineri maksimaalne kõrgus. Kui varjatud lehekülg on kõrgem, lisatakse vertikaalne kerimisriba.. Default: `none`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.
* __onSelect__ | `function`: Funktsioon, mida kutsutakse üles, kui aktiivne muutus on muutunud. Saab ainsa parameetrina uue aktiivse lehekülje indeksi.. Default: `onSelect() {}`.


## Näited

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

