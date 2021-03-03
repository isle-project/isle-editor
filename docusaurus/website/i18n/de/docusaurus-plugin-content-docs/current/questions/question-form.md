---
id: question-form 
title: Question Form
sidebar_label: Question Form
---

Eine Formularkomponente, die verschiedene Fragekomponenten mit einer einzigen Absendetaste kombiniert.

## Optionen

* __buttonLabel__ | `string`: Beschriftung der Submit-Schaltfläche. Default: `none`.
* __onSubmit__ | `function`: Callback, der aufgerufen wird, wenn die Schaltfläche "Submit" angeklickt wird. Default: `onSubmit() {}`.


## Beispiele

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
