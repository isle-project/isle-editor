---
id: free-text-survey 
title: Free Text Survey
sidebar_label: Free Text Survey
---

Компонент на ISLE за въпроси, при които отговорите на учениците трябва да се предоставят под формата на свободен текст. Това, което отличава този компонент от **Въпрос със свободен текст**, е фактът, че обобщените данни за групата се показват на всички в реално време.

## Опции

* __question__ | `(string|node)`: въпроса, който да зададете на учениците. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: контролира дали желаете да позволите на учениците да отговарят на анкетата многократно.. Default: `false`.
* __anonymous__ | `boolean`: контролира дали отговорите на учениците се събират анонимно.. Default: `false`.
* __rows__ | `number`: брой редове с текст в полето за въвеждане. Default: `4`.
* __className__ | `string`: име на класа. Default: `''`.
* __style__ | `object`: CSS инлайн стилове. Default: `{}`.
* __onSubmit__ | `function`: функция за обратна връзка, извикана при подаване на отговор. Default: `onSubmit() {}`.


## Примери

```jsx live
<FreeTextSurvey 
    question="Where are you from?"
    anonymous
/>
``` 

