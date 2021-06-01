---
id: proportions-survey
title: Proportions Survey
sidebar_label: Proportions Survey
---

Komponentas, leidžiantis žmonių grupei balsuoti dėl tam tikrų parinkčių svorio ir svarbos.

## Parinktys

* __allowMultipleAnswers__ | `boolean`: kontroliuoja, ar norima leisti mokiniams į apklausą atsakyti kelis kartus.. Default: `false`.
* __anonymous__ | `boolean`: kontroliuoja, ar mokinių atsakymai yra anonimiški.. Default: `false`.
* __colors__ | `array`: skritulinės diagramos komponentų spalvų masyvas. Jei neapibrėžta, bus naudojama iš anksto nustatyta spalvų skalė.. Default: `none`.
* __disabled__ | `boolean`: kontroliuoja, ar apklausa yra išjungta.. Default: `false`.
* __group__ | `string`: grupės ekrano antraštė. Default: `'group results'`.
* __groupHeight__ | `number`: proporcijų įvesties aukštis grupės rodymui (px). Default: `100`.
* __legends__ | `array`: legendos etiketės, apibūdinančios sveriamas parinktis.. Default: `[]`.
* __margin__ | `string`: proporcinė įvesties marža (px). Default: `'40px'`.
* __onSubmit__ | `function`: grįžtamojo ryšio funkcija, iškviečiama mokiniams pateikus atsakymą.. Default: `onSubmit() {}`.
* __personalHeight__ | `number`: proporcijos įvesties aukštis atskiram mokiniui (px). Default: `200`.
* __precision__ | `number`: rodomas proporcijų verčių tikslumas. Default: `2`.
* __question__ | `(string|node)`: rodomas klausimas. Default: `''`.
* __step__ | `number`: rodyklių, matomų užvedus žymeklį virš įvesties langelio, žingsnis.. Default: `0.25`.


## Pavyzdžiai

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



