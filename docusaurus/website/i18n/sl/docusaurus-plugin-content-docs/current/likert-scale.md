---
id: likert-scale
title: Likert Scale
sidebar_label: Likert Scale
---

Sestavni del, ki prikazuje vprašanje in petstopenjsko lestvico, na katero morajo učenci odgovoriti.

## Možnosti

* __question__ | `(string|node)`: vprašanje za tiskanje. Default: `''`.
* __options__ | `array`: polje petih elementov z oznakami po meri za različne ravni lestvice. Default: `none`.
* __noMultipleResponses__ | `boolean`: onemogočiti večkratno predložitev od enega učenca.. Default: `false`.
* __disableSubmitNotification__ | `boolean`: nadzoruje, ali onemogočiti obvestila o predložitvi.. Default: `false`.
* __className__ | `string`: ime razreda. Default: `''`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.


## Primeri

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
