---
id: panel 
title: Panel
sidebar_label: Panel
---

Компонент карты.

## Варианты

* __className__ | `string`: название класса CSS. Default: `''`.
* __header__ | `(string|node)`: заголовок панели. Default: `none`.
* __headerTag__ | `string`: тег, используемый для заголовка панели. Default: `'h3'`.
* __footer__ | `(string|node)`: нижний колонтитул. Default: `none`.
* __minimizable__ | `boolean`: можно ли минимизировать панель. Default: `false`.
* __defaultMinimized__ | `boolean`: управляет тем, должна ли панель быть свернута по умолчанию (применяется только в том случае, если `minimizable` установлено в `true`). Default: `false`.
* __fullscreen__ | `boolean`: можно ли сделать панель в полноэкранном режиме (только для инструкторов). Default: `false`.
* __hideTooltip__ | `string`: всплывающая подсказка, отображаемая над кнопкой скрытия. Default: `none`.
* __trapFocus__ | `boolean`: удерживать ли фокус пользователя на панели. Default: `false`.
* __bodyStyle__ | `object`: CSS встраиваемые стили для кузова. Default: `{}`.
* __footerStyle__ | `object`: CSS-стили для нижнего колонтитула. Default: `{}`.
* __style__ | `object`: CSS встраиваемые стили для контейнера. Default: `{}`.
* __onHide__ | `function`: вызов обратного вызова при нажатии кнопки закрытия. Default: `none`.


## Примеры

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
