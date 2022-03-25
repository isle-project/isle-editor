---
id: number-question 
title: Number Question
sidebar_label: Number Question
---

Složka s otázkou na číslo.

## Možnosti

* __question__ | `(string|node)`: otázka na číslo. Default: `''`.
* __hintPlacement__ | `string`: umístění nápovědy (buď `top`, `left`, `right`, nebo `bottom`).. Default: `'top'`.
* __hints__ | `array<(string|node)>`: nápovědy, jak odpovědět na otázku.. Default: `[]`.
* __feedback__ | `boolean`: řídí, zda se mají zobrazovat tlačítka zpětné vazby. Default: `true`.
* __solution__ | `(number|array<number>)`: číselnou odpověď na problém (nebo více správných odpovědí, pokud je zadáno pole).. Default: `none`.
* __digits__ | `number`: počet číslic, pro které musí být žákem zadaná odpověď shodná s řešením, aby byla považována za správnou. Nastavte na 0, aby se shodovala jako celé číslo. Pokud je nastaveno na null, bude se hledat přesná shoda.. Default: `3`.
* __max__ | `number`: maximální povolená vstupní hodnota. Default: `null`.
* __min__ | `number`: minimální povolená vstupní hodnota. Default: `null`.
* __defaultValue__ | `number`: předvolená hodnota číselného vstupu. Default: `none`.
* __provideFeedback__ | `boolean`: určuje, zda se má po odeslání odpovědi zobrazit zpětná vazba včetně správné odpovědi.. Default: `true`.
* __submitAfterFeedback__ | `boolean`: kontroluje, zda by mělo být možné řešení znovu odeslat i po jeho odhalení).. Default: `false`.
* __nTries__ | `number`: po kolika pokusech má být poskytnuta zpětná vazba (pokud je `provideFeedback` `true`).. Default: `1`.
* __disableSubmitNotification__ | `boolean`: kontroluje, zda se mají vypnout oznámení o odeslání. Default: `false`.
* __chat__ | `boolean`: řídí, zda má mít prvek integrovaný chat. Default: `false`.
* __until__ | `Date`: čas, do kdy by studenti měli mít možnost odevzdat odpovědi. Default: `none`.
* __points__ | `number`: maximální počet bodů udělených při klasifikaci. Default: `10`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.
* __onChange__ | `function`: zpětné volání, které je spuštěno po změně hodnoty číselného pole; jako jediný argument obdrží aktuální hodnotu.. Default: `onChange() {}`.
* __onSubmit__ | `function`: zpětné volání vyvolané po odeslání odpovědi; jako první parametr má `boolean` udávající, zda byla odpověď správně zodpovězena (pokud ano, jinak `null`), a jako druhý parametr zadanou odpověď.. Default: `onSubmit() {}`.


## Příklady

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
