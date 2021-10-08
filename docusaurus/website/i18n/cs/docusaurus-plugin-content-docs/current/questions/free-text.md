---
id: free-text-question 
title: Free Text Question
sidebar_label: Free Text Question
---

Složka ISLE pro otázky, na které by studenti měli odpovídat formou volného textu.

## Možnosti

* __question__ | `(string|node)`: otázka zobrazená v horní části volného textu.. Default: `''`.
* __hints__ | `array<(string|node)>`: nápovědy, jak odpovědět na otázku.. Default: `[]`.
* __hintPlacement__ | `string`: umístění nápovědy (buď `top`, `left`, `right`, nebo `bottom`).. Default: `'top'`.
* __feedback__ | `boolean`: řídí, zda se mají zobrazovat tlačítka zpětné vazby. Default: `true`.
* __solution__ | `(string|node)`: vzorová odpověď na problém. Default: `''`.
* __instantSolution__ | `boolean`: zda lze okamžitě přepnout zobrazení modelové odpovědi.. Default: `false`.
* __rows__ | `number`: počet řádků textového pole pro zadávání odpovědí žáků.. Default: `5`.
* __chat__ | `boolean`: kontroluje, zda má být pro otázku povolen skupinový chat.. Default: `false`.
* __resizable__ | `boolean`: určuje, zda má být velikost textové oblasti měnitelná.. Default: `false`.
* __placeholder__ | `string`: zástupný text zobrazený předtím, než uživatel zadá jakýkoli text.. Default: `''`.
* __disableSubmitNotification__ | `boolean`: kontroluje, zda se mají vypnout oznámení o odeslání. Default: `false`.
* __submissionMsg__ | `string`: oznámení zobrazené při prvním odeslání odpovědi žákem.. Default: `''`.
* __resubmissionMsg__ | `string`: oznámení se zobrazí u všech podání po prvním podání.. Default: `'You have successfully re-submitted your answer.'`.
* __provideFeedback__ | `boolean`: určuje, zda se má po odeslání odpovědi zobrazit zpětná vazba včetně správné odpovědi.. Default: `true`.
* __maxlength__ | `number`: maximální povolený počet znaků. Default: `2500`.
* __until__ | `Date`: čas, do kdy by studenti měli mít možnost odevzdat odpovědi. Default: `none`.
* __points__ | `number`: maximální počet bodů udělených při klasifikaci. Default: `10`.
* __className__ | `string`: název třídy. Default: `''`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.
* __onChange__ | `function`: zpětné volání vyvolané při každé změně hodnoty textové oblasti; jako jediný argument obdrží aktuální text.. Default: `onChange() {}`.
* __onSubmit__ | `function`: zpětné volání vyvolané při odeslání odpovědi uživatelem; jako jediný argument obdrží odeslaný text.. Default: `onSubmit() {}`.


## Příklady

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
