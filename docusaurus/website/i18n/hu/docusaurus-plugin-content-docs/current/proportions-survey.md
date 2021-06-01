---
id: proportions-survey
title: Proportions Survey
sidebar_label: Proportions Survey
---

Komponens, amely lehetővé teszi, hogy egy csoport ember szavazzon az adott lehetőségek súlyáról és fontosságáról.

## Opciók

* __allowMultipleAnswers__ | `boolean`: szabályozza, hogy a tanulók többször is válaszolhassanak-e a felmérésre.. Default: `false`.
* __anonymous__ | `boolean`: ellenőrzi, hogy a diákok válaszai anonimizálásra kerülnek-e. Default: `false`.
* __colors__ | `array`: a kördiagram összetevőinek színtömbje. Ha nincs definiálva, akkor egy előre definiált színskála lesz használva.. Default: `none`.
* __disabled__ | `boolean`: szabályozza, hogy a felmérés ki van-e kapcsolva. Default: `false`.
* __group__ | `string`: csoport kijelző fejléc. Default: `'group results'`.
* __groupHeight__ | `number`: arányok bemeneti magasság a csoport megjelenítéséhez (px-ben). Default: `100`.
* __legends__ | `array`: a mérlegelendő opciókat leíró feliratokat tartalmazó legendák. Default: `[]`.
* __margin__ | `string`: arányos bemeneti margó (px-ben). Default: `'40px'`.
* __onSubmit__ | `function`: callback függvény, amely akkor hívódik elő, amikor a diákok elküldik a választ. Default: `onSubmit() {}`.
* __personalHeight__ | `number`: arányok bemeneti magasság az egyes diákok számára (px-ben). Default: `200`.
* __precision__ | `number`: az arányértékek megjelenített pontossága. Default: `2`.
* __question__ | `(string|node)`: a megjelenítendő kérdés. Default: `''`.
* __step__ | `number`: a nyilak lépése, amikor a kurzort a beviteli mező fölé helyezzük.. Default: `0.25`.


## Példák

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



