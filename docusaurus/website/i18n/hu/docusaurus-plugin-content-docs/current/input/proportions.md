---
id: proportions-input 
title: Proportions Input
sidebar_label: Proportions Input
---

Egy arányos bemeneti komponens. Használható egy ISLE műszerfal részeként vagy önállóan. Az utóbbi esetben a változásokat az `onChange` attribútummal kell kezelni, vagy az értéket a `bind` attribútummal egy globális változóhoz kell kötni.

## Opciók

* __colors__ | `array<string>`: a kördiagram összetevőinek színtömbje. Ha nincs megadva, akkor egy egyéni színskála lesz használva.. Default: `none`.
* __disabled__ | `boolean`: szabályozza, hogy a beviteli mező ki van-e kapcsolva. Default: `false`.
* __height__ | `number`: arányok bemeneti magasság (px-ben). Default: `200`.
* __legends__ | `array`: csoportcímkék. Default: `[]`.
* __onChange__ | `function`: callback függvény, amelyet a választáskor kell meghívni.. Default: `onChange(){}`.
* __precision__ | `number`: az arányértékek megjelenített pontossága. Default: `1`.
* __step__ | `number`: a nyilak lépése, amikor a kurzort a beviteli mező fölé helyezzük.. Default: `0.1`.


## Példák

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

