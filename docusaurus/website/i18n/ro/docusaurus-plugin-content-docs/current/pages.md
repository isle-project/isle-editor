---
id: pages 
title: Pages
sidebar_label: Pages
---

O componentă de paginare ISLE care permite utilizatorului să parcurgă o secvență de pagini.

## Opțiuni

* __activePage__ | `number`: pagina activă. Default: `1`.
* __disabled__ | `boolean`: controlează dacă bara de navigare este activă sau nu. Default: `false`.
* __title__ | `(string|node)`: titlul afișat al paginilor container. Default: `''`.
* __pagination__ | `string`: dacă se va afișa paginarea fie în `top`, `bottom`, sau `both`.. Default: `'top'`.
* __size__ | `string`: dimensiunea butoanelor de paginare (fie `default`, `lg`, sau `sm`). Default: `'default'`.
* __height__ | `(number|string)`: înălțimea maximă a containerului. Dacă o pagină încorporată este mai înaltă, se adaugă o bară de defilare verticală.. Default: `none`.
* __voiceID__ | `string`: identificatorul de control vocal. Default: `none`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.
* __onSelect__ | `function`: Funcție invocată atunci când se modifică modificarea activă. Primește noul index al paginii active ca unic parametru.. Default: `onSelect() {}`.


## Exemple

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

