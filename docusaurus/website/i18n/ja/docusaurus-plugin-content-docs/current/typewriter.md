---
id: typewriter 
title: Typewriter
sidebar_label: Typewriter
---

タイプライターエフェクトを作成できるISLEコンポーネント。

## Options

* __delay__ | `number`: タイプライタ起動前初期遅延時間. Default: `none`.
* __hold__ | `number`: textが文字列の配列の場合、配列の次の項目に移動する前にフル表示される時間を指定します。. Default: `2000`.
* __interval__ | `number`: タイプライターの間隔. Default: `100`.
* __random__ | `boolean`: random が設定されている場合、キー入力は特定の「人間的な」ランダム性で実行されます。. Default: `false`.
* __sound__ | `boolean`: タイプされたキーストロークも聞こえます. Default: `false`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.
* __text__ | `(string|array<string>)`: 表示する全文. Default: `''`.


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

