---
id: text-area
title: Text Area
sidebar_label: Text Area
---

テキストエリアコンポーネント。スタンドアロンのコンポーネントとして使用される場合、変更は `onChange` 属性で処理されなければなりません。

## オプション

* __defaultValue__ | `string`: テキストエリアのデフォルト値. Default: `''`.
* __value__ | `string`: テキスト値. Default: `none`.
* __disabled__ | `boolean`: は、テキストエリアを無効にするかどうかを制御します。. Default: `false`.
* __legend__ | `(string|node)`: 凡例文. Default: `''`.
* __onBlur__ | `function`: テキストエリアのフォーカスがなくなったときに呼び出されるコールバック関数. Default: `onBlur() {}`.
* __onChange__ | `function`: エリアテキストが変更されたときに、新しいテキストで呼び出されるコールバック関数. Default: `onChange() {}`.
* __placeholder__ | `string`: プレースホルダテキスト. Default: `none`.
* __resizable__ | `string`: テキスト領域のサイズを変更するかどうかを制御します ( `both`, `horizontal`, `vertical`, `none` のいずれかを指定します)。. Default: `'none'`.
* __rows__ | `number`: 行数. Default: `5`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.


## 例としては、以下のようなものがあります。

```jsx live
<TextArea
    legend="Please enter a few sentences"
    placeholder="Enter text"
/>
```



