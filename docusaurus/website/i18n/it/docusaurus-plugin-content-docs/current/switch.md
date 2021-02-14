---
id: switch
title: Switch Components
sidebar_label: Switch Components
---

Il componente Switch consente la visualizzazione di un elemento di una lista di più elementi. Gli utenti possono scorrere i diversi figli del tag Switch cliccando su quello attualmente visualizzato.

## Options

* __active__ | `boolean`: controlla se l'interruttore è attivo o meno. Default: `true`.
* __tooltip__ | `string`: tooltip visualizzato quando si passa sopra l'elemento di commutazione. Default: `none`.
* __tooltipPos__ | `string`: posizionamento del tooltip (in alto, a sinistra, a destra o in basso). Default: `'top'`.
* __className__ | `string`: nome della classe per l'elemento di campata che lo racchiude. Default: `''`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.
* __onChange__ | `function`: richiamata quando gli elementi vengono commutati. Riceve come primo argomento l'indice del figlio attualmente visualizzato. Default: `onChange() {}`.


## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Custom Tooltip', value: 'withTooltip' },
        { label: 'With Style', value: 'withStyle' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Switch>
    <span>Option 1</span>
    <span>Option 2</span>
</Switch>
```

</TabItem>

<TabItem value="withTooltip">

```jsx live
<Switch tooltip="Just click and see" tooltipPos="left">
    <span>Option 1</span>
    <span>Option 2</span>
</Switch>
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<Switch  
  style={{ fontSize: 80, fontFamily: 'Open Sans Condensed'}} 
>
    <span>Some Clouds</span>
    <img src="https://bit.ly/3rLGE30" />
    <img src ="https://bit.ly/2OzxEj3" />
</Switch>
```

</TabItem>

</Tabs>
