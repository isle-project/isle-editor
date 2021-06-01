---
id: text-area
title: Text Area
sidebar_label: Text Area
---

En komponent til et tekstområde. Bruges som en selvstændig komponent, og ændringer skal håndteres via attributten `onChange`.

## Indstillinger

* __defaultValue__ | `string`: standardværdi for tekstområdet. Default: `''`.
* __value__ | `string`: tekstværdi (for kontrolleret komponent). Default: `none`.
* __disabled__ | `boolean`: kontrollerer, om tekstområdet skal være deaktiveret. Default: `false`.
* __legend__ | `(string|node)`: tekst i legenden. Default: `''`.
* __onBlur__ | `function`: callback-funktion, der påkaldes, når tekstområdet mister fokus. Default: `onBlur() {}`.
* __onChange__ | `function`: callback-funktion, der påkaldes med den nye tekst, når områdets tekst ændres. Default: `onChange() {}`.
* __placeholder__ | `string`: pladsholder-tekst. Default: `none`.
* __resizable__ | `string`: styrer, om tekstområdet skal kunne ændres i størrelse (kan være enten `both`, `horizontal`, `vertical` eller `none`). Default: `'none'`.
* __rows__ | `number`: antal rækker. Default: `5`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.


## Eksempler

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
