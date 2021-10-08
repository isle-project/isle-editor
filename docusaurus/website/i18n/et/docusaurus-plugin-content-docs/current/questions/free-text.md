---
id: free-text-question 
title: Free Text Question
sidebar_label: Free Text Question
---

ISLE-komponent küsimuste jaoks, millele õpilased peaksid vastama vaba tekstina.

## Valikud

* __question__ | `(string|node)`: vabatekstilise küsimuse komponendi ülaosas kuvatav küsimus. Default: `''`.
* __hints__ | `array<(string|node)>`: vihjeid, mis annavad suuniseid küsimusele vastamiseks. Default: `[]`.
* __hintPlacement__ | `string`: vihjete paigutus (kas `top`, `left`, `right` või `bottom`).. Default: `'top'`.
* __feedback__ | `boolean`: kontrollib, kas tagasiside nuppe kuvada. Default: `true`.
* __solution__ | `(string|node)`: näidisvastus probleemile. Default: `''`.
* __instantSolution__ | `boolean`: kas mudelivastuse kuvamist saab kohe ümber lülitada. Default: `false`.
* __rows__ | `number`: tekstivälja ridade arv, kuhu õpilased saavad oma vastused sisestada. Default: `5`.
* __chat__ | `boolean`: kontrollib, kas lubada grupivestlust peaks küsimuse jaoks lubama. Default: `false`.
* __resizable__ | `boolean`: kontrollib, kas tekstiala peaks olema muudetava suurusega. Default: `false`.
* __placeholder__ | `string`: paigutustekst, mis kuvatakse enne, kui kasutaja on teksti sisestanud.. Default: `''`.
* __disableSubmitNotification__ | `boolean`: kontrollib, kas keelata esitamisteated. Default: `false`.
* __submissionMsg__ | `string`: teade, mis kuvatakse, kui õppija esitab oma vastuse esimest korda.. Default: `''`.
* __resubmissionMsg__ | `string`: teatis, mis kuvatakse kõigi pärast esimest esitatud taotluste puhul. Default: `'You have successfully re-submitted your answer.'`.
* __provideFeedback__ | `boolean`: näitab, kas pärast õppijate vastuste esitamist tuleb kuvada tagasisidet, mis sisaldab õiget vastust.. Default: `true`.
* __maxlength__ | `number`: maksimaalne lubatud tähemärkide arv. Default: `2500`.
* __until__ | `Date`: aega, kuni õpilastel peaks olema lubatud vastuseid esitada. Default: `none`.
* __points__ | `number`: hindamisel antavate punktide maksimaalne arv. Default: `10`.
* __className__ | `string`: klassi nimi. Default: `''`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.
* __onChange__ | `function`: callback, mida kutsutakse esile iga kord, kui tekstiala väärtus muutub; saab ainsa argumendina praeguse teksti. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback, mida kutsutakse esile, kui kasutaja esitab vastuse; saab ainsa argumendina esitatud teksti. Default: `onSubmit() {}`.


## Näited

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
