---
id: panel 
title: Panel
sidebar_label: Panel
---

Kartes komponents.

## Iespējas

* __className__ | `string`: CSS klases nosaukums. Default: `''`.
* __header__ | `(string|node)`: paneļa virsraksts. Default: `none`.
* __headerTag__ | `string`: paneļa virsrakstam izmantotā birka. Default: `'h3'`.
* __footer__ | `(string|node)`: paneļa pēdiņa. Default: `none`.
* __minimizable__ | `boolean`: vai paneli var samazināt līdz minimumam.. Default: `false`.
* __defaultMinimized__ | `boolean`: nosaka, vai panelis pēc noklusējuma ir jāpadara minimizēts (piemērojams tikai tad, ja `minimizable` ir iestatīts uz `true`).. Default: `false`.
* __fullscreen__ | `boolean`: vai panelis var būt pilnekrāna (tikai instruktoriem).. Default: `false`.
* __hideTooltip__ | `string`: virs slēpt pogas parādīts uzraksts. Default: `none`.
* __trapFocus__ | `boolean`: vai aizturēt lietotāja fokusu panelī.. Default: `false`.
* __bodyStyle__ | `object`: CSS iebūvēti stili korpusam. Default: `{}`.
* __footerStyle__ | `object`: CSS iebūvētie stili pēdiņai. Default: `{}`.
* __bodyClassName__ | `string`: CSS klases nosaukums ķermenim. Default: `''`.
* __footerClassName__ | `string`: CSS klases nosaukums pēdiņai. Default: `''`.
* __style__ | `object`: CSS iebūvētie stili konteineram. Default: `{}`.
* __onHide__ | `function`: atsauces zvans, kas tiek izsaukts, kad ir noklikšķināts uz aizvēršanas pogas.. Default: `none`.


## Piemēri

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
