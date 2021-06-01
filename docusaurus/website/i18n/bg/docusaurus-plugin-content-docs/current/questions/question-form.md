---
id: question-form 
title: Question Form
sidebar_label: Question Form
---

Компонент на формуляра, който комбинира различни компоненти на въпроси заедно с един бутон за изпращане.

## Опции

* __buttonLabel__ | `string`: етикет на бутона за изпращане. Default: `none`.
* __onSubmit__ | `function`: обратна връзка, задействана при щракване върху бутона за подаване. Default: `onSubmit() {}`.


## Примери

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
