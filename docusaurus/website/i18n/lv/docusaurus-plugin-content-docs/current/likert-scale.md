---
id: likert-scale
title: Likert Scale
sidebar_label: Likert Scale
---

Sastāvdaļa, kurā skolēniem jāatbild uz jautājumu un piecu punktu skala.

## Iespējas

* __question__ | `(string|node)`: drukājamais jautājums. Default: `''`.
* __options__ | `array`: piecu elementu masīvs, kurā ir pielāgotas dažādu skalas līmeņu etiķetes.. Default: `none`.
* __noMultipleResponses__ | `boolean`: neļaut vienam skolēnam iesniegt vairākus iesniegumus.. Default: `false`.
* __disableSubmitNotification__ | `boolean`: kontrolē, vai atspējot iesniegšanas paziņojumus.. Default: `false`.
* __className__ | `string`: klases nosaukums. Default: `''`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.


## Piemēri

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
