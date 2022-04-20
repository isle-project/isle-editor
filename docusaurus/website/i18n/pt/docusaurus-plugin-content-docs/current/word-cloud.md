---
id: word-cloud 
title: Word Cloud
sidebar_label: Word Cloud
---

Um componente de nuvem de palavras construído em cima de [d3-cloud](https://github.com/jasondavies/d3-cloud).

## Opções

* __data__ | `array`: ou um conjunto de textos a partir dos quais se pode gerar a palavra nuvem ou, se `precalculado' está definido para `verdadeiro', e um conjunto de objetos de contagem de palavras (com teclas de `texto' e `valor'). Default: `[]`.
* __font__ | `(string|function)`: função acessor especificando a face da fonte para cada palavra. Também aceita uma constante ao invés de uma função. Default: `'serif'`.
* __fontSizeMapper__ | `function`: undefined. Default: `none`.
* __height__ | `number`: altura da palavra nuvem (em px). Default: `600`.
* __language__ | `string`: identificador do idioma (determina as palavras de parada a serem removidas). Default: `'en'`.
* __minCount__ | `number`: se definido, incluir apenas palavras que apareçam mais do que "minCount" vezes nos dados fornecidos. Default: `none`.
* __saveButton__ | `boolean`: controla se deve ser exibido um botão para salvar a palavra nuvem como uma imagem. Default: `true`.
* __onClick__ | `function`: função de chamada de retorno invocada quando uma palavra é clicada na nuvem da palavra. Default: `onClick() {}`.
* __padding__ | `(function|number)`: função acessor ou constante indicando o preenchimento numérico de cada palavra. Default: `5`.
* __precalculated__ | `boolean`: controla se a palavra nuvem espera uma série de palavras pré-calculadas conta ou as gerará para determinados textos. Default: `false`.
* __rotate__ | `(function|number)`: função acessor indicando o ângulo de rotação (em graus) para cada palavra. Também aceita uma constante ao invés de uma função. Default: `word => word.value % 360`.
* __updateThreshold__ | `number`: tamanho do lote de novos documentos em `dados` antes que a palavra nuvem seja reenviada. Default: `5`.
* __stopwords__ | `array`: palavras de parada adicionais para remover antes de tornar a palavra nuvem. Default: `[]`.
* __triggerRender__ | `boolean`: quando o conjunto de dados é trocado. Default: `true`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.
* __width__ | `number`: largura da palavra nuvem (em px). Default: `700`.


## Exemplos

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
