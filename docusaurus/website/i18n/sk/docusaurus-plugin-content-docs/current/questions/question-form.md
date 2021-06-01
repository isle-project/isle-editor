---
id: question-form 
title: Question Form
sidebar_label: Question Form
---

Komponent formulára kombinujúci rôzne komponenty otázok spolu s jedným tlačidlom na odoslanie.

## Možnosti

* __buttonLabel__ | `string`: označenie tlačidla odoslania. Default: `none`.
* __onSubmit__ | `function`: spätné volanie vyvolané po kliknutí na tlačidlo odoslať. Default: `onSubmit() {}`.


## Príklady

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
