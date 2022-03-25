---
id: number-question 
title: Number Question
sidebar_label: Number Question
---

Компонент с въпроси за броя.

## Опции

* __question__ | `(string|node)`: въпрос за броя. Default: `''`.
* __hintPlacement__ | `string`: разположение на подсказките (или `top`, `right`, `left`, или `bottom`). Default: `'top'`.
* __hints__ | `array<(string|node)>`: подсказки, които дават насоки за това как да отговорите на въпроса. Default: `[]`.
* __feedback__ | `boolean`: контролира дали да се показват бутони за обратна връзка. Default: `true`.
* __solution__ | `(number|array<number>)`: цифров отговор на задачата (или няколко верни отговора, ако е предоставен масив).. Default: `none`.
* __digits__ | `number`: брой цифри, за които отговорът, даден от ученика, трябва да съвпада с решението, за да се счита за верен. Задайте 0, за да съвпадне като цяло число. Ако се зададе стойност null, ще се търси точно съвпадение. Default: `3`.
* __max__ | `number`: максимално допустима входна стойност. Default: `null`.
* __min__ | `number`: минимална допустима входна стойност. Default: `null`.
* __defaultValue__ | `number`: предварително избрана стойност на въведеното число. Default: `none`.
* __provideFeedback__ | `boolean`: посочва дали да се показва обратна връзка, включваща правилния отговор, след като обучаемите изпратят отговорите си.. Default: `true`.
* __submitAfterFeedback__ | `boolean`: контролира дали трябва да може да се подава отново, дори след като решението е било разкрито). Default: `false`.
* __nTries__ | `number`: след колко опита трябва да се предостави обратна връзка (ако `provideFeedback` е `true`). Default: `1`.
* __disableSubmitNotification__ | `boolean`: контролира дали да деактивира известията за подаване. Default: `false`.
* __chat__ | `boolean`: контролира дали елементът трябва да има интегриран чат. Default: `false`.
* __until__ | `Date`: времето, до което учениците трябва да могат да подават отговори. Default: `none`.
* __points__ | `number`: максимален брой точки, присъждани при класирането. Default: `10`.
* __style__ | `object`: CSS инлайн стилове. Default: `{}`.
* __onChange__ | `function`: обратно извикване, което се задейства след промяна на стойността на полето с числа; получава текущата стойност като единствен аргумент. Default: `onChange() {}`.
* __onSubmit__ | `function`: обратна връзка, задействана при подаване на отговор; първият параметър е `boolean`, показващ дали отговорът е бил верен (ако е приложимо, `null` в противен случай), а вторият параметър е подаденият отговор. Default: `onSubmit() {}`.


## Примери

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Markdown', value: 'markdownStyling' },
        { label: 'With CSS', value: 'withCSS' }
        
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<NumberQuestion
    question="What is the number Pi? (include at least three digits after the decimal point)"
    solution={3.142}
/>
```
</TabItem>

<TabItem value="markdownStyling">

```jsx live
<NumberQuestion
    question={<span>What is the number $\pi$? (include at least _three_ digits after the decimal point)</span>}
    solution={3.142}
/>
```
</TabItem>

<TabItem value="withCSS">

```jsx live
<NumberQuestion
    question={<span style={{ fontSize: 25, color: 'darkorange'}}>What is the number PI - three digits after the period</span>}
    solution={3.142}
/>
```
</TabItem>

</Tabs>
