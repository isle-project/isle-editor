---
id: multiple-choice-survey 
title: Multiple Choice Survey
sidebar_label: Multiple Choice Survey
---

O componentă de sondaj în care instructorul poate colecta date de sondaj cu variante multiple de răspuns de la studenți în timp real.

## Opțiuni

* __question__ | `(string|node)`: șirul care indică întrebarea care trebuie adresată elevilor. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: controlează dacă se dorește să se permită elevilor să răspundă la sondaj de mai multe ori.. Default: `false`.
* __anonymous__ | `boolean`: controlează dacă răspunsurile elevilor sunt anonimizate. Default: `false`.
* __answers__ | `array`: matrice care indică variante de răspuns pentru elevi. Default: `[]`.
* __multipleAnswers__ | `boolean`: indică dacă elevii pot selecta mai mult de un răspuns. Rețineți că acest lucru diferă de allowMultipleAnswers în sensul că allow face ca elevii să poată trimite întrebarea de mai multe ori.. Default: `false`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.
* __onSubmit__ | `function`: funcția care trebuie apelată atunci când se trimite un răspuns. Default: `onSubmit() {}`.


## Exemple

```jsx live
<MultipleChoiceSurvey
    anonymous
    question="Are you left- or right-handed"
    answers={[ 'Left-handed', 'Right-handed' ]}
/>
```

