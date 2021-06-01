---
id: multiple-choice-matrix 
title: Multiple Choice Matrix
sidebar_label: Multiple Choice Matrix
---

Komponenta ISLE, ki prikazuje matriko vprašanj z več možnostmi izbire z enakimi odgovori.

## Možnosti

* __questions__ | `array (required)`: vrsta vprašanj. Default: `none`.
* __answers__ | `array (required)`: niz odgovorov. Default: `none`.
* __title__ | `(string|node)`: naslov, ki se prikaže na vrhu matrike z vprašanji. Default: `none`.
* __solution__ | `array<array>`: logična matrika, katere element označuje, ali je treba označiti ustrezni radijski gumb ali potrditveno polje.. Default: `none`.
* __type__ | `string`: vrsta vprašanja (`radio` ustreza odgovoru "Izberi eno", `ključek` pa odgovoru "Izberi vse, kar velja").. Default: `'radio'`.
* __disableSubmitNotification__ | `boolean`: nadzoruje, ali onemogočiti obvestila o predložitvi.. Default: `false`.
* __onChange__ | `function`: povratni klic, ki se sproži, ko se spremeni vrednost potrditvenega polja/radijskega gumba; sproži se z dvodimenzionalnim logičnim poljem aktivnega stanja za vsako možnost odgovora.. Default: `onChange() {}`.
* __onSubmit__ | `function`: povratni klic, ki se sproži, ko uporabnik klikne gumb "Pošlji"; sproži se z dvodimenzionalnim logičnim poljem aktivnega stanja za vsako možnost odgovora.. Default: `onSubmit() {}`.


## Primeri

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
