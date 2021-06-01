---
id: text-area
title: Text Area
sidebar_label: Text Area
---

Tekstialueen komponentti. Käytetään itsenäisenä komponenttina, muutokset tulisi käsitellä `onChange`-attribuutin avulla.

## Vaihtoehdot

* __defaultValue__ | `string`: tekstialueen oletusarvo. Default: `''`.
* __value__ | `string`: tekstiarvo (valvottavan komponentin osalta). Default: `none`.
* __disabled__ | `boolean`: ohjaa, poistetaanko tekstialue käytöstä. Default: `false`.
* __legend__ | `(string|node)`: selostusteksti. Default: `''`.
* __onBlur__ | `function`: takaisinkutsufunktio, joka käynnistetään, kun tekstialue menettää tarkennuksen.. Default: `onBlur() {}`.
* __onChange__ | `function`: callback-funktio, joka käynnistetään uuden tekstin kanssa, kun alueen teksti muuttuu.. Default: `onChange() {}`.
* __placeholder__ | `string`: paikanvarausteksti. Default: `none`.
* __resizable__ | `string`: ohjaa, onko tekstialueen kokoa muutettavissa (voi olla joko "molemmat", "vaaka", "pystysuora" tai "ei mitään").. Default: `'none'`.
* __rows__ | `number`: rivien lukumäärä. Default: `5`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.


## Esimerkkejä

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Custom Style', value: 'customStyle' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<TextArea
    legend="Please enter a few sentences"
    placeholder="Enter text"
/>
```

</TabItem>

<TabItem value="customStyle">

<TextArea
    legend="Please enter a few sentences"
    placeholder="Enter text"
    style={{
        fontSize: 33,
        fontFamily: 'Georgia', 
        boxShadow: '0 0 4px black',
        background: 'rgb(238,174,202)', 
        background: 'radial-gradient(circle, rgba(255, 255, 0, 0.3) 44%, white 100%)' 
    }}
/>

</TabItem>

</Tabs>
