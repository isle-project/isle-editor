---
id: confidence-coverage-sample
title: Confidence Interval Coverage Sample
sidebar_label: Confidence Interval Coverage Sample
---

O componentă de învățare care ilustrează Teorema limitei centrale (CLT) atunci când se eșantionează dintr-un set de date furnizat.

## Opțiuni

* __data__ | `object (required)`: obiect de date ale cărui chei corespund numelor variabilelor, iar valorile conțin valorile variabilelor respective. Default: `none`.
* __samples__ | `(array<number>|number)`: matrice de numere sau un singur număr care denotă dimensiunile eșantionului care poate fi extras. Default: `25`.
* __variables__ | `array (required)`: numele variabilelor care pot fi eșantionate din. Default: `none`.


## Exemple

```jsx live
<LearnConfidenceCoverageSample 
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs', 'Complications', 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}
/>
```

