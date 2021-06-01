---
id: principal-component-analysis
title: Principal Component Analysis
sidebar_label: Principal Component Analysis
---

Ανάλυση κύριων συνιστωσών.

## Επιλογές

* __data__ | `object (required)`: αντικείμενο των πινάκων τιμών. Default: `none`.
* __variables__ | `array<string> (required)`: ονόματα μεταβλητών που χρησιμοποιούνται για την ομαδοποίηση. Default: `none`.
* __center__ | `boolean`: κεντρικές τιμές αφαιρώντας το μέσο όρο. Default: `true`.
* __scale__ | `boolean`: τιμές κλίμακας διαιρώντας με την τυπική απόκλιση. Default: `false`.
* __noComponents__ | `number`: αριθμός των στοιχείων που παρέχονται στην επανάκληση "onResult".. Default: `0`.
* __onResult__ | `function`: callback που καλείται με το αντικείμενο του μοντέλου και τα συστατικά. Default: `onResult() {}`.


## Παραδείγματα

```jsx live
<PrincipalComponentAnalysis 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
    scale
/>
```

