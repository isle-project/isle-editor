---
id: proportions-input 
title: Proportions Input
sidebar_label: Proportions Input
---

Proporcijų įvesties komponentas. Gali būti naudojamas kaip ISLE prietaisų skydelio dalis arba atskirai. Pastaruoju atveju norite apdoroti pakeitimus naudodami atributą `onChange` arba susieti reikšmę su pasauliniu kintamuoju naudodami atributą `bind`.

## Parinktys

* __colors__ | `array<string>`: skritulinės diagramos komponentų spalvų masyvas. Jei neapibrėžta, bus naudojama pasirinktinė spalvų skalė.. Default: `none`.
* __disabled__ | `boolean`: kontroliuoja, ar įvesties laukas yra išjungtas.. Default: `false`.
* __height__ | `number`: proporcijos įvesties aukštis (px). Default: `200`.
* __legends__ | `array`: grupių etiketės. Default: `[]`.
* __onChange__ | `function`: grįžtamojo ryšio funkcija, kuri bus iškviesta pasirinkus.. Default: `onChange(){}`.
* __precision__ | `number`: rodomas proporcijų verčių tikslumas. Default: `1`.
* __step__ | `number`: rodyklių, matomų užvedus žymeklį virš įvesties langelio, žingsnis.. Default: `0.1`.


## Pavyzdžiai

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

