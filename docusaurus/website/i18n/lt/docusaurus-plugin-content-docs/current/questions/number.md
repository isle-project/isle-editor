---
id: number-question 
title: Number Question
sidebar_label: Number Question
---

Klausimo apie skaičių komponentas.

## Parinktys

* __question__ | `(string|node)`: skaičius klausimas. Default: `''`.
* __hintPlacement__ | `string`: užuominų vieta (`top`, `left`, `right` arba `bottom`).. Default: `'top'`.
* __hints__ | `array<(string|node)>`: užuominos, kuriose pateikiamos rekomendacijos, kaip atsakyti į klausimą.. Default: `[]`.
* __feedback__ | `boolean`: kontroliuoja, ar rodyti grįžtamojo ryšio mygtukus.. Default: `true`.
* __solution__ | `(number|array<number>)`: skaitinis uždavinio atsakymas (arba keli teisingi atsakymai, jei pateikiamas masyvas).. Default: `none`.
* __digits__ | `number`: skaitmenų, kurių mokinio pateiktas atsakymas turi sutapti su sprendimu, kad būtų laikomas teisingu, skaičius. Nustatykite 0, kad atitiktų kaip sveikasis skaičius. Jei nustatyta kaip nulis, bus ieškoma tikslaus atitikimo.. Default: `3`.
* __max__ | `number`: didžiausia leistina įvesties vertė. Default: `null`.
* __min__ | `number`: mažiausia leistina įvesties vertė. Default: `null`.
* __defaultValue__ | `number`: iš anksto pasirinkta skaičių įvesties vertė. Default: `none`.
* __provideFeedback__ | `boolean`: nurodo, ar mokiniams pateikus atsakymus turėtų būti rodomas grįžtamasis ryšys, įskaitant teisingą atsakymą.. Default: `true`.
* __submitAfterFeedback__ | `boolean`: kontroliuoja, ar turėtų būti galima pateikti pakartotinį pasiūlymą net ir po to, kai sprendimas buvo atskleistas).. Default: `false`.
* __nTries__ | `number`: po kiek bandymų turėtų būti pateiktas grįžtamasis ryšys (jei `provideFeedback` yra `true`). Default: `1`.
* __disableSubmitNotification__ | `boolean`: kontroliuoja, ar išjungti pranešimus apie pateikimą.. Default: `false`.
* __chat__ | `boolean`: kontroliuoja, ar elementas turi turėti integruotą pokalbių. Default: `false`.
* __until__ | `Date`: laikas, per kurį mokiniams turėtų būti leista pateikti atsakymus.. Default: `none`.
* __points__ | `number`: maksimalus balų skaičius, suteikiamas vertinant. Default: `10`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.
* __onChange__ | `function`: grįžtamasis skambutis, kuris aktyvuojamas pasikeitus skaičiaus lauko vertei; vienintelis argumentas - dabartinė vertė.. Default: `onChange() {}`.
* __onSubmit__ | `function`: grįžtamasis skambutis, iškviečiamas, kai pateikiamas atsakymas; pirmasis parametras yra `boolean`, nurodantis, ar atsakymas buvo teisingas (jei tinka, `null`, jei ne), o antrasis parametras - pateiktas atsakymas.. Default: `onSubmit() {}`.


## Pavyzdžiai

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
