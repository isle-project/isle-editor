---
id: number-input
title: Number Input
sidebar_label: Number Input
---

数値入力コンポーネント。ISLEダッシュボードの一部として使うことも、スタンドアロンで使うこともできます。後者の場合、`onChange` 属性で変更を処理するか、`bind` 属性でグローバル変数に値をバインドします。

## オプション

* __bind__ | `string`: 割り当てられる番号のグローバル変数名. Default: `''`.
* __defaultValue__ | `number`: 起動時の入力のデフォルト値を示す値. Default: `0`.
* __disabled__ | `boolean`: 入力がアクティブかどうかを示すブール値. Default: `false`.
* __inline__ | `boolean`: は入力をインラインで表示するかどうかを示します。. Default: `false`.
* __legend__ | `(string|node)`: 数字入力の隣に表示される文字列. Default: `none`.
* __max__ | `number`: 挿入可能な最大値を示す番号. Default: `null`.
* __min__ | `number`: 挿入可能な最小値を示す番号. Default: `null`.
* __numbersOnly__ | `boolean`: 数字だけを受け入れるかどうかを制御します。. Default: `true`.
* __placeholder__ | `string`: 入力が空の場合に表示されるテキストを表す文字列 (`defaultValue` が `null` または `undefined` に設定されている必要があります). Default: `'0'`.
* __onBlur__ | `function`: ぼかしメソッドを使用する際に呼び出されるコールバック関数. Default: `onBlur() {}`.
* __onChange__ | `function`: 番号入力が変更されたときに呼び出すコールバック関数. Default: `onChange() {}`.
* __onKeyDown__ | `function`: コールバック関数. Default: `onKeyDown() {}`.
* __onKeyPress__ | `function`: キー入力時に呼び出されるコールバック関数. Default: `onKeyPress() {}`.
* __onKeyUp__ | `function`: キーリリース時に呼び出されるコールバック関数. Default: `onKeyUp() {}`.
* __step__ | `(number|string)`: 増分矢印を使用した場合の増分を示す番号. Default: `1`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.
* __inputStyle__ | `object`: 入力要素のためのCSSインラインスタイル. Default: `{}`.
* __value__ | `number`: すうじち. Default: `none`.
* __tooltip__ | `string`: ツールチップ文字列 (設定されていない場合は、ツールチップが自動的に生成されます). Default: `none`.
* __tooltipPlacement__ | `string`: ツールチップの方向. Default: `'left'`.


## 例としては、以下のようなものがあります。

```jsx live
<NumberInput
    legend="Number of observations"
    defaultValue={20}
    step={5}
/>
```

