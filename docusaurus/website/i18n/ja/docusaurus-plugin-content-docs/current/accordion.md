---
id: accordion
title: Accordion
sidebar_label: Accordion
---

垂直方向のスライダーを制御するアコーディオンコンポーネント。

## オプション

* __active__ | `number`: 先頭に開くスライダーのインデックス. Default: `none`.
* __canCloseAll__ | `boolean`: すべてのヘッダを折りたたむことができるかどうか. Default: `false`.
* __headers__ | `array<(string|node)>`: ヘッダー名の配列. Default: `none`.
* __headerStyle__ | `object`: ヘッダーバーにスタイルを割り当てることもできます。. Default: `none`.
* __headerClassName__ | `string`: これはヘッダの指定されたクラス名を上書きします。. Default: `none`.
* __onChange__ | `function`: コールバックは、新しいアクティブな垂直スライダーのインデックスで呼び出されます。. Default: `onChange() {}`.
* __className__ | `string`: 外字クラス名. Default: `''`.
* __style__ | `object`: 外側のdivのためのCSSインラインスタイル. Default: `none`.


## 例としては、以下のようなものがあります。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="firstOpened"
    values={[
        { label: 'First item opened', value: 'firstOpened' },
        { label: 'All items can close', value: 'allClosed' },
    ]}
    lazy
>
<TabItem value="firstOpened">

```jsx live
<Accordion headers={[ 'First Question', 'Second Question' ]} active={0} >
    <FreeTextQuestion />
    <FreeTextQuestion />
</Accordion>
```

</TabItem>
<TabItem value="allClosed">

```jsx live
<Accordion headers={[ 'First Question', 'Second Question' ]} canCloseAll >
    <FreeTextQuestion />
    <FreeTextQuestion />
</Accordion>
```

</TabItem>
</Tabs>

