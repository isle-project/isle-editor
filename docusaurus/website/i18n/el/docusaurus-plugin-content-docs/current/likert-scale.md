---
id: likert-scale
title: Likert Scale
sidebar_label: Likert Scale
---

Ένα στοιχείο που δείχνει μια ερώτηση και μια πενταβάθμια κλίμακα για να απαντήσουν οι μαθητές.

## Επιλογές

* __question__ | `(string|node)`: ερώτηση προς εκτύπωση. Default: `''`.
* __options__ | `array`: έναν πίνακα πέντε στοιχείων με προσαρμοσμένες ετικέτες για τα διάφορα επίπεδα κλίμακας. Default: `none`.
* __noMultipleResponses__ | `boolean`: να μην επιτρέπετε πολλαπλές υποβολές από έναν μαθητή. Default: `false`.
* __disableSubmitNotification__ | `boolean`: ελέγχει αν θα απενεργοποιηθούν οι ειδοποιήσεις υποβολής. Default: `false`.
* __className__ | `string`: όνομα κλάσης. Default: `''`.
* __style__ | `object`: Στυλ γραμμής CSS. Default: `{}`.


## Παραδείγματα

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
