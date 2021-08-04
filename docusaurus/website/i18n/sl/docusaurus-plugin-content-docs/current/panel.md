---
id: panel 
title: Panel
sidebar_label: Panel
---

Sestavni del kartice.

## Možnosti

* __className__ | `string`: Ime razreda CSS. Default: `''`.
* __header__ | `(string|node)`: naslov plošče. Default: `none`.
* __headerTag__ | `string`: oznaka, ki se uporablja za naslov plošče. Default: `'h3'`.
* __footer__ | `(string|node)`: noga plošče. Default: `none`.
* __minimizable__ | `boolean`: ali je mogoče ploščo zmanjšati na najmanjšo možno mero.. Default: `false`.
* __defaultMinimized__ | `boolean`: nadzoruje, ali naj bo plošča privzeto minimizirana (velja samo, če je `minimizable` nastavljeno na `true`).. Default: `false`.
* __fullscreen__ | `boolean`: ali je mogoče ploščo prikazati v celozaslonskem načinu (samo za inštruktorje).. Default: `false`.
* __hideTooltip__ | `string`: namig, ki se prikaže nad gumbom za skrivanje.. Default: `none`.
* __trapFocus__ | `boolean`: ali naj se uporabnikovo osredotočenje ujame na ploščo.. Default: `false`.
* __bodyStyle__ | `object`: Vnosni slogi CSS za telo. Default: `{}`.
* __footerStyle__ | `object`: Vmesni slogi CSS za nogo. Default: `{}`.
* __style__ | `object`: Vnosni slogi CSS za vsebnik. Default: `{}`.
* __onHide__ | `function`: povratni klic, ki se sproži, ko je kliknjen gumb za zapiranje.. Default: `none`.


## Primeri

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
