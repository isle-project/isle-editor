---
id: proportions-input 
title: Proportions Input
sidebar_label: Proportions Input
---

Компонент за въвеждане на пропорции. Може да се използва като част от табло за управление на ISLE или самостоятелно. В последния случай искате да обработвате промените чрез атрибута `onChange` или да свържете стойността с глобална променлива чрез атрибута `bind`.

## Опции

* __colors__ | `array<string>`: масив от цветове за компонентите на кръговата диаграма. Ако не е дефинирана, ще се използва потребителска цветова скала.. Default: `none`.
* __disabled__ | `boolean`: контролира дали полето за въвеждане е деактивирано. Default: `false`.
* __height__ | `number`: височина на входните пропорции (в px). Default: `200`.
* __legends__ | `array`: етикети на групи. Default: `[]`.
* __onChange__ | `function`: функция за обратна връзка, която да се извика при направен избор. Default: `onChange(){}`.
* __precision__ | `number`: показана точност на пропорционалните стойности. Default: `1`.
* __step__ | `number`: стъпката на стрелките, които се виждат при задържане на курсора над полето за въвеждане. Default: `0.1`.


## Примери

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

