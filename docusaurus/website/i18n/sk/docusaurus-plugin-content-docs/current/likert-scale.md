---
id: likert-scale
title: Likert Scale
sidebar_label: Likert Scale
---

Komponent zobrazujúci otázku a päťbodovú škálu, na ktorú majú žiaci odpovedať.

## Možnosti

* __question__ | `(string|node)`: otázka, ktorá sa má vytlačiť. Default: `''`.
* __options__ | `array`: pole piatich prvkov obsahujúce vlastné štítky pre rôzne úrovne stupnice. Default: `none`.
* __noMultipleResponses__ | `boolean`: zakázať viacnásobné podanie od jedného študenta.. Default: `false`.
* __disableSubmitNotification__ | `boolean`: kontroluje, či sa majú vypnúť oznámenia o odoslaní.. Default: `false`.
* __className__ | `string`: názov triedy. Default: `''`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.


## Príklady

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
