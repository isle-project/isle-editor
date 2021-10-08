---
id: free-text-question 
title: Free Text Question
sidebar_label: Free Text Question
---

Компонент на ISLE за въпроси, при които отговорите на учениците трябва да се предоставят под формата на свободен текст.

## Опции

* __question__ | `(string|node)`: въпросът, показан в горната част на компонента за свободен текст.. Default: `''`.
* __hints__ | `array<(string|node)>`: указания за това как да отговорите на въпроса. Default: `[]`.
* __hintPlacement__ | `string`: разположение на подсказките (или `top`, `right`, `left`, или `bottom`). Default: `'top'`.
* __feedback__ | `boolean`: контролира дали да се показват бутони за обратна връзка. Default: `true`.
* __solution__ | `(string|node)`: примерен отговор на проблема. Default: `''`.
* __instantSolution__ | `boolean`: дали може да се превключва незабавно показването на отговора на модела. Default: `false`.
* __rows__ | `number`: брой редове на текстовото поле, в което учениците могат да въвеждат своите отговори.. Default: `5`.
* __chat__ | `boolean`: контролира дали да се активира групов чат за въпроса. Default: `false`.
* __resizable__ | `boolean`: контролира дали текстовата област да може да променя размера си. Default: `false`.
* __placeholder__ | `string`: заместващ текст, показван преди потребителят да е въвел какъвто и да е текст. Default: `''`.
* __disableSubmitNotification__ | `boolean`: контролира дали да деактивира известията за подаване. Default: `false`.
* __submissionMsg__ | `string`: известие, което се показва, когато обучаемият за пръв път подава своя отговор.. Default: `''`.
* __resubmissionMsg__ | `string`: известие, показвано за всички заявки след първата.. Default: `'You have successfully re-submitted your answer.'`.
* __provideFeedback__ | `boolean`: посочва дали да се показва обратна връзка, включваща правилния отговор, след като обучаемите изпратят отговорите си.. Default: `true`.
* __maxlength__ | `number`: максимален допустим брой символи. Default: `2500`.
* __until__ | `Date`: времето, до което учениците трябва да могат да подават отговори. Default: `none`.
* __points__ | `number`: максимален брой точки, присъждани при класирането. Default: `10`.
* __className__ | `string`: име на класа. Default: `''`.
* __style__ | `object`: CSS инлайн стилове. Default: `{}`.
* __onChange__ | `function`: обратно извикване, което се задейства всеки път, когато стойността на текстовата област се промени; получава текущия текст като единствен аргумент. Default: `onChange() {}`.
* __onSubmit__ | `function`: обратно извикване, когато потребителят подаде отговор; получава подадения текст като единствен аргумент. Default: `onSubmit() {}`.


## Примери

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
