---
id: number-question 
title: Number Question
sidebar_label: Number Question
---

En komponent med et antal spørgsmål.

## Indstillinger

* __question__ | `(string|node)`: spørgsmål om antal. Default: `''`.
* __hintPlacement__ | `string`: placeringen af vejledningerne (enten `top`, `left`, `right` eller `bottom`). Default: `'top'`.
* __hints__ | `array<(string|node)>`: tips, der giver vejledning om, hvordan spørgsmålet skal besvares. Default: `[]`.
* __feedback__ | `boolean`: styrer, om der skal vises feedback-knapper. Default: `true`.
* __solution__ | `(number|array<number>)`: et numerisk svar på problemet (eller flere korrekte svar, hvis der er angivet et array). Default: `none`.
* __digits__ | `number`: antal cifre, for hvilke det svar, som den studerende har givet, skal stemme overens med løsningen for at blive betragtet som korrekt. Indstilles til 0 for at matche som et heltal. Hvis den sættes til nul, vil der blive søgt efter en nøjagtig overensstemmelse.. Default: `3`.
* __max__ | `number`: maksimalt tilladt inputværdi. Default: `null`.
* __min__ | `number`: mindste tilladte inputværdi. Default: `null`.
* __defaultValue__ | `number`: forudvalgt værdi af talindgang. Default: `none`.
* __provideFeedback__ | `boolean`: angiver, om der skal vises feedback, herunder det korrekte svar, efter at eleverne har indsendt deres svar. Default: `true`.
* __submitAfterFeedback__ | `boolean`: kontrollerer, om man skal kunne indsende en ny ansøgning, selv efter at løsningen er blevet afsløret. Default: `false`.
* __nTries__ | `number`: efter hvor mange forsøg skal der gives feedback (hvis `provideFeedback` er `true`). Default: `1`.
* __disableSubmitNotification__ | `boolean`: kontrollerer, om meddelelser om indsendelse skal deaktiveres. Default: `false`.
* __chat__ | `boolean`: kontrollerer, om elementet skal have en integreret chat. Default: `false`.
* __until__ | `Date`: den tid, der skal gå, før de studerende kan afgive svar. Default: `none`.
* __points__ | `number`: det maksimale antal point, der kan tildeles ved bedømmelsen. Default: `10`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.
* __onChange__ | `function`: callback, der udløses, når værdien af talfeltet ændres; modtager den aktuelle værdi som det eneste argument. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback, der påkaldes, når svaret er indsendt; har som første parameter en `boolean`, der angiver, om svaret blev besvaret korrekt (hvis det er relevant, ellers `null`), og det indsendte svar som anden parameter. Default: `onSubmit() {}`.


## Eksempler

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
