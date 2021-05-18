---
id: select-question 
title: Select Question
sidebar_label: Select Question
---

質問コンポーネントを選択します。

## オプション

* __question__ | `(string|node)`: 択一問題. Default: `''`.
* __options__ | `array (required)`: 学生が選択できる解答の選択肢があります。. Default: `none`.
* __solution__ | `number`: options` のソリューション要素のインデックス. Default: `none`.
* __preselected__ | `number`: 選択された解答選択肢の索引. Default: `0`.
* __inline__ | `boolean`: は、コンポーネントがインラインでレンダリングされるかどうかを制御します。. Default: `false`.
* __hintPlacement__ | `string`: ヒントの配置 (`top`, `left`, `right`, `bottom` のいずれか). Default: `'top'`.
* __hints__ | `array<(string|node)>`: 解答のヒント. Default: `[]`.
* __feedback__ | `boolean`: フィードバックボタンを表示するかどうかを制御します。. Default: `true`.
* __chat__ | `boolean`: 要素が統合されたチャットを持つべきかどうかを制御します。. Default: `false`.
* __provideFeedback__ | `boolean`: は、学習者が解答を提出した後に、正解を含むフィードバックを表示するかどうかを指定します。. Default: `true`.
* __failureMsg__ | `string`: 学生が間違った答えを選択した場合に表示されるメッセージ. Default: `'Not quite, try again!'`.
* __successMsg__ | `string`: 学生が正解を選択したときに表示されるメッセージ. Default: `'That's the correct answer!'`.
* __points__ | `number`: 採点点数. Default: `10`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.
* __onChange__ | `function`: コールバック. Default: `onChange() {}`.
* __onSubmit__ | `function`: 最初のパラメータとして、アンサーが正しく回答されたかどうかを示す `boolean` (該当する場合は `null`) と、2番目のパラメータとして与えられたアンサーを指定します。. Default: `onSubmit() {}`.


## 例としては、以下のようなものがあります。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'Inline', value: 'inline' },
        { label: 'With Hints', value: 'with Hints' },
        { label: 'Submit Function Hints', value: 'submitFunction' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<SelectQuestion
    question="The usual t-test is"
    solution={2}
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
/>
```
</TabItem>

<TabItem value="withStyle">

```jsx live
<SelectQuestion
    question="The usual t-test is"
    solution={2}
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
    style={{ background: 'gainsboro', boxShadow: '0 0 10px black'}}
/>
```
</TabItem>

<TabItem value="inline">

```jsx live
The usual t-test is:
<SelectQuestion
    question="The usual t-test is"
    solution={2}
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
    inline
/> ... so you can us it in the midst of a longer paragraph
```
</TabItem>

<TabItem value="withHints">

```jsx live
<SelectQuestion
    question="White is "
    solution={1}
    options={[
        'a primary color',
        'not a primary color'
    ]}
    hints={[ "There are 3 primary colors", "Red is a primary color", "and so is yellow" ]}
/>
```
</TabItem>

<TabItem value="submitFunction">

```jsx live
<SelectQuestion
    question="Select the primary color"
    solution={2}
    options={[
        'orange',
        'white',
        'red'
    ]}
    onSubmit={(result) => {
        switch ( result ) {
            case 'orange':
                alert( 'No, orange is a mix of yellow and red.' );
            break;
            case 'white':
                alert( 'White does not count as a color.' );
            break;
            case 'red':
                alert( 'That is correct.' );
            break;
        }
    }}
    provideFeedback={false}
/> 
```
</TabItem>

</Tabs>
