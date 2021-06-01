---
id: question-form 
title: Question Form
sidebar_label: Question Form
---

Veidlapas komponents, kas apvieno dažādus jautājumu komponentus kopā ar vienu iesniegšanas pogu.

## Iespējas

* __buttonLabel__ | `string`: iesniegšanas pogas etiķete. Default: `none`.
* __onSubmit__ | `function`: atsauces zvans, kas tiek izsaukts, kad ir noklikšķināts uz pogas iesniegt.. Default: `onSubmit() {}`.


## Piemēri

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
