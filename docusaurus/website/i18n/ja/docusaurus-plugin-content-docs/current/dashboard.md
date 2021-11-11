--- 
id: dashboard 
title: Dashboard
sidebar_label: Dashboard 
---

複数の子入力フィールドの処理を組み合わせるためのダッシュボード。

## オプション

* __autoStart__ | `boolean`: true` にセットされている場合、`onGenerate` 関数は起動時にデフォルトの入力値で実行される。. Default: `true`.
* __autoUpdate__ | `boolean`: は、子入力フィールドの1つが変化したときに `onGenerate` 関数を自動的に呼び出すかどうかを制御します。. Default: `false`.
* __description__ | `(string|node)`: ダッシュボード記述. Default: `''`.
* __disabled__ | `boolean`: ダッシュボードを無効にするかどうかを制御します。. Default: `false`.
* __label__ | `string`: ボタンラベル. Default: `none`.
* __maxWidth__ | `number`: ダッシュボードの最大幅. Default: `600`.
* __className__ | `string`: クラス名. Default: `''`.
* __bodyClassName__ | `string`: undefined. Default: `'d-grid gap-3'`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.
* __onGenerate__ | `function`: 関数は、ボタンがクリックされたときやダッシュボードの入力値が変更されたときに呼び出されます(`autoUpdate` が `true` に設定されている場合)。この関数は、入力フィールドの値がダッシュボードに配置された順に呼び出されます。. Default: `onGenerate() {}`.
* __title__ | `(string|node)`: カードタイトル. Default: `''`.


## 例としては、以下のようなものがあります。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Multiple Inputs', value: 'multipleInputs' }
    ]}
>

<TabItem value="minimal"> 

```jsx live
<Dashboard title="Alerter" onGenerate={( x ) => { alert( x ); }} autoStart={false} >
    <SliderInput
        legend="Input value"
    />
</Dashboard>
```

</TabItem>

<TabItem value="multipleInputs" > 

```jsx live
<Dashboard 
    title="Multiply three numbers."
    style={{ width: 600, boxShadow: '0 0 24px black' }}
    onGenerate={( x, y, z ) => { alert( x*y*z ); }} 
    autoStart={false} 
>
    <SliderInput
        legend="First Input Value"
        rangeInputStyle = {{ width: 360 }}
    />
    <hr />
    <SliderInput
        legend="Second Input Value"
        rangeInputStyle = {{ width: 360 }}
    />
    <hr />
    <SliderInput
        legend="Third Input Value"
        rangeInputStyle = {{ width: 360 }}
    />
    <hr />
</Dashboard>
```

</TabItem>

</Tabs>
