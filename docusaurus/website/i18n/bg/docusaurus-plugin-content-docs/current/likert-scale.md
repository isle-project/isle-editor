---
id: likert-scale
title: Likert Scale
sidebar_label: Likert Scale
---

Компонент, показващ въпрос и петстепенна скала, на който учениците трябва да отговорят.

## Опции

* __question__ | `(string|node)`: Въпрос, който трябва да се отпечата. Default: `''`.
* __options__ | `array`: масив от пет елемента, съдържащи персонализирани етикети за различните нива на скалата. Default: `none`.
* __noMultipleResponses__ | `boolean`: забрана за подаване на множество документи от един ученик.. Default: `false`.
* __disableSubmitNotification__ | `boolean`: контролира дали да деактивира известията за подаване. Default: `false`.
* __className__ | `string`: име на класа. Default: `''`.
* __style__ | `object`: CSS инлайн стилове. Default: `{}`.


## Примери

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
