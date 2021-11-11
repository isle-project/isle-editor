---
id: panel 
title: Panel
sidebar_label: Panel
---

Card component.

## Options

* __className__ | `string`: CSS class name. Default: `''`.
* __header__ | `(string|node)`: panel heading. Default: `none`.
* __headerTag__ | `string`: tag used for the panel heading. Default: `'h3'`.
* __footer__ | `(string|node)`: panel footer. Default: `none`.
* __minimizable__ | `boolean`: whether the panel can be minimized. Default: `false`.
* __defaultMinimized__ | `boolean`: controls whether the panel should be minimized by default (only applicable when `minimizable` is set to `true`). Default: `false`.
* __fullscreen__ | `boolean`: whether the panel can be made fullscreen (only for instructors). Default: `false`.
* __hideTooltip__ | `string`: tooltip displayed over the hide button. Default: `none`.
* __trapFocus__ | `boolean`: whether to trap the user's focus in the panel. Default: `false`.
* __bodyStyle__ | `object`: CSS inline styles for body. Default: `{}`.
* __footerStyle__ | `object`: CSS inline styles for footer. Default: `{}`.
* __bodyClassName__ | `string`: undefined. Default: `''`.
* __footerClassName__ | `string`: undefined. Default: `''`.
* __style__ | `object`: CSS inline styles for container. Default: `{}`.
* __onHide__ | `function`: callback invoked when the close button is clicked. Default: `none`.


## Examples

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
