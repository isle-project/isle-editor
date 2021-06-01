---
id: text-area
title: Text Area
sidebar_label: Text Area
---

Tekstiala komponent. Kasutatakse iseseisva komponendina, muudatusi tuleks käsitleda atribuudi "onChange" abil.

## Valikud

* __defaultValue__ | `string`: tekstiala vaikeväärtus. Default: `''`.
* __value__ | `string`: tekstiväärtus (kontrollitava komponendi puhul). Default: `none`.
* __disabled__ | `boolean`: kontrollib, kas tekstiala keelatakse. Default: `false`.
* __legend__ | `(string|node)`: legendi tekst. Default: `''`.
* __onBlur__ | `function`: tagasipöördumisfunktsioon, mida kutsutakse esile, kui tekstiala kaotab fookuse. Default: `onBlur() {}`.
* __onChange__ | `function`: callback-funktsioon, mis käivitub uue tekstiga, kui ala tekst muutub. Default: `onChange() {}`.
* __placeholder__ | `string`: paigutustekst. Default: `none`.
* __resizable__ | `string`: kontrollib, kas tekstiala on muudetava suurusega (võib olla kas "mõlemad", "horisontaalne", "vertikaalne" või "ei ole").. Default: `'none'`.
* __rows__ | `number`: ridade arv. Default: `5`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.


## Näited

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
