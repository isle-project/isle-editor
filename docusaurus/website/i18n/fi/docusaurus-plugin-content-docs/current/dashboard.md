--- 
id: dashboard 
title: Dashboard
sidebar_label: Dashboard 
---

Kojelauta, jossa yhdistetään useiden lapsisyöttökenttien käsittely.

## Vaihtoehdot

* __autoStart__ | `boolean`: jos arvoksi asetetaan `true`, `onGenerate`-funktio suoritetaan käynnistyksen yhteydessä oletussyöttöarvoilla.. Default: `true`.
* __autoUpdate__ | `boolean`: ohjaa, onko `onGenerate`-toiminto käynnistettävä automaattisesti, kun jokin lapsen syöttökentistä muuttuu.. Default: `false`.
* __description__ | `(string|node)`: kojelaudan kuvaus. Default: `''`.
* __disabled__ | `boolean`: valvoo, poistetaanko kojelauta käytöstä. Default: `false`.
* __label__ | `string`: painikkeen etiketti. Default: `none`.
* __maxWidth__ | `number`: kojelaudan enimmäisleveys. Default: `600`.
* __className__ | `string`: luokan nimi. Default: `''`.
* __bodyClassName__ | `string`: undefined. Default: `'d-grid gap-3'`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.
* __onGenerate__ | `function`: toiminto, joka käynnistyy, kun painiketta napsautetaan tai jokin kojelaudan syöttöarvoista muuttuu (jos `autoUpdate` on asetettu arvoon `true`). Funktiota kutsutaan syöttökenttien arvojen kanssa siinä järjestyksessä, jossa ne on sijoitettu kojelautaan.. Default: `onGenerate() {}`.
* __title__ | `(string|node)`: kortin otsikko. Default: `''`.


## Esimerkkejä

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
