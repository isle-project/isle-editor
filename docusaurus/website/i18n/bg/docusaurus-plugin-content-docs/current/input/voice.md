---
id: voice-input
title: Voice Input
sidebar_label: Voice Input
---

Компонент за гласово въвеждане.

## Опции

* __autorecord__ | `boolean`: контролира дали да се стартира автоматично запис. Default: `false`.
* __defaultValue__ | `string`: стойност на текста по подразбиране. Default: `''`.
* __grammars__ | `array`: списък с граматики на речта (неподдържан). Default: `[]`.
* __legend__ | `(string|node)`: легенда, показана пред полето за въвеждане. Default: `''`.
* __mode__ | `string`: задайте `full`, за да се покаже поле за въвеждане на текст заедно с микрофона, `status`, за да се покаже само лентата на състоянието с транскрибираните текстове, `microphone`, за да се покаже само бутон за превключване на записа, или `none`, когато гласовото въвеждане трябва да бъде невидимо и да се управлява единствено чрез клавишни комбинации / гласови команди.. Default: `'full'`.
* __maxAlternatives__ | `number`: максимален брой алтернативи, предоставени за резултат от разпознаване на реч. Default: `1`.
* __onChange__ | `function`: функция за обратна връзка, задействана при актуализиране на стойността на текстовия вход. Default: `onChange() {}`.
* __onClick__ | `function`: функция за обратно извикване, задействана при щракване върху бутона за микрофон. Default: `onClick() {}`.
* __onFinalText__ | `function`: функция за обратна връзка, задействана след получаване на окончателния текст. Default: `onFinalText() {}`.
* __onRecordingStart__ | `function`: функция за обратна връзка, задействана при стартиране на записа. Default: `onRecordingStart() {}`.
* __onRecordingStop__ | `function`: функция за обратна връзка, извикана след спиране на записа. Default: `onRecordingStop() {}`.
* __onSegment__ | `function`: функция за обратна връзка, извикана с текстови сегменти. Default: `onSegment() {}`.
* __onSubmit__ | `function`: функция за обратно извикване при подаване на стойност за въвеждане на текст чрез натискане на бутона "Enter". Default: `onSubmit() {}`.
* __placeholder__ | `string`: заместител за въвеждане на текст. Default: `none`.
* __remote__ | `object`: обект с `старт`, `стоп` и `превключване` и свързаните с тях клавишни комбинации. Default: `none`.
* __className__ | `string`: име на класа. Default: `''`.
* __style__ | `object`: CSS инлайн стилове. Default: `{}`.
* __timeout__ | `number`: брой милисекунди, след които записът да се прекъсне. Default: `none`.
* __stopTooltip__ | `string`: съобщение с подсказка, показвано по време на запис. Default: `none`.
* __startTooltip__ | `string`: Съобщение с подсказка се показва, докато не се записва. Default: `none`.
* __tooltipPlacement__ | `string`: посока на подсказката. Default: `'left'`.
* __width__ | `number`: ширина на гласовия вход (в px). Default: `500`.
* __height__ | `number`: височина на гласовия вход (в px). Default: `36`.


## Примери

```jsx live
<VoiceInput
    langage="en-US"
    defaultValue="Enter text"
/>
```



