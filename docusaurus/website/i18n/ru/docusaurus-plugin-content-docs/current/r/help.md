---
id: r-help
title: R Help
sidebar_label: R Help
---

Сделайте слова подтягивать R документацию в модальном окне при нажатии.

## Варианты

* __func__ | `string`: название функции `R`, для которой открывается документация. Если он не предоставлен, содержимое тега `RHelp` предполагается равным имени функции. Default: `''`.
* __library__ | `string`: название пакета R, в котором находится функция. Default: `'base'`.
* __visible__ | `boolean`: управляет тем, нужно ли открывать окно модельной справки при запуске. Default: `false`.


## Примеры

```jsx live
<span><RHelp library="graphics">hist</RHelp> is used to create a histogram.</span>
```

