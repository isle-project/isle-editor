---
id: range-question
title: Range Question
sidebar_label: Range Question
---

下限と上限のポイントを与えるように学生に求める範囲の質問コンポーネント。

## オプション

* __question__ | `(string|node)`: 表示問題. Default: `''`.
* __solution__ | `array<number>`: 正しい範囲の端点を含む二要素配列. Default: `none`.
* __hintPlacement__ | `string`: ヒントの配置 (`top`, `left`, `right`, `bottom` のいずれか). Default: `'top'`.
* __hints__ | `array<(string|node)>`: 解答のヒント. Default: `[]`.
* __labels__ | `array`: 下と上を除くカスタムラベルの二要素配列. Default: `none`.
* __feedback__ | `boolean`: フィードバックボタンを表示するかどうかを制御します。. Default: `true`.
* __chat__ | `boolean`: 要素が統合されたチャットを持つべきかどうかを制御します。. Default: `false`.
* __digits__ | `number`: 解とユーザが指定した答えの間で一致する必要がある桁数。指定されていないか、NULLに設定されている場合、コンポーネントは厳密に等しいかどうかをチェックします。0に設定されている場合は、整数の等しいかどうかをチェックします。. Default: `3`.
* __max__ | `number`: 最大入力値. Default: `null`.
* __min__ | `number`: 最小入力値. Default: `null`.
* __provideFeedback__ | `boolean`: は、学習者が解答を提出した後に、正解を含むフィードバックを表示するかどうかを指定します。. Default: `true`.
* __allowMultipleAnswers__ | `boolean`: 複数の回答を提出できるかどうかを制御する. Default: `false`.
* __until__ | `Date`: 学生が回答を提出するまでの時間. Default: `none`.
* __points__ | `number`: 採点点数. Default: `10`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.
* __onChangeLower__ | `function`: 下界変更後のコールバック. Default: `onChangeLower() {}`.
* __onChangeUpper__ | `function`: 上限が変更された後のコールバック. Default: `onChangeUpper() {}`.
* __onChange__ | `function`: undefined. Default: `onChange() {}`.
* __onSubmit__ | `function`: 最初のパラメータとして、アンサーが正しく回答されたかどうかを示す `boolean` (該当する場合は `null`) と、2番目のパラメータとして与えられたアンサーを指定します。. Default: `onSubmit() {}`.


## 例としては、以下のようなものがあります。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Hints', value: 'withHints' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'With Points and Feedback', value: 'withPoints' }
        
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<RangeQuestion
    style={{ fontSize: 17, }}
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
/>
```

</TabItem>

<TabItem value="withHints">

```jsx live
<RangeQuestion
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
    hints={['all this happened in the 17th century', 'it ended with the Peace of Westphalia in 1648']}
/>
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<RangeQuestion
    style={{ fontFamily: 'Georgia', boxShadow: '0 0  10px darkblue'}}
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
/>
```

</TabItem>

<TabItem value="withPoints">

```jsx live
<RangeQuestion
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
    hints={['all this happened in the 17th century', 'it ended with the Peace of Westphalia in 1648']}
    points={20}
    onSubmit={(res) => {
     if (res === true) {
      alert('Great, you have received 20 points');
     }
     else alert('sorry, this answer was wrong');
    }}
/>
```

</TabItem>

</Tabs>
