---
id: clt-sample
title: CLT Sample
sidebar_label: CLT Sample
---

O componentă de învățare care ilustrează Teorema limitei centrale (CLT) atunci când se eșantionează dintr-un set de date furnizat.

## Opțiuni

* __data__ | `object (required)`: obiect de date ale cărui chei corespund numelor variabilelor, iar valorile conțin valorile variabilelor respective. Default: `none`.
* __hidePopulationStdev__ | `boolean`: ascunderea afișării deviației standard a populației. Default: `false`.
* __samples__ | `(array<number>|number)`: matrice de numere sau un singur număr care denotă dimensiunile eșantionului care poate fi extras. Default: `25`.
* __populationProbabilities__ | `boolean`: dacă se afișează ecuațiile pentru calcularea probabilităților populației. Default: `false`.
* __quantiles__ | `boolean`: dacă trebuie să se afișeze instrumentul de calcul al oricăror cuantile. Default: `false`.
* __variables__ | `array (required)`: numele variabilelor care pot fi eșantionate din. Default: `none`.


## Exemple

```jsx live
<LearnSampleCLT 
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs', 'Complications', 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}
/>
```

