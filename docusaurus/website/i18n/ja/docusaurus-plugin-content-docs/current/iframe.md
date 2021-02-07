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

```jsx live
<IFrame src="https://wikipedia.org" height="700px" />
``` 

