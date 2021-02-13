---
id: scrolling-text
title: Scrolling Text
sidebar_label: Scrolling Text
---

Un élément d'arrière-plan dynamique qui parcourt une liste de textes à un intervalle déterminé.

## Options

* __text__ | `array<string>`: texte ou liste de textes à afficher. Default: `[]`.
* __loop__ | `boolean`: indique si le processus doit être affiché à l'infini. Default: `false`.
* __direction__ | `string`: la direction du flux de texte (soit "à gauche", "à droite", "en haut", "en bas", "à la trace", "au foyer", ou "en rotation"). Default: `'right'`.
* __hold__ | `number`: le temps d'immobilisation du texte (en secondes). Default: `5`.
* __wait__ | `number`: le délai avant l'arrivée d'un nouveau texte (en secondes). Default: `3`.
* __inTime__ | `number`: durée de l'effet d'entrée (en secondes). Default: `1`.
* __outTime__ | `number`: durée de l'effet de sortie (en secondes). Default: `1`.
* __className__ | `string`: nom de la classe. Default: `''`.
* __style__ | `object`: Les styles CSS du texte. Default: `{}`.


## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Delay and Sound', value: 'delayAndSound' },
        { label: 'With CSS', value: 'withCSS' },
        { label: 'Array of Strings', value: 'array' },
        { label: 'Humanized', value: 'humanized' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Typewriter text="Lorem ipsum" />
```

</TabItem>

<TabItem value="delayAndSound">

```jsx live
<Typewriter text="Lorem ipsum" sound delay={2000} />
```

</TabItem>

<TabItem value="withCSS">

```jsx live
<Typewriter text="Styled Text" style={{ fontSize: 66, color: 'red'}} />
```

</TabItem>

<TabItem value="array">

```jsx live
<Typewriter text={["First Entry", "Second Entry", "Third Entry"]}  hold={2000} />
```

</TabItem>

<TabItem value="humanized">

```jsx live
<Typewriter text="This is a humanized performance" random interval={170} />
```

</TabItem>

</Tabs>



