---
id: revealer 
title: Revealer
sidebar_label: Revealer
---

En ISLE-komponent, som underviserne kan bruge til at vise eller skjule børns indhold for alle eleverne under undervisningen.

## Indstillinger

* __message__ | `(string|node)`: meddelelse, der skal vises, når indholdet er skjult. Default: `none`.
* __show__ | `boolean`: styrer, om der skal vises underordnede elementer til at begynde med. Default: `false`.


## Eksempler

```jsx live
<Revealer
        id="mudgelove"
    >
        <div>
            <h3>Content that will be revealed.</h3>
        </div>
</Revealer>
``` 

