---
id: number-question 
title: Number Question
sidebar_label: Number Question
---

Jautājuma komponents.

## Iespējas

* __question__ | `(string|node)`: jautājums par numuru. Default: `''`.
* __hintPlacement__ | `string`: mājienu izvietojums (`top`, `left`, `right` vai `bottom`).. Default: `'top'`.
* __hints__ | `array<(string|node)>`: norādījumi, kā atbildēt uz jautājumu.. Default: `[]`.
* __feedback__ | `boolean`: kontrolē, vai tiek rādītas atgriezeniskās saites pogas.. Default: `true`.
* __solution__ | `(number|array<number>)`: skaitlisku atbildi uz uzdevumu (vai vairākas pareizas atbildes, ja ir sniegts masīvs).. Default: `none`.
* __digits__ | `number`: to ciparu skaits, kuru skolēna sniegtajai atbildei jāatbilst risinājumam, lai to uzskatītu par pareizu. Iestatiet 0, lai atbilstu kā vesels skaitlis. Ja iestatīts kā nulle, tiks meklēta precīza atbilstība.. Default: `3`.
* __max__ | `number`: maksimālā atļautā ieejas vērtība. Default: `null`.
* __min__ | `number`: minimālā atļautā ieejas vērtība. Default: `null`.
* __defaultValue__ | `number`: iepriekš izvēlēta skaitļa ievades vērtība. Default: `none`.
* __provideFeedback__ | `boolean`: norāda, vai pēc tam, kad izglītojamie ir iesnieguši atbildes, ir jānorāda atgriezeniskā saite, tostarp pareizā atbilde.. Default: `true`.
* __submitAfterFeedback__ | `boolean`: kontrolē, vai ir jābūt iespējai atkārtoti iesniegt pieteikumu arī pēc tam, kad risinājums ir atklāts).. Default: `false`.
* __nTries__ | `number`: pēc cik mēģinājumiem jāsniedz atgriezeniskā saite (ja `provideFeedback` ir `true`).. Default: `1`.
* __disableSubmitNotification__ | `boolean`: kontrolē, vai atspējot iesniegšanas paziņojumus.. Default: `false`.
* __chat__ | `boolean`: kontrolē, vai elementam ir jābūt integrētam tērzēšanas. Default: `false`.
* __until__ | `Date`: laiks, līdz skolēniem jāļauj iesniegt atbildes. Default: `none`.
* __points__ | `number`: maksimālais punktu skaits, ko piešķir klasifikācijā. Default: `10`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.
* __onChange__ | `function`: atgriezeniskais zvans, kas tiek aktivizēts pēc tam, kad mainās skaitļa lauka vērtība; kā vienīgo argumentu saņem pašreizējo vērtību.. Default: `onChange() {}`.
* __onSubmit__ | `function`: atgriezeniskais zvans, kas tiek izsaukts, kad atbilde ir iesniegta; pirmais parametrs ir `boolean`, kas norāda, vai atbilde ir pareiza (ja ir, citādi `null`), un otrais parametrs ir sniegtā atbilde.. Default: `onSubmit() {}`.


## Piemēri

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
