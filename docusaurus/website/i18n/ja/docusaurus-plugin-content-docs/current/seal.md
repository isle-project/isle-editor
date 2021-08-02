---
id: seal 
title: Seal
sidebar_label: Seal
---

認印です。

## オプション

* __active__ | `boolean`: シールがアクティブかグレーアウトかを制御します。. Default: `true`.
* __onClick__ | `function`: クリックコールバック関数. Default: `onClick() {}`.
* __scale__ | `number`: オブジェクトサイズ (明示的に設定されていない場合、シールは再スケーリングされません). Default: `none`.
* __innerStyle__ | `object`: うちがた. Default: `{}`.
* __lower__ | `string`: かぶん. Default: `'The lower text'`.
* __lowerArc__ | `number`: 下のテキストの円弧. Default: `150`.
* __noOrnaments__ | `boolean`: 装飾品のレンダリングを妨げる. Default: `false`.
* __removable__ | `boolean`: は、クリックしたときにノートが削除されるかどうかを制御します。. Default: `false`.
* __style__ | `object`: 要素のスタイル. Default: `none`.
* __title__ | `(string|node)`: 印鑑名. Default: `'Enter a title'`.
* __upper__ | `string`: 上文. Default: `'The upper text'`.
* __upperArc__ | `number`: 上段テキストの円弧. Default: `150`.


## 例としては、以下のようなものがあります。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'Removable', value: 'removable' },
        { label: 'Scaled', value: 'scaled' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Seal title="LESSON DONE" upper="Carnegie Mellon" upperArc={120} lower="University" lowerArc={105} />
```

</TabItem>


<TabItem value="withStyle">

```jsx live

<Seal 
  title="LESSON DONE" 
  style={{ backgroundImage: 'linear-gradient(white, silver, gainsboro)'}}
  innerStyle={{ backgroundImage:  'linear-gradient(gold, silver, white)' }}
  upper="Carnegie Mellon"  upperArc={120} 
  lower="University" lowerArc={105}
/>
```

</TabItem>

<TabItem value="removable">

```jsx live
<Seal 
  title="LESSON DONE" 
  noOrnaments
  removable
  style={{ backgroundImage: 'linear-gradient(white, silver, gainsboro)'}}
  innerStyle={{ backgroundImage:  'linear-gradient(gold, silver, white)' }}
  upper="Carnegie Mellon"  upperArc={120} 
  lower="University" lowerArc={105}
/>
```

</TabItem>

<TabItem value="scaled">

```jsx live
<Seal 
  title="BIG SEAL" 
  scale={1.15}
  style={{ fontWeight: 800, color: 'darkred', backgroundImage: 'linear-gradient(white, silver, gainsboro)'}}
  innerStyle={{ backgroundImage:  'linear-gradient(gold, silver, white)' }}
  upper="Carnegie Mellon" upperArc={120} 
  lower="University" lowerArc={105}
/>
```

</TabItem>

</Tabs>
