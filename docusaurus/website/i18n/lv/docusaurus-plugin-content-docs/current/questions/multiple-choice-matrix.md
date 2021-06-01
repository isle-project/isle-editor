---
id: multiple-choice-matrix 
title: Multiple Choice Matrix
sidebar_label: Multiple Choice Matrix
---

ISLE komponents, kas atveido matricu ar jautājumiem ar atbilžu variantiem un vienādām atbildēm.

## Iespējas

* __questions__ | `array (required)`: virkne jautājumu. Default: `none`.
* __answers__ | `array (required)`: atbilžu masīvs. Default: `none`.
* __title__ | `(string|node)`: virsraksts, kas jāattēlo jautājumu matricas augšpusē.. Default: `none`.
* __solution__ | `array<array>`: boolean matrica, kuras elements norāda, vai attiecīgā radio poga vai izvēles rūtiņa ir jāatzīmē.. Default: `none`.
* __type__ | `string`: jautājuma tips (`radio` atbilst "Izvēlieties vienu", `iekrāsojamā rūtiņa` - "Izvēlieties visu, kas attiecas").. Default: `'radio'`.
* __disableSubmitNotification__ | `boolean`: kontrolē, vai atspējot iesniegšanas paziņojumus.. Default: `false`.
* __onChange__ | `function`: atgriezeniskais zvans, kas tiek izsaukts, kad mainās izvēles rūtiņas/radio pogas vērtība; izsaukts ar divdimensiju boolean masīvu, kurā norādīta katras atbildes iespējas aktīvā statusa vērtība.. Default: `onChange() {}`.
* __onSubmit__ | `function`: atgriezeniskais zvans, kas tiek izsaukts, kad lietotājs noklikšķina uz pogas "Iesniegt"; izsauc divdimensiju boolean masīvu ar aktīvo statusu katrai atbildes iespējai.. Default: `onSubmit() {}`.


## Piemēri

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
