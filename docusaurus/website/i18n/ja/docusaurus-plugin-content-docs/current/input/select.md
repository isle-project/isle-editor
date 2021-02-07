---
id: select-input
title: Select Input
sidebar_label: Select Input
---

選択入力コンポーネント。ISLE ダッシュボードの一部として使用することも、スタンドアロンで使用することもできます。後者の場合、`onChange` 属性で変更を処理するか、`bind` 属性でグローバル変数に値をバインドします。

## Options

* __bind__ | `string`: 割り当てられる番号のグローバル変数名. Default: `''`.
* __clearable__ | `boolean`: 選択をクリアしてもよいかどうかを示すブール値. Default: `none`.
* __defaultValue__ | `(number|string|array|object)`: 起動時の入力のデフォルト値. Default: `none`.
* __disabled__ | `boolean`: 入力がアクティブかどうかを制御します。. Default: `false`.
* __inline__ | `boolean`: は入力をインラインで表示するかどうかを示します。. Default: `false`.
* __legend__ | `(string|node)`: 脇に表示される文字. Default: `''`.
* __menuPlacement__ | `string`: コントロールに対するメニューの配置 (`auto`, `top`, `bottom` のいずれか). Default: `'auto'`.
* __multi__ | `boolean`: 複数の答えを選択できるかどうかを制御する. Default: `false`.
* __onChange__ | `function`: コールバック関数. Default: `onChange() {}`.
* __options__ | `array`: 利用可能な選択肢を示す配列. Default: `[]`.
* __placeholder__ | `string`: 最初に表示される値. Default: `none`.
* __tooltip__ | `string`: 凡例の上にカーソルを置いたときに表示されるテキスト. Default: `none`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.


## Examples

```jsx live
<SelectInput
    legend="Choose the test direction"
    defaultValue="two-sided"
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
/>
```

