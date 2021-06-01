---
id: likert-scale
title: Likert Scale
sidebar_label: Likert Scale
---

Komponent, mis näitab küsimust ja viiepallisele skaalale vastamist õpilaste jaoks.

## Valikud

* __question__ | `(string|node)`: küsimus, mis tuleb välja trükkida. Default: `''`.
* __options__ | `array`: viiest elemendist koosnev massiivi, mis sisaldab eri skaalatasemete kohandatud sildid. Default: `none`.
* __noMultipleResponses__ | `boolean`: keelata ühe õpilase mitme taotluse esitamine. Default: `false`.
* __disableSubmitNotification__ | `boolean`: kontrollib, kas keelata esitamisteated. Default: `false`.
* __className__ | `string`: klassi nimi. Default: `''`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.


## Näited

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Custom Options', value: 'customOptions' },
        { label: 'With Style', value: 'withStyle' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<LikertScale 
    id="discrimination" 
    question="Do you agree with the arguments made by the speaker?" 
/>
```
</TabItem>

<TabItem value="customOptions">

```jsx live
<LikertScale 
    id="discrimination" 
    question="After your initial analysis of the data, how likely do you think it is that players are discriminated against by soccer referees because of their skin tone?" 
    options={[ 'Very unlikely', 'Unlikely', 'Neither unlikely nor likely', 'Likely', 'Very Likely']}
/>
```
</TabItem>

<TabItem value="withStyle">

```jsx live
<LikertScale 
    id="discrimination" 
    question="Do you agree with the arguments made by the speaker?" 
    style={{ 
        background: 'rgba(0,0,255,0.05)', 
        fontFamily: 'Open Sans', 
        fontSize: 22 
    }}
/>
```

</TabItem>

</Tabs>
