---
id: pages 
title: Pages
sidebar_label: Pages
---

Un composant de pagination ISLE qui permet à l'utilisateur de se déplacer dans une séquence de pages.

## Options

* __activePage__ | `number`: page active. Default: `1`.
* __disabled__ | `boolean`: contrôle si la barre de navigation est active ou non. Default: `false`.
* __title__ | `(string|node)`: titre affiché du conteneur de pages. Default: `''`.
* __pagination__ | `string`: s'il faut indiquer la pagination soit sur le `top`, soit sur le `bottom`, soit sur les `both`. Default: `'top'`.
* __size__ | `string`: la taille des boutons de pagination (soit `default`, `lg` ou `sm`). Default: `'default'`.
* __height__ | `(number|string)`: la hauteur maximale du conteneur. Si une page intégrée est plus haute, une barre de défilement verticale est ajoutée. Default: `none`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.
* __onSelect__ | `function`: Fonction invoquée lorsque le changement actif est modifié. Reçoit le nouvel index de la page active comme seul paramètre. Default: `onSelect() {}`.


## Exemples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Custom Pagination', value: 'customPagination' },
        { label: 'With CSS', value: 'withCSS' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Pages title="Pages" >
    <div>
        <h1>First Page</h1>
    </div>
    <div>
        <h1>Second Page</h1>
    </div>
    <div>
        <h1>Third Page</h1>
    </div>
</Pages>
```

</TabItem>

<TabItem value="customPagination" >

```jsx live
<Pages title="Questions" pagination="both" size="sm" >
    <div>
        <NumberQuestion
            question="What is the number PI (at least up to three digits after the decimal point)?"
            solution={Math.PI}
            digits={3}
        />
    </div>
    <div>
        <FreeTextQuestion 
            question="Is this question displayed on the second page?"
            solution="Yes" 
        />
    </div>
</Pages>
```
</TabItem>

<TabItem value="withCSS">

```jsx live
<Pages 
    activePage={2}
    style={{ background: 'lightblue', height: 420, outline: '4px solid black' }} 
    title="Styled Pages"
>
    <div>
        <h1>First Page</h1>
    </div>
    <div>
        <h1>Second Page</h1>
    </div>
    <div>
        <h1>Third Page</h1>
    </div>
</Pages>
```

</TabItem>

</Tabs>

