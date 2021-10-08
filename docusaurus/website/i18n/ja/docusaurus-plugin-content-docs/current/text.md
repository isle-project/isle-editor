---
id: text 
title: Text
sidebar_label: Text
---

生のテキストをMarkdownとしてレンダリングし、音声コントロールを可能にするテキストコンポーネント。

## オプション

* __raw__ | `string`: 描画対象文字. Default: `''`.
* __className__ | `string`: クラス名. Default: `''`.
* __inline__ | `boolean`: Markdownをインラインテキストとしてレンダリングするかどうかを制御します。. Default: `false`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.


## 例としては、以下のようなものがあります。


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'Multi-line', value: 'multiLine' }
    ]}
    lazy
>
<TabItem value="minimal">

```jsx live
<Text>*Markdown* formatted text comes here...</Text>
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<Text style={{ color: 'orange', fontSize: 70}}>
*Markdown* formatted text comes here...</Text>
```
</TabItem>

<TabItem value="multiLine">

```jsx live
<Text raw={`
1. Text raw works for multi-line text
2. *second line*
3. **third line**
`} />
```
</TabItem>

</Tabs>
