---
id: proportions-survey
title: Proportions Survey
sidebar_label: Proportions Survey
---

与えられた選択肢の重みと重要度をグループで投票できるようにするコンポーネント。

## オプション

* __allowMultipleAnswers__ | `boolean`: は、学生にアンケートに複数回回答させるかどうかを制御します。. Default: `false`.
* __anonymous__ | `boolean`: 学生の回答が匿名化されているかどうかを制御します。. Default: `false`.
* __colors__ | `array`: 円グラフのコンポーネントの色の配列。定義されていない場合は、カスタムカラースケールが使用されます。. Default: `none`.
* __disabled__ | `boolean`: は、調査を無効にするかどうかを制御します。. Default: `false`.
* __group__ | `string`: グループ表示見出し. Default: `'group results'`.
* __groupHeight__ | `number`: グループ表示用プロポーション入力高さ(px). Default: `100`.
* __legends__ | `array`: 計量するオプションを記述する凡例ラベル. Default: `[]`.
* __margin__ | `string`: 割合入力マージン. Default: `'40px'`.
* __onSubmit__ | `function`: コールバック関数. Default: `onSubmit() {}`.
* __personalHeight__ | `number`: 割合を入力した個々の学生の高さ (px). Default: `200`.
* __precision__ | `number`: 割合値の表示精度. Default: `2`.
* __question__ | `(string|node)`: 出題. Default: `''`.
* __step__ | `number`: 入力ボックスの上にカーソルを置いたときに表示される矢印のステップ. Default: `0.25`.


## 例としては、以下のようなものがあります。

```jsx live
<ProportionsSurvey 
    id="Survey"
    question="Decide what is important"
    group="Group decision"
    nElements={3}
    colors = {[ "red", "blue", "gold" ]}
    personalHeight={300}
    groupHeight={200}
    margin="80px"
    legends={[ "bitcoin", "old", "diamonds" ]}
/>
```



