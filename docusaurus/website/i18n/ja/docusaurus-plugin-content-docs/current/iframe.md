---
id: iframe 
title: IFrame
sidebar_label: IFrame
---

iFrame コンポーネント。

## Options

* __src__ | `string (required)`: ソースＵＲＬ. Default: `none`.
* __fullscreen__ | `boolean`: iFrameをフルスクリーンモードで表示するかどうかを制御します。. Default: `false`.
* __title__ | `string`: iFrameタイトル. Default: `'An iFrame'`.
* __width__ | `number`: iFrame幅（px. Default: `900`.
* __height__ | `number`: iFrame の高さ (px). Default: `600`.
* __className__ | `string`: クラス名. Default: `''`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.


## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Controlled Size', value: 'controlledSize' },
        { label: 'Custom CSS', value: 'withCSS' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<IFrame src="https://wikipedia.org" />
```

</TabItem>

<TabItem value="controlledSize" >

```jsx live
<IFrame src="https://wikipedia.org" 
  width={600} 
  height={400} 
/>
```
</TabItem>

<TabItem value="withCSS" >

```jsx live
<IFrame src="https://wikipedia.org" 
    width={600} 
    height={600} 
    style={{ outline: '10px solid black' }}
/>
```
</TabItem>

</Tabs>


