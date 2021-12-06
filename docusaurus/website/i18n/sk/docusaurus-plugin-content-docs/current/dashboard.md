--- 
id: dashboard 
title: Dashboard
sidebar_label: Dashboard 
---

Ovládací panel na kombináciu spracovania viacerých vstupných polí pre deti.

## Možnosti

* __autoStart__ | `boolean`: ak je nastavená na `true`, funkcia `onGenerate` sa vykoná pri spustení s predvolenými vstupnými hodnotami. Default: `true`.
* __autoUpdate__ | `boolean`: riadi, či sa má funkcia `onGenerate` automaticky zavolať, keď sa zmení jedno z podriadených vstupných polí.. Default: `false`.
* __description__ | `(string|node)`: Popis prístrojovej dosky. Default: `''`.
* __disabled__ | `boolean`: kontroluje, či má byť prístrojová doska vypnutá.. Default: `false`.
* __label__ | `string`: Štítok tlačidla. Default: `none`.
* __maxWidth__ | `number`: maximálna šírka prístrojovej dosky. Default: `600`.
* __className__ | `string`: názov triedy. Default: `''`.
* __bodyClassName__ | `string`: názov triedy pre telo karty. Default: `'d-grid gap-3'`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.
* __onGenerate__ | `function`: funkcia vyvolaná po kliknutí na tlačidlo alebo po zmene jednej zo vstupných hodnôt ovládacieho panela (ak je `autoUpdate` nastavené na `true`). Funkcia sa zavolá s hodnotami vstupných polí v poradí, v akom sú umiestnené v prístrojovom paneli. Default: `onGenerate() {}`.
* __title__ | `(string|node)`: názov karty. Default: `''`.


## Príklady

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
