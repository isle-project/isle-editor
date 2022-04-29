---
id: range-question
title: Range Question
sidebar_label: Range Question
---

Složka s otázkou na rozsah, která od studentů vyžaduje, aby uvedli dolní a horní koncovou hodnotu.

## Možnosti

* __question__ | `(string|node)`: zobrazená otázka. Default: `''`.
* __solution__ | `array<number>`: dvouprvkové pole obsahující koncové body správného rozsahu. Default: `none`.
* __hintPlacement__ | `string`: umístění nápovědy (buď `top`, `left`, `right`, nebo `bottom`).. Default: `'top'`.
* __hints__ | `array<(string|node)>`: nápovědy, jak odpovědět na otázku.. Default: `[]`.
* __labels__ | `array`: dvouprvkové pole vlastních štítků jiných než "Lower" a "Upper".. Default: `none`.
* __feedback__ | `boolean`: řídí, zda se mají zobrazovat tlačítka zpětné vazby. Default: `true`.
* __chat__ | `boolean`: řídí, zda má mít prvek integrovaný chat. Default: `false`.
* __digits__ | `number`: počet číslic, které musí odpovídat řešení a odpovědi zadané uživatelem. Pokud není zadáno nebo je nastaveno na null, komponenta kontroluje striktní rovnost. Pokud je nastavena na 0, kontroluje se rovnost celých čísel.. Default: `3`.
* __max__ | `number`: maximální vstupní hodnota. Default: `null`.
* __min__ | `number`: minimální vstupní hodnota. Default: `null`.
* __nTries__ | `number`: po kolika pokusech má být poskytnuta zpětná vazba (pokud je `provideFeedback` `true`).. Default: `1`.
* __provideFeedback__ | `boolean`: určuje, zda se má po odeslání odpovědi zobrazit zpětná vazba včetně správné odpovědi.. Default: `true`.
* __submitAfterFeedback__ | `boolean`: kontroluje, zda má být možné znovu podat žádost i po odhalení řešení.. Default: `false`.
* __until__ | `Date`: čas, do kdy by studenti měli mít možnost odevzdat odpovědi. Default: `none`.
* __points__ | `number`: maximální počet bodů udělených při klasifikaci. Default: `10`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.
* __onChangeLower__ | `function`: zpětné volání spuštěné po změně dolní meze uživatelem. Default: `onChangeLower() {}`.
* __onChangeUpper__ | `function`: zpětné volání spuštěné po změně horní hranice uživatelem. Default: `onChangeUpper() {}`.
* __onChange__ | `function`: zpětné volání spuštěné po změně meze uživatelem (s dolní a horní mezí jako argumenty). Default: `onChange() {}`.
* __onSubmit__ | `function`: zpětné volání vyvolané po odeslání odpovědi; jako první parametr má `boolean` udávající, zda byla odpověď správně zodpovězena (pokud ano, jinak `null`), a jako druhý parametr zadanou odpověď.. Default: `onSubmit() {}`.


## Příklady

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
