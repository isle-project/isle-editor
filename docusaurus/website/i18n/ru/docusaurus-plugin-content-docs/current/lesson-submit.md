---
id: lesson-submit 
title: Lesson Submit
sidebar_label: Lesson Submit
---

Кнопка, которая будет отображаться в конце лекции, чтобы ученики могли нажать на нее. По умолчанию на их электронный адрес отправляется сообщение с подтверждением завершения лекции.

## Варианты

* __coverage__ | `array<string>`: список идентификаторов, которые должны быть представлены и включены в ответный документ. Default: `none`.
* __label__ | `string`: кнопка отправки. Default: `none`.
* __message__ | `string`: письмо-подтверждение. Default: `''`.
* __requireLogin__ | `boolean`: контролирует, нужно ли требовать от пользователя, чтобы кнопка была активной (для анонимных пользователей подтверждение по электронной почте не рассылается). Default: `true`.
* __sendConfirmationEmail__ | `boolean`: контролирует, отправлять ли подтверждение по электронной почте при подаче урока. Default: `true`.
* __className__ | `string`: название класса. Default: `''`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.
* __onClick__ | `function`: вызов обратного вызова при нажатии кнопки подачи заявки. Default: `onClick() {}`.


## Примеры

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Custom Label', value: 'customLabel' },
        { label: 'Email Feedback', value: 'emailFeedback' },
        { label: 'With Callback', value: 'withCallback' }
    ]}
    lazy
>
<TabItem value="minimal">

```jsx live
<LessonSubmit />
```

</TabItem>

<TabItem value="customLabel">

```jsx live
<LessonSubmit label="Click to submit" />
```

</TabItem>

<TabItem value="withEmail">

```jsx live
<LessonSubmit 
    style={{ outline: '4px solid black'}}
    message={`
    Hi,
    I am very glad that you solved this lesson. Congratulations! 
    It was a sophisticated one.
    If you want some help how to use ISLE, have a look a 
    [this site](https://isledocs.com/docs/)
    
    Best
    The ISLE team
    `}
    label="Click to submit" />
```
</TabItem>

<TabItem value="withCallback">

```jsx live
<LessonSubmit 
    requireLogin={false}
    onClick={() => {
        alert( 'The Button has been clicked...' );
    }}
    label="Click to submit" />
```
</TabItem>

</Tabs>
