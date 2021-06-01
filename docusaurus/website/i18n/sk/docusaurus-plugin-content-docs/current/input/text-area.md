---
id: text-area
title: Text Area
sidebar_label: Text Area
---

Komponent textovej oblasti. Používa sa ako samostatný komponent, zmeny by sa mali spracovať pomocou atribútu `onChange`.

## Možnosti

* __defaultValue__ | `string`: predvolená hodnota textovej oblasti. Default: `''`.
* __value__ | `string`: textová hodnota (pre riadený komponent). Default: `none`.
* __disabled__ | `boolean`: kontroluje, či má byť textová oblasť vypnutá.. Default: `false`.
* __legend__ | `(string|node)`: text legendy. Default: `''`.
* __onBlur__ | `function`: spätné volanie vyvolané pri strate fokusu na textovú oblasť. Default: `onBlur() {}`.
* __onChange__ | `function`: spätné volanie vyvolané s novým textom pri zmene textu oblasti. Default: `onChange() {}`.
* __placeholder__ | `string`: zástupný text. Default: `none`.
* __resizable__ | `string`: určuje, či sa má meniť veľkosť textovej oblasti (môže byť `obojstranná`, `horizontálna`, `vertikálna` alebo `žiadna`). Default: `'none'`.
* __rows__ | `number`: počet riadkov. Default: `5`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.


## Príklady

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
