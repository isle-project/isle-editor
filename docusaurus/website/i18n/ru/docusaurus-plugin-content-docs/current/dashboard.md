--- 
id: dashboard 
title: Dashboard
sidebar_label: Dashboard 
---

Приборная панель для объединения работы с несколькими полями ввода дочерних элементов.

## Options

* __autoStart__ | `boolean`: если установлено значение `true`, то функция `onGenerate` выполняется при запуске с входными значениями по умолчанию. Default: `true`.
* __autoUpdate__ | `boolean`: управляет тем, должна ли функция `onGenerate` вызываться автоматически при изменении одного из полей дочернего входа. Default: `false`.
* __description__ | `string`: описание приборной панели. Default: `''`.
* __disabled__ | `boolean`: контролирует, должна ли приборная панель быть отключена. Default: `false`.
* __label__ | `string`: наклейка на кнопку. Default: `none`.
* __maxWidth__ | `number`: максимальная ширина приборной панели. Default: `600`.
* __className__ | `string`: название класса. Default: `''`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.
* __onGenerate__ | `function`: вызывается при нажатии кнопки или при изменении одного из входных значений приборной панели (если для `autoUpdate` выбрано `true`). Функция вызывается со значениями полей ввода в том порядке, в котором они размещены в приборной панели. Default: `onGenerate() {}`.
* __title__ | `(string|node)`: название карточки. Default: `''`.


## Examples

```jsx live
<Dashboard title="Alerter" onGenerate={(x)=>{ alert(x) }}>
    <SliderInput
        legend="Input value"
    />
</Dashboard>
```

