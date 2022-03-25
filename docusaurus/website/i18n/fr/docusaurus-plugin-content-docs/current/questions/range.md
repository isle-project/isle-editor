---
id: range-question
title: Range Question
sidebar_label: Range Question
---

Un élément de question de gamme qui demande aux élèves de fournir un point d'extrémité inférieur et supérieur.

## Options

* __question__ | `(string|node)`: question affichée. Default: `''`.
* __solution__ | `array<number>`: tableau à deux éléments contenant les points terminaux de la plage correcte. Default: `none`.
* __hintPlacement__ | `string`: l'emplacement des indices (soit `top`, `left`, `right` ou `bottom`). Default: `'top'`.
* __hints__ | `array<(string|node)>`: des conseils sur la façon de répondre à la question. Default: `[]`.
* __labels__ | `array`: un ensemble à deux éléments d'étiquettes personnalisées autres que `bottom` et "Haut de page. Default: `none`.
* __feedback__ | `boolean`: contrôle l'affichage des boutons de rétroaction. Default: `true`.
* __chat__ | `boolean`: contrôle si l'élément doit avoir un chat intégré. Default: `false`.
* __digits__ | `number`: nombre de chiffres qui doivent correspondre entre la solution et la réponse fournie par l'utilisateur. S'il n'est pas donné ou s'il est fixé à zéro, le composant vérifie la stricte égalité. S'il est défini à 0, il vérifie l'égalité des nombres entiers. Default: `3`.
* __max__ | `number`: valeur maximale d'entrée. Default: `null`.
* __min__ | `number`: valeur d'entrée minimale. Default: `null`.
* __provideFeedback__ | `boolean`: indique si un retour d'information comprenant la bonne réponse doit être affiché après que les apprenants aient soumis leurs réponses. Default: `true`.
* __allowMultipleAnswers__ | `boolean`: contrôle si l'on peut soumettre des réponses multiples. Default: `false`.
* __until__ | `Date`: le temps nécessaire pour permettre aux étudiants de soumettre des réponses. Default: `none`.
* __points__ | `number`: nombre maximum de points attribués dans le classement. Default: `10`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.
* __onChangeLower__ | `function`: rappel déclenché après la modification de la limite inférieure par l'utilisateur. Default: `onChangeLower() {}`.
* __onChangeUpper__ | `function`: rappel déclenché après la modification de la limite supérieure par l'utilisateur. Default: `onChangeUpper() {}`.
* __onChange__ | `function`: undefined. Default: `onChange() {}`.
* __onSubmit__ | `function`: rappel invoqué lors de la soumission de la réponse ; a comme premier paramètre un "booléen" indiquant si la réponse a été correctement donnée (le cas échéant, "nul" sinon) et la réponse fournie comme second paramètre. Default: `onSubmit() {}`.


## Exemples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Hints', value: 'withHints' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'With Points and Feedback', value: 'withPoints' }
        
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<RangeQuestion
    style={{ fontSize: 17, }}
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
/>
```

</TabItem>

<TabItem value="withHints">

```jsx live
<RangeQuestion
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
    hints={['all this happened in the 17th century', 'it ended with the Peace of Westphalia in 1648']}
/>
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<RangeQuestion
    style={{ fontFamily: 'Georgia', boxShadow: '0 0  10px darkblue'}}
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
/>
```

</TabItem>

<TabItem value="withPoints">

```jsx live
<RangeQuestion
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
    hints={['all this happened in the 17th century', 'it ended with the Peace of Westphalia in 1648']}
    points={20}
    onSubmit={(res) => {
     if (res === true) {
      alert('Great, you have received 20 points');
     }
     else alert('sorry, this answer was wrong');
    }}
/>
```

</TabItem>

</Tabs>
