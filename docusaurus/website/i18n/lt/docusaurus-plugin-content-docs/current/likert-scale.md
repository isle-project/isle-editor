---
id: likert-scale
title: Likert Scale
sidebar_label: Likert Scale
---

Komponentas, kuriame pateikiamas klausimas ir penkių balų skalė, į kurį mokiniai turi atsakyti.

## Parinktys

* __question__ | `(string|node)`: spausdintinas klausimas. Default: `''`.
* __options__ | `array`: penkių elementų masyvas, kuriame yra pasirinktinės skirtingų skalės lygių etiketės.. Default: `none`.
* __noMultipleResponses__ | `boolean`: neleisti vienam mokiniui pateikti kelių paraiškų.. Default: `false`.
* __disableSubmitNotification__ | `boolean`: kontroliuoja, ar išjungti pranešimus apie pateikimą.. Default: `false`.
* __className__ | `string`: klasės pavadinimas. Default: `''`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.


## Pavyzdžiai

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
