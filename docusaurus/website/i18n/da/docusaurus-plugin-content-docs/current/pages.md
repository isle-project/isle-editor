---
id: pages 
title: Pages
sidebar_label: Pages
---

En ISLE-pagineringskomponent, der gør det muligt for brugeren at gå gennem en sekvens af sider.

## Indstillinger

* __activePage__ | `number`: aktiv side. Default: `1`.
* __disabled__ | `boolean`: styrer, om navigationslinjen er aktiv eller ej. Default: `false`.
* __title__ | `(string|node)`: visning af sidernes titel i containeren. Default: `''`.
* __pagination__ | `string`: om paginering skal vises enten `top`, `bottom` eller `both` dele. Default: `'top'`.
* __size__ | `string`: størrelsen af pagineringsknapperne (enten `default`, `lg` eller `sm`). Default: `'default'`.
* __height__ | `(number|string)`: beholderens maksimale højde. Hvis en indlejret side er højere, tilføjes en lodret rullebjælke. Default: `none`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.
* __onSelect__ | `function`: Funktion, der påkaldes, når den aktive ændring ændres. Modtager det nye aktive sideindeks som eneste parameter. Default: `onSelect() {}`.


## Eksempler

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

