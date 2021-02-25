---
id: checkbox-input
title: Checkbox Input
sidebar_label: Checkbox Input
---

Un élément de saisie à cases à cocher. Peut être utilisé dans le cadre d'un tableau de bord ISLE ou de manière autonome. Dans ce dernier cas, vous souhaitez gérer les modifications via l'attribut "onChange" ou lier la valeur à une variable globale via l'attribut "bind".

## Options

* __bind__ | `string`: nom de la variable globale pour la valeur de la case à cocher à attribuer à. Default: `''`.
* __defaultValue__ | `boolean`: valeur booléenne indiquant la valeur par défaut de la case à cocher. Default: `false`.
* __value__ | `boolean`: valeur de la case à cocher (pour le composant contrôlé). Default: `none`.
* __disabled__ | `boolean`: indique si l'entrée est active ou non. Default: `false`.
* __inline__ | `boolean`: indique si la case à cocher est affichée en ligne. Default: `false`.
* __onChange__ | `function`: fonction de rappel à invoquer lorsque la case est cochée. La fonction est appelée avec la valeur actuelle de la case à cocher. Default: `onChange() {}`.
* __legend__ | `(string|node)`: texte affiché à côté de la case à cocher. Default: `''`.
* __tooltip__ | `string`: texte affiché lors du survol de la case à cocher. Default: `''`.
* __tooltipPlacement__ | `string`: position de l'infobulle du bouton. Default: `'right'`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.


## Exemples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Inline', value: 'inline' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'With Callback', value: 'withCallback' }
    ]}
    lazy
>


<TabItem value="minimal">

```jsx live
<CheckboxInput legend="Take the logarithm" />
```
</TabItem>

<TabItem value="inline">

```jsx live
<p>Please click
<CheckboxInput
    inline defaultValue={false}
/>
to confirm that you will follow our netiquette.</p>
```
</TabItem>


<TabItem value="withStyle">

```jsx live
<CheckboxInput
    style={{ fontSize: 30, color: 'blue'}}
    legend="Click to confirm"
    defaultValue={false}
/>
```
</TabItem>

<TabItem value="withCallback">

```jsx live
<CheckboxInput
    legend="Click to confirm..."
    onChange={( value ) => {
        alert( 'New value: '+value );
    }}
/>
```

</TabItem>

</Tabs>
