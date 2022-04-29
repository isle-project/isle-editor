---
id: number-question 
title: Number Question
sidebar_label: Number Question
---

En komponent med en nummerfråga.

## Alternativ

* __question__ | `(string|node)`: fråga om antal. Default: `''`.
* __hintPlacement__ | `string`: placering av tipsen (antingen `top`, `left`, `right` eller `bottom`). Default: `'top'`.
* __hints__ | `array<(string|node)>`: tips som ger vägledning om hur frågan ska besvaras. Default: `[]`.
* __feedback__ | `boolean`: kontrollerar om återkopplingsknapparna ska visas. Default: `true`.
* __solution__ | `(number|array<number>)`: Ett numeriskt svar på problemet (eller flera korrekta svar om en matris har angetts).. Default: `none`.
* __digits__ | `number`: antal siffror för vilka det svar som eleven ger måste överensstämma med lösningen för att anses vara korrekt. Ställ in 0 för att matcha som ett heltal. Om värdet är noll kommer det att sökas efter en exakt matchning.. Default: `3`.
* __max__ | `number`: Högsta tillåtna värde för inmatning.. Default: `null`.
* __min__ | `number`: Minsta tillåtna värde för inmatning.. Default: `null`.
* __defaultValue__ | `number`: Förvaltat värde för inmatning av siffror.. Default: `none`.
* __provideFeedback__ | `boolean`: anger om återkoppling, inklusive det rätta svaret, ska visas efter att eleverna skickat in sina svar.. Default: `true`.
* __submitAfterFeedback__ | `boolean`: kontrollerar om man ska kunna lämna in ett nytt förslag även efter det att lösningen har avslöjats.. Default: `false`.
* __nTries__ | `number`: Efter hur många försök ska feedback ges (om `provideFeedback` är `true`).. Default: `1`.
* __disableSubmitNotification__ | `boolean`: kontrollerar om anmälningar om inlämning ska inaktiveras. Default: `false`.
* __chat__ | `boolean`: kontrollerar om elementet ska ha en integrerad chatt. Default: `false`.
* __until__ | `Date`: tid fram till dess att eleverna ska få lämna in sina svar. Default: `none`.
* __points__ | `number`: Maximalt antal poäng som tilldelas vid betygsättning.. Default: `10`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.
* __onChange__ | `function`: callback som utlöses när värdet i talfältet ändras; tar emot det aktuella värdet som enda argument.. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback som aktiveras när svaret skickas in; har som första parameter en "boolean" som anger om svaret var korrekt besvarat (om tillämpligt, annars "noll") och det lämnade svaret som andra parameter.. Default: `onSubmit() {}`.


## Exempel

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Markdown', value: 'markdownStyling' },
        { label: 'With CSS', value: 'withCSS' }
        
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<NumberQuestion
    question="What is the number Pi? (include at least three digits after the decimal point)"
    solution={3.142}
/>
```
</TabItem>

<TabItem value="markdownStyling">

```jsx live
<NumberQuestion
    question={<span>What is the number $\pi$? (include at least _three_ digits after the decimal point)</span>}
    solution={3.142}
/>
```
</TabItem>

<TabItem value="withCSS">

```jsx live
<NumberQuestion
    question={<span style={{ fontSize: 25, color: 'darkorange'}}>What is the number PI - three digits after the period</span>}
    solution={3.142}
/>
```
</TabItem>

</Tabs>
