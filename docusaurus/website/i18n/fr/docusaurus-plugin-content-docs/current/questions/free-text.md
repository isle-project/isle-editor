---
id: free-text-question 
title: Free Text Question
sidebar_label: Free Text Question
---

Un volet ISLE pour les questions dont les réponses des étudiants doivent être fournies sous forme de texte libre.

## Options

* __question__ | `(string|node)`: la question affichée en haut de l'élément de question de texte libre. Default: `''`.
* __hints__ | `array<(string|node)>`: des conseils sur la façon de répondre à la question. Default: `[]`.
* __hintPlacement__ | `string`: l'emplacement des indices (soit `top`, `left`, `right` ou `bottom`). Default: `'top'`.
* __feedback__ | `boolean`: contrôle l'affichage des boutons de rétroaction. Default: `true`.
* __solution__ | `(string|node)`: une réponse modèle au problème. Default: `''`.
* __instantSolution__ | `boolean`: si l'on peut basculer l'affichage de la réponse modèle immédiatement. Default: `false`.
* __rows__ | `number`: nombre de lignes du champ de texte pour que les étudiants puissent taper leurs réponses. Default: `5`.
* __chat__ | `boolean`: contrôle l'activation ou non du chat de groupe pour la question. Default: `false`.
* __resizable__ | `boolean`: contrôle si la zone de texte doit être redimensionnée. Default: `false`.
* __placeholder__ | `string`: texte de remplacement affiché avant que l'utilisateur n'ait saisi un texte. Default: `''`.
* __disableSubmitNotification__ | `boolean`: contrôle s'il faut désactiver les notifications de soumission. Default: `false`.
* __submissionMsg__ | `string`: notification affichée lorsque l'apprenant soumet sa réponse pour la première fois. Default: `''`.
* __resubmissionMsg__ | `string`: notification affichée pour toutes les soumissions après la première. Default: `'You have successfully re-submitted your answer.'`.
* __provideFeedback__ | `boolean`: indique si un retour d'information comprenant la bonne réponse doit être affiché après que les apprenants aient soumis leurs réponses. Default: `true`.
* __maxlength__ | `number`: nombre maximum de caractères autorisés. Default: `2500`.
* __until__ | `Date`: le temps nécessaire pour permettre aux étudiants de soumettre des réponses. Default: `none`.
* __points__ | `number`: nombre maximum de points attribués dans le classement. Default: `10`.
* __className__ | `string`: nom de la classe. Default: `''`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.
* __onChange__ | `function`: rappel invoqué chaque fois que la valeur de la zone de texte change ; reçoit le texte actuel comme seul argument. Default: `onChange() {}`.
* __onSubmit__ | `function`: rappel invoqué lorsque l'utilisateur soumet une réponse ; reçoit le texte soumis comme seul argument. Default: `onSubmit() {}`.


## Exemples

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
