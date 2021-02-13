---
id: scrolling-text
title: Scrolling Text
sidebar_label: Scrolling Text
---

指定した間隔でテキストのリストを循環させる動的な背景コンポーネントです。

## Options

* __text__ | `array<string>`: 表示する文字列. Default: `[]`.
* __loop__ | `boolean`: はプロセスを無限に表示するかどうかを示します。. Default: `false`.
* __direction__ | `string`: テキストの流れの方向 (`left`, `right`, `up`, `down`, `tracking`, `focus`, `swirl` のいずれか)。. Default: `'right'`.
* __hold__ | `number`: 滞留時間. Default: `5`.
* __wait__ | `number`: 新しいテキストが到着するまでの時間. Default: `3`.
* __inTime__ | `number`: じかんじかん. Default: `1`.
* __outTime__ | `number`: 終了効果時間. Default: `1`.
* __className__ | `string`: クラス名. Default: `''`.
* __style__ | `object`: テキストのCSSスタイル. Default: `{}`.


## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Delay and Sound', value: 'delayAndSound' },
        { label: 'With CSS', value: 'withCSS' },
        { label: 'Array of Strings', value: 'array' },
        { label: 'Humanized', value: 'humanized' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Typewriter text="Lorem ipsum" />
```

</TabItem>

<TabItem value="delayAndSound">

```jsx live
<Typewriter text="Lorem ipsum" sound delay={2000} />
```

</TabItem>

<TabItem value="withCSS">

```jsx live
<Typewriter text="Styled Text" style={{ fontSize: 66, color: 'red'}} />
```

</TabItem>

<TabItem value="array">

```jsx live
<Typewriter text={["First Entry", "Second Entry", "Third Entry"]}  hold={2000} />
```

</TabItem>

<TabItem value="humanized">

```jsx live
<Typewriter text="This is a humanized performance" random interval={170} />
```

</TabItem>

</Tabs>



