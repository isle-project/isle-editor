---
id: number-question 
title: Number Question
sidebar_label: Number Question
---

O componentă de întrebare cu număr.

## Opțiuni

* __question__ | `(string|node)`: întrebare cu privire la număr. Default: `''`.
* __hintPlacement__ | `string`: plasarea indicilor (fie `top`, `left`, `right`, sau `bottom`). Default: `'top'`.
* __hints__ | `array<(string|node)>`: indicii care oferă îndrumări privind modul de răspuns la întrebare. Default: `[]`.
* __feedback__ | `boolean`: controlează dacă se afișează butoanele de feedback. Default: `true`.
* __solution__ | `(number|array<number>)`: un răspuns numeric la problemă (sau mai multe răspunsuri corecte, dacă se furnizează o matrice). Default: `none`.
* __digits__ | `number`: numărul de cifre pentru care răspunsul furnizat de elev trebuie să corespundă soluției pentru a fi considerat corect. Se setează la 0 pentru a corespunde ca număr întreg. Dacă este setat la null, se va căuta o potrivire exactă.. Default: `3`.
* __max__ | `number`: valoarea de intrare maximă admisă. Default: `null`.
* __min__ | `number`: valoarea de intrare minimă admisă. Default: `null`.
* __defaultValue__ | `number`: valoarea preselectată a numărului de intrare. Default: `none`.
* __provideFeedback__ | `boolean`: indică dacă feedback-ul care include răspunsul corect trebuie afișat după ce cursanții își trimit răspunsurile. Default: `true`.
* __submitAfterFeedback__ | `boolean`: controlează dacă cineva ar trebui să aibă posibilitatea de a retrimite chiar și după ce soluția a fost dezvăluită. Default: `false`.
* __nTries__ | `number`: după câte încercări trebuie să se furnizeze feedback (dacă `provideFeedback` este `true`). Default: `1`.
* __disableSubmitNotification__ | `boolean`: controlează dacă se dezactivează sau nu notificările de trimitere. Default: `false`.
* __chat__ | `boolean`: controlează dacă elementul trebuie să aibă un chat integrat. Default: `false`.
* __until__ | `Date`: timpul până la care studenții ar trebui să fie lăsați să trimită răspunsurile. Default: `none`.
* __points__ | `number`: numărul maxim de puncte acordate în cadrul clasificării. Default: `10`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.
* __onChange__ | `function`: callback care este declanșat după ce se modifică valoarea câmpului de numere; primește valoarea curentă ca unic argument. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback invocat atunci când răspunsul este trimis; are ca prim parametru un `boolean` care indică dacă răspunsul a fost dat corect (dacă este cazul, `null` în caz contrar) și răspunsul furnizat ca al doilea parametru. Default: `onSubmit() {}`.


## Exemple

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Markdown', value: 'markdownStyling' },
        { label: 'With CSS', value: 'withCSS' }
        
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<NumberQuestion
    question="What is the number Pi? (include at least three digits after the decimal point)"
    solution={3.142}
/>
```
</TabItem>

<TabItem value="markdownStyling">

```jsx live
<NumberQuestion
    question={<span>What is the number $\pi$? (include at least _three_ digits after the decimal point)</span>}
    solution={3.142}
/>
```
</TabItem>

<TabItem value="withCSS">

```jsx live
<NumberQuestion
    question={<span style={{ fontSize: 25, color: 'darkorange'}}>What is the number PI - three digits after the period</span>}
    solution={3.142}
/>
```
</TabItem>

</Tabs>
