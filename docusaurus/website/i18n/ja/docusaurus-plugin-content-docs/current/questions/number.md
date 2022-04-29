---
id: number-question 
title: Number Question
sidebar_label: Number Question
---

数字の質問成分。

## オプション

* __question__ | `(string|node)`: ナンバークエスチョン. Default: `''`.
* __hintPlacement__ | `string`: ヒントの配置 (`top`, `left`, `right`, `bottom` のいずれか). Default: `'top'`.
* __hints__ | `array<(string|node)>`: 解答のヒント. Default: `[]`.
* __feedback__ | `boolean`: フィードバックボタンを表示するかどうかを制御します。. Default: `true`.
* __solution__ | `(number|array<number>)`: 問題の数値解答（配列が与えられた場合は複数の正解）。. Default: `none`.
* __digits__ | `number`: 生徒が提供した答えが解答と一致しなければ正しいとみなされない桁数。0に設定すると、整数として一致します。nullに設定すると、完全に一致するものを検索します。. Default: `3`.
* __max__ | `number`: 最大許容入力値. Default: `null`.
* __min__ | `number`: 最小許容入力値. Default: `null`.
* __defaultValue__ | `number`: 事前選択数入力値. Default: `none`.
* __provideFeedback__ | `boolean`: は、学習者が解答を提出した後に、正解を含むフィードバックを表示するかどうかを指定します。. Default: `true`.
* __submitAfterFeedback__ | `boolean`: 解答が明らかになった後でも再投稿が可能かどうかを制御します。. Default: `false`.
* __nTries__ | `number`: 何回試行した後にフィードバックを提供するか ( `provideFeedback` が `true` の場合). Default: `1`.
* __disableSubmitNotification__ | `boolean`: 投稿通知を無効にするかどうかを制御します。. Default: `false`.
* __chat__ | `boolean`: 要素が統合されたチャットを持つべきかどうかを制御します。. Default: `false`.
* __until__ | `Date`: 学生が回答を提出するまでの時間. Default: `none`.
* __points__ | `number`: 採点点数. Default: `10`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.
* __onChange__ | `function`: 数値フィールドの値が変更された後にトリガされるコールバックで、現在の値を唯一の引数として受け取ります。. Default: `onChange() {}`.
* __onSubmit__ | `function`: 最初のパラメータとして、アンサーが正しく回答されたかどうかを示す `boolean` (該当する場合は `null`) と、2番目のパラメータとして与えられたアンサーを指定します。. Default: `onSubmit() {}`.


## 例としては、以下のようなものがあります。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Markdown', value: 'markdownStyling' },
        { label: 'With CSS', value: 'withCSS' }
        
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<NumberQuestion
    question="What is the number Pi? (include at least three digits after the decimal point)"
    solution={3.142}
/>
```
</TabItem>

<TabItem value="markdownStyling">

```jsx live
<NumberQuestion
    question={<span>What is the number $\pi$? (include at least _three_ digits after the decimal point)</span>}
    solution={3.142}
/>
```
</TabItem>

<TabItem value="withCSS">

```jsx live
<NumberQuestion
    question={<span style={{ fontSize: 25, color: 'darkorange'}}>What is the number PI - three digits after the period</span>}
    solution={3.142}
/>
```
</TabItem>

</Tabs>
