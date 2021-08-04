---
id: panel 
title: Panel
sidebar_label: Panel
---

Kaardi komponent.

## Valikud

* __className__ | `string`: CSS klassi nimi. Default: `''`.
* __header__ | `(string|node)`: paneeli pealkiri. Default: `none`.
* __headerTag__ | `string`: paneeli pealkirja jaoks kasutatav silt. Default: `'h3'`.
* __footer__ | `(string|node)`: paneeli alumine osa. Default: `none`.
* __minimizable__ | `boolean`: kas paneeli saab minimeerida. Default: `false`.
* __defaultMinimized__ | `boolean`: kontrollib, kas paneel peaks olema vaikimisi minimeeritud (rakendub ainult siis, kui `minimizable` on seatud `true`).. Default: `false`.
* __fullscreen__ | `boolean`: kas paneeli saab muuta täisekraaniliseks (ainult instruktoritele). Default: `false`.
* __hideTooltip__ | `string`: tööriistavihik, mis kuvatakse nupu peitmise kohal. Default: `none`.
* __trapFocus__ | `boolean`: kas kasutaja fookus jääb paneelil lõksu.. Default: `false`.
* __bodyStyle__ | `object`: CSS inline stiilid keha jaoks. Default: `{}`.
* __footerStyle__ | `object`: CSS inline stiilid jalusesse. Default: `{}`.
* __style__ | `object`: Konteineri CSS inline stiilid. Default: `{}`.
* __onHide__ | `function`: callback, mis kutsutakse esile, kui klõpsatakse sulgemisnupule. Default: `none`.


## Näited

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
