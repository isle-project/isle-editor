---
id: feedback 
title: Feedback Buttons
sidebar_label: Feedback Buttons
---

Botones para recoger la información de los usuarios.

## Options

* __confusedMsg__ | `string`: mensaje que se mostrará en el tooltip para el botón de confusión. Default: `none`.
* __feedbackMsg__ | `string`: mensaje que se mostrará en el tooltip para el botón de retroalimentación detallada. Default: `none`.
* __understoodMsg__ | `string`: mensaje que se mostrará en el tooltip para el botón de comprensión. Default: `none`.
* __customFeedback__ | `boolean`: controla si el componente acepta retroalimentación personalizada. Default: `true`.
* __vertical__ | `boolean`: se muestran verticalmente si se ajustan a "verdadero".. Default: `false`.
* __className__ | `string`: nombre de la clase. Default: `''`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.


## Examples

```jsx live
<Panel>
  Lorem ipsum....
  <FeedbackButtons
    id="my_feedback" 
  />
</Panel>
```

