---
id: pages 
title: Pages
sidebar_label: Pages
---

Een ISLE-paginatiecomponent die de gebruiker in staat stelt om door een reeks pagina's te stappen.

## Opties

* __activePage__ | `number`: actieve pagina. Default: `1`.
* __disabled__ | `boolean`: bepaalt of de navigatiebalk actief is of niet. Default: `false`.
* __title__ | `(string|node)`: weergegeven titel van de paginacontainer. Default: `''`.
* __pagination__ | `string`: om de paginering te laten zien op de `top`, `bottom` of `both'. Default: `'top'`.
* __size__ | `string`: grootte van de pagineerknoppen (ofwel `default`, `lg`, of `sm`). Default: `'default'`.
* __height__ | `(number|string)`: de maximale hoogte van de container. Als een ingesloten pagina hoger is, wordt een verticale schuifbalk toegevoegd. Default: `none`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.
* __onSelect__ | `function`: Functie die wordt aangeroepen wanneer de actieve wijziging wordt gewijzigd. Ontvangt de nieuwe actieve pagina-index als enige parameter. Default: `onSelect() {}`.


## Voorbeelden

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

