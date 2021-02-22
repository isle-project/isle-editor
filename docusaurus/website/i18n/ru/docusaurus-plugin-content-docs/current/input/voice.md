---
id: voice-input
title: Voice Input
sidebar_label: Voice Input
---

Компонент голосового ввода.

## Варианты

* __autorecord__ | `boolean`: управляет автоматическим запуском записи. Default: `false`.
* __defaultValue__ | `string`: текстовое значение по умолчанию. Default: `''`.
* __grammars__ | `array`: грамматический список речи (не поддерживается). Default: `[]`.
* __legend__ | `(string|node)`: легенда, отображаемая перед полем ввода. Default: `''`.
* __mode__ | `string`: установить `полный` для отображения поля ввода текста рядом с микрофоном, `статус` для отображения только строки состояния с транскрибированными текстами, `микрофон` для отображения только кнопки для переключения записи, или `нет`, когда голосовой ввод должен быть невидимым и чисто управляется с помощью горячих клавиш / голосовые команды. Default: `'full'`.
* __maxAlternatives__ | `number`: максимальное количество предоставленных альтернатив на результат распознавания речи. Default: `1`.
* __onChange__ | `function`: функция обратного вызова, вызываемая при обновлении текстового входного значения. Default: `onChange() {}`.
* __onClick__ | `function`: функция обратного вызова вызывается при нажатии кнопки микрофона. Default: `onClick() {}`.
* __onFinalText__ | `function`: функция обратного вызова, вызываемая после получения финального текста. Default: `onFinalText() {}`.
* __onRecordingStart__ | `function`: функция обратного вызова, вызываемая при запуске записи. Default: `onRecordingStart() {}`.
* __onRecordingStop__ | `function`: функция обратного вызова, вызываемая после остановки записи. Default: `onRecordingStop() {}`.
* __onSegment__ | `function`: функция обратного вызова, вызываемая текстовыми сегментами. Default: `onSegment() {}`.
* __onSubmit__ | `function`: функция обратного вызова при отправке значения для ввода текста путем нажатия кнопки "Enter".. Default: `onSubmit() {}`.
* __placeholder__ | `string`: вкладка ввода текста. Default: `none`.
* __remote__ | `object`: объект с `стартом`, `стопом`, и `кнопкой` и соответствующими горячими клавишами.. Default: `none`.
* __className__ | `string`: название класса. Default: `''`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.
* __timeout__ | `number`: количество миллисекунд, по истечении которых для таймаута записи. Default: `none`.
* __stopTooltip__ | `string`: подсказочное сообщение, отображаемое во время записи. Default: `none`.
* __startTooltip__ | `string`: сообщение во всплывающей подсказке, отображаемое во время отсутствия записи. Default: `none`.
* __tooltipPlacement__ | `string`: направление всплывающей подсказки. Default: `'left'`.
* __width__ | `number`: ширина голосового ввода (в px). Default: `500`.
* __height__ | `number`: высота голосового ввода (в px). Default: `36`.


## Примеры

```jsx live
<VoiceInput
    langage="en-US"
    defaultValue="Enter text"
/>
```



