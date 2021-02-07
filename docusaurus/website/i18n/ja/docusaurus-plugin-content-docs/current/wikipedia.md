---
id: wikipedia 
title: Wikipedia
sidebar_label: Wikipedia
---

Wikipedia**コンポーネントは**Wikipedia**をスキャンして記事を返します。

## Options

* __defaultEntry__ | `string`: デフォルトの表示項目. Default: `none`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.


## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Entry', value: 'withEntry' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Wikipedia />
```

</TabItem>

<TabItem value="withEntry">

```jsx live
<Wikipedia defaultEntry="Angela Merkel" />
```

</TabItem>

</Tabs>
