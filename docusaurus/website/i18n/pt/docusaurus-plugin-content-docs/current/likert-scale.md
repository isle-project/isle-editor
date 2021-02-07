---
id: likert-scale
title: Likert Scale
sidebar_label: Likert Scale
---

Um componente que mostra uma pergunta e uma escala de cinco pontos para os estudantes responderem.

## Options

* __question__ | `(string|node)`: pergunta a ser impressa. Default: `''`.
* __options__ | `array`: um conjunto de cinco elementos que seguram as etiquetas para os diferentes níveis de escala. Default: `none`.
* __noMultipleResponses__ | `boolean`: não permitir múltiplas apresentações de um único estudante. Default: `false`.
* __disableSubmitNotification__ | `boolean`: controla se as notificações de submissão devem ser desativadas. Default: `false`.
* __className__ | `string`: nome da classe. Default: `''`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.


## Examples

```jsx live
<LikertScale 
    id="discrimination" 
    question="After your initial analysis of the data, how likely do you think it is that players are discriminated against by soccer referees because of their skin tone?" 
    options={[ 'Very unlikely', 'Unlikely', 'Neither unlikely nor likely', 'Likely', 'Very Likely']} 
/>
```

