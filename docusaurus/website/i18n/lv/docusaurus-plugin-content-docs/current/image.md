---
id: image
title: Image
sidebar_label: Image
---

Komponents attēla attēlošanai.

## Iespējas

* __src__ | `string (required)`: attēla avota atrašanās vieta. Default: `none`.
* __alt__ | `string`: attēla apraksts. Default: `''`.
* __body__ | `string`: attēla base64 kodēti dati. Default: `none`.
* __height__ | `(number|string)`: attēla augstums (px). Default: `none`.
* __width__ | `(number|string)`: attēla platums (px). Default: `none`.
* __inline__ | `boolean`: ļauj attēlam pievienot tekstu.. Default: `false`.
* __id__ | `string`: komponenta identifikators. Default: `none`.
* __showModal__ | `boolean`: kontrolē, vai tiek rādīts pilnekrāna modālais skats.. Default: `true`.
* __className__ | `string`: klases nosaukums. Default: `''`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.
* __onShare__ | `function`: atgriezeniskais zvans, kas tiek izsaukts kopā ar attēlu, ja tiek noklikšķināts uz pogas "kopīgot".. Default: `none`.


## Piemēri

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Border', value: 'withStyle' },
        { label: 'Controlled Size', value: 'controlledSize' },
        { label: 'Inline', value: 'inline' }
    ]}
    lazy
>
<TabItem value="minimal">

```jsx live
<Image 
    alt="Self-portrait by Vincent van Gogh from September 1889." 
    src="https://bit.ly/37cof7K"
/>
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<Image 
    alt="Self-portrait by Vincent van Gogh from September 1889." 
    src="https://bit.ly/37cof7K"
    style={{ border: 'solid 10px black'}}
/>
```
</TabItem>

<TabItem value="controlledSize">

```jsx live
<Image 
    alt="The Starry Night by Vincent van Gogh" 
    src="https://bit.ly/37h3JTj"
    width="200px"
    height="auto"
/>
```
</TabItem>


<TabItem value="inline">

```jsx live
<div>
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
<Image 
    src="https://isle.heinz.cmu.edu/Summertime_flowerGradient.png"
    width="300px"
    height="auto"
    inline
/>
no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</div>
```
</TabItem>

</Tabs>
