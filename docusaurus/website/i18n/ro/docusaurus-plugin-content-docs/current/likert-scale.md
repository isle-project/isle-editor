---
id: likert-scale
title: Likert Scale
sidebar_label: Likert Scale
---

O componentă care prezintă o întrebare și o scală de cinci puncte la care elevii trebuie să răspundă.

## Opțiuni

* __question__ | `(string|node)`: întrebare de tipărit. Default: `''`.
* __options__ | `array`: o matrice de cinci elemente care conțin etichete personalizate pentru diferitele niveluri ale scalei. Default: `none`.
* __noMultipleResponses__ | `boolean`: să nu permită mai multe prezentări din partea unui singur elev. Default: `false`.
* __disableSubmitNotification__ | `boolean`: controlează dacă se dezactivează sau nu notificările de trimitere. Default: `false`.
* __className__ | `string`: numele clasei. Default: `''`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.


## Exemple

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
