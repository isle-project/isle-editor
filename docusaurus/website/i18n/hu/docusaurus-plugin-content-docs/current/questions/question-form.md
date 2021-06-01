---
id: question-form 
title: Question Form
sidebar_label: Question Form
---

Egy űrlapkomponens, amely különböző kérdéskomponenseket kombinál egyetlen beküldési gombbal.

## Opciók

* __buttonLabel__ | `string`: a küldés gomb címkéje. Default: `none`.
* __onSubmit__ | `function`: callback, amelyet a submit gombra való kattintáskor hívnak elő.. Default: `onSubmit() {}`.


## Példák

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
