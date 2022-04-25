---
id: word-cloud 
title: Word Cloud
sidebar_label: Word Cloud
---

Un componente de nube de palabras construido sobre [d3-cloud](https://github.com/jasondavies/d3-cloud).

## Opciones

* __data__ | `array`: o bien una matriz de textos a partir de los cuales generar la nube de palabras o, si "precalculado" se establece como "verdadero", y una matriz de objetos de conteo de palabras (con claves de "texto" y "valor"). Default: `[]`.
* __font__ | `(string|function)`: función de acceso especificando la fuente de cada palabra. También acepta una constante en lugar de una función. Default: `'serif'`.
* __fontSizeMapper__ | `function`: undefined. Default: `none`.
* __height__ | `number`: altura de la nube de la palabra (en px). Default: `600`.
* __language__ | `string`: identificador de idioma (determina las palabras de parada que se deben eliminar). Default: `'en'`.
* __minCount__ | `number`: si se establece, sólo incluye las palabras que aparecen más de "minCount" veces en los datos dados. Default: `none`.
* __saveButton__ | `boolean`: controla si mostrar un botón para guardar la nube de palabras como una imagen. Default: `true`.
* __onClick__ | `function`: La función de devolución de llamada que se invoca cuando se hace clic en una palabra de la nube de palabras. Default: `onClick() {}`.
* __padding__ | `(function|number)`: función accesoria o constante que indica el relleno numérico de cada palabra. Default: `5`.
* __precalculated__ | `boolean`: controla si la nube de palabras espera un conjunto de recuentos de palabras precalculados o los generará para determinados textos. Default: `false`.
* __rotate__ | `(function|number)`: función accesoria que indica el ángulo de rotación (en grados) para cada palabra. También acepta una constante en lugar de una función. Default: `word => word.value % 360`.
* __updateThreshold__ | `number`: el tamaño del lote de nuevos documentos en "datos" antes de que la nube de palabras sea reproducida. Default: `5`.
* __stopwords__ | `array`: ...palabras clave adicionales para remover antes de hacer la nube de palabras. Default: `[]`.
* __triggerRender__ | `boolean`: retransmisión cuando se intercambie el conjunto de datos. Default: `true`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.
* __width__ | `number`: ancho de la palabra nube (en px). Default: `700`.


## Ejemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'With Stopwords', value: 'withStopwords' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<WordCloud data={[
  'This is my holiday', 
  'Breakfast is great', 
  'My house is my castle', 
  'A castle for a kingdom', 
  'I am longing for breakfast',
  'Having rolls for breakfast is a must',
  'A horse for a kingdom',
  'Mom like rolls',
  'Orange juice is fine',
  'Where is the butter',
  'I am looking for a spoon',
  'Coffee for coffee drinkers',
  'Tea for the sleepy ones',
  'The sleepy, sloppy, crazy King lives in a castle',
  'A house for everybody'
]} />
```
</TabItem>

<TabItem value="withStyle">

```jsx live
<WordCloud 
  style={{ boxShadow: '10px 0 25px black' }}
  rotate={-7}
  data={[
    'This is my castle', 
    'Breakfast is great', 
    'My house is my castle', 
    'A castle for a kingdom', 
    'I am longing for breakfast',
    'Having rolls for breakfast is a must',
    'A horse for a kingdom',
    'Mom like rolls',
    'Orange juice is a castle drink',
    'Where is the butter',
    'I am looking for a castle',
    'Coffee for coffee drinkers',
    'Tea for the sleepy ones',
    'The sleepy, sloppy, crazy King lives in a castle',
    'A holiday for everybody'
]} />
```
</TabItem>

<TabItem value="withStopwords">

```jsx live
<WordCloud 
  stopwords={[ 'castle', 'crap', 'damn' ]}
  data={[
    'This is my holiday', 
    'Breakfast is great', 
    'My house is my castle', 
    'A castle for a kingdom', 
    'I am longing for breakfast',
    'Having rolls for breakfast is a must',
    'A horse for a kingdom',
    'Mom like rolls',
    'Orange juice is fine',
    'Where is the butter',
    'I am looking for a spoon',
    'Coffee for coffee drinkers',
    'Tea for the sleepy ones',
    'The sleepy, sloppy, crazy King lives in a castle',
    'A house for everybody',
    'castle castle castle castle castle castle castle castle castle castle',
    'crap crap crap crap crap crap crap damn damn damn dam'
]} />
```

</TabItem>

</Tabs>
