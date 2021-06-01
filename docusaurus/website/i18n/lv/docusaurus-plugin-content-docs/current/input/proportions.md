---
id: proportions-input 
title: Proportions Input
sidebar_label: Proportions Input
---

Proporciju ievades komponents. Var izmantot kā daļu no ISLE paneļa vai atsevišķi. Pēdējā minētajā gadījumā vēlaties apstrādāt izmaiņas, izmantojot atribūtu `onChange`, vai piesaistīt vērtību globālajam mainīgajam, izmantojot atribūtu `bind`.

## Iespējas

* __colors__ | `array<string>`: pīrāga diagrammas komponentu krāsu masīvs. Ja nav definēts, tiks izmantota pielāgota krāsu skala.. Default: `none`.
* __disabled__ | `boolean`: kontrolē, vai ievades lauks ir deaktivizēts.. Default: `false`.
* __height__ | `number`: proporcijas ievades augstums (px). Default: `200`.
* __legends__ | `array`: grupu etiķetes. Default: `[]`.
* __onChange__ | `function`: atgriezeniskā zvana funkcija, kas jāizsauc, kad ir izdarīta izvēle.. Default: `onChange(){}`.
* __precision__ | `number`: parādītā proporcionālo vērtību precizitāte. Default: `1`.
* __step__ | `number`: bultiņu solis, kas redzams, kad kursors atrodas virs ievades rūtiņas.. Default: `0.1`.


## Piemēri

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

