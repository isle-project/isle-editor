---
id: weather 
title: Weather
sidebar_label: Weather
---

用于在指定地点显示当前天气的组件。

## 选项

* __location__ | `string`: 地名. Default: `none`.
* __style__ | `object`: CSS内联样式. Default: `{}`.


## 例子

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Custom Styling', value: 'withCSS' },
    ]}
    lazy
>
<TabItem value="minimal">

```jsx live
<Weather
    location="Pittsburgh"
/>
```

</TabItem>

<TabItem value="withCSS">

```jsx live
<Weather
    location="Pittsburgh"
    style={{ fontFamily: 'Courier', background: 'orange' }}
/>
```

</TabItem>

</Tabs>


