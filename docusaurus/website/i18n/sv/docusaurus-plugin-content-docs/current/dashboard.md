--- 
id: dashboard 
title: Dashboard
sidebar_label: Dashboard 
---

En instrumentpanel för att kombinera hanteringen av flera inmatningsfält för barn.

## Alternativ

* __autoStart__ | `boolean`: Om den är inställd på "true" utförs funktionen "onGenerate" vid uppstart med standardvärdena för indata.. Default: `true`.
* __autoUpdate__ | `boolean`: kontrollerar om funktionen "onGenerate" ska aktiveras automatiskt när ett av de underordnade inmatningsfälten ändras.. Default: `false`.
* __description__ | `(string|node)`: beskrivning av instrumentpanelen. Default: `''`.
* __disabled__ | `boolean`: Kontrollerar om instrumentpanelen ska inaktiveras.. Default: `false`.
* __label__ | `string`: knappmärke. Default: `none`.
* __maxWidth__ | `number`: instrumentpanelens maximala bredd. Default: `600`.
* __className__ | `string`: klassens namn. Default: `''`.
* __bodyClassName__ | `string`: Klassnamn för kortets kropp.. Default: `'d-grid gap-3'`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.
* __onGenerate__ | `function`: funktion som anropas när knappen klickas eller när ett av inmatningsvärdena i instrumentpanelen ändras (om `autoUpdate` är inställt på `true`). Funktionen anropas med värdena för inmatningsfälten i den ordning som de är placerade i instrumentpanelen.. Default: `onGenerate() {}`.
* __title__ | `(string|node)`: Kortets titel.. Default: `''`.


## Exempel

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
