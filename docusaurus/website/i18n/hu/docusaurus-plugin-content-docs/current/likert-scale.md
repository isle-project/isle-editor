---
id: likert-scale
title: Likert Scale
sidebar_label: Likert Scale
---

Egy olyan komponens, amely egy kérdést és egy ötfokozatú skálát mutat, amelyre a tanulóknak válaszolniuk kell.

## Opciók

* __question__ | `(string|node)`: nyomtatandó kérdés. Default: `''`.
* __options__ | `array`: egy öt elemből álló tömb, amely a különböző skálaszintek egyedi címkéit tartalmazza.. Default: `none`.
* __noMultipleResponses__ | `boolean`: egy diák több beadványának letiltása. Default: `false`.
* __disableSubmitNotification__ | `boolean`: szabályozza a benyújtási értesítések letiltását. Default: `false`.
* __className__ | `string`: osztály neve. Default: `''`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.


## Példák

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
