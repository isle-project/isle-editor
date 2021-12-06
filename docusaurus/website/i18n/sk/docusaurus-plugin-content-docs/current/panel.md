---
id: panel 
title: Panel
sidebar_label: Panel
---

Komponent karty.

## Možnosti

* __className__ | `string`: Názov triedy CSS. Default: `''`.
* __header__ | `(string|node)`: nadpis panela. Default: `none`.
* __headerTag__ | `string`: značka použitá pre nadpis panela. Default: `'h3'`.
* __footer__ | `(string|node)`: päta panelu. Default: `none`.
* __minimizable__ | `boolean`: či je možné panel minimalizovať. Default: `false`.
* __defaultMinimized__ | `boolean`: kontroluje, či má byť panel predvolene minimalizovaný (platí len vtedy, keď je `minimizable` nastavené na `true`). Default: `false`.
* __fullscreen__ | `boolean`: či je možné panel zobraziť na celú obrazovku (len pre inštruktorov). Default: `false`.
* __hideTooltip__ | `string`: nápovedu zobrazenú nad tlačidlom skryť. Default: `none`.
* __trapFocus__ | `boolean`: či sa má fokus používateľa zachytiť na paneli. Default: `false`.
* __bodyStyle__ | `object`: Riadkové štýly CSS pre telo. Default: `{}`.
* __footerStyle__ | `object`: Riadkové štýly CSS pre pätičku. Default: `{}`.
* __bodyClassName__ | `string`: Názov triedy CSS pre telo. Default: `''`.
* __footerClassName__ | `string`: Názov triedy CSS pre pätičku. Default: `''`.
* __style__ | `object`: Riadkové štýly CSS pre kontajner. Default: `{}`.
* __onHide__ | `function`: spätné volanie vyvolané po kliknutí na tlačidlo zatvoriť. Default: `none`.


## Príklady

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
