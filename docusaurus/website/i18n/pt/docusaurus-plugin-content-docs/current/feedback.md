---
id: feedback 
title: Feedback Buttons
sidebar_label: Feedback Buttons
---

Botões para coletar o feedback do usuário.

## Opções

* __confusedMsg__ | `string`: mensagem a ser exibida na ponta da ferramenta para botão confuso. Default: `none`.
* __feedbackMsg__ | `string`: mensagem a ser exibida na ponta da ferramenta para um botão de feedback detalhado. Default: `none`.
* __understoodMsg__ | `string`: mensagem a ser exibida na ponta da ferramenta para botão compreendido. Default: `none`.
* __customFeedback__ | `boolean`: controla se o componente aceita feedback personalizado. Default: `true`.
* __vertical__ | `boolean`: são exibidos verticalmente se definidos para "verdadeiro". Default: `false`.
* __className__ | `string`: nome da classe. Default: `''`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.


## Exemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Vertical', value: 'Vertical' },
        { label: 'Feedback Everywhere', value: 'feedbackEverywhere' },
        { label: 'Customized Style and Labels', value: 'fullyCustomized' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Panel>
  A panel with user feedback....
  <FeedbackButtons
    id="my_feedback" 
  />
</Panel>
```

</TabItem>

<TabItem value="Vertical">

```jsx live
<Panel>
  Lorem ipsum....
  <FeedbackButtons
    id="my_feedback" 
    vertical
  />
</Panel>
```
</TabItem>

<TabItem value="feedbackEverywhere">

```jsx live
<Panel style={{ width: 680}}>

<VideoPlayer
    url="https://youtu.be/Lkj8b25ppZo"
    controls
/>

  to get some user feedback....
  <FeedbackButtons
    id="my_feedback" 
  />

</Panel>
```
</TabItem>

<TabItem value="fullyCustomized">

```jsx live
<Panel>
  Lorem ipsum....
  <FeedbackButtons
    style={{ boxShadow: '0 0 12px red' }}
    id="my_feedback"  
    feedbackMsg="You can customize the feedback tooltip!"
    understoodMsg="Tell me you got it!" 
    confusedMsg="Click me if your are confused!" 
  />
</Panel>
```
</TabItem>

</Tabs>
