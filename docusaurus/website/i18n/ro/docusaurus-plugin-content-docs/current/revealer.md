---
id: revealer 
title: Revealer
sidebar_label: Revealer
---

O componentă ISLE pe care instructorii o pot utiliza pentru a dezvălui sau a ascunde în mod selectiv conținutul copiilor pentru toți elevii în timpul orei.

## Opțiuni

* __message__ | `(string|node)`: mesajul care trebuie afișat atunci când conținutul este ascuns. Default: `none`.
* __show__ | `boolean`: controlează dacă se afișează inițial elementele copil. Default: `false`.


## Exemple

```jsx live
<Revealer
        id="mudgelove"
    >
        <div>
            <h3>Content that will be revealed.</h3>
        </div>
</Revealer>
``` 

