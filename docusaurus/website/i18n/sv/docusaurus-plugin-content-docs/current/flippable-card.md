---
id: flippable-card 
title: Flippable Card
sidebar_label: Flippable Card
---

En ISLE-komponent som gör det möjligt att göra två två sidor.

## Alternativ

* __button__ | `string`: knappmärke. Default: `none`.
* __draggable__ | `boolean`: kontrollerar om kortet kan dras runt. Default: `false`.
* __flipSpeedBackToFront__ | `number`: hastigheten med vilken kortet övergår från bakgrund till förgrund, i sekunder.. Default: `1`.
* __flipSpeedFrontToBack__ | `number`: Hastigheten med vilken kortet övergår från förgrund till bakgrund, i sekunder.. Default: `1`.
* __oneTime__ | `boolean`: anger om flip-processen får utföras endast en gång.. Default: `false`.
* __perspective__ | `number`: CSS-egenskapsvärde för att ge ett 3d-positionerat element ett perspektiv. Default: `1000`.
* __size__ | `number`: Kortets storlek (anger dess bredd och höjd).. Default: `250`.
* __disabled__ | `boolean`: kontrollerar om det vändbara kortet är inaktiverat. Default: `false`.
* __value__ | `boolean`: Kortets fliptillstånd (för kontrollerad komponent).. Default: `none`.
* __defaultValue__ | `boolean`: Kortets ursprungliga fliptillstånd.. Default: `false`.
* __containerStyle__ | `object`: CSS-stil för behållaren. Default: `{}`.
* __frontStyle__ | `object`: CSS-stil för det främre kortet. Default: `{}`.
* __backStyle__ | `object`: CSS-stil för baksidan av kortet. Default: `{}`.
* __onChange__ | `function`: callback som aktiveras när kortet vänds; tar emot den aktuella vändstatusen som enda argument.. Default: `onChange() {}`.


## Exempel

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
