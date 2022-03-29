---
id: file-question 
title: File Question
sidebar_label: File Question
---

ユーザーにファイルをアップロードするよう求める質問です。

## オプション

* __question__ | `(string|node)`: ファイル質問コンポーネントの上部に表示される質問です。. Default: `''`.
* __hintPlacement__ | `string`: ヒントの配置（`top`, `left`, `right`, `bottom` のいずれか）を指定します。. Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: 解答のヒント. Default: `[]`.
* __feedback__ | `boolean`: フィードバックボタンを表示するかどうかを制御する. Default: `true`.
* __chat__ | `boolean`: undefined. Default: `false`.
* __accept__ | `string`: コンポーネントで使用可能な[unique file identifiers](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers)のコンマ区切りリスト（例：'image/*', '.pdf', 'audio/*' など）。. Default: `'*/*'`.
* __until__ | `Date`: 答案提出期限. Default: `none`.
* __points__ | `number`: 評価点数. Default: `10`.
* __className__ | `string`: クラス名. Default: `''`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.
* __onChange__ | `function`: undefined. Default: `onChange() {}`.


## 例としては、以下のようなものがあります。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Only PDFs', value: 'onlyPDF' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<FileQuestion question="You may upload a file." feedback={false}  />
```
</TabItem>

<TabItem value="onlyPDF">

```jsx live
<FileQuestion question="Please upload a PDF file." feedback={false} accept=".pdf" />
```

</TabItem>

</Tabs>
