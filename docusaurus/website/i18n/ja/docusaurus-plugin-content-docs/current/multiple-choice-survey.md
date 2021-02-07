---
id: multiple-choice-survey 
title: Multiple Choice Survey
sidebar_label: Multiple Choice Survey
---

講師が学生から多肢選択式のアンケートデータをリアルタイムで収集することができるアンケートコンポーネント。

## Options

* __question__ | `(string|node)`: 質問文字列. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: は、学生にアンケートに複数回回答させるかどうかを制御します。. Default: `false`.
* __anonymous__ | `boolean`: 学生の回答が匿名化されているかどうかを制御します。. Default: `false`.
* __answers__ | `array`: 択一配列. Default: `[]`.
* __multipleAnswers__ | `boolean`: は学生が複数の解答を選択できるかどうかを示します。これはallowMultipleAnswersとは異なり、allowは学生が問題を複数回提出できるようにするという点に注意してください。. Default: `false`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.
* __onSubmit__ | `function`: 回答が提出されたときに呼び出される関数. Default: `onSubmit() {}`.


## Examples

```jsx live
<MultipleChoiceSurvey
    anonymous
    question="Are you left- or right-handed"
    answers={[ 'Left-handed', 'Right-handed' ]}
/>
```

