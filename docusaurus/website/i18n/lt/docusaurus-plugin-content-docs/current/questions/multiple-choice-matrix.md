---
id: multiple-choice-matrix 
title: Multiple Choice Matrix
sidebar_label: Multiple Choice Matrix
---

ISLE komponentas, kuris atvaizduoja klausimų su keliais pasirinkimais ir vienodais atsakymais matricą.

## Parinktys

* __questions__ | `array (required)`: daugybė klausimų. Default: `none`.
* __answers__ | `array (required)`: atsakymų masyvas. Default: `none`.
* __title__ | `(string|node)`: pavadinimas, kuris bus rodomas klausimų matricos viršuje.. Default: `none`.
* __solution__ | `array<array>`: loginė matrica, kurios elementas nurodo, ar reikia pažymėti atitinkamą radijo mygtuką arba žymimąjį langelį.. Default: `none`.
* __type__ | `string`: klausimo tipas (`radio` atitinka "Pasirinkite vieną", `žymimasis langelis` - "Pažymėkite viską, kas tinka").. Default: `'radio'`.
* __disableSubmitNotification__ | `boolean`: kontroliuoja, ar išjungti pranešimus apie pateikimą.. Default: `false`.
* __onChange__ | `function`: grįžtamasis iškvietimas, inicijuojamas pasikeitus žymimojo langelio / radijo mygtuko reikšmei; iškviečiamas su dvimatiu loginiu masyvu, kuriame pateikiama kiekvieno atsakymo varianto aktyvioji būsena.. Default: `onChange() {}`.
* __onSubmit__ | `function`: grįžtamasis ryšys, inicijuojamas, kai naudotojas spusteli mygtuką "Pateikti"; inicijuojamas su dvimatiu loginiu masyvu, kuriame pateikiamas kiekvieno atsakymo varianto aktyvus statusas.. Default: `onSubmit() {}`.


## Pavyzdžiai

```jsx live
<MultipleChoiceMatrix 
    title="Do you think these concepts are important for an introductory statistics course, and do you (or your department) cover them in your introductory courses?" id="topics" 
    questions={[
        'Data Visualizations',
        'Hand calculations (e.g. standard deviation, z-scores)',
        'Combinatorics',
        'Basic probability theory (conditional probability, independence...)',
        'Calculus-based probability',
        'Sampling distributions',
        'Confidence intervals (traditional, formula-based)',
        'Boostrapping',
        'Hypothesis testing (traditional, e.g. t-test or chi-square formulas and tables)',
        'Simple linear regression',
        'Bayesian statistics',
        'Randomization- or simulation-based inference'
    ]}
    type="checkbox" 
    answers={[ 'I cover it', 'I think it\'s important' ]} 
/>
```
