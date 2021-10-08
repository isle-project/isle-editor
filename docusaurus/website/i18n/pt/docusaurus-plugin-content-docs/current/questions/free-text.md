---
id: free-text-question 
title: Free Text Question
sidebar_label: Free Text Question
---

Um componente ISLE para perguntas onde as respostas dos estudantes devem ser fornecidas na forma de texto livre.

## Opções

* __question__ | `(string|node)`: a pergunta exibida na parte superior do componente de pergunta de texto livre. Default: `''`.
* __hints__ | `array<(string|node)>`: dicas que orientam como responder à pergunta. Default: `[]`.
* __hintPlacement__ | `string`: colocação das dicas (ou `top`, `left`, `right`, ou `bottom`). Default: `'top'`.
* __feedback__ | `boolean`: controla se devem ser exibidos botões de feedback. Default: `true`.
* __solution__ | `(string|node)`: uma resposta modelo para o problema. Default: `''`.
* __instantSolution__ | `boolean`: se é possível alternar a exibição da resposta do modelo imediatamente. Default: `false`.
* __rows__ | `number`: número de linhas do campo de texto para os estudantes digitarem suas respostas. Default: `5`.
* __chat__ | `boolean`: controla se o bate-papo em grupo deve ser ativado para a pergunta. Default: `false`.
* __resizable__ | `boolean`: controla se a área de texto deve ser redimensionável. Default: `false`.
* __placeholder__ | `string`: texto de espaço reservado exibido antes do usuário ter inserido qualquer texto. Default: `''`.
* __disableSubmitNotification__ | `boolean`: controla se as notificações de submissão devem ser desativadas. Default: `false`.
* __submissionMsg__ | `string`: notificação exibida quando o aprendiz apresenta sua resposta pela primeira vez. Default: `''`.
* __resubmissionMsg__ | `string`: notificação exibida para todos os envios após o primeiro. Default: `'You have successfully re-submitted your answer.'`.
* __provideFeedback__ | `boolean`: indica se o feedback, incluindo a resposta correta, deve ser exibido depois que os alunos enviarem suas respostas. Default: `true`.
* __maxlength__ | `number`: número máximo permitido de caracteres. Default: `2500`.
* __until__ | `Date`: tempo até que os estudantes tenham permissão para enviar respostas. Default: `none`.
* __points__ | `number`: número máximo de pontos concedidos na classificação. Default: `10`.
* __className__ | `string`: nome da classe. Default: `''`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.
* __onChange__ | `function`: chamada de retorno invocada sempre que o valor da área de texto muda; recebe o texto atual como seu único argumento. Default: `onChange() {}`.
* __onSubmit__ | `function`: chamada de retorno invocada quando o usuário submete uma resposta; recebe o texto submetido como seu único argumento. Default: `onSubmit() {}`.


## Exemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Points for Grading', value: 'withPointsForGrading' },
        { label: 'No Feedback', value: 'withoutFeedbackAndNotification' },
        { label: 'Solution', value: 'withSolution' },
        { label: 'Hints', value: 'withHints' },
        { label: 'Placeholder', value: 'placeholderText' },
        { label: 'Due Date', value: 'dueDate' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<FreeTextQuestion 
    question="Please tell us your thoughts about this course." 
    rows={3} 
/>
```
</TabItem>

<TabItem value="withPointsForGrading" >

```jsx live
<FreeTextQuestion 
    question={<span>Can you please explain Montesquieu's System of *separation of powers*?</span>} 
    rows={3} 
    points={15}
/>
```

</TabItem>

<TabItem value="withoutFeedbackAndNotification" >

```jsx live
<FreeTextQuestion 
    question="Please tell us your thoughts about this course." 
    rows={3}
    disableSubmitNotification 
    feedback={false}
/>
```

</TabItem>

<TabItem value="withSolution" > 

```jsx live
<FreeTextQuestion 
    question="Who was the English prime minister who spoke of 'blood, sweat and tears'?" 
    rows={1} 
    solution="Winston Churchill" 
/>
```

</TabItem>

<TabItem value="withHints" >

```jsx live
<FreeTextQuestion 
    question="Who was the English prime minister who spoke of 'blood, sweat and tears'?" 
    rows={1} 
    solution="Winston Churchill" 
    hints = {["No, it was not Margret Thatcher", "He believed in Aliens by the way", "His first name was Winston - like the guy in 1984"]}
    submissionMsg = "His name was Winston churchill, and it occurred in a speech given by him to the House of Commons of the Parliament of the United Kingdom on 13 May 1940. The speech is sometimes known by that name"
/>
```

</TabItem>

<TabItem value="placeholderText" >

```jsx live
<FreeTextQuestion 
    question="Who was the English prime minister who spoke of 'blood, sweat and tears'?" 
    rows={3} 
    solution="Winston Churchill" 
    placeholder="Think of an overweight politician with a big cigar in his mouth."
/>
```

</TabItem>

<TabItem value="dueDate" >

```jsx live
<FreeTextQuestion 
    question="Please tell us your thoughts about this course." 
    rows={3} 
    until={new Date( Date.UTC(2029, 0, 1, 3, 33 ) )}
    placeholder="You can set a date until answers are accepted. In this case it is 2020, 1st of January, 3:30 am UTC time."
/>
```

</TabItem>

</Tabs>
