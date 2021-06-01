---
id: text-area
title: Text Area
sidebar_label: Text Area
---

Teksto srities komponentas. Naudojamas kaip atskiras komponentas, pakeitimai turėtų būti apdorojami naudojant `onChange` atributą.

## Parinktys

* __defaultValue__ | `string`: numatytoji teksto srities reikšmė. Default: `''`.
* __value__ | `string`: teksto reikšmė (valdomam komponentui). Default: `none`.
* __disabled__ | `boolean`: kontroliuoja, ar teksto sritis turi būti išjungta.. Default: `false`.
* __legend__ | `(string|node)`: legendos tekstas. Default: `''`.
* __onBlur__ | `function`: grįžtamojo ryšio funkcija, iškviečiama, kai teksto sritis praranda fokusą.. Default: `onBlur() {}`.
* __onChange__ | `function`: grįžtamojo ryšio funkcija, iškviečiama su naujuoju tekstu, kai pasikeičia srities tekstas.. Default: `onChange() {}`.
* __placeholder__ | `string`: vietoj teksto. Default: `none`.
* __resizable__ | `string`: kontroliuoja, ar teksto sritis turi būti keičiamo dydžio (gali būti `both`, `horizontal`, `horizontal`, `vertikal` arba `none`).. Default: `'none'`.
* __rows__ | `number`: eilučių skaičius. Default: `5`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.


## Pavyzdžiai

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
