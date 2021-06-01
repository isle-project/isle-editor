---
id: proportions-survey
title: Proportions Survey
sidebar_label: Proportions Survey
---

Компонент, който позволява на група хора да гласуват за тежестта и важността на дадени опции.

## Опции

* __allowMultipleAnswers__ | `boolean`: контролира дали желаете да позволите на учениците да отговарят на анкетата многократно.. Default: `false`.
* __anonymous__ | `boolean`: контролира дали отговорите на учениците са анонимни.. Default: `false`.
* __colors__ | `array`: масив от цветове за компонентите на кръговата диаграма. Ако не е дефиниран, ще се използва предварително дефинирана цветова скала.. Default: `none`.
* __disabled__ | `boolean`: контролира дали проучването е деактивирано. Default: `false`.
* __group__ | `string`: заглавие на дисплея на групата. Default: `'group results'`.
* __groupHeight__ | `number`: пропорции за височината на входа за показване на групата (в px). Default: `100`.
* __legends__ | `array`: етикети с легенди, които описват вариантите за претегляне.. Default: `[]`.
* __margin__ | `string`: пропорция на входния марж (в px). Default: `'40px'`.
* __onSubmit__ | `function`: функция за обратна връзка, извикана, след като учениците подадат отговор. Default: `onSubmit() {}`.
* __personalHeight__ | `number`: пропорции за височината на входа за отделен ученик (в px). Default: `200`.
* __precision__ | `number`: показана точност на пропорционалните стойности. Default: `2`.
* __question__ | `(string|node)`: въпросът, който трябва да се покаже. Default: `''`.
* __step__ | `number`: стъпката на стрелките, които се виждат при задържане на курсора над полето за въвеждане. Default: `0.25`.


## Примери

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



