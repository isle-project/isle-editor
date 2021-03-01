---
id: text-input
title: Text Input
sidebar_label: Text Input
---

テキスト入力コンポーネントです。ISLE ダッシュボードの一部として使うことも、スタンドアロンで使うこともできます。後者の場合、`onChange` 属性で変更を処理するか、`bind` 属性でグローバル変数に値をバインドします。

## オプション

* __bind__ | `string`: 割り当てられる番号のグローバル変数名. Default: `none`.
* __defaultValue__ | `string`: undefined. Default: `''`.
* __value__ | `string`: テキスト値. Default: `none`.
* __legend__ | `(string|node)`: undefined. Default: `''`.
* __inline__ | `boolean`: 入力をインライン表示するかどうかを示す. Default: `false`.
* __onBlur__ | `function`: テキストエリアのフォーカスがなくなったときに呼び出されるコールバック関数. Default: `onBlur() {}`.
* __onChange__ | `function`: undefined. Default: `onChange() {}`.
* __onKeyDown__ | `function`: コールバック関数. Default: `onKeyDown() {}`.
* __onKeyPress__ | `function`: キー入力時に呼び出されるコールバック関数. Default: `onKeyPress() {}`.
* __onKeyUp__ | `function`: キーリリース時に呼び出されるコールバック関数. Default: `onKeyUp() {}`.
* __placeholder__ | `string`: undefined. Default: `none`.
* __width__ | `number`: undefined. Default: `80`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.


## 例としては、以下のようなものがあります。

```jsx live
<TextInput
    legend="Your name"
    defaultValue="Enter text"
/>
```

