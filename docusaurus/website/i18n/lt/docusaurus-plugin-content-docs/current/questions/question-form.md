---
id: question-form 
title: Question Form
sidebar_label: Question Form
---

Formos komponentas, jungiantis skirtingus klausimų komponentus ir vieną pateikimo mygtuką.

## Parinktys

* __buttonLabel__ | `string`: pateikimo mygtuko etiketė. Default: `none`.
* __onSubmit__ | `function`: atgalinis skambutis, inicijuojamas paspaudus pateikimo mygtuką.. Default: `onSubmit() {}`.


## Pavyzdžiai

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
