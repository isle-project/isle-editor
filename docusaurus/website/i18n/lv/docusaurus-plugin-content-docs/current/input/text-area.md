---
id: text-area
title: Text Area
sidebar_label: Text Area
---

Teksta apgabala komponents. Izmanto kā atsevišķu komponentu, izmaiņas jāapstrādā, izmantojot atribūtu `onChange`.

## Iespējas

* __defaultValue__ | `string`: teksta apgabala noklusējuma vērtība. Default: `''`.
* __value__ | `string`: teksta vērtība (kontrolējamam komponentam). Default: `none`.
* __disabled__ | `boolean`: nosaka, vai teksta apgabals ir atspējots.. Default: `false`.
* __legend__ | `(string|node)`: leģendas teksts. Default: `''`.
* __onBlur__ | `function`: atsauces funkcija, kas tiek izsaukta, kad teksta apgabals zaudē fokusu.. Default: `onBlur() {}`.
* __onChange__ | `function`: atgriezeniskā zvana funkcija, kas tiek izsaukta ar jauno tekstu, kad mainās apgabala teksts.. Default: `onChange() {}`.
* __placeholder__ | `string`: aizvietotājteksts. Default: `none`.
* __resizable__ | `string`: nosaka, vai teksta laukam ir jāmaina izmērs (var būt gan `līdz`, gan `horizontāli`, `vertikāli` vai `neviens`).. Default: `'none'`.
* __rows__ | `number`: rindu skaits. Default: `5`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.


## Piemēri

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
