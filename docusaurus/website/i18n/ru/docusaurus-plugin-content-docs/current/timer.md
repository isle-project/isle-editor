---
id: timer 
title: Timer
sidebar_label: Timer
---

Отображает таймер, который будет запускать предопределенный обратный вызов по истечении времени. Пример использования - время проведения викторины.

## Options

* __id__ | `string`: уникальный идентификатор "струны" для таймера. Если ID установлен, компонент таймера постоянно обновляется при обновлении страницы.. Default: `none`.
* __active__ | `boolean (required)`: флаг, который можно переключить на запуск или паузу таймера.. Default: `none`.
* __belowZero__ | `boolean`: контролирует, продолжает ли таймер отсчёт после истечения срока действия. Default: `false`.
* __duration__ | `number (required)`: продолжительность в секундах для таймера. Default: `none`.
* __invisible__ | `boolean`: контролирует, должен ли таймер быть скрыт. Default: `false`.
* __legend__ | `string`: текст, отображаемый перед таймером. Default: `''`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.
* __onTimeUp__ | `function`: обратный вызов, когда таймер заканчивается.. Default: `onTimeUp() {}`.


## Examples

```jsx live
<Timer 
    id='test-quiz'
    active={true} 
    duration={50} 
    onTimeUp={() => {
      alert( 'done' );
    }}
/>
```

