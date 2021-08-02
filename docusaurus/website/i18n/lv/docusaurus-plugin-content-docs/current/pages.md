---
id: pages 
title: Pages
sidebar_label: Pages
---

ISLE lapu kārtošanas komponents, kas ļauj lietotājam soli pa solim pāriet lapu secībā.

## Iespējas

* __activePage__ | `number`: aktīvā lapa. Default: `1`.
* __disabled__ | `boolean`: nosaka, vai navigācijas josla ir vai nav aktīva.. Default: `false`.
* __title__ | `(string|node)`: parādīts lappušu konteinera virsraksts. Default: `''`.
* __pagination__ | `string`: vai lappušu numerācija tiks parādīta `top`, `bottom` vai `bottom`.. Default: `'top'`.
* __size__ | `string`: Lapošanas pogas lielums (vai nu `default`, `lg`, vai `sm`).. Default: `'default'`.
* __height__ | `(number|string)`: konteinera maksimālais augstums. Ja iegultā lapa ir augstāka, tiek pievienota vertikālā ritināšanas josla.. Default: `none`.
* __voiceID__ | `string`: balss vadības identifikators. Default: `none`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.
* __onSelect__ | `function`: Funkcija, kas tiek izsaukta, kad tiek mainīta aktīvā maiņa. Kā vienīgo parametru saņem jauno aktīvās lapas indeksu.. Default: `onSelect() {}`.


## Piemēri

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

