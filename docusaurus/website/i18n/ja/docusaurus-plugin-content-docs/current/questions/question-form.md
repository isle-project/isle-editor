---
id: question-form 
title: Question Form
sidebar_label: Question Form
---

異なる質問コンポーネントを1つの送信ボタンと一緒に組み合わせたフォームコンポーネントです。

## オプション

* __buttonLabel__ | `string`: 送信ボタンのラベル. Default: `none`.
* __onSubmit__ | `function`: 送信ボタンがクリックされたときに呼び出されるコールバック. Default: `onSubmit() {}`.


## 例としては、以下のようなものがあります。

```jsx live
<QuestionForm>
    <NumberQuestion
        question="What is 2+2?"
    />
    <FreeTextQuestion
        question="What is the meaning of life?"
    />    
</QuestionForm>
```
