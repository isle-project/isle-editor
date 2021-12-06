---
id: panel 
title: Panel
sidebar_label: Panel
---

Součást karty.

## Možnosti

* __className__ | `string`: Název třídy CSS. Default: `''`.
* __header__ | `(string|node)`: záhlaví panelu. Default: `none`.
* __headerTag__ | `string`: tag použitý pro záhlaví panelu. Default: `'h3'`.
* __footer__ | `(string|node)`: zápatí panelu. Default: `none`.
* __minimizable__ | `boolean`: zda lze panel minimalizovat. Default: `false`.
* __defaultMinimized__ | `boolean`: určuje, zda má být panel ve výchozím nastavení minimalizován (platí pouze v případě, že je `minimizable` nastaveno na `true`).. Default: `false`.
* __fullscreen__ | `boolean`: zda lze panel zobrazit na celou obrazovku (pouze pro instruktory).. Default: `false`.
* __hideTooltip__ | `string`: nápověda zobrazená nad tlačítkem skrýt. Default: `none`.
* __trapFocus__ | `boolean`: zda má být na panelu zachyceno zaměření uživatele.. Default: `false`.
* __bodyStyle__ | `object`: Řádkové styly CSS pro tělo. Default: `{}`.
* __footerStyle__ | `object`: Řádkové styly CSS pro zápatí. Default: `{}`.
* __bodyClassName__ | `string`: Název třídy CSS pro tělo. Default: `''`.
* __footerClassName__ | `string`: Název třídy CSS pro zápatí. Default: `''`.
* __style__ | `object`: Řádkové styly CSS pro kontejner. Default: `{}`.
* __onHide__ | `function`: zpětné volání vyvolané po kliknutí na tlačítko zavřít.. Default: `none`.


## Příklady

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
