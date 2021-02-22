---
id: proportions-input 
title: Proportions Input
sidebar_label: Proportions Input
---

割合入力コンポーネント。ISLEダッシュボードの一部として使うことも、スタンドアロンで使うこともできます。後者の場合、`onChange`属性で変更を処理するか、`bind`属性でグローバル変数に値をバインドします。

## オプション

* __colors__ | `array<string>`: 円グラフのコンポーネントの色の配列。定義されていない場合は、カスタムカラースケールが使用されます。. Default: `none`.
* __disabled__ | `boolean`: 入力フィールドを無効にするかどうかを制御します。. Default: `false`.
* __height__ | `number`: 割合入力高さ（px. Default: `200`.
* __legends__ | `array`: グループラベル. Default: `[]`.
* __onChange__ | `function`: コールバック関数. Default: `onChange(){}`.
* __precision__ | `number`: 割合値の表示精度. Default: `1`.
* __step__ | `number`: 入力ボックスの上にカーソルを置いたときに表示される矢印のステップ. Default: `0.1`.


## 例としては、以下のようなものがあります。

```jsx live
<ProportionsInput
    user
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

