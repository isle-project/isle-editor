---
id: panel 
title: Panel
sidebar_label: Panel
---

カードコンポーネント。

## オプション

* __className__ | `string`: CSSクラス名. Default: `''`.
* __header__ | `(string|node)`: パネル見出し. Default: `none`.
* __headerTag__ | `string`: パネルの見出しに使われるタグ. Default: `'h3'`.
* __footer__ | `(string|node)`: パネルフッター. Default: `none`.
* __minimizable__ | `boolean`: パネルを最小化できるかどうか. Default: `false`.
* __defaultMinimized__ | `boolean`: パネルをデフォルトで最小化するかどうかを制御します（`minimizable`が`true`に設定されている場合のみ適用されます）。. Default: `false`.
* __fullscreen__ | `boolean`: パネルをフルスクリーンにできるかどうか (インストラクターのみ). Default: `false`.
* __hideTooltip__ | `string`: 非表示ボタンの上に表示されるツールチップ. Default: `none`.
* __trapFocus__ | `boolean`: ユーザーのフォーカスをパネルにトラップするかどうか. Default: `false`.
* __bodyStyle__ | `object`: 本文のCSSインラインスタイル. Default: `{}`.
* __footerStyle__ | `object`: フッター用CSSインラインスタイル. Default: `{}`.
* __bodyClassName__ | `string`: undefined. Default: `''`.
* __footerClassName__ | `string`: undefined. Default: `''`.
* __style__ | `object`: コンテナ用CSSインラインスタイル. Default: `{}`.
* __onHide__ | `function`: 閉じボタンがクリックされた時に呼び出されるコールバック. Default: `none`.


## 例としては、以下のようなものがあります。

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
