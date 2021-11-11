---
id: panel 
title: Panel
sidebar_label: Panel
---

Komponent karty.

## Opcje

* __className__ | `string`: Nazwa klasy CSS. Default: `''`.
* __header__ | `(string|node)`: nagłówek panelu. Default: `none`.
* __headerTag__ | `string`: znacznik używany dla nagłówka panelu. Default: `'h3'`.
* __footer__ | `(string|node)`: stopka panelu. Default: `none`.
* __minimizable__ | `boolean`: czy panel może być zminimalizowany. Default: `false`.
* __defaultMinimized__ | `boolean`: kontroluje czy panel powinien być domyślnie zminimalizowany (dotyczy tylko gdy `minimizable` jest ustawione na `true`). Default: `false`.
* __fullscreen__ | `boolean`: czy panel może być wykonany w trybie pełnoekranowym (tylko dla instruktorów). Default: `false`.
* __hideTooltip__ | `string`: etykieta narzędzi wyświetlana nad przyciskiem ukrywania. Default: `none`.
* __trapFocus__ | `boolean`: czy uwięzić fokus użytkownika w panelu. Default: `false`.
* __bodyStyle__ | `object`: CSS style inline dla ciała. Default: `{}`.
* __footerStyle__ | `object`: Style inline CSS dla stopki. Default: `{}`.
* __bodyClassName__ | `string`: undefined. Default: `''`.
* __footerClassName__ | `string`: undefined. Default: `''`.
* __style__ | `object`: Style inline CSS dla kontenerów. Default: `{}`.
* __onHide__ | `function`: wywołanie zwrotne po kliknięciu przycisku zamknięcia. Default: `none`.


## Przykłady

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
