---
id: pages 
title: Pages
sidebar_label: Pages
---

ISLE-sivukomponentti, jonka avulla käyttäjä voi siirtyä sivusarjan läpi.

## Vaihtoehdot

* __activePage__ | `number`: aktiivinen sivu. Default: `1`.
* __disabled__ | `boolean`: ohjaa, onko navigointipalkki aktiivinen vai ei. Default: `false`.
* __title__ | `(string|node)`: sivujen säiliön näytetty otsikko. Default: `''`.
* __pagination__ | `string`: näytetäänkö sivunumerointi joko `top`, `bottom` vai `both`.. Default: `'top'`.
* __size__ | `string`: sivunumeropainikkeiden koko (joko `default`, `lg` tai `sm`).. Default: `'default'`.
* __height__ | `(number|string)`: säiliön enimmäiskorkeus. Jos upotettu sivu on korkeampi, lisätään pystysuora vierityspalkki.. Default: `none`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.
* __onSelect__ | `function`: Toiminto, jota kutsutaan, kun aktiivinen muutos on muutettu. Vastaanottaa ainoana parametrina uuden aktiivisen sivun indeksin.. Default: `onSelect() {}`.


## Esimerkkejä

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

