---
id: accordion
title: Accordion
sidebar_label: Accordion
---

Un élément en accordéon qui contrôle les glissières verticales.

## Options

* __active__ | `number`: index du curseur à ouvrir au début. Default: `none`.
* __canCloseAll__ | `boolean`: si l'on peut effacer tous les en-têtes. Default: `false`.
* __headers__ | `array<(string|node)>`: tableau de noms d'en-têtes. Default: `none`.
* __headerStyle__ | `object`: on peut également attribuer un style aux barres d'en-tête. Default: `none`.
* __headerClassName__ | `string`: cela passe outre le nom de classe donné aux en-têtes. Default: `none`.
* __onChange__ | `function`: rappel invoqué avec l'index du nouveau curseur vertical actif. Default: `onChange() {}`.
* __className__ | `string`: nom de la classe pour la division extérieure. Default: `''`.
* __style__ | `object`: Styles CSS en ligne pour les divisions externes. Default: `none`.


## Exemples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="firstOpened"
    values={[
        { label: 'First item opened', value: 'firstOpened' },
        { label: 'All items can close', value: 'allClosed' },
    ]}
    lazy
>
<TabItem value="firstOpened">

```jsx live
<Accordion headers={[ 'First Question', 'Second Question' ]} active={0} >
    <FreeTextQuestion />
    <FreeTextQuestion />
</Accordion>
```

</TabItem>
<TabItem value="allClosed">

```jsx live
<Accordion headers={[ 'First Question', 'Second Question' ]} canCloseAll >
    <FreeTextQuestion />
    <FreeTextQuestion />
</Accordion>
```

</TabItem>
</Tabs>

