---
id: feedback 
title: Feedback Buttons
sidebar_label: Feedback Buttons
---

Кнопки для сбора отзывов пользователей.

## Варианты

* __confusedMsg__ | `string`: сообщение, которое будет отображаться во всплывающей подсказке для спутанной кнопки.. Default: `none`.
* __feedbackMsg__ | `string`: сообщение, которое будет отображаться во всплывающей подсказке для получения подробной информации.. Default: `none`.
* __understoodMsg__ | `string`: сообщение, которое будет отображаться во всплывающей подсказке для понятной кнопки.. Default: `none`.
* __customFeedback__ | `boolean`: контролирует, принимает ли компонент пользовательскую обратную связь. Default: `true`.
* __vertical__ | `boolean`: кнопки отображаются вертикально, если установлено значение `true`.. Default: `false`.
* __className__ | `string`: название класса. Default: `''`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.


## Примеры

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Vertical', value: 'Vertical' },
        { label: 'Feedback Everywhere', value: 'feedbackEverywhere' },
        { label: 'Customized Style and Labels', value: 'fullyCustomized' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Panel>
  A panel with user feedback....
  <FeedbackButtons
    id="my_feedback" 
  />
</Panel>
```

</TabItem>

<TabItem value="Vertical">

```jsx live
<Panel>
  Lorem ipsum....
  <FeedbackButtons
    id="my_feedback" 
    vertical
  />
</Panel>
```
</TabItem>

<TabItem value="feedbackEverywhere">

```jsx live
<Panel style={{ width: 680}}>

<VideoPlayer
    url="https://youtu.be/Lkj8b25ppZo"
    controls
/>

  to get some user feedback....
  <FeedbackButtons
    id="my_feedback" 
  />

</Panel>
```
</TabItem>

<TabItem value="fullyCustomized">

```jsx live
<Panel>
  Lorem ipsum....
  <FeedbackButtons
    style={{ boxShadow: '0 0 12px red' }}
    id="my_feedback"  
    feedbackMsg="You can customize the feedback tooltip!"
    understoodMsg="Tell me you got it!" 
    confusedMsg="Click me if your are confused!" 
  />
</Panel>
```
</TabItem>

</Tabs>
