---
id: image-question 
title: Image Question
sidebar_label: Image Question
---

Een vraag die de gebruiker vraagt om een afbeelding te uploaden.

## Opties

* __question__ | `(string|node)`: tekst voor de vraag. Default: `''`.
* __hintPlacement__ | `string`: plaatsing van de hints (ofwel `top`, `left`, `right`, of `bottom`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: tips die een leidraad bieden voor het beantwoorden van de vraag. Default: `[]`.
* __feedback__ | `boolean`: regelt of er terugmeldingsknoppen moeten worden weergegeven. Default: `true`.
* __chat__ | `boolean`: bepaalt of het element een geïntegreerde chat moet hebben. Default: `false`.
* __disableSubmitNotification__ | `boolean`: controleert of een melding moet worden weergegeven na het indienen van een afbeelding. Default: `false`.
* __className__ | `string`: klassennaam. Default: `''`.
* __sketchpad__ | `object`: eigenschappen die moeten worden doorgegeven aan <Sketchpad /> component; om het schetsblok weer te geven, geef je ten minste een leeg object `{}` door. Default: `none`.
* __solution__ | `string`: beeld URL van modeloplossing. Default: `none`.
* __until__ | `Date`: tijd tot de studenten de gelegenheid krijgen om antwoorden in te dienen. Default: `none`.
* __points__ | `number`: maximumaantal punten voor de indeling in klassen. Default: `10`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.
* __onSubmit__ | `function`: callback ingeroepen bij het indienen van een antwoord; heeft als enige parameter een `boolean` die aangeeft of de elementen in de juiste volgorde zijn geplaatst. Default: `onSubmit() {}`.


## Voorbeelden
