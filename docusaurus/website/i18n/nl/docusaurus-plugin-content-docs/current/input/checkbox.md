---
id: checkbox-input
title: Checkbox Input
sidebar_label: Checkbox Input
---

Een checkbox-invoercomponent. Kan worden gebruikt als onderdeel van een ISLE-dashboard of stand-alone. In het laatste geval wilt u veranderingen afhandelen via het `on-Change` attribuut of de waarde binden aan een globale variabele via het `bind` attribuut.

## Opties

* __bind__ | `string`: naam van de globale variabele voor de waarde van het selectievakje dat moet worden toegewezen aan. Default: `''`.
* __defaultValue__ | `boolean`: booleaanse waarde die de standaardwaarde van het selectievakje aangeeft. Default: `false`.
* __value__ | `boolean`: waarde van het selectievakje (voor de gecontroleerde component). Default: `none`.
* __disabled__ | `boolean`: geeft aan of de ingang actief is of niet. Default: `false`.
* __inline__ | `boolean`: geeft aan of het selectievakje inline wordt weergegeven. Default: `false`.
* __onChange__ | `function`: terugbelfunctie die moet worden aangeroepen wanneer het selectievakje wordt aangeklikt. De functie wordt aangeroepen met de huidige waarde van het selectievakje. Default: `onChange() {}`.
* __legend__ | `(string|node)`: tekst die naast het selectievakje wordt weergegeven. Default: `''`.
* __tooltip__ | `string`: tekst die wordt weergegeven wanneer het selectievakje wordt aangekruist. Default: `''`.
* __tooltipPlacement__ | `string`: positie van de knop tooltip. Default: `'right'`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.


## Voorbeelden

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Inline', value: 'inline' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'With Callback', value: 'withCallback' }
    ]}
    lazy
>


<TabItem value="minimal">

```jsx live
<CheckboxInput legend="Take the logarithm" />
```
</TabItem>

<TabItem value="inline">

```jsx live
<p>Please click
<CheckboxInput
    inline defaultValue={false}
/>
to confirm that you will follow our netiquette.</p>
```
</TabItem>


<TabItem value="withStyle">

```jsx live
<CheckboxInput
    style={{ fontSize: 30, color: 'blue'}}
    legend="Click to confirm"
    defaultValue={false}
/>
```
</TabItem>

<TabItem value="withCallback">

```jsx live
<CheckboxInput
    legend="Click to confirm..."
    onChange={( value ) => {
        alert( 'New value: '+value );
    }}
/>
```

</TabItem>

</Tabs>
