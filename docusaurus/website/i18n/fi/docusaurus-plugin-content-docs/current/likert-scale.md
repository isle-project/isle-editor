---
id: likert-scale
title: Likert Scale
sidebar_label: Likert Scale
---

Osa, jossa on kysymys ja viisiportainen asteikko, johon oppilaat voivat vastata.

## Vaihtoehdot

* __question__ | `(string|node)`: tulostettava kysymys. Default: `''`.
* __options__ | `array`: viiden elementin joukko, joka sisältää mukautettuja merkintöjä eri asteikkotasoille.. Default: `none`.
* __noMultipleResponses__ | `boolean`: kieltää yhden opiskelijan useamman hakemuksen jättämisen. Default: `false`.
* __disableSubmitNotification__ | `boolean`: valvoo, poistetaanko lähetysilmoitukset käytöstä. Default: `false`.
* __className__ | `string`: luokan nimi. Default: `''`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.


## Esimerkkejä

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
