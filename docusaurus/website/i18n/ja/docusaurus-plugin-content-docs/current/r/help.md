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


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'From Library', value: 'otherLibrary' },
        { label: 'Visible on Startup', value: 'visible' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<span><RHelp>sum</RHelp> is used to sum the elements of a vector.</span>
```

</TabItem>

<TabItem value="otherLibrary" >

```jsx live
<span><RHelp library="graphics">hist</RHelp> is used to create a histogram.</span>
```

</TabItem>

<TabItem value="visible" >

```jsx live
<span><RHelp visible={true} >sum</RHelp> is used to sum the elements of a vector.</span>
```

</TabItem>

</Tabs>
