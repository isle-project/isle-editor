---
id: panel 
title: Panel
sidebar_label: Panel
---

Kaartcomponent.

## Opties

* __className__ | `string`: CSS-klasse-naam. Default: `''`.
* __header__ | `(string|node)`: paneelkop. Default: `none`.
* __headerTag__ | `string`: tag gebruikt voor de paneelkop. Default: `'h3'`.
* __footer__ | `(string|node)`: paneelvoettekst. Default: `none`.
* __minimizable__ | `boolean`: of het paneel kan worden geminimaliseerd. Default: `false`.
* __defaultMinimized__ | `boolean`: bepaalt of het paneel standaard geminimaliseerd moet worden (alleen van toepassing als `minimaliseerbaar` is ingesteld op `true`). Default: `false`.
* __fullscreen__ | `boolean`: of het paneel op volledig scherm kan worden gemaakt (alleen voor instructeurs). Default: `false`.
* __hideTooltip__ | `string`: tooltip weergegeven over de verbergingsknop. Default: `none`.
* __trapFocus__ | `boolean`: of de focus van de gebruiker in het paneel moet worden gevangen. Default: `false`.
* __bodyStyle__ | `object`: CSS inline stijlen voor het lichaam. Default: `{}`.
* __footerStyle__ | `object`: CSS inline stijlen voor footer. Default: `{}`.
* __bodyClassName__ | `string`: CSS klasse naam voor lichaam. Default: `''`.
* __footerClassName__ | `string`: CSS-klasse naam voor voettekst. Default: `''`.
* __style__ | `object`: CSS inline-stijlen voor containers. Default: `{}`.
* __onHide__ | `function`: terugbellen wordt aangeroepen wanneer op de sluitknop wordt geklikt. Default: `none`.


## Voorbeelden

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
