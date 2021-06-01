---
id: likert-scale
title: Likert Scale
sidebar_label: Likert Scale
---

Komponenta zobrazující otázku a pětibodovou stupnici, na kterou mají studenti odpovědět.

## Možnosti

* __question__ | `(string|node)`: otázka k vytištění. Default: `''`.
* __options__ | `array`: pole pěti prvků s vlastními popisky pro různé úrovně stupnice.. Default: `none`.
* __noMultipleResponses__ | `boolean`: znemožnit více podání od jednoho studenta.. Default: `false`.
* __disableSubmitNotification__ | `boolean`: kontroluje, zda se mají vypnout oznámení o odeslání. Default: `false`.
* __className__ | `string`: název třídy. Default: `''`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.


## Příklady

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
