---
id: free-text-survey 
title: Free Text Survey
sidebar_label: Free Text Survey
---

O componentă ISLE pentru întrebări la care răspunsurile elevilor trebuie să fie furnizate sub formă de text liber. Ceea ce diferențiază această componentă de **FreeTextQuestion** este faptul că datele agregate ale grupului sunt afișate în timp real pentru toată lumea.

## Opțiuni

* __question__ | `(string|node)`: întrebarea care trebuie adresată elevilor. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: controlează dacă se dorește să se permită elevilor să răspundă la sondaj de mai multe ori.. Default: `false`.
* __anonymous__ | `boolean`: controlează dacă răspunsurile elevilor sunt colectate în mod anonim. Default: `false`.
* __rows__ | `number`: numărul de rânduri de text din câmpul de intrare. Default: `4`.
* __className__ | `string`: numele clasei. Default: `''`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.
* __onSubmit__ | `function`: funcția de callback apelată atunci când se trimite un răspuns. Default: `onSubmit() {}`.


## Exemple

```jsx live
<FreeTextSurvey 
    question="Where are you from?"
    anonymous
/>
``` 

