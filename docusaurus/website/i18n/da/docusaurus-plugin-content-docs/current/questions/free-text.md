---
id: free-text-question 
title: Free Text Question
sidebar_label: Free Text Question
---

En ISLE-komponent til spørgsmål, hvor elevernes svar skal gives i form af fri tekst.

## Indstillinger

* __question__ | `(string|node)`: det spørgsmål, der vises øverst i spørgselselementet med fritekst. Default: `''`.
* __hints__ | `array<(string|node)>`: tips, der giver vejledning om, hvordan spørgsmålet skal besvares. Default: `[]`.
* __hintPlacement__ | `string`: placeringen af vejledningerne (enten `top`, `left`, `right` eller `bottom`). Default: `'top'`.
* __feedback__ | `boolean`: styrer, om der skal vises feedback-knapper. Default: `true`.
* __solution__ | `(string|node)`: en model til løsning af problemet. Default: `''`.
* __instantSolution__ | `boolean`: om man straks kan skifte mellem visning af modelbesvarelsen. Default: `false`.
* __rows__ | `number`: antallet af rækker i tekstfeltet, hvor eleverne kan skrive deres svar. Default: `5`.
* __chat__ | `boolean`: kontrollerer, om gruppechat skal aktiveres for spørgsmålet. Default: `false`.
* __resizable__ | `boolean`: kontrollerer, om tekstområdet skal kunne ændres i størrelse. Default: `false`.
* __placeholder__ | `string`: pladsholdertekst, der vises, før brugeren har indtastet nogen tekst. Default: `''`.
* __disableSubmitNotification__ | `boolean`: kontrollerer, om meddelelser om indsendelse skal deaktiveres. Default: `false`.
* __submissionMsg__ | `string`: meddelelse, der vises, når den lærende først indsender sit svar. Default: `''`.
* __resubmissionMsg__ | `string`: meddelelse, der vises for alle indsendelser efter den første. Default: `'You have successfully re-submitted your answer.'`.
* __provideFeedback__ | `boolean`: angiver, om der skal vises feedback, herunder det korrekte svar, efter at eleverne har indsendt deres svar. Default: `true`.
* __maxlength__ | `number`: maksimalt tilladt antal tegn. Default: `2500`.
* __until__ | `Date`: den tid, der skal gå, før de studerende kan afgive svar. Default: `none`.
* __points__ | `number`: det maksimale antal point, der kan tildeles ved bedømmelsen. Default: `10`.
* __className__ | `string`: klassens navn. Default: `''`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.
* __onChange__ | `function`: callback, der påkaldes hver gang tekstområdets værdi ændres; modtager den aktuelle tekst som det eneste argument. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback, der påkaldes, når brugeren indsender et svar; modtager den indsendte tekst som det eneste argument. Default: `onSubmit() {}`.


## Eksempler

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
