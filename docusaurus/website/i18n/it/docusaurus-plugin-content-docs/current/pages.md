---
id: pages 
title: Pages
sidebar_label: Pages
---

Un componente di paginazione ISLE che permette all'utente di scorrere una sequenza di pagine.

## Opzioni

* __activePage__ | `number`: pagina attiva. Default: `1`.
* __disabled__ | `boolean`: controlla se la barra di navigazione è attiva o meno. Default: `false`.
* __title__ | `(string|node)`: titolo visualizzato del contenitore delle pagine. Default: `''`.
* __pagination__ | `string`: se mostrare la paginazione sia sul "sopra", "sotto" o "entrambi". Default: `'top'`.
* __size__ | `string`: dimensione dei pulsanti di paginazione (sia `default`, `lg`, o `sm`). Default: `'default'`.
* __height__ | `(number|string)`: l'altezza massima del contenitore. Se una pagina incorporata è più alta, viene aggiunta una barra di scorrimento verticale. Default: `none`.
* __voiceID__ | `string`: identificatore di controllo vocale. Default: `none`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.
* __onSelect__ | `function`: Funzione invocata in caso di modifica della modifica attiva. Riceve il nuovo indice di pagina attivo come unico parametro. Default: `onSelect() {}`.


## Esempi

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Custom Pagination', value: 'customPagination' },
        { label: 'With CSS', value: 'withCSS' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Pages title="Pages" >
    <div>
        <h1>First Page</h1>
    </div>
    <div>
        <h1>Second Page</h1>
    </div>
    <div>
        <h1>Third Page</h1>
    </div>
</Pages>
```

</TabItem>

<TabItem value="customPagination" >

```jsx live
<Pages title="Questions" pagination="both" size="sm" >
    <div>
        <NumberQuestion
            question="What is the number PI (at least up to three digits after the decimal point)?"
            solution={Math.PI}
            digits={3}
        />
    </div>
    <div>
        <FreeTextQuestion 
            question="Is this question displayed on the second page?"
            solution="Yes" 
        />
    </div>
</Pages>
```
</TabItem>

<TabItem value="withCSS">

```jsx live
<Pages 
    activePage={2}
    style={{ background: 'lightblue', height: 420, outline: '4px solid black' }} 
    title="Styled Pages"
>
    <div>
        <h1>First Page</h1>
    </div>
    <div>
        <h1>Second Page</h1>
    </div>
    <div>
        <h1>Third Page</h1>
    </div>
</Pages>
```

</TabItem>

</Tabs>

