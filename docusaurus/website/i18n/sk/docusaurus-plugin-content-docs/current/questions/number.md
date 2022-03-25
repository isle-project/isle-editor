---
id: number-question 
title: Number Question
sidebar_label: Number Question
---

Zložka s otázkou o počte.

## Možnosti

* __question__ | `(string|node)`: otázka na číslo. Default: `''`.
* __hintPlacement__ | `string`: umiestnenie nápovedy (buď `top`, `left`, `right` alebo `bottom`). Default: `'top'`.
* __hints__ | `array<(string|node)>`: nápovedy, ktoré poskytujú návod, ako odpovedať na otázku. Default: `[]`.
* __feedback__ | `boolean`: ovláda, či sa majú zobrazovať tlačidlá spätnej väzby.. Default: `true`.
* __solution__ | `(number|array<number>)`: číselnú odpoveď na problém (alebo viacero správnych odpovedí, ak je zadané pole).. Default: `none`.
* __digits__ | `number`: počet číslic, pre ktoré sa odpoveď poskytnutá žiakom musí zhodovať s riešením, aby sa považovala za správnu. Nastavte na 0, aby sa zhodovala ako celé číslo. Ak je nastavená na nulu, bude sa hľadať presná zhoda. Default: `3`.
* __max__ | `number`: maximálna povolená vstupná hodnota. Default: `null`.
* __min__ | `number`: minimálna povolená vstupná hodnota. Default: `null`.
* __defaultValue__ | `number`: vopred zvolená hodnota zadaného čísla. Default: `none`.
* __provideFeedback__ | `boolean`: označuje, či sa má po odoslaní odpovede žiakom zobraziť spätná väzba vrátane správnej odpovede.. Default: `true`.
* __submitAfterFeedback__ | `boolean`: kontroluje, či by mal mať človek možnosť opätovne podať žiadosť aj po odhalení riešenia). Default: `false`.
* __nTries__ | `number`: po koľkých pokusoch sa má poskytnúť spätná väzba (ak je `provideFeedback` `true`). Default: `1`.
* __disableSubmitNotification__ | `boolean`: kontroluje, či sa majú vypnúť oznámenia o odoslaní.. Default: `false`.
* __chat__ | `boolean`: kontroluje, či má mať prvok integrovaný chat. Default: `false`.
* __until__ | `Date`: čas, dokedy by študenti mali mať možnosť predložiť odpovede.. Default: `none`.
* __points__ | `number`: maximálny počet bodov udelených pri klasifikácii. Default: `10`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.
* __onChange__ | `function`: spätné volanie, ktoré sa spustí po zmene hodnoty číselného poľa; ako jediný argument dostane aktuálnu hodnotu. Default: `onChange() {}`.
* __onSubmit__ | `function`: spätné volanie vyvolané po odoslaní odpovede; ako prvý parameter má `boolean` označujúci, či bola odpoveď správne zodpovedaná (ak je to možné, inak `null`), a ako druhý parameter zadanú odpoveď. Default: `onSubmit() {}`.


## Príklady

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
