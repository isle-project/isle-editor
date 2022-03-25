---
id: number-question 
title: Number Question
sidebar_label: Number Question
---

Komponenta z vprašanjem o številu.

## Možnosti

* __question__ | `(string|node)`: vprašanje o številu. Default: `''`.
* __hintPlacement__ | `string`: umestitev namigov (`top`, `left`, `right` ali `bottom`). Default: `'top'`.
* __hints__ | `array<(string|node)>`: napotki, kako odgovoriti na vprašanje.. Default: `[]`.
* __feedback__ | `boolean`: nadzoruje, ali se prikažejo gumbi za povratne informacije.. Default: `true`.
* __solution__ | `(number|array<number>)`: številčni odgovor na problem (ali več pravilnih odgovorov, če je priloženo polje).. Default: `none`.
* __digits__ | `number`: število števk, za katere se mora učenčev odgovor ujemati z rešitvijo, da se šteje za pravilnega. Nastavite na 0, da se ujema s celim številom. Če je nastavljena na nič, se poišče natančno ujemanje. Default: `3`.
* __max__ | `number`: največja dovoljena vhodna vrednost. Default: `null`.
* __min__ | `number`: najmanjša dovoljena vhodna vrednost. Default: `null`.
* __defaultValue__ | `number`: vnaprej izbrana vrednost vhodnega števila. Default: `none`.
* __provideFeedback__ | `boolean`: označuje, ali naj se po tem, ko učenci pošljejo svoje odgovore, prikaže povratna informacija, vključno s pravilnim odgovorom.. Default: `true`.
* __submitAfterFeedback__ | `boolean`: nadzoruje, ali je treba omogočiti ponovno predložitev tudi po tem, ko je bila rešitev razkrita). Default: `false`.
* __nTries__ | `number`: po koliko poskusih je treba zagotoviti povratno informacijo (če je `provideFeedback` `true`). Default: `1`.
* __disableSubmitNotification__ | `boolean`: nadzoruje, ali onemogočiti obvestila o predložitvi.. Default: `false`.
* __chat__ | `boolean`: nadzoruje, ali naj ima element integriran klepet.. Default: `false`.
* __until__ | `Date`: čas, do katerega lahko učenci oddajo odgovore.. Default: `none`.
* __points__ | `number`: največje število točk, ki se dodelijo pri razvrščanju. Default: `10`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.
* __onChange__ | `function`: povratni klic, ki se sproži, ko se spremeni vrednost številskega polja; kot edini argument prejme trenutno vrednost.. Default: `onChange() {}`.
* __onSubmit__ | `function`: povratni klic, ki se sproži ob oddaji odgovora; kot prvi parameter ima `boolean`, ki označuje, ali je bil odgovor pravilen (če velja, sicer `null`), kot drugi parameter pa posredovani odgovor.. Default: `onSubmit() {}`.


## Primeri

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
