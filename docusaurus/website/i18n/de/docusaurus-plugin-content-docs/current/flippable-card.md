---
id: flippable-card 
title: Flippable Card
sidebar_label: Flippable Card
---

Eine ISLE-Komponente, die zwei Rendering-Seiten ermöglicht.

## Optionen

* __button__ | `string`: Tastenbeschriftung. Default: `none`.
* __draggable__ | `boolean`: steuert, ob die Karte herumgezogen werden darf. Default: `false`.
* __flipSpeedBackToFront__ | `number`: die Geschwindigkeit, mit der die Karte vom Hintergrund in den Vordergrund wechselt, in Sekunden. Default: `1`.
* __flipSpeedFrontToBack__ | `number`: {Zahl} die Geschwindigkeit, mit der die Karte vom Vordergrund zum Hintergrund wechselt, in Sekunden. Default: `1`.
* __oneTime__ | `boolean`: gibt an, ob der Flip-Prozess nur einmal ausgeführt werden darf. Default: `false`.
* __perspective__ | `number`: CSS-Eigenschaftswert, um 3d-positioniertem Element eine Perspektive zu geben. Default: `1000`.
* __size__ | `number`: undefined. Default: `250`.
* __disabled__ | `boolean`: steuert, ob die kippbare Karte deaktiviert ist. Default: `false`.
* __value__ | `boolean`: Flip-Status der Karte (für gesteuerte Komponente). Default: `none`.
* __defaultValue__ | `boolean`: anfänglicher Flip-Zustand der Karte. Default: `false`.
* __containerStyle__ | `object`: CSS-Stil des Containers. Default: `{}`.
* __frontStyle__ | `object`: CSS-Stil der Frontkarte. Default: `{}`.
* __backStyle__ | `object`: CSS-Stil der Rückseitenkarte. Default: `{}`.
* __onChange__ | `function`: Callback, der aufgerufen wird, sobald die Karte umgedreht wurde; erhält den aktuellen umgedrehten Status als einziges Argument. Default: `onChange() {}`.


## Beispiele

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
