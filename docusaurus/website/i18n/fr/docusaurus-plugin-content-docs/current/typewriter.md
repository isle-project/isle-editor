---
id: typewriter 
title: Typewriter
sidebar_label: Typewriter
---

Un composant ISLE qui permet de créer un effet de machine à écrire.

## Options

* __delay__ | `number`: délai initial avant le démarrage de la machine à écrire (en millisecondes). Default: `none`.
* __hold__ | `number`: si le texte est un tableau de chaînes de caractères, maintenez enfoncée la durée spécifiée ; le texte complet sera affiché avant de passer à l'élément suivant du tableau. Default: `2000`.
* __interval__ | `number`: l'intervalle de la machine à écrire (en millisecondes). Default: `100`.
* __random__ | `boolean`: si le hasard est défini, les frappes seront effectuées avec un certain degré de hasard "humain". Default: `false`.
* __sound__ | `boolean`: la frappe dactylographiée sera également entendue. Default: `false`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.
* __text__ | `(string|array<string>)`: le texte intégral à afficher. Default: `''`.


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

