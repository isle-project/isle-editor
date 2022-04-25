---
id: quiz 
title: Quiz
sidebar_label: Quiz
---

一連の問題コンポーネントを表示するクイズコンポーネント。

## オプション

* __confidence__ | `boolean`: ユーザーの答えの信頼度を尋ねるリッカート尺度を表示するかどうか. Default: `false`.
* __forceConfidence__ | `boolean`: は、次の質問に移る前に信頼度を提供するかどうかを制御します。. Default: `false`.
* __count__ | `number`: 問題数. Default: `none`.
* __questions__ | `array (required)`: 問題配列. Default: `none`.
* __active__ | `boolean`: クイズのタイマーが有効かどうかを制御します。. Default: `true`.
* __duration__ | `number`: 小テストの時間 (分単位)；時間が経過すると、サマリーページが表示されます。. Default: `none`.
* __skippable__ | `boolean`: 小テストの問題をスキップするかどうかを制御します。. Default: `true`.
* __footerNodes__ | `array`: 各質問のフッターに表示されるノードの配列. Default: `[]`.
* __nextLabel__ | `string`: 次の質問に進むボタンのラベル. Default: `none`.
* __provideFeedback__ | `boolean`: 小テスト終了後に解答が正しかったかどうかのフィードバックを学生に表示するかどうかを制御します。. Default: `true`.
* __showFinishButton__ | `boolean`: クイズを終了して結果ページに直接ジャンプするボタンを表示するかどうかを制御します。. Default: `false`.
* __finishLabel__ | `string`: クイズ終了ボタンのラベル. Default: `none`.
* __downloadButton__ | `boolean`: 回答をダウンロードするためのボタンを表示するかどうかを制御します。. Default: `true`.
* __repeatable__ | `boolean`: undefined. Default: `false`.
* __onFinished__ | `function`: クイズが終了し、結果ページが表示されたときに呼び出されるコールバック. Default: `onFinished() {}`.
* __onSubmit__ | `function`: ユーザーが回答を送信するとコールバックが呼び出されます。. Default: `onSubmit() {}`.


## 例としては、以下のようなものがあります。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Subset of Questions', value: 'subset' },
        { label: 'Not Skippable', value: 'notSkippable' },
        { label: 'Confidence Check', value: 'confidenceCheck' },,
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Quiz
    questions={[
        <FreeTextQuestion 
            question="What is the capital of France?" 
            rows={1} 
            solution="Paris" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Poland?" 
            rows={1} 
            solution="Warsaw" 
        />
    ]}
/>
```
</TabItem>

<TabItem value="subset">

```jsx live
<Quiz
    count={3}
    questions={[
        <FreeTextQuestion 
            question="What is the capital of France?" 
            rows={1} 
            solution="Paris" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Poland?" 
            rows={1} 
            solution="Warsaw" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Portugal?" 
            rows={1} 
            solution="Lisbon" 
        />,     
        <FreeTextQuestion 
            question="What is the capital of Egypt?" 
            rows={1} 
            solution="Cairo" 
        />
    ]}
/>
```
</TabItem>

<TabItem value="notSkippable" >

```jsx live
<Quiz
    skippable={false}
    questions={[
        <FreeTextQuestion 
            question="What is the capital of France?" 
            rows={1} 
            solution="Paris" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Poland?" 
            rows={1} 
            solution="Warsaw" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Portugal?" 
            rows={1} 
            solution="Lisbon" 
        />,     
        <FreeTextQuestion 
            question="What is the capital of Egypt?" 
            rows={1} 
            solution="Cairo" 
        />
    ]}
/>
```
</TabItem>

<TabItem value="confidenceCheck">

```jsx live
<Quiz
    confidence
    forceConfidence
    count={4}
    questions={[
        <FreeTextQuestion 
            question="What is the capital of France?" 
            rows={1} 
            solution="Paris" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Poland?" 
            rows={1} 
            solution="Warsaw" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Portugal?" 
            rows={1} 
            solution="Lisbon" 
        />,     
        <FreeTextQuestion 
            question="What is the capital of Egypt?" 
            rows={1} 
            solution="Cairo" 
        />
    ]}
/>
```
</TabItem>

</Tabs>
