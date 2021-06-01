---
id: text-area
title: Text Area
sidebar_label: Text Area
---

Komponenta območja besedila. Uporablja se kot samostojna komponenta, spremembe pa je treba obravnavati z atributom `onChange`.

## Možnosti

* __defaultValue__ | `string`: privzeta vrednost območja besedila. Default: `''`.
* __value__ | `string`: vrednost besedila (za nadzorovano komponento). Default: `none`.
* __disabled__ | `boolean`: nadzoruje, ali je območje besedila onemogočeno.. Default: `false`.
* __legend__ | `(string|node)`: besedilo legende. Default: `''`.
* __onBlur__ | `function`: povratna funkcija, ki se sproži, ko območje besedila izgubi fokus.. Default: `onBlur() {}`.
* __onChange__ | `function`: povratna funkcija, ki se sproži z novim besedilom, ko se besedilo območja spremeni.. Default: `onChange() {}`.
* __placeholder__ | `string`: nadomestno besedilo. Default: `none`.
* __resizable__ | `string`: nadzoruje, ali se spreminja velikost območja besedila (lahko je `oboje`, `horizontalno`, `vertikalno` ali `nikoli`).. Default: `'none'`.
* __rows__ | `number`: število vrstic. Default: `5`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.


## Primeri

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
