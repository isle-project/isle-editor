---
id: text-area
title: Text Area
sidebar_label: Text Area
---

En textområdeskomponent. Om den används som en fristående komponent bör ändringar hanteras via attributet `onChange`.

## Alternativ

* __defaultValue__ | `string`: textområdets standardvärde. Default: `''`.
* __value__ | `string`: textvärde (för kontrollerad komponent). Default: `none`.
* __disabled__ | `boolean`: Kontrollerar om textområdet ska vara inaktiverat.. Default: `false`.
* __legend__ | `(string|node)`: text i legenden. Default: `''`.
* __onBlur__ | `function`: callback-funktion som aktiveras när textområdet förlorar fokus.. Default: `onBlur() {}`.
* __onChange__ | `function`: callback-funktion som anropas med den nya texten när områdets text ändras.. Default: `onChange() {}`.
* __placeholder__ | `string`: platshållartext. Default: `none`.
* __resizable__ | `string`: kontrollerar om textområdet ska kunna ändras i storlek (kan vara antingen `both`, `horizontal`, `vertical` eller `none`). Default: `'none'`.
* __rows__ | `number`: antal rader. Default: `5`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.


## Exempel

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Custom Style', value: 'customStyle' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<TextArea
    legend="Please enter a few sentences"
    placeholder="Enter text"
/>
```

</TabItem>

<TabItem value="customStyle">

<TextArea
    legend="Please enter a few sentences"
    placeholder="Enter text"
    style={{
        fontSize: 33,
        fontFamily: 'Georgia', 
        boxShadow: '0 0 4px black',
        background: 'rgb(238,174,202)', 
        background: 'radial-gradient(circle, rgba(255, 255, 0, 0.3) 44%, white 100%)' 
    }}
/>

</TabItem>

</Tabs>
