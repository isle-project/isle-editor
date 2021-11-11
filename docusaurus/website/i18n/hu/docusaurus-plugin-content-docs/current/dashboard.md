--- 
id: dashboard 
title: Dashboard
sidebar_label: Dashboard 
---

Egy műszerfal több gyermek beviteli mező kezelésének kombinálására.

## Opciók

* __autoStart__ | `boolean`: ha "igaz"-ra van állítva, akkor az "onGenerate" függvényt indításkor az alapértelmezett bemeneti értékekkel hajtja végre.. Default: `true`.
* __autoUpdate__ | `boolean`: szabályozza, hogy az "onGenerate" függvény automatikusan meghívásra kerüljön-e, amikor az egyik gyermek beviteli mező megváltozik.. Default: `false`.
* __description__ | `(string|node)`: műszerfal leírása. Default: `''`.
* __disabled__ | `boolean`: szabályozza, hogy a műszerfal ki legyen-e kapcsolva. Default: `false`.
* __label__ | `string`: gomb címkéje. Default: `none`.
* __maxWidth__ | `number`: a műszerfal maximális szélessége. Default: `600`.
* __className__ | `string`: osztály neve. Default: `''`.
* __bodyClassName__ | `string`: undefined. Default: `'d-grid gap-3'`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.
* __onGenerate__ | `function`: függvény, amely a gombra kattintáskor vagy a műszerfal egyik bemeneti értékének megváltozásakor hívódik elő (ha az "autoUpdate" értéke "igaz"). A függvényt a beviteli mezők értékeivel hívja meg, abban a sorrendben, ahogyan azok a műszerfalra kerültek.. Default: `onGenerate() {}`.
* __title__ | `(string|node)`: kártya címe. Default: `''`.


## Példák

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
