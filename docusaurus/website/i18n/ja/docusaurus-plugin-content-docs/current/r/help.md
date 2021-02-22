---
id: r-help
title: R Help
sidebar_label: R Help
---

ワードがクリックされたときに、モーダルウィンドウでRのドキュメントをプルアップするようにします。

## オプション

* __func__ | `string`: ドキュメントを開くための `R関数` の名前を指定します。指定しなかった場合、`RHelp` タグの内容は関数. Default: `''`.
* __library__ | `string`: 関数が置かれているRパッケージの名前. Default: `'base'`.
* __visible__ | `boolean`: 起動時にヘルプモードウィンドウを開くかどうかを制御します。. Default: `false`.


## 例としては、以下のようなものがあります。

```jsx live
<span><RHelp library="graphics">hist</RHelp> is used to create a histogram.</span>
```

