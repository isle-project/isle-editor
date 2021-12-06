---
id: panel 
title: Panel
sidebar_label: Panel
---

Componente della scheda.

## Opzioni

* __className__ | `string`: Nome della classe CSS. Default: `''`.
* __header__ | `(string|node)`: intestazione del pannello. Default: `none`.
* __headerTag__ | `string`: usato per l'intestazione del pannello. Default: `'h3'`.
* __footer__ | `(string|node)`: piè di pagina. Default: `none`.
* __minimizable__ | `boolean`: se il pannello può essere ridotto al minimo. Default: `false`.
* __defaultMinimized__ | `boolean`: controlla se il pannello deve essere minimizzato di default (applicabile solo quando `minimizzabile` è impostato a `true`). Default: `false`.
* __fullscreen__ | `boolean`: se il pannello può essere fatto a schermo intero (solo per gli istruttori). Default: `false`.
* __hideTooltip__ | `string`: tooltip visualizzato sopra il pulsante hide. Default: `none`.
* __trapFocus__ | `boolean`: se intrappolare il focus dell'utente nel pannello. Default: `false`.
* __bodyStyle__ | `object`: Stili in linea CSS per il corpo. Default: `{}`.
* __footerStyle__ | `object`: Stili in linea CSS per piè di pagina. Default: `{}`.
* __bodyClassName__ | `string`: Nome della classe CSS per il corpo. Default: `''`.
* __footerClassName__ | `string`: Nome della classe CSS per il piè di pagina. Default: `''`.
* __style__ | `object`: Stili in linea CSS per container. Default: `{}`.
* __onHide__ | `function`: richiamata quando si fa clic sul pulsante di chiusura. Default: `none`.


## Esempi

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Header', value: 'withHeader' },
        { label: 'Header and Footer', value: 'headerAndFooter' },
        { label: 'With CSS', value: 'withCSS' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Panel>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

</Panel>
```

</TabItem>

<TabItem value="withHeader">

```jsx live
<Panel header="Panel with Header">

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

</Panel>
```

</TabItem>

<TabItem value="headerAndFooter">

```jsx live
<Panel 
    header="Header" 
    footer={<h4>Footer</h4>}
>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

</Panel>
```

</TabItem>

<TabItem value="withCSS">

```jsx live
<Panel style={{ color: 'salmon', background: 'darkblue' }}>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

</Panel>
```

</TabItem>

</Tabs>
