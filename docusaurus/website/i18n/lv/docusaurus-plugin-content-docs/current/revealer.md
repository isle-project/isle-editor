---
id: revealer 
title: Revealer
sidebar_label: Revealer
---

ISLE komponents, ko pasniedzēji var izmantot, lai klases laikā visiem studentiem selektīvi atklātu vai paslēptu bērnu saturu.

## Iespējas

* __message__ | `(string|node)`: ziņojums, kas tiks parādīts, kad saturs ir paslēpts. Default: `none`.
* __show__ | `boolean`: nosaka, vai sākotnēji tiek rādīti atvasinātie elementi.. Default: `false`.


## Piemēri

```jsx live
<Revealer
        id="mudgelove"
    >
        <div>
            <h3>Content that will be revealed.</h3>
        </div>
</Revealer>
``` 

