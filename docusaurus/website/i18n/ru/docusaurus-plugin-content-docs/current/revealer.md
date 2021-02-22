---
id: revealer 
title: Revealer
sidebar_label: Revealer
---

ISLE-компонент, который преподаватели могут использовать для выборочного раскрытия или сокрытия информации о детях всем учащимся во время урока.

## Варианты

* __message__ | `(string|node)`: сообщение, которое будет отображаться, когда содержимое будет скрыто.. Default: `none`.
* __show__ | `boolean`: контролирует, следует ли изначально отображать дочерние элементы. Default: `false`.


## Примеры

```jsx live
<Revealer
        id="mudgelove"
    >
        <div>
            <h3>Content that will be revealed.</h3>
        </div>
</Revealer>
``` 

