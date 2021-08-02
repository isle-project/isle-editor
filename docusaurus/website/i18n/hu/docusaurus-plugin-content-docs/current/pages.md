---
id: pages 
title: Pages
sidebar_label: Pages
---

Egy ISLE lapozási komponens, amely lehetővé teszi a felhasználó számára, hogy az oldalak sorrendjében lépkedjen.

## Opciók

* __activePage__ | `number`: aktív oldal. Default: `1`.
* __disabled__ | `boolean`: szabályozza, hogy a navigációs sáv aktív legyen-e vagy sem. Default: `false`.
* __title__ | `(string|node)`: az oldalak konténerének megjelenített címe. Default: `''`.
* __pagination__ | `string`: hogy a lapozás a `top`, `bottom` vagy `both` oldalon jelenjen meg.. Default: `'top'`.
* __size__ | `string`: a lapozási gombok mérete (vagy `default`, `lg`, vagy `sm`). Default: `'default'`.
* __height__ | `(number|string)`: a tartály maximális magassága. Ha egy beágyazott oldal magasabb, a rendszer függőleges görgetősávot ad hozzá.. Default: `none`.
* __voiceID__ | `string`: hangvezérlés azonosító. Default: `none`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.
* __onSelect__ | `function`: Funkció, amelyet az aktív változás megváltoztatásakor hívnak meg. Egyetlen paraméterként az új aktív oldal indexét kapja.. Default: `onSelect() {}`.


## Példák

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

