---
id: multiple-choice-matrix 
title: Multiple Choice Matrix
sidebar_label: Multiple Choice Matrix
---

同じ答えを持つ多肢選択問題のマトリックスを表示するISLEコンポーネント。

## Options

* __questions__ | `array (required)`: しゅうもんじゅもん. Default: `none`.
* __answers__ | `array (required)`: 答え合わせ. Default: `none`.
* __title__ | `(string|node)`: 問題マトリックスの上に表示されるタイトル. Default: `none`.
* __solution__ | `array<array>`: ラジオボタンやチェックボックスがチェックされるべきかどうかを示す boolean matrix 要素。. Default: `none`.
* __type__ | `string`: 質問型. Default: `'radio'`.
* __disableSubmitNotification__ | `boolean`: 投稿通知を無効にするかどうかを制御します。. Default: `false`.
* __onChange__ | `function`: チェックボックス/ラジオボタンの値が変更されたときに呼び出されるコールバック; 各アンサーオプションのアクティブな状態の2次元のブール値の配列で呼び出される. Default: `onChange() {}`.
* __onSubmit__ | `function`: ユーザーが "Submit "ボタンをクリックした時に呼び出されるコールバック。. Default: `onSubmit() {}`.


## Examples

```jsx live
<MultipleChoiceMatrix 
    title="Do you think these concepts are important for an introductory statistics course, and do you (or your department) cover them in your introductory courses?" id="topics" 
    questions={[
        'Data Visualizations',
        'Hand calculations (e.g. standard deviation, z-scores)',
        'Combinatorics',
        'Basic probability theory (conditional probability, independence...)',
        'Calculus-based probability',
        'Sampling distributions',
        'Confidence intervals (traditional, formula-based)',
        'Boostrapping',
        'Hypothesis testing (traditional, e.g. t-test or chi-square formulas and tables)',
        'Simple linear regression',
        'Bayesian statistics',
        'Randomization- or simulation-based inference'
    ]}
    type="checkbox" 
    answers={[ 'I cover it', 'I think it\'s important' ]} 
/>
```
