---
id: text-area
title: Text Area
sidebar_label: Text Area
---

Een tekstveldonderdeel. Gebruikt als een stand-alone component, moeten wijzigingen worden afgehandeld via het `on-Change` attribuut.

## Opties

* __defaultValue__ | `string`: standaardwaarde van het tekstgebied. Default: `''`.
* __value__ | `string`: tekstwaarde (voor gecontroleerde component). Default: `none`.
* __disabled__ | `boolean`: controleert of de tekstzone wordt uitgeschakeld. Default: `false`.
* __legend__ | `(string|node)`: legendatekst. Default: `''`.
* __onBlur__ | `function`: terugbelfunctie die wordt aangeroepen wanneer het tekstgebied zijn focus verliest. Default: `onBlur() {}`.
* __onChange__ | `function`: terugbelfunctie die met de nieuwe tekst wordt aangeroepen wanneer de gebiedstekst verandert. Default: `onChange() {}`.
* __placeholder__ | `string`: plaatshoudertekst. Default: `none`.
* __resizable__ | `string`: bepaalt of het tekstgebied aanpasbaar is (kan zowel `beide`, `horizontaal`, `verticaal` of `niet` zijn). Default: `'none'`.
* __rows__ | `number`: aantal rijen. Default: `5`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.


## Voorbeelden

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
