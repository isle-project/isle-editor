---
id: r-table
title: R Table
sidebar_label: R Table
---

Rデータフレームまたはマトリックスを表形式で表示するためのコンポーネントです。

## オプション

* __code__ | `string`: テーブルに表示するデータを含むdata.frameを返すRコード. Default: `''`.
* __libraries__ | `array`: 入力 `code` が実行されたときに自動的にロードされるべき R ライブラリ. Default: `[]`.
* __prependCode__ | `(string|array)`: R コード `string` (または R コードブロックの `array`) を評価する際に `code` に格納されているコードの前に追加されます。. Default: `''`.
* __width__ | `number`: 幅. Default: `0.5`.


## 例としては、以下のようなものがあります。


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Using Libraries', value: 'usingLibraries' },
        { label: 'Custom Width', value: 'customWidth' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<RTable
    code={`data <- matrix( runif(64), nrow=8, ncol=8); 
    data`}
/>
```

</TabItem>

<TabItem value="usingLibraries" >

```jsx live
<RTable 
    libraries={[ 'dplyr' ]}
    code="starwars"
/>
```

</TabItem>

<TabItem value="customWidth" >

```jsx live
<RTable 
    libraries={[ 'dplyr' ]}
    code="starwars"
    width={0.85}
/>
```

</TabItem>

</Tabs>
