---
id: flippable-card 
title: Flippable Card
sidebar_label: Flippable Card
---

Un composant ISLE qui permet de rendre deux faces.

## Options

* __button__ | `string`: étiquette du bouton. Default: `none`.
* __draggable__ | `boolean`: contrôle si la carte peut être traînée. Default: `false`.
* __flipSpeedBackToFront__ | `number`: la vitesse à laquelle la carte passe de l'arrière-plan au premier plan, en quelques secondes. Default: `1`.
* __flipSpeedFrontToBack__ | `number`: {nombre} la vitesse à laquelle la carte passe du premier plan à l'arrière-plan, en secondes. Default: `1`.
* __oneTime__ | `boolean`: indique si le processus de retournement peut être exécuté une seule fois. Default: `false`.
* __perspective__ | `number`: Valeur de la propriété CSS pour donner une perspective à l'élément 3d-positionné. Default: `1000`.
* __size__ | `number`: undefined. Default: `250`.
* __disabled__ | `boolean`: contrôle si la carte à puce est désactivée. Default: `false`.
* __value__ | `boolean`: état de retournement de la carte (pour les composants contrôlés). Default: `none`.
* __defaultValue__ | `boolean`: l'état initial de retournement de la carte. Default: `false`.
* __containerStyle__ | `object`: Style CSS du conteneur. Default: `{}`.
* __frontStyle__ | `object`: Style CSS du recto de la carte. Default: `{}`.
* __backStyle__ | `object`: Style CSS du dos de la carte. Default: `{}`.
* __onChange__ | `function`: rappel invoqué une fois que la carte est retournée ; reçoit comme seul argument le statut actuel de la carte retournée. Default: `onChange() {}`.


## Exemples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With CSS', value: 'withCSS' },
        { label: 'Slow Motion', value: 'slowMo' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<FlippableCard containerStyle={{ float: 'none' }} size={200}>
  <img src="https://bit.ly/2YU5EbU" />
  <img src="https://bit.ly/3aGv9mp" />
</FlippableCard>
```

</TabItem>

<TabItem value="withCSS">

```jsx live
<FlippableCard 
  containerStyle={{ float: 'none' }} 
  frontStyle={{ fontSize: 50, textAlign: 'center' }} 
  backStyle={{ fontSize: 50, textAlign: 'center', background: 'purple', color: 'white' }} 
  >
    <div>
      FRONT
    </div>
    <div>
      BACK
    </div>
</FlippableCard>
```

</TabItem>

<TabItem value="slowMo">

```jsx live
<FlippableCard 
  flipSpeedBackToFront={7} 
  flipSpeedFrontToBack={7}   
  containerStyle={{ float: 'none' }} 
  frontStyle={{ fontSize: 50, textAlign: 'center' }} 
  backStyle={{ fontSize: 50, textAlign: 'center', background: 'purple', color: 'white' }} 
  >
    <div>
      FRONT
    </div>
    <div>
      BACK
    </div>
</FlippableCard>
```

</TabItem>

</Tabs>
