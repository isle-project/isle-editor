--- 
id: dashboard 
title: Dashboard
sidebar_label: Dashboard 
---

Nadzorna plošča za združevanje ravnanja z več otroškimi vnosnimi polji.

## Možnosti

* __autoStart__ | `boolean`: če je nastavljena na `true`, se funkcija `onGenerate` izvede ob zagonu s privzetimi vhodnimi vrednostmi. Default: `true`.
* __autoUpdate__ | `boolean`: določa, ali naj se funkcija `onGenerate` samodejno sproži, ko se spremeni eno od podrejenih vnosnih polj.. Default: `false`.
* __description__ | `(string|node)`: opis armaturne plošče. Default: `''`.
* __disabled__ | `boolean`: nadzoruje, ali je armaturna plošča onemogočena.. Default: `false`.
* __label__ | `string`: oznaka gumba. Default: `none`.
* __maxWidth__ | `number`: največja širina armaturne plošče. Default: `600`.
* __className__ | `string`: ime razreda. Default: `''`.
* __bodyClassName__ | `string`: undefined. Default: `'d-grid gap-3'`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.
* __onGenerate__ | `function`: funkcija, ki se sproži ob kliku na gumb ali spremembi ene od vhodnih vrednosti armaturne plošče (če je možnost `autoUpdate` nastavljena na `true`). Funkcija se pokliče z vrednostmi vhodnih polj v vrstnem redu, v katerem so nameščena na nadzorni plošči. Default: `onGenerate() {}`.
* __title__ | `(string|node)`: naslov kartice. Default: `''`.


## Primeri

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
