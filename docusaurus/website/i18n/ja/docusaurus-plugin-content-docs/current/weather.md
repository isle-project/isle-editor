---
id: weather 
title: Weather
sidebar_label: Weather
---

指定された場所に現在の天気を表示するためのコンポーネント。

## Options

* __location__ | `string`: 地名. Default: `none`.
* __voiceID__ | `string`: 音声制御識別子. Default: `none`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.


## Examples

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


