---
id: free-text-question 
title: Free Text Question
sidebar_label: Free Text Question
---

Komponent ISLE pre otázky, na ktoré by mali študenti odpovedať formou voľného textu.

## Možnosti

* __question__ | `(string|node)`: otázka zobrazená v hornej časti komponentu voľného textu. Default: `''`.
* __hints__ | `array<(string|node)>`: nápovedy, ktoré poskytujú návod, ako odpovedať na otázku. Default: `[]`.
* __hintPlacement__ | `string`: umiestnenie nápovedy (buď `top`, `left`, `right` alebo `bottom`). Default: `'top'`.
* __feedback__ | `boolean`: ovláda, či sa majú zobrazovať tlačidlá spätnej väzby.. Default: `true`.
* __solution__ | `(string|node)`: vzorová odpoveď na problém. Default: `''`.
* __instantSolution__ | `boolean`: či je možné okamžite prepnúť zobrazenie modelovej odpovede. Default: `false`.
* __rows__ | `number`: počet riadkov textového poľa, do ktorého môžu žiaci písať svoje odpovede. Default: `5`.
* __chat__ | `boolean`: kontroluje, či sa má pre otázku povoliť skupinový chat.. Default: `false`.
* __resizable__ | `boolean`: kontroluje, či sa má meniť veľkosť textovej oblasti.. Default: `false`.
* __placeholder__ | `string`: zástupný text zobrazený pred tým, ako používateľ zadá akýkoľvek text. Default: `''`.
* __disableSubmitNotification__ | `boolean`: kontroluje, či sa majú vypnúť oznámenia o odoslaní.. Default: `false`.
* __submissionMsg__ | `string`: oznámenie zobrazené pri prvom odoslaní odpovede žiakom. Default: `''`.
* __resubmissionMsg__ | `string`: oznámenie zobrazené pre všetky podania po prvom podaní. Default: `'You have successfully re-submitted your answer.'`.
* __provideFeedback__ | `boolean`: označuje, či sa má po odoslaní odpovede žiakom zobraziť spätná väzba vrátane správnej odpovede.. Default: `true`.
* __maxlength__ | `number`: maximálny povolený počet znakov. Default: `2500`.
* __until__ | `Date`: čas, dokedy by študenti mali mať možnosť predložiť odpovede.. Default: `none`.
* __points__ | `number`: maximálny počet bodov udelených pri klasifikácii. Default: `10`.
* __className__ | `string`: názov triedy. Default: `''`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.
* __onChange__ | `function`: spätné volanie vyvolané pri každej zmene hodnoty textovej oblasti; ako jediný argument prijíma aktuálny text. Default: `onChange() {}`.
* __onSubmit__ | `function`: spätné volanie vyvolané pri odoslaní odpovede používateľom; ako jediný argument dostane odoslaný text. Default: `onSubmit() {}`.


## Príklady

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Points for Grading', value: 'withPointsForGrading' },
        { label: 'No Feedback', value: 'withoutFeedbackAndNotification' },
        { label: 'Solution', value: 'withSolution' },
        { label: 'Hints', value: 'withHints' },
        { label: 'Placeholder', value: 'placeholderText' },
        { label: 'Due Date', value: 'dueDate' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<FreeTextQuestion 
    question="Please tell us your thoughts about this course." 
    rows={3} 
/>
```
</TabItem>

<TabItem value="withPointsForGrading" >

```jsx live
<FreeTextQuestion 
    question={<span>Can you please explain Montesquieu's System of *separation of powers*?</span>} 
    rows={3} 
    points={15}
/>
```

</TabItem>

<TabItem value="withoutFeedbackAndNotification" >

```jsx live
<FreeTextQuestion 
    question="Please tell us your thoughts about this course." 
    rows={3}
    disableSubmitNotification 
    feedback={false}
/>
```

</TabItem>

<TabItem value="withSolution" > 

```jsx live
<FreeTextQuestion 
    question="Who was the English prime minister who spoke of 'blood, sweat and tears'?" 
    rows={1} 
    solution="Winston Churchill" 
/>
```

</TabItem>

<TabItem value="withHints" >

```jsx live
<FreeTextQuestion 
    question="Who was the English prime minister who spoke of 'blood, sweat and tears'?" 
    rows={1} 
    solution="Winston Churchill" 
    hints = {["No, it was not Margret Thatcher", "He believed in Aliens by the way", "His first name was Winston - like the guy in 1984"]}
    submissionMsg = "His name was Winston churchill, and it occurred in a speech given by him to the House of Commons of the Parliament of the United Kingdom on 13 May 1940. The speech is sometimes known by that name"
/>
```

</TabItem>

<TabItem value="placeholderText" >

```jsx live
<FreeTextQuestion 
    question="Who was the English prime minister who spoke of 'blood, sweat and tears'?" 
    rows={3} 
    solution="Winston Churchill" 
    placeholder="Think of an overweight politician with a big cigar in his mouth."
/>
```

</TabItem>

<TabItem value="dueDate" >

```jsx live
<FreeTextQuestion 
    question="Please tell us your thoughts about this course." 
    rows={3} 
    until={new Date( Date.UTC(2029, 0, 1, 3, 33 ) )}
    placeholder="You can set a date until answers are accepted. In this case it is 2020, 1st of January, 3:30 am UTC time."
/>
```

</TabItem>

</Tabs>
