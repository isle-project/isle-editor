---
id: free-text-survey 
title: Free Text Survey
sidebar_label: Free Text Survey
---

En ISLE-komponent til spørgsmål, hvor elevernes svar skal gives i form af fri tekst. Det, der adskiller denne komponent fra **FreeTextQuestion**, er det faktum, at de samlede gruppedata vises for alle i realtid.

## Indstillinger

* __question__ | `(string|node)`: det spørgsmål, der skal stilles til de studerende. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: styrer, om man ønsker at tillade, at eleverne kan besvare undersøgelsen flere gange. Default: `false`.
* __anonymous__ | `boolean`: kontrollerer, om elevernes svar indsamles anonymt. Default: `false`.
* __rows__ | `number`: antal tekstrækker i indtastningsfeltet. Default: `4`.
* __className__ | `string`: klassens navn. Default: `''`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.
* __onSubmit__ | `function`: callback-funktion, der kaldes, når der er afgivet et svar. Default: `onSubmit() {}`.


## Eksempler

```jsx live
<FreeTextSurvey 
    question="Where are you from?"
    anonymous
/>
``` 

