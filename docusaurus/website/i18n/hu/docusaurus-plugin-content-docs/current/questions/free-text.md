---
id: free-text-question 
title: Free Text Question
sidebar_label: Free Text Question
---

Egy ISLE-komponens olyan kérdésekhez, amelyekre a tanulóknak szabad szöveges formában kell válaszolniuk.

## Opciók

* __question__ | `(string|node)`: a szabadszöveges kérdéskomponens tetején megjelenő kérdés. Default: `''`.
* __hints__ | `array<(string|node)>`: a kérdés megválaszolására vonatkozó útmutatásokat ad. Default: `[]`.
* __hintPlacement__ | `string`: a tippek elhelyezése (vagy `top`, `left`, `right`, vagy `bottom`). Default: `'top'`.
* __feedback__ | `boolean`: szabályozza, hogy megjelenjenek-e a visszajelző gombok. Default: `true`.
* __solution__ | `(string|node)`: modellértékű válasz a problémára. Default: `''`.
* __instantSolution__ | `boolean`: hogy a modellválasz megjelenítését azonnal át lehet-e kapcsolni. Default: `false`.
* __rows__ | `number`: a szövegmező sorainak száma, ahová a tanulók beírhatják válaszaikat. Default: `5`.
* __chat__ | `boolean`: szabályozza, hogy engedélyezze-e a csoportos csevegést a kérdésre vonatkozóan.. Default: `false`.
* __resizable__ | `boolean`: szabályozza, hogy a szövegterület átméretezhető legyen-e.. Default: `false`.
* __placeholder__ | `string`: helyőrző szöveg, amely megjelenik, mielőtt a felhasználó bármilyen szöveget megadna. Default: `''`.
* __disableSubmitNotification__ | `boolean`: szabályozza a benyújtási értesítések letiltását. Default: `false`.
* __submissionMsg__ | `string`: a tanuló első válaszának elküldésekor megjelenő értesítés. Default: `''`.
* __resubmissionMsg__ | `string`: az első beadványt követő összes beadványra megjelenő értesítés. Default: `'You have successfully re-submitted your answer.'`.
* __provideFeedback__ | `boolean`: jelzi, hogy a helyes választ tartalmazó visszajelzés megjelenjen-e, miután a tanulók elküldték a válaszaikat. Default: `true`.
* __maxlength__ | `number`: maximálisan megengedett karakterek száma. Default: `2500`.
* __until__ | `Date`: a tanulóknak a válaszok benyújtásáig rendelkezésre álló idő. Default: `none`.
* __points__ | `number`: az osztályozás során adható maximális pontszám. Default: `10`.
* __className__ | `string`: osztály neve. Default: `''`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.
* __onChange__ | `function`: visszahívás, amely minden alkalommal meghívódik, amikor a szövegterület értéke megváltozik; az aktuális szöveget kapja egyetlen argumentumként. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback, amelyet akkor hívnak meg, amikor a felhasználó elküldi a választ; egyetlen argumentumként a beküldött szöveget kapja meg.. Default: `onSubmit() {}`.


## Példák

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
