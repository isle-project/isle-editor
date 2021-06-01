---
id: free-text-survey 
title: Free Text Survey
sidebar_label: Free Text Survey
---

Μια συνιστώσα ISLE για ερωτήσεις στις οποίες οι απαντήσεις των μαθητών θα πρέπει να παρέχονται με τη μορφή ελεύθερου κειμένου. Αυτό που διαφοροποιεί αυτό το συστατικό από το **FreeTextQuestion** είναι το γεγονός ότι τα συγκεντρωτικά δεδομένα της ομάδας εμφανίζονται σε όλους σε πραγματικό χρόνο.

## Επιλογές

* __question__ | `(string|node)`: η ερώτηση που πρέπει να τεθεί στους μαθητές. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: ελέγχει αν κάποιος επιθυμεί να επιτρέψει στους μαθητές να απαντήσουν στην έρευνα πολλές φορές. Default: `false`.
* __anonymous__ | `boolean`: ελέγχει αν οι απαντήσεις των μαθητών συλλέγονται ανώνυμα. Default: `false`.
* __rows__ | `number`: αριθμός γραμμών κειμένου στο πεδίο εισαγωγής. Default: `4`.
* __className__ | `string`: όνομα κλάσης. Default: `''`.
* __style__ | `object`: Στυλ γραμμής CSS. Default: `{}`.
* __onSubmit__ | `function`: συνάρτηση επανάκλησης που καλείται όταν υποβάλλεται μια απάντηση. Default: `onSubmit() {}`.


## Παραδείγματα

```jsx live
<FreeTextSurvey 
    question="Where are you from?"
    anonymous
/>
``` 

