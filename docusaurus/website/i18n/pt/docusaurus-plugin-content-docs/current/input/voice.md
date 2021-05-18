---
id: voice-input
title: Voice Input
sidebar_label: Voice Input
---

Um componente de entrada de voz.

## Opções

* __autorecord__ | `boolean`: controla se a gravação deve ser iniciada automaticamente. Default: `false`.
* __defaultValue__ | `string`: valor do texto padrão. Default: `''`.
* __grammars__ | `array`: lista de gramática de fala (sem suporte). Default: `[]`.
* __legend__ | `(string|node)`: legenda exibida na frente do campo de entrada. Default: `''`.
* __mode__ | `string`: definir como "cheio" para exibir um campo de entrada de texto ao lado do microfone, "status" para exibir apenas uma barra de status com os textos transcritos, "microfone" para exibir apenas um botão para alternar a gravação, ou "ninguém" quando a entrada de voz deve ser invisível e controlada puramente através de teclas de atalho / comandos de voz. Default: `'full'`.
* __maxAlternatives__ | `number`: número máximo de alternativas oferecidas por resultado de reconhecimento de fala. Default: `1`.
* __onChange__ | `function`: função de chamada de retorno invocada quando o valor de entrada de texto é atualizado. Default: `onChange() {}`.
* __onClick__ | `function`: função de chamada de retorno invocada ao clicar no botão do microfone. Default: `onClick() {}`.
* __onFinalText__ | `function`: função de chamada de retorno invocada uma vez que o texto final é recebido. Default: `onFinalText() {}`.
* __onRecordingStart__ | `function`: função de chamada de retorno invocada quando a gravação é iniciada. Default: `onRecordingStart() {}`.
* __onRecordingStop__ | `function`: função de chamada de retorno invocada quando a gravação é interrompida. Default: `onRecordingStop() {}`.
* __onSegment__ | `function`: função de chamada de retorno invocada com segmentos de texto. Default: `onSegment() {}`.
* __onSubmit__ | `function`: função chamada de retorno ao enviar o valor de entrada de texto pressionando "Enter". Default: `onSubmit() {}`.
* __placeholder__ | `string`: espaço reservado para entrada de texto. Default: `none`.
* __remote__ | `object`: objeto com "start", "stop", e "toggle" e teclas de atalho associadas. Default: `none`.
* __className__ | `string`: nome da classe. Default: `''`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.
* __timeout__ | `number`: número de milissegundos após os quais a gravação. Default: `none`.
* __stopTooltip__ | `string`: mensagem de dica de ferramenta exibida durante a gravação. Default: `none`.
* __startTooltip__ | `string`: mensagem de dica de ferramenta exibida sem gravação. Default: `none`.
* __tooltipPlacement__ | `string`: direção da ponta da ferramenta. Default: `'left'`.
* __width__ | `number`: largura de entrada de voz (em px). Default: `500`.
* __height__ | `number`: altura de entrada de voz (em px). Default: `36`.


## Exemplos

```jsx live
<VoiceInput
    langage="en-US"
    defaultValue="Enter text"
/>
```



