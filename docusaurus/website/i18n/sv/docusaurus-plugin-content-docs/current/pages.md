---
id: pages 
title: Pages
sidebar_label: Pages
---

En ISLE-komponent för sidindelning som gör det möjligt för användaren att gå igenom en sekvens av sidor.

## Alternativ

* __activePage__ | `number`: aktiv sida. Default: `1`.
* __disabled__ | `boolean`: kontrollerar om navigeringsfältet är aktivt eller inte. Default: `false`.
* __title__ | `(string|node)`: sidans titel som visas i behållaren. Default: `''`.
* __pagination__ | `string`: om sidindelningen ska visas antingen på `top`, `bottom` eller `both`.. Default: `'top'`.
* __size__ | `string`: Storlek på pagineringsknapparna (antingen `default`, `lg` eller `sm`).. Default: `'default'`.
* __height__ | `(number|string)`: behållarens maximala höjd. Om en inbäddad sida är högre läggs ett vertikalt rullningsfält till.. Default: `none`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.
* __onSelect__ | `function`: Funktion som aktiveras när den aktiva ändringen ändras. Tar emot det nya aktiva sidindexet som enda parameter.. Default: `onSelect() {}`.


## Exempel

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

