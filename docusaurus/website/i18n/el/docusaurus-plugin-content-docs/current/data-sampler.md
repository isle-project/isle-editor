---
id: data-sampler 
title: Data Sampler
sidebar_label: Data Sampler
---

Συστατικό για τη δειγματοληψία παρατηρήσεων από ένα σύνολο δεδομένων και τη μεταβίβασή τους σε θυγατρικά συστατικά.

## Επιλογές

* __data__ | `object (required)`: αντικείμενο δεδομένων με κλειδιά που αντιστοιχούν σε μεταβλητές στήλης. Default: `none`.
* __sampleSize__ | `number`: προεπιλεγμένο μέγεθος δείγματος. Default: `50`.
* __minSampleSize__ | `number`: ελάχιστο επιτρεπόμενο μέγεθος δείγματος. Default: `1`.
* __maxSampleSize__ | `number`: μέγιστο επιτρεπόμενο μέγεθος δείγματος. Default: `none`.


## Παραδείγματα

```jsx live
<DataSampler data={heartdisease} >
  {( sample ) => {
    return <DataTable
      data={sample}
    />;
  }}
</DataSampler>
```

