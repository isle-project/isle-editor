---
id: likert-scale
title: Likert Scale
sidebar_label: Likert Scale
---

En komponent, der viser et spørgsmål og en fempunktsskala, som eleverne skal besvare.

## Indstillinger

* __question__ | `(string|node)`: spørgsmål, der skal udskrives. Default: `''`.
* __options__ | `array`: et array med fem elementer, der indeholder brugerdefinerede etiketter for de forskellige skala niveauer. Default: `none`.
* __noMultipleResponses__ | `boolean`: ikke tillade flere indsendelser fra en enkelt studerende. Default: `false`.
* __disableSubmitNotification__ | `boolean`: kontrollerer, om meddelelser om indsendelse skal deaktiveres. Default: `false`.
* __className__ | `string`: klassens navn. Default: `''`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.


## Eksempler

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
