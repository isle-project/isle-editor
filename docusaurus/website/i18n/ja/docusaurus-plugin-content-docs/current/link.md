---
id: link
title: Link
sidebar_label: Link
---

リンクを表示するためのコンポーネント。

## Options

* __href__ | `string (required)`: リンク先サイトのURL. Default: `none`.
* __target__ | `string`: リンクが開かれる場所を定義します: 新しいウィンドウを `_blank`、自分のフレームを `_self`、親を `_parent`、ウィンドウ全体を `_top`、フレームの名前に設定します。. Default: `'_blank'`.
* __className__ | `string`: クラス名. Default: `''`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.


## Examples

```jsx live
<Link href="https://wikipedia.org">Wikipedia</Link>
```

