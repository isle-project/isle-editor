---
id: flippable-card 
title: Flippable Card
sidebar_label: Flippable Card
---

An ISLE component that allows two render two-sides.

## Options

* __button__ | `string`: button label. Default: `none`.
* __draggable__ | `boolean`: controls whether the card may be dragged around. Default: `false`.
* __flipSpeedBackToFront__ | `number`: the speed by which the card turns from background to foreground, in seconds. Default: `1`.
* __flipSpeedFrontToBack__ | `number`: the speed by which the card turns from foreground to background, in seconds. Default: `1`.
* __oneTime__ | `boolean`: indicates whether the flip process may be executed just once. Default: `false`.
* __perspective__ | `number`: CSS property value to give 3d-positioned element a perspective. Default: `1000`.
* __size__ | `number`: undefined. Default: `250`.
* __disabled__ | `boolean`: controls whether the flippable card is disabled. Default: `false`.
* __value__ | `boolean`: flip state of the card (for controlled component). Default: `none`.
* __defaultValue__ | `boolean`: initial flip state of the card. Default: `false`.
* __containerStyle__ | `object`: CSS style of the container. Default: `{}`.
* __frontStyle__ | `object`: CSS style of the front card. Default: `{}`.
* __backStyle__ | `object`: CSS style of the back card. Default: `{}`.
* __onChange__ | `function`: callback invoked once the card is flipped; receives the current flipped status as its sole argument. Default: `onChange() {}`.


## Examples

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
