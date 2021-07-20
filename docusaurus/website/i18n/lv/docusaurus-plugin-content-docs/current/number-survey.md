---
id: number-survey
title: Number Survey
sidebar_label: Number Survey
---

Aptaujas komponents, kurā pasniedzējs var vākt skaitliskus aptaujas datus no studentiem reāllaikā.

## Iespējas

* __question__ | `(string|node)`: parādāmo jautājumu. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: kontrolē, vai viens un tas pats lietotājs (vai sesija, ja tā ir anonīma) var iesniegt vairākas atbildes).. Default: `false`.
* __anonymous__ | `boolean`: Ļauj skolēniem iesniegt datus anonīmi. Ņemiet vērā, ka, ja šī opcija ir iestatīta uz "true", tad pasniedzēji nevarēs redzēt iesniedzēja studenta ID.. Default: `false`.
* __step__ | `(number|string)`: Virknes `stringa` vai `ciparu` vērtība, kas norāda bultas soli, kas redzams, kursoru novietojot virs ievades rūtiņas. Ja `'jebkurš``, solis tiks iestatīts uz `1`.. Default: `'any'`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.
* __onSubmit__ | `function`: atgriezeniskā zvana funkcija, kas tiek izsaukta, tiklīdz skolēni iesniedz atbildi.. Default: `onSubmit() {}`.


## Piemēri

```jsx live
<NumberSurvey
    allowMultipleAnswers={true}
    id="generic_mean_question"
    question="Submit a number"
    defaultValue={0}
    step="any"
/>
```

