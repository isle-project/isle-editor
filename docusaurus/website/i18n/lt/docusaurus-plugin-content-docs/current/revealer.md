---
id: revealer 
title: Revealer
sidebar_label: Revealer
---

ISLE komponentas, kurį dėstytojai gali naudoti, kad per pamoką visiems mokiniams pasirinktinai atskleistų arba paslėptų vaikų turinį.

## Parinktys

* __message__ | `(string|node)`: pranešimas, kuris bus rodomas, kai turinys paslėptas.. Default: `none`.
* __show__ | `boolean`: kontroliuoja, ar iš pradžių rodyti antrinius elementus.. Default: `false`.


## Pavyzdžiai

```jsx live
<Revealer
        id="mudgelove"
    >
        <div>
            <h3>Content that will be revealed.</h3>
        </div>
</Revealer>
``` 

