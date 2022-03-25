---
id: number-question 
title: Number Question
sidebar_label: Number Question
---

Number küsimus komponent.

## Valikud

* __question__ | `(string|node)`: numbriküsimus. Default: `''`.
* __hintPlacement__ | `string`: vihjete paigutus (kas `top`, `left`, `right` või `bottom`).. Default: `'top'`.
* __hints__ | `array<(string|node)>`: vihjeid, mis annavad suuniseid küsimusele vastamiseks. Default: `[]`.
* __feedback__ | `boolean`: kontrollib, kas tagasiside nuppe kuvada. Default: `true`.
* __solution__ | `(number|array<number>)`: numbriline vastus probleemile (või mitu õiget vastust, kui on esitatud massiivi).. Default: `none`.
* __digits__ | `number`: numbrite arv, mille puhul õpilase antud vastus peab vastama lahendusele, et seda saaks pidada õigeks. Vastamiseks täisarvuna määrata 0. Kui see on null, otsitakse täpset vastet.. Default: `3`.
* __max__ | `number`: maksimaalne lubatud sisendväärtus. Default: `null`.
* __min__ | `number`: minimaalne lubatud sisendväärtus. Default: `null`.
* __defaultValue__ | `number`: eelnevalt valitud numbrisisendi väärtus. Default: `none`.
* __provideFeedback__ | `boolean`: näitab, kas pärast õppijate vastuste esitamist tuleb kuvada tagasisidet, mis sisaldab õiget vastust.. Default: `true`.
* __submitAfterFeedback__ | `boolean`: kontrollib, kas peaks olema võimalik uuesti esitada ka pärast lahenduse avalikustamist). Default: `false`.
* __nTries__ | `number`: kui paljude katsete järel tuleb tagasisidet anda (kui `provideFeedback` on `true`).. Default: `1`.
* __disableSubmitNotification__ | `boolean`: kontrollib, kas keelata esitamisteated. Default: `false`.
* __chat__ | `boolean`: kontrollib, kas elemendil peaks olema integreeritud vestlus. Default: `false`.
* __until__ | `Date`: aega, kuni õpilastel peaks olema lubatud vastuseid esitada. Default: `none`.
* __points__ | `number`: hindamisel antavate punktide maksimaalne arv. Default: `10`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.
* __onChange__ | `function`: callback, mis käivitub pärast numbrivälja väärtuse muutumist; saab ainsa argumendina praeguse väärtuse.. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback, mis kutsutakse üles, kui vastus on esitatud; esimese parameetrina on "boolean", mis näitab, kas vastus on õigesti vastatud (kui see on asjakohane, vastasel juhul "null") ja teise parameetrina esitatud vastus.. Default: `onSubmit() {}`.


## Näited

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
