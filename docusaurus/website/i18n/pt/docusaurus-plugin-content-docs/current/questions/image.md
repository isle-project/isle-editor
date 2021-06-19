---
id: image-question 
title: Image Question
sidebar_label: Image Question
---

Uma pergunta que pede ao usuário para carregar uma imagem.

## Opções

* __question__ | `(string|node)`: texto para a pergunta. Default: `''`.
* __hintPlacement__ | `string`: colocação das dicas (ou `top`, `left`, `right`, ou `bottom`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: dicas que orientam como responder à pergunta. Default: `[]`.
* __feedback__ | `boolean`: controla se devem ser exibidos botões de feedback. Default: `true`.
* __chat__ | `boolean`: controla se o elemento deve ter um bate-papo integrado. Default: `false`.
* __disableSubmitNotification__ | `boolean`: controla se uma notificação deve ser exibida após o envio de uma imagem. Default: `false`.
* __className__ | `string`: nome da classe. Default: `''`.
* __sketchpad__ | `object`: propriedades a serem passadas para <Pade-esboço /> componente; para renderizar o pade-esboço, passe pelo menos um objeto vazio `{}``. Default: `none`.
* __solution__ | `string`: URL da imagem da solução do modelo. Default: `none`.
* __until__ | `Date`: tempo até que os estudantes tenham permissão para enviar respostas. Default: `none`.
* __points__ | `number`: número máximo de pontos concedidos na classificação. Default: `10`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.
* __onSubmit__ | `function`: chamada de retorno invocada quando a resposta é apresentada; tem como único parâmetro um "booleano" indicando se os elementos foram colocados na ordem correta. Default: `onSubmit() {}`.


## Exemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Sketchpad', value: 'witchSketchpad' },
        { label: 'Submit Plot', value: 'submitPlot' },
        { label: 'Solution', value: 'solution' },,
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<ImageQuestion question="You may upload an image." feedback={false}  />
```
</TabItem>

<TabItem value="witchSketchpad">

```jsx live
<ImageQuestion question="Please enter your signature." feedback={false} sketchpad={{ canvasHeight: 300}} />
```

</TabItem>

<TabItem value="submitPlot">

```jsx live
<div>
  <ScatterPlot  data={heartdisease} xval="Age" yval="Cost" />
  <ImageQuestion question="Please adjust the range of values to show, change the axis labels and title of the plot, and submit your result." />
</div>
```
</TabItem>

<TabItem value="solution">

```jsx live
<ImageQuestion solution="https://bit.ly/3utaXOb" question="Please enter the Greek letter 'Gamma'." feedback={false} sketchpad={{ canvasHeight: 300}} />
```
</TabItem>

</Tabs>
