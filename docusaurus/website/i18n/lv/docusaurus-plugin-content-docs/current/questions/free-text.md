---
id: free-text-question 
title: Free Text Question
sidebar_label: Free Text Question
---

ISLE komponents jautājumiem, uz kuriem skolēniem atbildes jāsniedz brīvā teksta veidā.

## Iespējas

* __question__ | `(string|node)`: brīvā teksta jautājuma komponenta augšpusē redzamais jautājums.. Default: `''`.
* __hints__ | `array<(string|node)>`: norādījumi, kā atbildēt uz jautājumu.. Default: `[]`.
* __hintPlacement__ | `string`: mājienu izvietojums (`top`, `left`, `right` vai `bottom`).. Default: `'top'`.
* __feedback__ | `boolean`: kontrolē, vai tiek rādītas atgriezeniskās saites pogas.. Default: `true`.
* __solution__ | `(string|node)`: parauga atbilde uz problēmu. Default: `''`.
* __instantSolution__ | `boolean`: vai var uzreiz pārslēgt modeļa atbildes rādīšanu.. Default: `false`.
* __rows__ | `number`: teksta lauka rindu skaits, kurās skolēni var ierakstīt savas atbildes.. Default: `5`.
* __chat__ | `boolean`: kontrolē, vai iespējot grupas tērzēšanas vajadzētu par jautājumu. Default: `false`.
* __resizable__ | `boolean`: nosaka, vai teksta apgabalam ir jāmaina izmērs.. Default: `false`.
* __placeholder__ | `string`: aizvietotājteksts tiek parādīts, pirms lietotājs ir ievadījis jebkādu tekstu.. Default: `''`.
* __disableSubmitNotification__ | `boolean`: kontrolē, vai atspējot iesniegšanas paziņojumus.. Default: `false`.
* __submissionMsg__ | `string`: paziņojums, kas tiek parādīts, kad skolēns pirmo reizi iesniedz atbildi.. Default: `''`.
* __resubmissionMsg__ | `string`: paziņojums tiek parādīts par visiem iesniegumiem pēc pirmā iesnieguma.. Default: `'You have successfully re-submitted your answer.'`.
* __provideFeedback__ | `boolean`: norāda, vai pēc tam, kad izglītojamie ir iesnieguši atbildes, ir jānorāda atgriezeniskā saite, tostarp pareizā atbilde.. Default: `true`.
* __maxlength__ | `number`: maksimālais atļautais rakstzīmju skaits. Default: `2500`.
* __until__ | `Date`: laiks, līdz skolēniem jāļauj iesniegt atbildes. Default: `none`.
* __points__ | `number`: maksimālais punktu skaits, ko piešķir klasifikācijā. Default: `10`.
* __className__ | `string`: klases nosaukums. Default: `''`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.
* __onChange__ | `function`: atsauces zvans, kas tiek izsaukts ikreiz, kad mainās teksta apgabala vērtība; kā vienīgo argumentu saņem pašreizējo tekstu.. Default: `onChange() {}`.
* __onSubmit__ | `function`: atgriezeniskais zvans, kas tiek izsaukts, kad lietotājs iesniedz atbildi; kā vienīgo argumentu saņem iesniegto tekstu.. Default: `onSubmit() {}`.


## Piemēri

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
