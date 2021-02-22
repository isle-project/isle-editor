---
id: checkbox-input
title: Checkbox Input
sidebar_label: Checkbox Input
---

チェックボックス入力コンポーネントです。ISLE ダッシュボードの一部として使うことも、スタンドアロンで使うこともできます。後者の場合、`onChange` 属性で変更を処理するか、`bind` 属性でグローバル変数に値をバインドします。

## オプション

* __bind__ | `string`: チェックボックスの値を割り当てるグローバル変数名. Default: `''`.
* __defaultValue__ | `boolean`: チェックボックスのデフォルト値を示すブール値. Default: `false`.
* __value__ | `boolean`: チェックボックス値. Default: `none`.
* __disabled__ | `boolean`: は入力が有効かどうかを示します。. Default: `false`.
* __inline__ | `boolean`: はチェックボックスをインラインで表示するかどうかを示します。. Default: `false`.
* __onChange__ | `function`: チェックボックスがクリックされたときに呼び出されるコールバック関数です。この関数は、現在のチェックボックスの値で呼び出されます。. Default: `onChange() {}`.
* __legend__ | `(string|node)`: チェックボックスの横に表示される文字. Default: `''`.
* __tooltip__ | `string`: チェックボックス上に表示される文字. Default: `''`.
* __tooltipPlacement__ | `string`: ボタンツールチップの位置. Default: `'right'`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.


## 例としては、以下のようなものがあります。

```jsx live
<CheckboxInput
    legend="Take the logarithm"
    defaultValue={false}
/>
```

