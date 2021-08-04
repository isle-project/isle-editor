---
id: panel 
title: Panel
sidebar_label: Panel
---

Kortkomponent.

## Alternativ

* __className__ | `string`: Namn på CSS-klass. Default: `''`.
* __header__ | `(string|node)`: rubrik för panelen. Default: `none`.
* __headerTag__ | `string`: tagg som används för panelens rubrik. Default: `'h3'`.
* __footer__ | `(string|node)`: panelens fotnot. Default: `none`.
* __minimizable__ | `boolean`: Om panelen kan minimeras.. Default: `false`.
* __defaultMinimized__ | `boolean`: kontrollerar om panelen ska minimeras som standard (gäller endast när `minimizable` är satt till `true`). Default: `false`.
* __fullscreen__ | `boolean`: om panelen kan göras fullskärmad (endast för instruktörer). Default: `false`.
* __hideTooltip__ | `string`: verktygstips som visas över knappen Dölj. Default: `none`.
* __trapFocus__ | `boolean`: om användarens fokus ska fastna i panelen eller inte. Default: `false`.
* __bodyStyle__ | `object`: CSS inline-stilar för kroppen. Default: `{}`.
* __footerStyle__ | `object`: CSS inline-stilar för sidfot. Default: `{}`.
* __style__ | `object`: CSS inline-stilar för behållare. Default: `{}`.
* __onHide__ | `function`: callback som aktiveras när stängningsknappen klickas. Default: `none`.


## Exempel

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
