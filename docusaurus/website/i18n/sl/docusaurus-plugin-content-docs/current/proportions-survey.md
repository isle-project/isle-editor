---
id: proportions-survey
title: Proportions Survey
sidebar_label: Proportions Survey
---

Komponenta, ki skupini ljudi omogoča glasovanje o pomembnosti in pomembnosti danih možnosti.

## Možnosti

* __allowMultipleAnswers__ | `boolean`: nadzoruje, ali želimo učencem omogočiti, da na anketo odgovorijo večkrat.. Default: `false`.
* __anonymous__ | `boolean`: nadzoruje, ali so odgovori učencev anonimizirani.. Default: `false`.
* __colors__ | `array`: polje barv za komponente krožnega diagrama. Če ni določeno, se uporabi vnaprej določena barvna lestvica.. Default: `none`.
* __disabled__ | `boolean`: nadzoruje, ali je anketa deaktivirana.. Default: `false`.
* __group__ | `string`: naslov prikaza skupine. Default: `'group results'`.
* __groupHeight__ | `number`: višina vnosa za prikaz skupine (v px). Default: `100`.
* __legends__ | `array`: legende, ki opisujejo možnosti, ki jih je treba pretehtati.. Default: `[]`.
* __margin__ | `string`: delež vhodne meje (v px). Default: `'40px'`.
* __onSubmit__ | `function`: povratna funkcija, ki se sproži, ko učenci oddajo odgovor.. Default: `onSubmit() {}`.
* __personalHeight__ | `number`: višina vnosa za posameznega učenca (v px). Default: `200`.
* __precision__ | `number`: prikazana natančnost vrednosti deležev. Default: `2`.
* __question__ | `(string|node)`: vprašanje, ki se prikaže. Default: `''`.
* __step__ | `number`: korak puščic, ki se prikažejo, ko se kazalec pomakne nad vnosno polje.. Default: `0.25`.


## Primeri

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



