---
id: number-question 
title: Number Question
sidebar_label: Number Question
---

Egy számkérdés-összetevő.

## Opciók

* __question__ | `(string|node)`: számkérdés. Default: `''`.
* __hintPlacement__ | `string`: a tippek elhelyezése (vagy `top`, `left`, `right`, vagy `bottom`). Default: `'top'`.
* __hints__ | `array<(string|node)>`: a kérdés megválaszolására vonatkozó útmutatásokat ad. Default: `[]`.
* __feedback__ | `boolean`: szabályozza, hogy megjelenjenek-e a visszajelző gombok. Default: `true`.
* __solution__ | `(number|array<number>)`: a feladatra adott numerikus válasz (vagy több helyes válasz, ha tömböt adunk meg). Default: `none`.
* __digits__ | `number`: azon számjegyek száma, amelyek esetében a tanuló által adott válasznak meg kell egyeznie a megoldással ahhoz, hogy helyesnek lehessen tekinteni. Egész számként való megfeleléshez állítsa 0-ra. Ha nullára van állítva, akkor a pontos egyezést keresi.. Default: `3`.
* __max__ | `number`: maximálisan megengedett bemeneti érték. Default: `null`.
* __min__ | `number`: minimálisan megengedett bemeneti érték. Default: `null`.
* __defaultValue__ | `number`: előre kiválasztott érték a számbemenethez. Default: `none`.
* __provideFeedback__ | `boolean`: jelzi, hogy a helyes választ tartalmazó visszajelzés megjelenjen-e, miután a tanulók elküldték a válaszaikat. Default: `true`.
* __submitAfterFeedback__ | `boolean`: ellenőrzi, hogy a megoldás felfedése után is újra be lehet-e nyújtani a pályázatot). Default: `false`.
* __nTries__ | `number`: hány próbálkozás után kell visszajelzést adni (ha a `provideFeedback` értéke `true`). Default: `1`.
* __disableSubmitNotification__ | `boolean`: szabályozza a benyújtási értesítések letiltását. Default: `false`.
* __chat__ | `boolean`: szabályozza, hogy az elemnek legyen-e integrált chatje. Default: `false`.
* __until__ | `Date`: a tanulóknak a válaszok benyújtásáig rendelkezésre álló idő. Default: `none`.
* __points__ | `number`: az osztályozás során adható maximális pontszám. Default: `10`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.
* __onChange__ | `function`: callback, amely a számmező értékének változása után lép működésbe; egyetlen argumentumként az aktuális értéket kapja.. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback, amelyet a válasz elküldésekor hívnak meg; első paramétere egy "bólé", amely jelzi, hogy a válasz helyesen lett-e megválaszolva (ha alkalmazható, egyébként "nulla"), második paramétere pedig a megadott válasz.. Default: `onSubmit() {}`.


## Példák

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Markdown', value: 'markdownStyling' },
        { label: 'With CSS', value: 'withCSS' }
        
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<NumberQuestion
    question="What is the number Pi? (include at least three digits after the decimal point)"
    solution={3.142}
/>
```
</TabItem>

<TabItem value="markdownStyling">

```jsx live
<NumberQuestion
    question={<span>What is the number $\pi$? (include at least _three_ digits after the decimal point)</span>}
    solution={3.142}
/>
```
</TabItem>

<TabItem value="withCSS">

```jsx live
<NumberQuestion
    question={<span style={{ fontSize: 25, color: 'darkorange'}}>What is the number PI - three digits after the period</span>}
    solution={3.142}
/>
```
</TabItem>

</Tabs>
