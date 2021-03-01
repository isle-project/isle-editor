---
id: flippable-card 
title: Flippable Card
sidebar_label: Flippable Card
---

Een ISLE-component die het mogelijk maakt om twee kanten te renderen.

## Opties

* __button__ | `string`: knoplabel. Default: `none`.
* __draggable__ | `boolean`: controleert of de kaart mag worden versleept. Default: `false`.
* __flipSpeedBackToFront__ | `number`: de snelheid waarmee de kaart van de achtergrond naar de voorgrond draait, in seconden. Default: `1`.
* __flipSpeedFrontToBack__ | `number`: {nummer} de snelheid waarmee de kaart van de voorgrond naar de achtergrond draait, in seconden. Default: `1`.
* __oneTime__ | `boolean`: geeft aan of het flippingproces slechts één keer mag worden uitgevoerd. Default: `false`.
* __perspective__ | `number`: CSS-eigenschapswaarde om 3d-positie-element een perspectief te geven. Default: `1000`.
* __size__ | `number`: grootte van de kaart (stelt de `width` en `height` in). Default: `250`.
* __disabled__ | `boolean`: bepaalt of de uitklapbare kaart is uitgeschakeld. Default: `false`.
* __value__ | `boolean`: flip state van de kaart (voor gecontroleerde component). Default: `none`.
* __defaultValue__ | `boolean`: initiële flip state van de kaart. Default: `false`.
* __containerStyle__ | `object`: CSS-stijl van de container. Default: `{}`.
* __frontStyle__ | `object`: CSS stijl van de voorste kaart. Default: `{}`.
* __backStyle__ | `object`: CSS-stijl van de achterkaart. Default: `{}`.
* __onChange__ | `function`: callback aangeroepen zodra de kaart is omgedraaid; ontvangt de huidige omgedraaide status als enige argument. Default: `onChange() {}`.


## Voorbeelden

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
