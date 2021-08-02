---
id: pages 
title: Pages
sidebar_label: Pages
---

Komponenta za paginacijo ISLE, ki uporabniku omogoča, da se pomika po zaporedju strani.

## Možnosti

* __activePage__ | `number`: aktivna stran. Default: `1`.
* __disabled__ | `boolean`: nadzoruje, ali je navigacijska vrstica aktivna ali ne.. Default: `false`.
* __title__ | `(string|node)`: prikazan naslov vsebnika strani. Default: `''`.
* __pagination__ | `string`: ali naj se paginacija prikaže na `top`, `bottom` ali `both`. Default: `'top'`.
* __size__ | `string`: velikost gumbov za paginacijo (bodisi `default`, `lg` ali `sm`).. Default: `'default'`.
* __height__ | `(number|string)`: največjo višino posode. Če je vstavljena stran višja, se doda navpična drsna vrstica. Default: `none`.
* __voiceID__ | `string`: identifikator glasovnega upravljanja. Default: `none`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.
* __onSelect__ | `function`: Funkcija, ki se sproži ob spremembi aktivne spremembe. Kot edini parameter prejme novi indeks aktivne strani. Default: `onSelect() {}`.


## Primeri

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

