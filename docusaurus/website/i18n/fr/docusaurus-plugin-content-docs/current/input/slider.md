---
id: slider-input
title: Slider Input
sidebar_label: Slider Input
---

Un composant de saisie de curseur. Peut être utilisé dans le cadre d'un tableau de bord ISLE ou de manière autonome. Dans ce dernier cas, vous souhaitez gérer les modifications via l'attribut "onChange" ou lier la valeur à une variable globale via l'attribut "bind".

## Options

* __defaultValue__ | `number`: La valeur de départ du curseur. Default: `10`.
* __disabled__ | `boolean`: contrôle si l'entrée du curseur est active ou non. S'il est réglé sur "true", le curseur sera présent à l'écran, bien qu'il soit grisé. Default: `false`.
* __inline__ | `boolean`: contrôle si le curseur doit être placé en ligne avec le texte ou en dehors. Default: `false`.
* __legend__ | `(string|node)`: légende de la contribution. Default: `none`.
* __max__ | `number`: La valeur maximale du curseur. Default: `100`.
* __maxLabel__ | `string`: l'étiquette doit être affichée à droite du curseur au lieu de la valeur maximale. Default: `none`.
* __min__ | `number`: La valeur minimale du curseur. Default: `0`.
* __minLabel__ | `string`: l'étiquette doit être affichée à gauche du curseur au lieu de la valeur minimale. Default: `none`.
* __onChange__ | `function`: rappel invoqué avec la nouvelle valeur lorsque la valeur du curseur change. Default: `onChange() {}`.
* __precision__ | `number`: l'arrondi des entrées. La valeur sera arrondie pour ne pas avoir plus de chiffres significatifs que la précision. Par exemple, si l'on souhaite utiliser uniquement des nombres entiers, on utilisera une précision de 10, tandis que si l'on souhaite arrondir à la centaine, on utilisera une précision de 0,001. Default: `10`.
* __step__ | `(number|string)`: taille de pas du curseur. Default: `1`.
* __hideTooltip__ | `boolean`: contrôle si l'info-bulle doit être cachée. Default: `false`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.
* __numberInputStyle__ | `object`: Styles CSS en ligne pour la composante de saisie des nombres. Default: `{}`.
* __rangeInputStyle__ | `object`: Style CSS en ligne pour le composant d'entrée de gamme. Default: `{}`.


## Exemples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Mathematical Symbols via LaTeX', value: 'mathematicalSymbols' },
        { label: 'Custom Style', value: 'customStyle' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<SliderInput
    legend="Success Probability"
    defaultValue={0.5}
    min={0}
    max={1}
    step={0.01}
/>
```

</TabItem>

<TabItem value="mathematicalSymbols">

```jsx live
<SliderInput
    legend={<span>$\sigma$ (standard deviation)</span>}
    defaultValue={0.5}
    min={0}
    max={1}
    step={0.01}
/>
```

</TabItem>

<TabItem value="customStyle">

```jsx live
<SliderInput
    legend="Success Probability"
    style={{ padding: 30, fontSize: 25, background: 'tan', fontFamily: 'Georgia'}}
    rangeInputStyle ={{ minWidth: 500}}
    numberInputStyle = {{ background: 'white', boxShadow: '2px 2px 0px black'}}
    defaultValue={0.5}
    min={0}
    max={200}
    step={0.01}
/>
```

</TabItem>

</Tabs>
