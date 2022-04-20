---
id: match-list-question 
title: Match List Question
sidebar_label: Match List Question
---

ISLE komponentas, kuris atvaizduoja klausimą, kuriame besimokantysis turi teisingai sugretinti dviejų sąrašų elementus.

## Parinktys

* __question__ | `(string|node)`: klausimas, kuris bus rodomas atitikmenų sąrašo klausimo komponento viršuje.. Default: `''`.
* __elements__ | `array<{a,b}>`: "masyvas", kuriame yra teisingos poros, rodomas laisvo teksto klausimo komponento viršuje. Kiekvienas `dėžutės` elementas turi būti `objektas` su `a` ir `b` savybėmis; norėdami pridėti atsakymus atitraukiančius atsakymus, pateikite elementus tik su `a` arba `b` savybėmis.. Default: `[]`.
* __hintPlacement__ | `string`: užuominų vieta (`top`, `left`, `right` arba `bottom`).. Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: užuominos, kuriose pateikiamos rekomendacijos, kaip atsakyti į klausimą.. Default: `[]`.
* __provideFeedback__ | `boolean`: nurodo, ar sprendimas turėtų būti prieinamas po to, kai besimokantieji pateikia savo atsakymus.. Default: `true`.
* __feedback__ | `boolean`: kontroliuoja, ar rodyti grįžtamojo ryšio mygtukus.. Default: `true`.
* __chat__ | `boolean`: kontroliuoja, ar elementas turi turėti integruotą pokalbių. Default: `false`.
* __colorScale__ | `array`: jei nustatyta, plytelėms naudojamos pateiktos spalvos. Default: `none`.
* __shuffle__ | `string`: nurodo, ar reikia išmaišyti `kairiuosius`, `dešiniuosius` arba `abus` stulpelius, kurių elementai turi būti suderinti; jei norite, kad nebūtų išmaišyti abiejų pusių elementai, nurodykite `none` arba bet kokią kitą reikšmę (gali būti naudinga, kai nėra jokio sprendimo).. Default: `'both'`.
* __disableSubmitNotification__ | `boolean`: kontroliuoja, ar išjungti pranešimus apie pateikimą.. Default: `false`.
* __submissionMsg__ | `string`: pranešimas rodomas, kai besimokantysis pirmą kartą pateikia atsakymą.. Default: `'You have successfully submitted your answer.'`.
* __resubmissionMsg__ | `string`: pranešimas rodomas apie visas po pirmojo pateikimo pateiktas paraiškas.. Default: `'You have successfully re-submitted your answer.'`.
* __until__ | `Date`: laikas, per kurį mokiniams turėtų būti leista pateikti atsakymus.. Default: `none`.
* __points__ | `number`: maksimalus balų skaičius, suteikiamas vertinant. Default: `10`.
* __className__ | `string`: klasės pavadinimas. Default: `''`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.
* __onChange__ | `function`: atgalinis skambutis, iškviečiamas, kai mokiniai pakeičia atsakymą.. Default: `onChange() {}`.
* __onSubmit__ | `function`: grįžtamasis ryšys, iškviečiamas, kai mokiniai pateikia atsakymą.. Default: `onSubmit() {}`.


## Pavyzdžiai

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Markdown', value: 'withMarkdown' },
        { label: 'With Solution & Style', value: 'withFeedback' },
        { label: 'Shuffle Right', value: 'shuffleRight' },
        { label: 'Points for Grading', value: 'grading' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<MatchListQuestion
    question="Please match the symbols and the respective chemical element."
    elements={[
        { a: 'Be', b: 'Berlyllium' },
        { a: 'Br', b: 'Bromine' },
        { a: 'Ar', b: 'Argon' },
        { a: 'Ac' , b: 'Actinium'},
        { b: 'Arsenic' },
        { b: 'Boron' }
    ]}
    provideFeedback={false}
/>
```
</TabItem>

<TabItem value="withMarkdown">

```jsx live
<MatchListQuestion
    question={<span>Please match the **symbols** and the respective *chemical* element.</span>}
    style={{ color: 'darkblue'}}
    elements={[
        { a: 'Ac' , b: 'Actinium'},
        { a: 'Ar', b: 'Argon' },
        { a: 'Be', b: 'Berlyllium' },
        { a: 'Br', b: 'Bromine' },
        { b: 'Arsenic' },
        { b: 'Boron' }
    ]}
/>
```
</TabItem>

<TabItem value="withFeedback">

```jsx live
<MatchListQuestion
    question="Please match the symbols and the respective chemical element."
    style={{ color: 'darkblue'}}
    elements={[
        { a: 'Ac' , b: 'Actinium'},
        { a: 'Ar', b: 'Argon' },
        { a: 'Be', b: 'Berlyllium' },
        { a: 'Br', b: 'Bromine' },
        { b: 'Arsenic' },
        { b: 'Boron' }
    ]}
/>
```
</TabItem>

<TabItem value="shuffleRight">

```jsx live
<MatchListQuestion
    question="Please match the correct surnames and first names of these statisticians."
    elements={[
        { a: 'Carl Friedrich', b: 'Gauß' },
        { a: 'Florence', b: 'Nightingale' },
        { a: 'Francis', b: 'Galton' },
        { a: 'John W.', b: 'Tukey' },
        { a: 'Karl', b: 'Pearson' },
        { a: 'Ronald', b: 'Fisher' }
    ]}
    shuffle="right"
/>
```
</TabItem>

<TabItem value="grading">

```jsx live
<MatchListQuestion
    question="Please match the correct surnames and first names of these statisticians."
    elements={[
        { a: 'Ronald', b: 'Fisher' },
        { a: 'Florence', b: 'Nightingale' },
        { a: 'Karl', b: 'Pearson' },
        { a: 'John W.', b: 'Tukey' },
        { a: 'Francis', b: 'Galton' },
        { a: 'Carl Friedrich', b: 'Gauß' }
    ]}
    points={20}
/>
```
</TabItem>

</Tabs>
