---
id: likert-scale
title: Likert Scale
sidebar_label: Likert Scale
---

En komponent med en fråga och en femgradig skala som eleverna ska besvara.

## Alternativ

* __question__ | `(string|node)`: fråga som skall skrivas ut. Default: `''`.
* __options__ | `array`: en matris med fem element som innehåller anpassade etiketter för de olika skalnivåerna. Default: `none`.
* __noMultipleResponses__ | `boolean`: inte tillåta flera inlämningar från en och samma elev. Default: `false`.
* __disableSubmitNotification__ | `boolean`: kontrollerar om anmälningar om inlämning ska inaktiveras. Default: `false`.
* __className__ | `string`: klassens namn. Default: `''`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.


## Exempel

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
