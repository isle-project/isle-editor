--- 
id: dashboard 
title: Dashboard
sidebar_label: Dashboard 
---

Et dashboard til at kombinere håndteringen af flere indtastningsfelter for børn.

## Indstillinger

* __autoStart__ | `boolean`: hvis indstillet til `true`, udføres funktionen `onGenerate` ved opstart med standard inputværdierne. Default: `true`.
* __autoUpdate__ | `boolean`: styrer, om funktionen `onGenerate` skal kaldes automatisk, når et af de underordnede inputfelter ændres. Default: `false`.
* __description__ | `(string|node)`: beskrivelse af instrumentbrættet. Default: `''`.
* __disabled__ | `boolean`: kontrollerer, om instrumentbrættet skal være deaktiveret. Default: `false`.
* __label__ | `string`: knapmærke. Default: `none`.
* __maxWidth__ | `number`: maksimal bredde af instrumentbrættet. Default: `600`.
* __className__ | `string`: klassens navn. Default: `''`.
* __bodyClassName__ | `string`: undefined. Default: `'d-grid gap-3'`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.
* __onGenerate__ | `function`: funktion, der kaldes, når der klikkes på knappen, eller når en af dashboardets inputværdier ændres (hvis `autoUpdate` er indstillet til `true`). Funktionen kaldes med værdierne i inputfelterne i den rækkefølge, de er placeret i instrumentbrættet. Default: `onGenerate() {}`.
* __title__ | `(string|node)`: kortets titel. Default: `''`.


## Eksempler

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
