---
id: range-question
title: Range Question
sidebar_label: Range Question
---

Компонент на въпроса за обхвата, който изисква от учениците да посочат долна и горна крайна точка.

## Опции

* __question__ | `(string|node)`: показан въпрос. Default: `''`.
* __solution__ | `array<number>`: двуелементен масив, съдържащ крайните точки на правилния диапазон. Default: `none`.
* __hintPlacement__ | `string`: разположение на подсказките (или `top`, `right`, `left`, или `bottom`). Default: `'top'`.
* __hints__ | `array<(string|node)>`: указания за това как да отговорите на въпроса. Default: `[]`.
* __labels__ | `array`: двуелементен масив от персонализирани етикети, различни от "Lower" и "Upper". Default: `none`.
* __feedback__ | `boolean`: контролира дали да се показват бутони за обратна връзка. Default: `true`.
* __chat__ | `boolean`: контролира дали елементът трябва да има интегриран чат. Default: `false`.
* __digits__ | `number`: брой цифри, които трябва да съвпадат с решението и отговора, зададен от потребителя. Ако не е зададено или е зададено null, компонентът проверява за строго равенство. Ако е зададена стойност 0, се проверява за равенство на цели числа.. Default: `3`.
* __max__ | `number`: максимална входна стойност. Default: `null`.
* __min__ | `number`: минимална входна стойност. Default: `null`.
* __provideFeedback__ | `boolean`: посочва дали да се показва обратна връзка, включваща правилния отговор, след като обучаемите изпратят отговорите си.. Default: `true`.
* __allowMultipleAnswers__ | `boolean`: контролира дали може да се изпращат няколко отговора.. Default: `false`.
* __until__ | `Date`: времето, до което учениците трябва да могат да подават отговори. Default: `none`.
* __points__ | `number`: максимален брой точки, присъждани при класирането. Default: `10`.
* __style__ | `object`: CSS инлайн стилове. Default: `{}`.
* __onChangeLower__ | `function`: обратна връзка, задействана след промяна на долната граница от потребителя. Default: `onChangeLower() {}`.
* __onChangeUpper__ | `function`: обратна връзка, задействана след промяна на горната граница от потребителя. Default: `onChangeUpper() {}`.
* __onChange__ | `function`: undefined. Default: `onChange() {}`.
* __onSubmit__ | `function`: обратна връзка, задействана при подаване на отговор; първият параметър е `boolean`, показващ дали отговорът е бил верен (ако е приложимо, `null` в противен случай), а вторият параметър е подаденият отговор. Default: `onSubmit() {}`.


## Примери

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Hints', value: 'withHints' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'With Points and Feedback', value: 'withPoints' }
        
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<RangeQuestion
    style={{ fontSize: 17, }}
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
/>
```

</TabItem>

<TabItem value="withHints">

```jsx live
<RangeQuestion
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
    hints={['all this happened in the 17th century', 'it ended with the Peace of Westphalia in 1648']}
/>
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<RangeQuestion
    style={{ fontFamily: 'Georgia', boxShadow: '0 0  10px darkblue'}}
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
/>
```

</TabItem>

<TabItem value="withPoints">

```jsx live
<RangeQuestion
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
    hints={['all this happened in the 17th century', 'it ended with the Peace of Westphalia in 1648']}
    points={20}
    onSubmit={(res) => {
     if (res === true) {
      alert('Great, you have received 20 points');
     }
     else alert('sorry, this answer was wrong');
    }}
/>
```

</TabItem>

</Tabs>
