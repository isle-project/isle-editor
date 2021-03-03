---
id: text-area
title: Text Area
sidebar_label: Text Area
---

Un componente dell'area di testo. Usato come componente a sé stante, le modifiche dovrebbero essere gestite tramite l'attributo `onChange`.

## Opzioni

* __defaultValue__ | `string`: valore predefinito dell'area di testo. Default: `''`.
* __value__ | `string`: valore di testo (per componente controllato). Default: `none`.
* __disabled__ | `boolean`: controlla se l'area di testo deve essere disabilitata. Default: `false`.
* __legend__ | `(string|node)`: testo della leggenda. Default: `''`.
* __onBlur__ | `function`: funzione di callback invocata quando l'area di testo perde la messa a fuoco. Default: `onBlur() {}`.
* __onChange__ | `function`: funzione di richiamo richiamata con il nuovo testo quando il testo dell'area cambia. Default: `onChange() {}`.
* __placeholder__ | `string`: testo segnaposto. Default: `none`.
* __resizable__ | `string`: controlla se l'area di testo deve essere ridimensionabile (può essere sia "sia", "orizzontale", "verticale" o "nessuno"). Default: `'none'`.
* __rows__ | `number`: numero di righe. Default: `5`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.


## Esempi

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
