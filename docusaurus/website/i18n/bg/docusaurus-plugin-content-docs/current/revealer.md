---
id: revealer 
title: Revealer
sidebar_label: Revealer
---

Компонент на ISLE, който преподавателите могат да използват за селективно разкриване или скриване на съдържанието на децата за всички ученици по време на урока.

## Опции

* __message__ | `(string|node)`: съобщение, което да се показва, когато съдържанието е скрито. Default: `none`.
* __show__ | `boolean`: контролира дали първоначално да се показват подчинените елементи. Default: `false`.


## Примери

```jsx live
<Revealer
        id="mudgelove"
    >
        <div>
            <h3>Content that will be revealed.</h3>
        </div>
</Revealer>
``` 

