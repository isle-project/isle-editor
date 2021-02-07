---
id: revealer 
title: Revealer
sidebar_label: Revealer
---

Element ISLE, którego instruktorzy mogą używać do selektywnego ujawniania lub ukrywania treści dla dzieci wszystkim uczniom podczas lekcji.

## Options

* __message__ | `(string|node)`: komunikat, który ma być wyświetlany, gdy zawartość jest ukryta. Default: `none`.
* __show__ | `boolean`: kontroluje, czy początkowo mają być wyświetlane elementy dziecięce. Default: `false`.


## Examples

```jsx live
<Revealer
        id="mudgelove"
    >
        <div>
            <h3>Content that will be revealed.</h3>
        </div>
</Revealer>
``` 

