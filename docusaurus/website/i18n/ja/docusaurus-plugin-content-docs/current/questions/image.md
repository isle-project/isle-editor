---
id: image-question 
title: Image Question
sidebar_label: Image Question
---

ユーザーに画像をアップロードするように求める質問です。

## オプション

* __question__ | `(string|node)`: 問題文. Default: `''`.
* __hintPlacement__ | `string`: ヒントの配置 (`top`, `left`, `right`, `bottom` のいずれか). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: 解答のヒント. Default: `[]`.
* __feedback__ | `boolean`: フィードバックボタンを表示するかどうかを制御します。. Default: `true`.
* __chat__ | `boolean`: 要素が統合されたチャットを持つべきかどうかを制御します。. Default: `false`.
* __disableSubmitNotification__ | `boolean`: は画像の投稿後に通知を表示するかどうかを制御します。. Default: `false`.
* __className__ | `string`: クラス名. Default: `''`.
* __sketchpad__ | `object`: プロパティを <Sketchpad /> コンポーネントに渡します; スケッチパッドをレンダリングするには、少なくとも空のオブジェクト `{}` を渡します。. Default: `none`.
* __solution__ | `string`: モデルソリューションの画像URL. Default: `none`.
* __until__ | `Date`: 学生が回答を提出するまでの時間. Default: `none`.
* __points__ | `number`: 採点点数. Default: `10`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.
* __onSubmit__ | `function`: 回答が提出されたときに呼び出されるコールバック; 唯一のパラメータとして、要素が正しい順序で配置されているかどうかを示す `boolean` を持ちます。. Default: `onSubmit() {}`.


## 例としては、以下のようなものがあります。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Sketchpad', value: 'witchSketchpad' },
        { label: 'Submit Plot', value: 'submitPlot' },
        { label: 'Solution', value: 'solution' },,
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<ImageQuestion question="You may upload an image." feedback={false}  />
```
</TabItem>

<TabItem value="witchSketchpad">

```jsx live
<ImageQuestion question="Please enter your signature." feedback={false} sketchpad={{ canvasHeight: 300}} />
```

</TabItem>

<TabItem value="submitPlot">

```jsx live
<div>
  <ScatterPlot  data={heartdisease} xval="Age" yval="Cost" />
  <ImageQuestion question="Please adjust the range of values to show, change the axis labels and title of the plot, and submit your result." />
</div>
```
</TabItem>

<TabItem value="solution">

```jsx live
<ImageQuestion solution="https://bit.ly/3utaXOb" question="Please enter the Greek letter 'Gamma'." feedback={false} sketchpad={{ canvasHeight: 300}} />
```
</TabItem>

</Tabs>
