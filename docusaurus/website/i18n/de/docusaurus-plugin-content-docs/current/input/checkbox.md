---
id: checkbox-input
title: Checkbox Input
sidebar_label: Checkbox Input
---

Eine Checkbox-Eingabekomponente. Kann als Teil eines ISLE Dashboards oder eigenständig verwendet werden. Im letzteren Fall wollen Sie Änderungen über das Attribut `onChange` behandeln oder den Wert über das Attribut `bind` an eine globale Variable binden.

## Optionen

* __bind__ | `string`: Name der globalen Variablen, der der Wert des Kontrollkästchens zugewiesen werden soll. Default: `''`.
* __defaultValue__ | `boolean`: boolescher Wert, der den Standardwert des Kontrollkästchens angibt. Default: `false`.
* __value__ | `boolean`: Wert des Kontrollkästchens (für kontrollierte Komponente). Default: `none`.
* __disabled__ | `boolean`: zeigt an, ob der Eingang aktiv ist oder nicht. Default: `false`.
* __inline__ | `boolean`: gibt an, ob das Kontrollkästchen inline angezeigt wird. Default: `false`.
* __onChange__ | `function`: Callback-Funktion, die aufgerufen werden soll, wenn das Kontrollkästchen angeklickt wird. Die Funktion wird mit dem aktuellen Wert der Checkbox aufgerufen. Default: `onChange() {}`.
* __legend__ | `(string|node)`: Text, der neben dem Kontrollkästchen angezeigt wird. Default: `''`.
* __tooltip__ | `string`: Text, der angezeigt wird, wenn der Mauszeiger über das Kontrollkästchen bewegt wird. Default: `''`.
* __tooltipPlacement__ | `string`: Position des Tooltips der Schaltfläche. Default: `'right'`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.


## Beispiele

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
