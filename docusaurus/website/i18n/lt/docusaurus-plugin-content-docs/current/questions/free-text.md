---
id: free-text-question 
title: Free Text Question
sidebar_label: Free Text Question
---

ISLE komponentas, skirtas klausimams, į kuriuos mokiniai turėtų atsakyti laisvu tekstu.

## Parinktys

* __question__ | `(string|node)`: laisvo teksto klausimų komponento viršuje rodomas klausimas.. Default: `''`.
* __hints__ | `array<(string|node)>`: užuominos, kuriose pateikiamos rekomendacijos, kaip atsakyti į klausimą.. Default: `[]`.
* __hintPlacement__ | `string`: užuominų vieta (`top`, `left`, `right` arba `bottom`).. Default: `'top'`.
* __feedback__ | `boolean`: kontroliuoja, ar rodyti grįžtamojo ryšio mygtukus.. Default: `true`.
* __solution__ | `(string|node)`: pavyzdinis atsakymas į problemą. Default: `''`.
* __instantSolution__ | `boolean`: ar galima iš karto perjungti modelio atsakymo rodymą. Default: `false`.
* __rows__ | `number`: teksto lauko, kuriame mokiniai gali įvesti savo atsakymus, eilučių skaičius.. Default: `5`.
* __chat__ | `boolean`: kontroliuoja, ar įjungti grupinį pokalbį turėtų už klausimą. Default: `false`.
* __resizable__ | `boolean`: kontroliuoja, ar teksto sritis turi būti keičiamo dydžio.. Default: `false`.
* __placeholder__ | `string`: pakaitinis tekstas rodomas prieš naudotojui įvedant bet kokį tekstą.. Default: `''`.
* __disableSubmitNotification__ | `boolean`: kontroliuoja, ar išjungti pranešimus apie pateikimą.. Default: `false`.
* __submissionMsg__ | `string`: pranešimas rodomas, kai besimokantysis pirmą kartą pateikia atsakymą.. Default: `''`.
* __resubmissionMsg__ | `string`: pranešimas rodomas apie visas po pirmojo pateikimo pateiktas paraiškas.. Default: `'You have successfully re-submitted your answer.'`.
* __provideFeedback__ | `boolean`: nurodo, ar mokiniams pateikus atsakymus turėtų būti rodomas grįžtamasis ryšys, įskaitant teisingą atsakymą.. Default: `true`.
* __maxlength__ | `number`: didžiausias leistinas simbolių skaičius. Default: `2500`.
* __until__ | `Date`: laikas, per kurį mokiniams turėtų būti leista pateikti atsakymus.. Default: `none`.
* __points__ | `number`: maksimalus balų skaičius, suteikiamas vertinant. Default: `10`.
* __className__ | `string`: klasės pavadinimas. Default: `''`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.
* __onChange__ | `function`: atgalinis skambutis, inicijuojamas kiekvieną kartą, kai pasikeičia teksto srities vertė; vienintelis argumentas - dabartinis tekstas.. Default: `onChange() {}`.
* __onSubmit__ | `function`: grįžtamasis ryšys, inicijuojamas vartotojui pateikus atsakymą; vienintelis argumentas - pateiktas tekstas.. Default: `onSubmit() {}`.


## Pavyzdžiai

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
