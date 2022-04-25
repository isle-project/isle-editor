---
id: link
title: Link
sidebar_label: Link
---

リンクを表示するためのコンポーネント。

## オプション

* __href__ | `string (required)`: リンク先サイトのURL. Default: `none`.
* __download__ | `(string|boolean)`: undefined. Default: `false`.
* __target__ | `string`: リンクが開かれる場所を定義します: 新しいウィンドウを `_blank`、自分のフレームを `_self`、親を `_parent`、ウィンドウ全体を `_top`、フレームの名前に設定します。. Default: `'_blank'`.
* __windowFeatures__ | `string`: リンクが新しいウィンドウで開かれるときのウィンドウ機能のコンマ区切りのリスト（参照：https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features. Default: `none`.
* __openWindow__ | `boolean`: undefined. Default: `false`.
* __className__ | `string`: クラス名. Default: `''`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.


## 例としては、以下のようなものがあります。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'New Page', value: 'newPage' },
        { label: 'Image Link', value: 'imageLink' }
    ]}
    lazy
>
<TabItem value="minimal">

```jsx live
<Link href="https://wikipedia.org">Wikipedia</Link>
```

</TabItem>

<TabItem value="newPage">

```jsx live
<Link target="_blank" 
style={{ fontSize: 35}}
href="https://wikipedia.org">New Wikipedia Page</Link>
```
</TabItem>

<TabItem value="imageLink">

```jsx live
<Link target="_blank" 
style={{ fontSize: 35}}
href="https://wikipedia.org">
<img src= "https://bit.ly/3aM4OU7" /></Link>
```

</TabItem>

</Tabs>
