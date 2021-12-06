--- 
id: dashboard 
title: Dashboard
sidebar_label: Dashboard 
---

Armatuurlaud mitme lapse sisendvälja käsitlemise kombineerimiseks.

## Valikud

* __autoStart__ | `boolean`: kui see on seatud `true`, siis käivitatakse funktsioon `onGenerate` käivitamisel vaikimisi sisendväärtustega.. Default: `true`.
* __autoUpdate__ | `boolean`: kontrollib, kas funktsioon "onGenerate" peaks automaatselt käivituma, kui üks laps-sisendusväljadest muutub.. Default: `false`.
* __description__ | `(string|node)`: armatuurlaua kirjeldus. Default: `''`.
* __disabled__ | `boolean`: kontrollib, kas armatuurlaud keelatakse. Default: `false`.
* __label__ | `string`: nupu silt. Default: `none`.
* __maxWidth__ | `number`: armatuurlaua maksimaalne laius. Default: `600`.
* __className__ | `string`: klassi nimi. Default: `''`.
* __bodyClassName__ | `string`: kaardi korpuse klassi nimi. Default: `'d-grid gap-3'`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.
* __onGenerate__ | `function`: funktsioon, mis käivitub, kui nupule vajutatakse või kui üks armatuurlaua sisendväärtustest muutub (kui `autoUpdate` on seatud `true`). Funktsiooni kutsutakse välja koos sisendväljade väärtustega selles järjekorras, milles need on armatuurlauale paigutatud.. Default: `onGenerate() {}`.
* __title__ | `(string|node)`: kaardi pealkiri. Default: `''`.


## Näited

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
