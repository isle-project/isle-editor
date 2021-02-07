---
id: accordion
title: Accordion
sidebar_label: Accordion
---

Un componente a fisarmonica che controlla i cursori verticali.

## Options

* __active__ | `number`: indice del cursore da aprire all'inizio. Default: `none`.
* __canCloseAll__ | `boolean`: se si possono far crollare tutte le testate. Default: `false`.
* __headers__ | `array<(string|node)>`: array di nomi di intestazione. Default: `none`.
* __headerStyle__ | `object`: si può anche assegnare uno stile alle barre di intestazione. Default: `none`.
* __headerClassName__ | `string`: questo supera il nome di classe dato alle intestazioni. Default: `none`.
* __onChange__ | `function`: richiamata invocata con indice del nuovo cursore verticale attivo. Default: `onChange() {}`.
* __className__ | `string`: nome della classe per il div esterno. Default: `''`.
* __style__ | `object`: Stili in linea CSS per il div esterno. Default: `none`.


## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="firstOpened"
    values={[
        { label: 'First item opened', value: 'firstOpened' },
        { label: 'All items can close', value: 'allClosed' },
    ]}
    lazy
>
<TabItem value="firstOpened">

```jsx live
<Accordion headers={[ 'First Question', 'Second Question' ]} active={0} >
    <FreeTextQuestion />
    <FreeTextQuestion />
</Accordion>
```

</TabItem>
<TabItem value="allClosed">

```jsx live
<Accordion headers={[ 'First Question', 'Second Question' ]} canCloseAll >
    <FreeTextQuestion />
    <FreeTextQuestion />
</Accordion>
```

</TabItem>
</Tabs>

