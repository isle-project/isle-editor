---
id: pages 
title: Pages
sidebar_label: Pages
---

Ένα στοιχείο σελιδοποίησης ISLE που επιτρέπει στο χρήστη να μεταβαίνει σε μια ακολουθία σελίδων.

## Επιλογές

* __activePage__ | `number`: ενεργή σελίδα. Default: `1`.
* __disabled__ | `boolean`: ελέγχει αν η γραμμή πλοήγησης είναι ενεργή ή όχι. Default: `false`.
* __title__ | `(string|node)`: εμφανιζόμενος τίτλος του δοχείου των σελίδων. Default: `''`.
* __pagination__ | `string`: αν θα εμφανίζεται η σελιδοποίηση είτε στην `top`, είτε στο `bottom`, είτε `both`.. Default: `'top'`.
* __size__ | `string`: μέγεθος των κουμπιών σελιδοποίησης (είτε `default`, `lg`, ή `sm`). Default: `'default'`.
* __height__ | `(number|string)`: το μέγιστο ύψος του δοχείου. Εάν μια ενσωματωμένη σελίδα είναι ψηλότερη, προστίθεται μια κατακόρυφη γραμμή κύλισης.. Default: `none`.
* __voiceID__ | `string`: αναγνωριστικό φωνητικού ελέγχου. Default: `none`.
* __style__ | `object`: Στυλ γραμμής CSS. Default: `{}`.
* __onSelect__ | `function`: Λειτουργία που καλείται όταν αλλάζει η ενεργή αλλαγή. Λαμβάνει το νέο ενεργό δείκτη σελίδας ως μοναδική παράμετρο.. Default: `onSelect() {}`.


## Παραδείγματα

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

