---
id: free-text-question 
title: Free Text Question
sidebar_label: Free Text Question
---

ISLE-компонент для вопросов, ответы на которые должны быть предоставлены студентами в виде бесплатного текста.

## Варианты

* __question__ | `(string|node)`: вопрос, отображаемый в верхней части компонента "Вопрос со свободным текстом". Default: `''`.
* __hints__ | `array<(string|node)>`: подсказки с рекомендациями, как ответить на вопрос. Default: `[]`.
* __hintPlacement__ | `string`: размещение подсказок (или `top`, `left`, `right`, или `bottom`). Default: `'top'`.
* __feedback__ | `boolean`: управляет отображением кнопок обратной связи. Default: `true`.
* __solution__ | `(string|node)`: модельный ответ на проблему. Default: `''`.
* __instantSolution__ | `boolean`: можно ли сразу же переключить отображение ответа модели. Default: `false`.
* __rows__ | `number`: количество строк текстового поля для ввода учащимися своих ответов. Default: `5`.
* __chat__ | `boolean`: контролирует, следует ли включать групповой чат для вопроса. Default: `false`.
* __resizable__ | `boolean`: контролирует, должна ли текстовая область быть изменена в размерах. Default: `false`.
* __placeholder__ | `string`: текст, отображаемый до того, как пользователь ввел какой-нибудь текст. Default: `''`.
* __disableSubmitNotification__ | `boolean`: контроль выключения подачи уведомлений. Default: `false`.
* __submissionMsg__ | `string`: уведомление, отображаемое при первой отправке учащимся ответа. Default: `''`.
* __resubmissionMsg__ | `string`: уведомление, отображаемое для всех представлений после первого. Default: `'You have successfully re-submitted your answer.'`.
* __provideFeedback__ | `boolean`: указывает, следует ли отображать обратную связь, включая правильный ответ, после того, как учащиеся представят свои ответы. Default: `true`.
* __maxlength__ | `number`: максимально допустимое количество символов. Default: `2500`.
* __until__ | `Date`: время до тех пор, пока студенты не смогут представить ответы. Default: `none`.
* __points__ | `number`: максимальное количество баллов, полученных при градации. Default: `10`.
* __className__ | `string`: название класса. Default: `''`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.
* __onChange__ | `function`: вызов обратного вызова каждый раз при изменении значения текстовой области; получает текущий текст в качестве единственного аргумента. Default: `onChange() {}`.
* __onSubmit__ | `function`: вызов обратного вызова, когда пользователь отправляет ответ; получает отправленный текст в качестве единственного аргумента. Default: `onSubmit() {}`.


## Примеры

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
