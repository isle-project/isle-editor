---
id: slider-input
title: Slider Input
sidebar_label: Slider Input
---

スライダー入力コンポーネントです。ISLE ダッシュボードの一部として使うことも、スタンドアロンで使うこともできます。後者の場合、`onChange` 属性で変更を処理するか、`bind` 属性でグローバル変数に値をバインドします。

## オプション

* __defaultValue__ | `number`: スライダーの開始値. Default: `10`.
* __disabled__ | `boolean`: は、スライダーの入力がアクティブかどうかを制御します。true に設定されている場合、スライダはグレーアウトされているものの、画面上に存在します。. Default: `false`.
* __inline__ | `boolean`: スライダーをテキストとインラインで配置するか、外側に配置するかを制御します。. Default: `false`.
* __legend__ | `(string|node)`: にゅうりょくのキャプション. Default: `none`.
* __max__ | `number`: スライダーの最大値. Default: `100`.
* __maxLabel__ | `string`: 最大値の代わりにスライダーの右に表示されるラベル. Default: `none`.
* __min__ | `number`: スライダーの最小値. Default: `0`.
* __minLabel__ | `string`: 最小値の代わりにスライダーの左に表示されるラベル. Default: `none`.
* __onChange__ | `function`: スライダーの値が変更されたときに新しい値で呼び出されるコールバック. Default: `onChange() {}`.
* __precision__ | `number`: 入力の丸めを行います。値は、精度よりも有効な桁数を超えないように丸められます。例えば、整数のみを使用したい場合は10の精度が使用され、数百位まで丸めたい場合は0.001の精度が使用されます。. Default: `10`.
* __step__ | `(number|string)`: スライダーのステップサイズ. Default: `1`.
* __hideTooltip__ | `boolean`: ツールチップを隠すかどうかを制御します。. Default: `false`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.
* __numberInputStyle__ | `object`: 数値入力コンポーネントのCSSインラインスタイル. Default: `{}`.
* __rangeInputStyle__ | `object`: 範囲入力コンポーネントのCSSインラインスタイル. Default: `{}`.


## 例としては、以下のようなものがあります。

```jsx live
<SliderInput
    legend="Success Probability"
    defaultValue={0.5}
    min={0}
    max={1}
    step={0.01}
/>
```



