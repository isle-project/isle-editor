---
id: pages 
title: Pages
sidebar_label: Pages
---

Komponenta ISLE pro stránkování, která umožňuje uživateli postupně procházet sekvencí stránek.

## Možnosti

* __activePage__ | `number`: aktivní stránka. Default: `1`.
* __disabled__ | `boolean`: řídí, zda je navigační panel aktivní, nebo ne. Default: `false`.
* __title__ | `(string|node)`: zobrazený název kontejneru stránek. Default: `''`.
* __pagination__ | `string`: zda se má stránkování zobrazovat buď na `top`, `bottom`, nebo `both`.. Default: `'top'`.
* __size__ | `string`: velikost tlačítek pro stránkování (buď `default`, `lg`, nebo `sm`).. Default: `'default'`.
* __height__ | `(number|string)`: maximální výška kontejneru. Pokud je vložená stránka vyšší, přidá se svislý posuvník.. Default: `none`.
* __voiceID__ | `string`: identifikátor hlasového ovládání. Default: `none`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.
* __onSelect__ | `function`: Funkce vyvolaná při změně aktivní změny. Jako jediný parametr přijímá nový index aktivní stránky.. Default: `onSelect() {}`.


## Příklady

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Custom Pagination', value: 'customPagination' },
        { label: 'With CSS', value: 'withCSS' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Pages title="Pages" >
    <div>
        <h1>First Page</h1>
    </div>
    <div>
        <h1>Second Page</h1>
    </div>
    <div>
        <h1>Third Page</h1>
    </div>
</Pages>
```

</TabItem>

<TabItem value="customPagination" >

```jsx live
<Pages title="Questions" pagination="both" size="sm" >
    <div>
        <NumberQuestion
            question="What is the number PI (at least up to three digits after the decimal point)?"
            solution={Math.PI}
            digits={3}
        />
    </div>
    <div>
        <FreeTextQuestion 
            question="Is this question displayed on the second page?"
            solution="Yes" 
        />
    </div>
</Pages>
```
</TabItem>

<TabItem value="withCSS">

```jsx live
<Pages 
    activePage={2}
    style={{ background: 'lightblue', height: 420, outline: '4px solid black' }} 
    title="Styled Pages"
>
    <div>
        <h1>First Page</h1>
    </div>
    <div>
        <h1>Second Page</h1>
    </div>
    <div>
        <h1>Third Page</h1>
    </div>
</Pages>
```

</TabItem>

</Tabs>

