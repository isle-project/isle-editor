---
id: lesson-submit 
title: Lesson Submit
sidebar_label: Lesson Submit
---

Een knop die aan het einde van een les wordt weergegeven en waarop de leerlingen kunnen klikken. Standaard wordt een bericht ter bevestiging van de voltooiing van de les naar hun e-mailadres gestuurd.

## Options

* __label__ | `string`: label van verzendknop. Default: `none`.
* __message__ | `string`: bericht ter bevestiging e-mail. Default: `''`.
* __requireLogin__ | `boolean`: controleert of de gebruiker moet worden aangemeld voor het activeren van de knop (voor anonieme gebruikers wordt er geen bevestiging per e-mail verstuurd). Default: `true`.
* __sendConfirmationEmail__ | `boolean`: controleert of er een bevestigingse-mail moet worden gestuurd bij het indienen van de les. Default: `true`.
* __className__ | `string`: klassennaam. Default: `''`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.
* __onClick__ | `function`: terugroeping aangeroepen bij het klikken op de indieningsknop. Default: `onClick() {}`.


## Examples

```jsx live
<LessonSubmit />
```

