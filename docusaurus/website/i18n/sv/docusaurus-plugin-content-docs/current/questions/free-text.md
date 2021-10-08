---
id: free-text-question 
title: Free Text Question
sidebar_label: Free Text Question
---

En ISLE-komponent för frågor där elevernas svar ska lämnas i form av fritext.

## Alternativ

* __question__ | `(string|node)`: den fråga som visas överst i fritextfrågan.. Default: `''`.
* __hints__ | `array<(string|node)>`: tips som ger vägledning om hur frågan ska besvaras. Default: `[]`.
* __hintPlacement__ | `string`: placering av tipsen (antingen `top`, `left`, `right` eller `bottom`). Default: `'top'`.
* __feedback__ | `boolean`: kontrollerar om återkopplingsknapparna ska visas. Default: `true`.
* __solution__ | `(string|node)`: En modell för att lösa problemet.. Default: `''`.
* __instantSolution__ | `boolean`: Om man kan växla mellan visningen av modellens svar omedelbart.. Default: `false`.
* __rows__ | `number`: antal rader i textfältet där eleverna kan skriva sina svar. Default: `5`.
* __chat__ | `boolean`: kontrollerar om gruppchatt ska aktiveras för frågan. Default: `false`.
* __resizable__ | `boolean`: kontrollerar om textområdet ska kunna ändras i storlek. Default: `false`.
* __placeholder__ | `string`: platshållartext som visas innan användaren har skrivit in någon text.. Default: `''`.
* __disableSubmitNotification__ | `boolean`: kontrollerar om anmälningar om inlämning ska inaktiveras. Default: `false`.
* __submissionMsg__ | `string`: Meddelande som visas när eleven för första gången skickar in sitt svar.. Default: `''`.
* __resubmissionMsg__ | `string`: Meddelande som visas för alla inlämningar efter den första.. Default: `'You have successfully re-submitted your answer.'`.
* __provideFeedback__ | `boolean`: anger om återkoppling, inklusive det rätta svaret, ska visas efter att eleverna skickat in sina svar.. Default: `true`.
* __maxlength__ | `number`: högsta tillåtna antal tecken. Default: `2500`.
* __until__ | `Date`: tid fram till dess att eleverna ska få lämna in sina svar. Default: `none`.
* __points__ | `number`: Maximalt antal poäng som tilldelas vid betygsättning.. Default: `10`.
* __className__ | `string`: klassens namn. Default: `''`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.
* __onChange__ | `function`: callback som aktiveras varje gång textområdets värde ändras; tar emot den aktuella texten som enda argument.. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback som aktiveras när användaren skickar in ett svar; får den skickade texten som enda argument.. Default: `onSubmit() {}`.


## Exempel

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
