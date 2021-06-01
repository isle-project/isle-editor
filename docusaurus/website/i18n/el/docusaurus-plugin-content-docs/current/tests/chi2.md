---
id: chi2
title: Chi-square Independence Test
sidebar_label: Chi-square Independence Test
---

Τεστ ανεξαρτησίας Χι-τετράγωνο.

## Επιλογές

* __data__ | `object (required)`: αντικείμενο των πινάκων τιμών. Default: `none`.
* __var1__ | `(string|Factor) (required)`: όνομα της πρώτης μεταβλητής. Default: `none`.
* __var2__ | `(string|Factor) (required)`: όνομα της δεύτερης μεταβλητής. Default: `none`.


## Παραδείγματα

```jsx live
<Chi2Test
    data={heartdisease} 
    var1="Drugs"
    var2="Complications"
/>
```
