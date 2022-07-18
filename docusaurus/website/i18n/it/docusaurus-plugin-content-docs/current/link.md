---
id: link
title: Link
sidebar_label: Link
---

Un componente per la visualizzazione di un link.

## Opzioni

* __href__ | `string (required)`: URL del sito web da collegare a. Default: `none`.
* __download__ | `(string|boolean)`: specifica se il link deve essere scaricato: impostare a `true` per forzare il download, o una stringa per specificare il nome del file; se `false`, nessun download è forzato. Default: `false`.
* __target__ | `string`: definisce dove il link viene aperto: impostato a `_blank` per la nuova finestra, `_self` proprio frame, `_parent` per il genitore, `_top` per l'intero corpo della finestra, o il nome del frame. Default: `none`.
* __windowFeatures__ | `string`: elenco separato da virgole di caratteristiche della finestra per quando il link viene aperto in una nuova finestra (vedere: https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features). Default: `none`.
* __openWindow__ | `boolean`: booleano che controlla se aprire l'URL in una nuova finestra. Default: `false`.
* __className__ | `string`: nome della classe. Default: `''`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.


## Esempi

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'New Page', value: 'newPage' },
        { label: 'Image Link', value: 'imageLink' }
    ]}
    lazy
>
<TabItem value="minimal">

```jsx live
<Link href="https://wikipedia.org">Wikipedia</Link>
```

</TabItem>

<TabItem value="newPage">

```jsx live
<Link target="_blank" 
style={{ fontSize: 35}}
href="https://wikipedia.org">New Wikipedia Page</Link>
```
</TabItem>

<TabItem value="imageLink">

```jsx live
<Link target="_blank" 
style={{ fontSize: 35}}
href="https://wikipedia.org">
<img src= "https://bit.ly/3aM4OU7" /></Link>
```

</TabItem>

</Tabs>
