---
id: question-form 
title: Question Form
sidebar_label: Question Form
---

Ένα στοιχείο φόρμας που συνδυάζει διαφορετικά στοιχεία ερωτήσεων μαζί με ένα ενιαίο κουμπί υποβολής.

## Επιλογές

* __buttonLabel__ | `string`: ετικέτα του κουμπιού υποβολής. Default: `none`.
* __onSubmit__ | `function`: callback που καλείται όταν γίνεται κλικ στο κουμπί submit. Default: `onSubmit() {}`.


## Παραδείγματα

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Markdown', value: 'withMarkdown' }
        
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<QuestionForm>
    <NumberQuestion
        question="What is 2+2?"
    />
    <FreeTextQuestion
        question="What is the meaning of life?"
    />    
</QuestionForm>
```
</TabItem>

<TabItem value="withMarkdown">

```jsx live
<QuestionForm>
    <NumberQuestion
        question={<p>What is $$2+2$$?</p>}
    />  
    <FreeTextQuestion
        question={<span>What is the *meaning of life*?</span>}
    />    
</QuestionForm>
```
</TabItem>

</Tabs>
