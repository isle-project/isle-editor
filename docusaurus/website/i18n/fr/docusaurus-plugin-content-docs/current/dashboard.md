--- 
id: dashboard 
title: Dashboard
sidebar_label: Dashboard 
---

Un tableau de bord permettant de combiner le traitement de plusieurs champs de saisie enfant.

## Options

* __autoStart__ | `boolean`: si elle est définie à "true", la fonction "onGenerate" est exécutée au démarrage avec les valeurs d'entrée par défaut. Default: `true`.
* __autoUpdate__ | `boolean`: contrôle si la fonction "onGenerate" doit être invoquée automatiquement lorsqu'un des champs de saisie enfant change. Default: `false`.
* __description__ | `(string|node)`: description du tableau de bord. Default: `''`.
* __disabled__ | `boolean`: contrôle si le tableau de bord doit être désactivé. Default: `false`.
* __label__ | `string`: étiquette du bouton. Default: `none`.
* __maxWidth__ | `number`: largeur maximale du tableau de bord. Default: `600`.
* __className__ | `string`: nom de la classe. Default: `''`.
* __bodyClassName__ | `string`: nom de la classe pour le corps de la carte. Default: `'d-grid gap-3'`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.
* __onGenerate__ | `function`: invoquée lorsque l'on clique sur le bouton ou que l'une des valeurs d'entrée du tableau de bord change (si "autoUpdate" est réglé sur "true"). La fonction est appelée avec les valeurs des champs de saisie, dans l'ordre dans lequel ils sont placés dans le tableau de bord. Default: `onGenerate() {}`.
* __title__ | `(string|node)`: titre de la carte. Default: `''`.


## Exemples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Multiple Inputs', value: 'multipleInputs' }
    ]}
>

<TabItem value="minimal"> 

```jsx live
<Dashboard title="Alerter" onGenerate={( x ) => { alert( x ); }} autoStart={false} >
    <SliderInput
        legend="Input value"
    />
</Dashboard>
```

</TabItem>

<TabItem value="multipleInputs" > 

```jsx live
<Dashboard 
    title="Multiply three numbers."
    style={{ width: 600, boxShadow: '0 0 24px black' }}
    onGenerate={( x, y, z ) => { alert( x*y*z ); }} 
    autoStart={false} 
>
    <SliderInput
        legend="First Input Value"
        rangeInputStyle = {{ width: 360 }}
    />
    <hr />
    <SliderInput
        legend="Second Input Value"
        rangeInputStyle = {{ width: 360 }}
    />
    <hr />
    <SliderInput
        legend="Third Input Value"
        rangeInputStyle = {{ width: 360 }}
    />
    <hr />
</Dashboard>
```

</TabItem>

</Tabs>
