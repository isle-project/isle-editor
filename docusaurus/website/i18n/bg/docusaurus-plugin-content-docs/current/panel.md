---
id: panel 
title: Panel
sidebar_label: Panel
---

Компонент на картата.

## Опции

* __className__ | `string`: Име на CSS клас. Default: `''`.
* __header__ | `(string|node)`: заглавие на панела. Default: `none`.
* __headerTag__ | `string`: таг, използван за заглавието на панела. Default: `'h3'`.
* __footer__ | `(string|node)`: колонтитул на панела. Default: `none`.
* __minimizable__ | `boolean`: дали панелът може да бъде сведен до минимум. Default: `false`.
* __defaultMinimized__ | `boolean`: контролира дали панелът да бъде минимизиран по подразбиране (приложимо само когато `minimizable` е зададено на `true`). Default: `false`.
* __fullscreen__ | `boolean`: дали панелът може да се използва на цял екран (само за инструктори). Default: `false`.
* __hideTooltip__ | `string`: подсказка за инструменти, показвана над бутона за скриване. Default: `none`.
* __trapFocus__ | `boolean`: дали да задържа фокуса на потребителя в панела. Default: `false`.
* __bodyStyle__ | `object`: CSS вградени стилове за тялото. Default: `{}`.
* __footerStyle__ | `object`: CSS вградени стилове за footer. Default: `{}`.
* __style__ | `object`: CSS вградени стилове за контейнер. Default: `{}`.
* __onHide__ | `function`: обратна връзка, задействана при натискане на бутона за затваряне. Default: `none`.


## Примери

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
