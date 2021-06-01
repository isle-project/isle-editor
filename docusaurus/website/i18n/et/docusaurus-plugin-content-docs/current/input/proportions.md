---
id: proportions-input 
title: Proportions Input
sidebar_label: Proportions Input
---

Proportsioonide sisendkomponent. Saab kasutada ISLE armatuurlaua osana või iseseisvalt. Viimasel juhul soovite muudatusi käsitleda atribuudi `onChange` kaudu või siduda väärtus globaalse muutujaga atribuudi `bind` kaudu.

## Valikud

* __colors__ | `array<string>`: pirukadiagrammi komponentide värvide massiivi. Kui seda ei ole määratud, kasutatakse kohandatud värviskaalat.. Default: `none`.
* __disabled__ | `boolean`: kontrollib, kas sisendväli on deaktiveeritud.. Default: `false`.
* __height__ | `number`: proportsioonid sisendkõrgus (px). Default: `200`.
* __legends__ | `array`: rühmamärgised. Default: `[]`.
* __onChange__ | `function`: callback-funktsioon, mis kutsutakse esile, kui valik on tehtud. Default: `onChange(){}`.
* __precision__ | `number`: näidatud proportsiooniväärtuste täpsus. Default: `1`.
* __step__ | `number`: noolte samm, mida näeb, kui kursor viibib sisestusruumi kohal.. Default: `0.1`.


## Näited

```jsx live
<ProportionsInput
    user
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

