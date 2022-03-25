---
id: match-list-question 
title: Match List Question
sidebar_label: Match List Question
---

学習者が2つのリストの要素を正しい方法で一致させる問題を作成するISLEコンポーネントです。

## オプション

* __question__ | `(string|node)`: マッチリストの質問コンポーネントの先頭に表示される質問. Default: `''`.
* __elements__ | `array<{a,b}>`: フリーテキスト問題コンポーネントの先頭に表示される正しいペアを保持する `array` です。各 `array` 要素は `a` と `b` プロパティを持つ `object` でなければなりません。. Default: `[]`.
* __hintPlacement__ | `string`: ヒントの配置 (`top`, `left`, `right`, `bottom` のいずれか). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: 解答のヒント. Default: `[]`.
* __provideFeedback__ | `boolean`: は、学習者が解答を提出した後にアクセスできるようにするかどうかを示します。. Default: `true`.
* __feedback__ | `boolean`: フィードバックボタンを表示するかどうかを制御します。. Default: `true`.
* __chat__ | `boolean`: 要素が統合されたチャットを持つべきかどうかを制御します。. Default: `false`.
* __colorScale__ | `array`: 設定されている場合は、指定された色がタイルに使用されます。. Default: `none`.
* __shuffle__ | `string`: 要素をマッチさせなければならないカラムの `left`, `right`, `both` のいずれかをシャッフルするかどうかを指定します; 両側の要素をシャッフルしないようにするには `none` などの値を指定します (解決策が存在しない場合に便利です)。. Default: `'both'`.
* __disableSubmitNotification__ | `boolean`: 投稿通知を無効にするかどうかを制御します。. Default: `false`.
* __submissionMsg__ | `string`: 出題通知. Default: `'You have successfully submitted your answer.'`.
* __resubmissionMsg__ | `string`: 以後の投稿通知. Default: `'You have successfully re-submitted your answer.'`.
* __until__ | `Date`: 学生が回答を提出するまでの時間. Default: `none`.
* __points__ | `number`: 採点点数. Default: `10`.
* __className__ | `string`: クラス名. Default: `''`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.
* __onChange__ | `function`: undefined. Default: `onChange() {}`.
* __onSubmit__ | `function`: 学生が回答を提出したときに呼び出されるコールバック. Default: `onSubmit() {}`.


## 例としては、以下のようなものがあります。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Markdown', value: 'withMarkdown' },
        { label: 'With Solution & Style', value: 'withFeedback' },
        { label: 'Shuffle Right', value: 'shuffleRight' },
        { label: 'Points for Grading', value: 'grading' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<MatchListQuestion
    question="Please match the symbols and the respective chemical element."
    elements={[
        { a: 'Be', b: 'Berlyllium' },
        { a: 'Br', b: 'Bromine' },
        { a: 'Ar', b: 'Argon' },
        { a: 'Ac' , b: 'Actinium'},
        { b: 'Arsenic' },
        { b: 'Boron' }
    ]}
    provideFeedback={false}
/>
```
</TabItem>

<TabItem value="withMarkdown">

```jsx live
<MatchListQuestion
    question={<span>Please match the **symbols** and the respective *chemical* element.</span>}
    style={{ color: 'darkblue'}}
    elements={[
        { a: 'Ac' , b: 'Actinium'},
        { a: 'Ar', b: 'Argon' },
        { a: 'Be', b: 'Berlyllium' },
        { a: 'Br', b: 'Bromine' },
        { b: 'Arsenic' },
        { b: 'Boron' }
    ]}
/>
```
</TabItem>

<TabItem value="withFeedback">

```jsx live
<MatchListQuestion
    question="Please match the symbols and the respective chemical element."
    style={{ color: 'darkblue'}}
    elements={[
        { a: 'Ac' , b: 'Actinium'},
        { a: 'Ar', b: 'Argon' },
        { a: 'Be', b: 'Berlyllium' },
        { a: 'Br', b: 'Bromine' },
        { b: 'Arsenic' },
        { b: 'Boron' }
    ]}
/>
```
</TabItem>

<TabItem value="shuffleRight">

```jsx live
<MatchListQuestion
    question="Please match the correct surnames and first names of these statisticians."
    elements={[
        { a: 'Carl Friedrich', b: 'Gauß' },
        { a: 'Florence', b: 'Nightingale' },
        { a: 'Francis', b: 'Galton' },
        { a: 'John W.', b: 'Tukey' },
        { a: 'Karl', b: 'Pearson' },
        { a: 'Ronald', b: 'Fisher' }
    ]}
    shuffle="right"
/>
```
</TabItem>

<TabItem value="grading">

```jsx live
<MatchListQuestion
    question="Please match the correct surnames and first names of these statisticians."
    elements={[
        { a: 'Ronald', b: 'Fisher' },
        { a: 'Florence', b: 'Nightingale' },
        { a: 'Karl', b: 'Pearson' },
        { a: 'John W.', b: 'Tukey' },
        { a: 'Francis', b: 'Galton' },
        { a: 'Carl Friedrich', b: 'Gauß' }
    ]}
    points={20}
/>
```
</TabItem>

</Tabs>
