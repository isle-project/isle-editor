---
id: panel 
title: Panel
sidebar_label: Panel
---

Kortin osa.

## Vaihtoehdot

* __className__ | `string`: CSS-luokan nimi. Default: `''`.
* __header__ | `(string|node)`: paneelin otsikko. Default: `none`.
* __headerTag__ | `string`: tag, jota käytetään paneelin otsikossa. Default: `'h3'`.
* __footer__ | `(string|node)`: paneelin alatunniste. Default: `none`.
* __minimizable__ | `boolean`: voidaanko paneeli minimoida. Default: `false`.
* __defaultMinimized__ | `boolean`: ohjaa, minimoidaanko paneeli oletusarvoisesti (sovelletaan vain, kun `minimizable` on asetettu `true`).. Default: `false`.
* __fullscreen__ | `boolean`: voidaanko paneeli tehdä koko näytön kokoiseksi (vain ohjaajille).. Default: `false`.
* __hideTooltip__ | `string`: Piilota-painikkeen yläpuolella näkyvä työkaluvihje. Default: `none`.
* __trapFocus__ | `boolean`: halutaanko käyttäjän fokus jäädyttää paneeliin.. Default: `false`.
* __bodyStyle__ | `object`: CSS-inline-tyylit runkoa varten. Default: `{}`.
* __footerStyle__ | `object`: CSS-inline-tyylit alatunnisteeseen. Default: `{}`.
* __bodyClassName__ | `string`: undefined. Default: `''`.
* __footerClassName__ | `string`: undefined. Default: `''`.
* __style__ | `object`: CSS inline-tyylit säiliölle. Default: `{}`.
* __onHide__ | `function`: callback, joka käynnistetään, kun sulkemispainiketta napsautetaan.. Default: `none`.


## Esimerkkejä

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
