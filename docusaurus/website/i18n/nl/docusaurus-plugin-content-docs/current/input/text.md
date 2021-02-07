---
id: text-input
title: Text Input
sidebar_label: Text Input
---

Een tekstinvoercomponent. Kan gebruikt worden als onderdeel van een ISLE-dashboard of stand-alone. In het laatste geval wilt u wijzigingen verwerken via het `on-Change` attribuut of de waarde binden aan een globale variabele via het `bind` attribuut.

## Options

* __bind__ | `string`: naam van de globale variabele voor het toe te kennen nummer. Default: `none`.
* __defaultValue__ | `string`: Een waarde die de standaardwaarde van de invoer bij het begin aangeeft. Default: `''`.
* __value__ | `string`: tekstwaarde (voor gecontroleerde component). Default: `none`.
* __legend__ | `(string|node)`: Een tekenreeks die de tekst aangeeft die naast het ingevoerde nummer wordt weergegeven. Default: `''`.
* __inline__ | `boolean`: Geeft aan of de invoer inline wordt weergegeven. Default: `false`.
* __onBlur__ | `function`: terugbelfunctie die wordt aangeroepen wanneer het tekstgebied zijn focus verliest. Default: `onBlur() {}`.
* __onChange__ | `function`: Een functie die moet worden aangeroepen wanneer een tekstwaarde wordt gewijzigd. Default: `onChange() {}`.
* __onKeyDown__ | `function`: terugbelfunctie die moet worden aangeroepen wanneer een toets wordt ingedrukt. Default: `onKeyDown() {}`.
* __onKeyPress__ | `function`: terugbelfunctie die moet worden aangeroepen bij het invoeren van een willekeurige toets. Default: `onKeyPress() {}`.
* __onKeyUp__ | `function`: terugbelfunctie die moet worden aangeroepen wanneer de toets wordt losgelaten. Default: `onKeyUp() {}`.
* __placeholder__ | `string`: Een tekenreeks die de waarde aangeeft die moet worden weergegeven voordat een eerste keuze wordt gemaakt. Default: `none`.
* __width__ | `number`: Een getal dat de breedte van de invoer aangeeft in pixels. Default: `80`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.


## Examples

```jsx live
<TextInput
    legend="Your name"
    defaultValue="Enter text"
/>
```

