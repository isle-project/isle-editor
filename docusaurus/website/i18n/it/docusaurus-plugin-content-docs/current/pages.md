---
id: pages 
title: Pages
sidebar_label: Pages
---

Un componente di paginazione ISLE che permette all'utente di scorrere una sequenza di pagine.

## Options

* __activePage__ | `number`: pagina attiva. Default: `1`.
* __disabled__ | `boolean`: controlla se la barra di navigazione è attiva o meno. Default: `false`.
* __title__ | `string`: titolo visualizzato del contenitore delle pagine. Default: `''`.
* __pagination__ | `string`: se mostrare la paginazione sia sul "sopra", "sotto" o "entrambi".. Default: `'top'`.
* __size__ | `string`: dimensione dei pulsanti di paginazione (sia `default`, `lg`, `grande`, `sm`, `sm`, `sm`, `sm`, `sm`, `xs`, o `xsmall`). Default: `'default'`.
* __height__ | `(number|string)`: l'altezza massima del contenitore. Se una pagina incorporata è più alta, viene aggiunta una barra di scorrimento verticale. Default: `none`.
* __voiceID__ | `string`: identificatore di controllo vocale. Default: `none`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.
* __onSelect__ | `function`: Funzione invocata in caso di modifica della modifica attiva. Riceve il nuovo indice di pagina attivo come unico parametro. Default: `onSelect() {}`.


## Examples

```jsx live
<Pages title="Pages">
    <div>
        <h1>First Page</h1>
    </div>
    <div>
        <h1>Second Page</h1>
        <RShell />
    </div>
</Pages>
``` 



