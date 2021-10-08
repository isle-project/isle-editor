---
id: free-text-question 
title: Free Text Question
sidebar_label: Free Text Question
---

Komponenta ISLE za vprašanja, pri katerih morajo učenci odgovarjati v obliki prostega besedila.

## Možnosti

* __question__ | `(string|node)`: vprašanje, prikazano na vrhu komponente vprašanja s prostim besedilom.. Default: `''`.
* __hints__ | `array<(string|node)>`: napotki, kako odgovoriti na vprašanje.. Default: `[]`.
* __hintPlacement__ | `string`: umestitev namigov (`top`, `left`, `right` ali `bottom`). Default: `'top'`.
* __feedback__ | `boolean`: nadzoruje, ali se prikažejo gumbi za povratne informacije.. Default: `true`.
* __solution__ | `(string|node)`: vzorčni odgovor na problem. Default: `''`.
* __instantSolution__ | `boolean`: ali je mogoče takoj preklopiti prikaz vzorčnega odgovora. Default: `false`.
* __rows__ | `number`: število vrstic v besedilnem polju, v katere učenci vnesejo svoje odgovore.. Default: `5`.
* __chat__ | `boolean`: nadzoruje, ali naj omogoči skupinski klepet za vprašanje. Default: `false`.
* __resizable__ | `boolean`: nadzoruje, ali naj se spreminja velikost območja besedila.. Default: `false`.
* __placeholder__ | `string`: nadomestno besedilo, ki se prikaže, preden uporabnik vnese kakršno koli besedilo.. Default: `''`.
* __disableSubmitNotification__ | `boolean`: nadzoruje, ali onemogočiti obvestila o predložitvi.. Default: `false`.
* __submissionMsg__ | `string`: obvestilo, ki se prikaže, ko učenec prvič odda svoj odgovor.. Default: `''`.
* __resubmissionMsg__ | `string`: obvestilo, ki se prikaže za vse predložitve po prvi.. Default: `'You have successfully re-submitted your answer.'`.
* __provideFeedback__ | `boolean`: označuje, ali naj se po tem, ko učenci pošljejo svoje odgovore, prikaže povratna informacija, vključno s pravilnim odgovorom.. Default: `true`.
* __maxlength__ | `number`: največje dovoljeno število znakov. Default: `2500`.
* __until__ | `Date`: čas, do katerega lahko učenci oddajo odgovore.. Default: `none`.
* __points__ | `number`: največje število točk, ki se dodelijo pri razvrščanju. Default: `10`.
* __className__ | `string`: ime razreda. Default: `''`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.
* __onChange__ | `function`: povratni klic, ki se sproži vsakič, ko se spremeni vrednost območja besedila; kot edini argument prejme trenutno besedilo. Default: `onChange() {}`.
* __onSubmit__ | `function`: povratni klic, ki se sproži, ko uporabnik odda odgovor; kot edini argument prejme oddano besedilo. Default: `onSubmit() {}`.


## Primeri

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
