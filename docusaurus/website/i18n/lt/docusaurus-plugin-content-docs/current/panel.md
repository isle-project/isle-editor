---
id: panel 
title: Panel
sidebar_label: Panel
---

Kortelės sudedamoji dalis.

## Parinktys

* __className__ | `string`: CSS klasės pavadinimas. Default: `''`.
* __header__ | `(string|node)`: skydelio antraštė. Default: `none`.
* __headerTag__ | `string`: žyma, naudojama skydelio antraštei. Default: `'h3'`.
* __footer__ | `(string|node)`: skydelio poraštė. Default: `none`.
* __minimizable__ | `boolean`: ar skydelį galima sumažinti iki minimumo.. Default: `false`.
* __defaultMinimized__ | `boolean`: kontroliuoja, ar skydelis pagal nutylėjimą turėtų būti sumažintas (taikoma tik tada, kai `minimizable` nustatyta į `true`).. Default: `false`.
* __fullscreen__ | `boolean`: ar skydelis gali būti per visą ekraną (tik instruktoriams).. Default: `false`.
* __hideTooltip__ | `string`: virš paslėpimo mygtuko rodoma užuomina. Default: `none`.
* __trapFocus__ | `boolean`: ar naudotojo fokusas turi būti fiksuojamas skydelyje. Default: `false`.
* __bodyStyle__ | `object`: CSS įvesties stilius kūnui. Default: `{}`.
* __footerStyle__ | `object`: "CSS" eilutės stilius poraštėje. Default: `{}`.
* __bodyClassName__ | `string`: CSS klasės pavadinimas kūnui. Default: `''`.
* __footerClassName__ | `string`: CSS klasės pavadinimas. Default: `''`.
* __style__ | `object`: Konteinerio CSS vidinės eilutės stiliai. Default: `{}`.
* __onHide__ | `function`: atgalinis skambutis, inicijuojamas, kai paspaudžiamas uždarymo mygtukas.. Default: `none`.


## Pavyzdžiai

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
