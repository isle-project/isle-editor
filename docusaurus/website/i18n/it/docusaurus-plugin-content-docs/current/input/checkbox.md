---
id: checkbox-input
title: Checkbox Input
sidebar_label: Checkbox Input
---

Un componente di input della casella di controllo. Può essere utilizzato come parte di un cruscotto ISLE o autonomo. In quest'ultimo caso, si vuole gestire le modifiche tramite l'attributo `onChange` o legare il valore ad una variabile globale tramite l'attributo `bind`.

## Opzioni

* __bind__ | `string`: nome della variabile globale per il valore della casella di controllo da assegnare a. Default: `''`.
* __defaultValue__ | `boolean`: valore booleano che indica il valore predefinito della casella di controllo. Default: `false`.
* __value__ | `boolean`: valore della casella di controllo (per il componente controllato). Default: `none`.
* __disabled__ | `boolean`: indica se l'ingresso è attivo o meno. Default: `false`.
* __inline__ | `boolean`: indica se la casella di controllo viene visualizzata in linea. Default: `false`.
* __onChange__ | `function`: funzione di richiamata da richiamare quando si fa clic sulla casella di controllo. La funzione viene richiamata con il valore corrente della casella di controllo. Default: `onChange() {}`.
* __legend__ | `(string|node)`: testo visualizzato accanto alla casella di controllo. Default: `''`.
* __tooltip__ | `string`: testo visualizzato quando si passa il mouse sulla casella di controllo. Default: `''`.
* __tooltipPlacement__ | `string`: posizione della punta del bottone. Default: `'right'`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.


## Esempi

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
