---
id: panel 
title: Panel
sidebar_label: Panel
---

Kartenkomponente.

## Optionen

* __className__ | `string`: CSS-Klassenname. Default: `''`.
* __header__ | `(string|node)`: Überschrift. Default: `none`.
* __headerTag__ | `string`: Tag, das für die Überschrift des Panels verwendet wird. Default: `'h3'`.
* __footer__ | `(string|node)`: Panel-Fußzeile. Default: `none`.
* __minimizable__ | `boolean`: ob das Panel minimiert werden kann. Default: `false`.
* __defaultMinimized__ | `boolean`: steuert, ob das Panel standardmäßig minimiert werden soll (nur anwendbar, wenn `minimizable` auf `true` gesetzt ist). Default: `false`.
* __fullscreen__ | `boolean`: ob das Bedienfeld in den Vollbildmodus versetzt werden kann (nur für Kursleiter). Default: `false`.
* __hideTooltip__ | `string`: Tooltip, der über der Ausblenden-Schaltfläche angezeigt wird. Default: `none`.
* __trapFocus__ | `boolean`: ob der Fokus des Benutzers im Panel gefangen werden soll. Default: `false`.
* __bodyStyle__ | `object`: CSS-Inline-Stile für Body. Default: `{}`.
* __footerStyle__ | `object`: CSS-Inlinestile für Fußzeile. Default: `{}`.
* __style__ | `object`: CSS-Inlinestile für Container. Default: `{}`.
* __onHide__ | `function`: Callback, der aufgerufen wird, wenn die Schließen-Schaltfläche angeklickt wird. Default: `none`.


## Beispiele

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
