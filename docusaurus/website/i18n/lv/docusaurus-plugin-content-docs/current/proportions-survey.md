---
id: proportions-survey
title: Proportions Survey
sidebar_label: Proportions Survey
---

Sastāvdaļa, kas ļauj cilvēku grupai balsot par noteiktu iespēju svarīgumu un nozīmīgumu.

## Iespējas

* __allowMultipleAnswers__ | `boolean`: kontrolē, vai skolēniem ir atļauts atbildēt uz aptaujas jautājumiem vairākas reizes.. Default: `false`.
* __anonymous__ | `boolean`: kontrolē, vai skolēnu atbildes ir anonimizētas.. Default: `false`.
* __colors__ | `array`: pīrāga diagrammas komponentu krāsu masīvs. Ja nav definēts, tiks izmantota iepriekš definēta krāsu skala.. Default: `none`.
* __disabled__ | `boolean`: kontrolē, vai apsekojums ir deaktivizēts.. Default: `false`.
* __group__ | `string`: grupas displeja virsraksts. Default: `'group results'`.
* __groupHeight__ | `number`: proporciju ievades augstums grupas attēlošanai (px). Default: `100`.
* __legends__ | `array`: leģendas etiķetes, kas apraksta svērtos variantus.. Default: `[]`.
* __margin__ | `string`: proporcionālā ievades rezerve (px). Default: `'40px'`.
* __onSubmit__ | `function`: atgriezeniskā zvana funkcija, kas tiek izsaukta, tiklīdz skolēni iesniedz atbildi.. Default: `onSubmit() {}`.
* __personalHeight__ | `number`: proporcijas ievades augstums atsevišķam skolēnam (px). Default: `200`.
* __precision__ | `number`: parādītā proporcionālo vērtību precizitāte. Default: `2`.
* __question__ | `(string|node)`: parādāmo jautājumu. Default: `''`.
* __step__ | `number`: bultiņu solis, kas redzams, kad kursors atrodas virs ievades rūtiņas.. Default: `0.25`.


## Piemēri

```jsx live
<ProportionsSurvey 
    id="Survey"
    question="Decide what is important"
    group="Group decision"
    nElements={3}
    colors = {[ "red", "blue", "gold" ]}
    personalHeight={300}
    groupHeight={200}
    margin="80px"
    legends={[ "bitcoin", "old", "diamonds" ]}
/>
```



