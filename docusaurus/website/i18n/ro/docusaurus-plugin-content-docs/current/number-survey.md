---
id: number-survey
title: Number Survey
sidebar_label: Number Survey
---

O componentă de sondaj în care instructorul poate colecta date numerice de la studenți în timp real.

## Opțiuni

* __question__ | `(string|node)`: întrebarea care urmează să fie afișată. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: controlează dacă același utilizator (sau sesiune dacă este anonim) poate trimite mai multe răspunsuri). Default: `false`.
* __anonymous__ | `boolean`: Permite elevilor să transmită datele în mod anonim. Rețineți că, dacă această opțiune este setată la "true", atunci instructorii nu vor putea vedea ID-ul studentului care trimite datele.. Default: `false`.
* __step__ | `(number|string)`: O valoare `string` sau `numeric` care indică pasul săgeților care se văd la trecerea cursorului deasupra căsuței de intrare. Dacă este `'any'`, pasul va fi setat la `1`.. Default: `'any'`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.
* __onSubmit__ | `function`: funcția callback invocată odată ce studenții trimit un răspuns. Default: `onSubmit() {}`.


## Exemple

```jsx live
<NumberSurvey
    allowMultipleAnswers={true}
    id="generic_mean_question"
    question="Submit a number"
    defaultValue={0}
    step="any"
/>
```

