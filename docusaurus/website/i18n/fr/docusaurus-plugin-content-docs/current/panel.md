---
id: panel 
title: Panel
sidebar_label: Panel
---

Composant de la carte.

## Options

* __className__ | `string`: Nom de la classe CSS. Default: `''`.
* __header__ | `(string|node)`: titre du panneau. Default: `none`.
* __headerTag__ | `string`: utilisé pour l'en-tête du panneau. Default: `'h3'`.
* __footer__ | `(string|node)`: pied de page du panneau. Default: `none`.
* __minimizable__ | `boolean`: si le panel peut être réduit au minimum. Default: `false`.
* __defaultMinimized__ | `boolean`: contrôle si le panneau doit être minimisé par défaut (seulement applicable quand `minimizable` est défini à `true`). Default: `false`.
* __fullscreen__ | `boolean`: si le panneau peut être mis en plein écran (uniquement pour les instructeurs). Default: `false`.
* __hideTooltip__ | `string`: info-bulle affichée au-dessus du bouton "masquer. Default: `none`.
* __trapFocus__ | `boolean`: si le focus de l'utilisateur doit être piégé dans le panneau.. Default: `false`.
* __bodyStyle__ | `object`: Styles CSS en ligne pour le corps. Default: `{}`.
* __footerStyle__ | `object`: Styles CSS en ligne pour le pied de page. Default: `{}`.
* __style__ | `object`: Styles CSS en ligne pour le conteneur. Default: `{}`.
* __onHide__ | `function`: rappel invoqué lorsque le bouton de fermeture est cliqué. Default: `none`.


## Exemples

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
