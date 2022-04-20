---
id: range-question
title: Range Question
sidebar_label: Range Question
---

Egy tartományt tartalmazó kérdéskomponens, amely arra kéri a tanulókat, hogy adjanak meg egy alsó és egy felső végpontot.

## Opciók

* __question__ | `(string|node)`: megjelenített kérdés. Default: `''`.
* __solution__ | `array<number>`: kételemű tömb, amely a megfelelő tartomány végpontjait tartalmazza. Default: `none`.
* __hintPlacement__ | `string`: a tippek elhelyezése (vagy `top`, `left`, `right`, vagy `bottom`). Default: `'top'`.
* __hints__ | `array<(string|node)>`: a kérdés megválaszolására vonatkozó útmutatásokat ad. Default: `[]`.
* __labels__ | `array`: az "Alsó" és "Felső" címkéken kívüli egyéni címkék kételemű tömbje. Default: `none`.
* __feedback__ | `boolean`: szabályozza, hogy megjelenjenek-e a visszajelző gombok. Default: `true`.
* __chat__ | `boolean`: szabályozza, hogy az elemnek legyen-e integrált chatje. Default: `false`.
* __digits__ | `number`: azon számjegyek száma, amelyeknek meg kell egyezniük a megoldás és a felhasználó által megadott válasz között. Ha nincs megadva vagy nullára van állítva, az összetevő szigorú egyenlőséget ellenőriz. Ha 0-ra van állítva, akkor az egész számú egyenlőséget ellenőrzi.. Default: `3`.
* __max__ | `number`: maximális bemeneti érték. Default: `null`.
* __min__ | `number`: minimális bemeneti érték. Default: `null`.
* __provideFeedback__ | `boolean`: jelzi, hogy a helyes választ tartalmazó visszajelzés megjelenjen-e, miután a tanulók elküldték a válaszaikat. Default: `true`.
* __allowMultipleAnswers__ | `boolean`: szabályozza, hogy több választ is be lehet-e nyújtani. Default: `false`.
* __until__ | `Date`: a tanulóknak a válaszok benyújtásáig rendelkezésre álló idő. Default: `none`.
* __points__ | `number`: az osztályozás során adható maximális pontszám. Default: `10`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.
* __onChangeLower__ | `function`: visszahívás, amely az alsó határérték felhasználó általi módosítása után lép működésbe.. Default: `onChangeLower() {}`.
* __onChangeUpper__ | `function`: visszahívás, amely a felső határérték felhasználó általi módosítása után lép működésbe.. Default: `onChangeUpper() {}`.
* __onChange__ | `function`: visszahívás, amely a felhasználó által megváltoztatott határérték után lép életbe (alsó és felső határértékkel mint argumentummal). Default: `onChange() {}`.
* __onSubmit__ | `function`: callback, amelyet a válasz elküldésekor hívnak meg; első paramétere egy "bólé", amely jelzi, hogy a válasz helyesen lett-e megválaszolva (ha alkalmazható, egyébként "nulla"), második paramétere pedig a megadott válasz.. Default: `onSubmit() {}`.


## Példák

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
