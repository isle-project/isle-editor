---
id: feedback 
title: Feedback Buttons
sidebar_label: Feedback Buttons
---

Кнопки для сбора отзывов пользователей.

## Options

* __confusedMsg__ | `string`: сообщение, которое будет отображаться во всплывающей подсказке для спутанной кнопки.. Default: `none`.
* __feedbackMsg__ | `string`: сообщение, которое будет отображаться во всплывающей подсказке для получения подробной информации.. Default: `none`.
* __understoodMsg__ | `string`: сообщение, которое будет отображаться во всплывающей подсказке для понятной кнопки.. Default: `none`.
* __customFeedback__ | `boolean`: контролирует, принимает ли компонент пользовательскую обратную связь. Default: `true`.
* __vertical__ | `boolean`: кнопки отображаются вертикально, если установлено значение `true`.. Default: `false`.
* __className__ | `string`: название класса. Default: `''`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.


## Examples

```jsx live
<Panel>
  Lorem ipsum....
  <FeedbackButtons
    id="my_feedback" 
  />
</Panel>
```

