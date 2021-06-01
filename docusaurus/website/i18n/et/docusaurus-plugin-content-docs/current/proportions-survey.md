---
id: proportions-survey
title: Proportions Survey
sidebar_label: Proportions Survey
---

Komponent, mis võimaldab inimeste grupil hääletada antud valikute kaalude ja tähtsuse üle.

## Valikud

* __allowMultipleAnswers__ | `boolean`: kontrollib, kas soovitakse, et õpilased saaksid vastata küsitlusele mitu korda.. Default: `false`.
* __anonymous__ | `boolean`: kontrollib, kas õpilaste vastused on anonüümsed. Default: `false`.
* __colors__ | `array`: pirukadiagrammi komponentide värvide massiivi. Kui seda ei ole määratud, kasutatakse eelnevalt määratud värviskaalat.. Default: `none`.
* __disabled__ | `boolean`: kontrollib, kas küsitlus on deaktiveeritud. Default: `false`.
* __group__ | `string`: grupi kuvamise pealkiri. Default: `'group results'`.
* __groupHeight__ | `number`: proportsioonid sisendkõrgus grupi kuvamiseks (px). Default: `100`.
* __legends__ | `array`: legendi sildid, mis kirjeldavad kaalutavaid valikuid. Default: `[]`.
* __margin__ | `string`: proportsionaalne sisendmarginaal (px). Default: `'40px'`.
* __onSubmit__ | `function`: callback funktsioon, mis käivitub, kui õpilased esitavad vastuse. Default: `onSubmit() {}`.
* __personalHeight__ | `number`: proportsioonid sisendkõrgus üksiku õpilase jaoks (px). Default: `200`.
* __precision__ | `number`: näidatud proportsiooniväärtuste täpsus. Default: `2`.
* __question__ | `(string|node)`: kuvatav küsimus. Default: `''`.
* __step__ | `number`: noolte samm, mida näeb, kui kursor viibib sisestusruumi kohal.. Default: `0.25`.


## Näited

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



