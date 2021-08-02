---
id: pages 
title: Pages
sidebar_label: Pages
---

An ISLE pagination component that allows the user to step through a sequence of pages.

## Options

* __activePage__ | `number`: active page. Default: `1`.
* __disabled__ | `boolean`: controls whether the navigation bar is active or not. Default: `false`.
* __title__ | `(string|node)`: displayed title of the pages container. Default: `''`.
* __pagination__ | `string`: whether to show the pagination either on the `top`, `bottom`, or `both`. Default: `'top'`.
* __size__ | `string`: size of the pagination buttons (either `default`, `lg`, or `sm`). Default: `'default'`.
* __height__ | `(number|string)`: the maximum height of the container. If an embedded page is taller, a vertical scrollbar is added. Default: `none`.
* __voiceID__ | `string`: voice control identifier. Default: `none`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
* __onSelect__ | `function`: Function invoked when active change is changed. Receives the new active page index as a sole parameter. Default: `onSelect() {}`.


## Examples

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

