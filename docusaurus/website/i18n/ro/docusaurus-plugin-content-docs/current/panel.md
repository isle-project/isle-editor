---
id: panel 
title: Panel
sidebar_label: Panel
---

Componenta cardului.

## Opțiuni

* __className__ | `string`: Numele clasei CSS. Default: `''`.
* __header__ | `(string|node)`: titlul panoului. Default: `none`.
* __headerTag__ | `string`: utilizată pentru titlul panoului. Default: `'h3'`.
* __footer__ | `(string|node)`: foaia de subsol a panoului. Default: `none`.
* __minimizable__ | `boolean`: dacă panoul poate fi minimizat. Default: `false`.
* __defaultMinimized__ | `boolean`: controlează dacă panoul trebuie să fie minimizat în mod implicit (se aplică numai atunci când `minimizable` este setat la `true`). Default: `false`.
* __fullscreen__ | `boolean`: dacă panoul poate fi transformat în ecran complet (numai pentru instructori). Default: `false`.
* __hideTooltip__ | `string`: tooltip afișat deasupra butonului de ascundere. Default: `none`.
* __trapFocus__ | `boolean`: dacă trebuie să rețină atenția utilizatorului în panou. Default: `false`.
* __bodyStyle__ | `object`: Stiluri CSS inline pentru corp. Default: `{}`.
* __footerStyle__ | `object`: Stiluri CSS inline pentru subsol de pagină. Default: `{}`.
* __style__ | `object`: Stiluri CSS inline pentru container. Default: `{}`.
* __onHide__ | `function`: callback invocat atunci când se face clic pe butonul de închidere. Default: `none`.


## Exemple

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
