---
id: scrolling-text
title: Scrolling Text
sidebar_label: Scrolling Text
---

Un élément d'arrière-plan dynamique qui parcourt une liste de textes à un intervalle déterminé.

## Options

* __text__ | `(string|array<string>)`: texte ou liste de textes à afficher. Default: `[]`.
* __loop__ | `boolean`: indique si le processus doit être affiché à l'infini. Default: `false`.
* __direction__ | `string`: la direction du flux de texte (soit `left`, `right`, `top`, `bottom`, "à la trace", "au foyer", ou "en rotation"). Default: `'right'`.
* __hold__ | `number`: le temps d'immobilisation du texte (en secondes). Default: `5`.
* __wait__ | `number`: le délai avant l'arrivée d'un nouveau texte (en secondes). Default: `3`.
* __inTime__ | `number`: durée de l'effet d'entrée (en secondes). Default: `1`.
* __outTime__ | `number`: durée de l'effet de sortie (en secondes). Default: `1`.
* __className__ | `string`: nom de la classe. Default: `''`.
* __style__ | `object`: Les styles CSS du texte. Default: `{}`.


## Exemples


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'List of Texts', value: 'list' },
        { label: 'Background Image', value: 'backgroundImage' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<ScrollingText
    text="This is a text re-appearing every five seconds"
    style={{ fontSize: 44, color: 'blue' }}
    wait={5}
    hold={2}
    loop
/>
```

</TabItem>

<TabItem value="list">

```jsx live
<ScrollingText
    text={[ 'One', 'Two', 'Three', 'Four'  ]}
    style={{ fontSize: 84, color: 'red', textAlign: 'center' }}
    loop
    direction="left"
    wait={.5}
    hold={2}
/>
```

</TabItem>

<TabItem value="backgroundImage">

```jsx live
<ScrollingText
    text={[ 'One', 'Two', 'Three', 'Four'  ]}
    style={{ fontSize: 84, color: 'white', textAlign: 'center', backgroundImage: 'url(https://bit.ly/3qlRgoR)', backgroundSize: '1200px 200px' }}
    loop
    direction="left"
    wait={.5}
    hold={2}
/>
```

</TabItem>

</Tabs>
