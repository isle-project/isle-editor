---
id: free-text-question 
title: Free Text Question
sidebar_label: Free Text Question
---

O componentă ISLE pentru întrebările la care răspunsurile elevilor trebuie să fie furnizate sub formă de text liber.

## Opțiuni

* __question__ | `(string|node)`: întrebarea afișată în partea de sus a componentei de întrebare cu text liber. Default: `''`.
* __hints__ | `array<(string|node)>`: indicii care oferă îndrumări privind modul de răspuns la întrebare. Default: `[]`.
* __hintPlacement__ | `string`: plasarea indicilor (fie `top`, `left`, `right`, sau `bottom`). Default: `'top'`.
* __feedback__ | `boolean`: controlează dacă se afișează butoanele de feedback. Default: `true`.
* __solution__ | `(string|node)`: un răspuns model la problemă. Default: `''`.
* __instantSolution__ | `boolean`: dacă se poate comuta afișarea imediată a modelului de răspuns. Default: `false`.
* __rows__ | `number`: numărul de rânduri ale câmpului de text pentru ca elevii să își scrie răspunsurile. Default: `5`.
* __chat__ | `boolean`: controlează dacă se activează sau nu chat-ul de grup pentru întrebare. Default: `false`.
* __resizable__ | `boolean`: controlează dacă zona de text trebuie să fie redimensionabilă. Default: `false`.
* __placeholder__ | `string`: text de tip "placeholder" afișat înainte ca utilizatorul să fi introdus vreun text. Default: `''`.
* __disableSubmitNotification__ | `boolean`: controlează dacă se dezactivează sau nu notificările de trimitere. Default: `false`.
* __submissionMsg__ | `string`: notificare afișată atunci când persoana care învață își trimite răspunsul pentru prima dată. Default: `''`.
* __resubmissionMsg__ | `string`: notificare afișată pentru toate trimiterile după prima trimitere. Default: `'You have successfully re-submitted your answer.'`.
* __provideFeedback__ | `boolean`: indică dacă feedback-ul care include răspunsul corect trebuie afișat după ce cursanții își trimit răspunsurile. Default: `true`.
* __maxlength__ | `number`: numărul maxim admis de caractere. Default: `2500`.
* __until__ | `Date`: timpul până la care studenții ar trebui să fie lăsați să trimită răspunsurile. Default: `none`.
* __points__ | `number`: numărul maxim de puncte acordate în cadrul clasificării. Default: `10`.
* __className__ | `string`: numele clasei. Default: `''`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.
* __onChange__ | `function`: callback invocat de fiecare dată când se modifică valoarea zonei de text; primește textul curent ca unic argument. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback invocat atunci când utilizatorul trimite un răspuns; primește textul trimis ca unic argument. Default: `onSubmit() {}`.


## Exemple

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
