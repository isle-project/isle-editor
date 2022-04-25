---
id: quiz 
title: Quiz
sidebar_label: Quiz
---

Un componente de prueba que muestra una secuencia de componentes de la pregunta.

## Opciones

* __confidence__ | `boolean`: si mostrar una escala de Likert pidiendo la confianza de la respuesta del usuario. Default: `false`.
* __forceConfidence__ | `boolean`: controla si un usuario tiene que proporcionar un nivel de confianza antes de pasar a la siguiente pregunta. Default: `false`.
* __count__ | `number`: número de preguntas a incluir en el cuestionario. Default: `none`.
* __questions__ | `array (required)`: una serie de preguntas de las cuales se seleccionarán al azar. Default: `none`.
* __active__ | `boolean`: controla si el temporizador del concurso está activo. Default: `true`.
* __duration__ | `number`: duración del examen (en minutos); una vez que se acabe el tiempo, se mostrará la página de resumen. Default: `none`.
* __skippable__ | `boolean`: controla si las preguntas del cuestionario se pueden saltar. Default: `true`.
* __footerNodes__ | `array`: una serie de nodos que se mostrarán en el pie de cada pregunta. Default: `[]`.
* __nextLabel__ | `string`: etiqueta del botón para avanzar a la siguiente pregunta. Default: `none`.
* __provideFeedback__ | `boolean`: controla si mostrar a los estudiantes la información sobre la corrección de sus respuestas después de completar el cuestionario. Default: `true`.
* __showFinishButton__ | `boolean`: controla si se muestra el botón para terminar la prueba y saltar directamente a la página de resultados. Default: `false`.
* __finishLabel__ | `string`: etiqueta del botón para terminar el examen. Default: `none`.
* __downloadButton__ | `boolean`: controla si se muestra un botón para descargar las respuestas. Default: `true`.
* __repeatable__ | `boolean`: controla si el cuestionario se puede repetir. Default: `false`.
* __onFinished__ | `function`: Se devuelve la llamada cuando se termina el cuestionario y se muestra la página de resultados. Default: `onFinished() {}`.
* __onSubmit__ | `function`: La devolución de llamada invocada cuando el usuario presenta una respuesta. Default: `onSubmit() {}`.


## Ejemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Subset of Questions', value: 'subset' },
        { label: 'Not Skippable', value: 'notSkippable' },
        { label: 'Confidence Check', value: 'confidenceCheck' },,
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Quiz
    questions={[
        <FreeTextQuestion 
            question="What is the capital of France?" 
            rows={1} 
            solution="Paris" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Poland?" 
            rows={1} 
            solution="Warsaw" 
        />
    ]}
/>
```
</TabItem>

<TabItem value="subset">

```jsx live
<Quiz
    count={3}
    questions={[
        <FreeTextQuestion 
            question="What is the capital of France?" 
            rows={1} 
            solution="Paris" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Poland?" 
            rows={1} 
            solution="Warsaw" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Portugal?" 
            rows={1} 
            solution="Lisbon" 
        />,     
        <FreeTextQuestion 
            question="What is the capital of Egypt?" 
            rows={1} 
            solution="Cairo" 
        />
    ]}
/>
```
</TabItem>

<TabItem value="notSkippable" >

```jsx live
<Quiz
    skippable={false}
    questions={[
        <FreeTextQuestion 
            question="What is the capital of France?" 
            rows={1} 
            solution="Paris" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Poland?" 
            rows={1} 
            solution="Warsaw" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Portugal?" 
            rows={1} 
            solution="Lisbon" 
        />,     
        <FreeTextQuestion 
            question="What is the capital of Egypt?" 
            rows={1} 
            solution="Cairo" 
        />
    ]}
/>
```
</TabItem>

<TabItem value="confidenceCheck">

```jsx live
<Quiz
    confidence
    forceConfidence
    count={4}
    questions={[
        <FreeTextQuestion 
            question="What is the capital of France?" 
            rows={1} 
            solution="Paris" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Poland?" 
            rows={1} 
            solution="Warsaw" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Portugal?" 
            rows={1} 
            solution="Lisbon" 
        />,     
        <FreeTextQuestion 
            question="What is the capital of Egypt?" 
            rows={1} 
            solution="Cairo" 
        />
    ]}
/>
```
</TabItem>

</Tabs>
