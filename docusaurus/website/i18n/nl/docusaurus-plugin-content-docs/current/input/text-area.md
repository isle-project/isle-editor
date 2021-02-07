---
id: text-area
title: Text Area
sidebar_label: Text Area
---

Een tekstveldonderdeel. Gebruikt als een stand-alone component, moeten wijzigingen worden afgehandeld via het `on-Change` attribuut.

## Options

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


## Examples

```jsx live
<TextArea
    legend="Please enter a few sentences"
    placeholder="Enter text"
/>
```



