---
id: text 
title: Text
sidebar_label: Text
---

生のテキストをMarkdownとしてレンダリングし、音声コントロールを可能にするテキストコンポーネント。

## Options

* __raw__ | `string`: 描画対象文字. Default: `''`.
* __className__ | `string`: クラス名. Default: `''`.
* __inline__ | `boolean`: Markdownをインラインテキストとしてレンダリングするかどうかを制御します。. Default: `false`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.
* __voiceID__ | `string`: 音声制御識別子. Default: `none`.


## Examples

```jsx live
<Text>*Markdown* formatted text comes here...</Text>
```



