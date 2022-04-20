---
id: file-question 
title: File Question
sidebar_label: File Question
---

Μια ερώτηση που ζητά από τον χρήστη να ανεβάσει ένα αρχείο.

## Επιλογές

* __question__ | `(string|node)`: την ερώτηση που εμφανίζεται στην κορυφή του στοιχείου ερώτησης αρχείου. Default: `''`.
* __hintPlacement__ | `string`: τοποθέτηση των υποδείξεων (είτε "πάνω", "αριστερά", "δεξιά" ή "κάτω"). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: υποδείξεις που παρέχουν καθοδήγηση για τον τρόπο απάντησης στην ερώτηση. Default: `[]`.
* __feedback__ | `boolean`: ελέγχει αν θα εμφανίζονται κουμπιά ανάδρασης. Default: `true`.
* __chat__ | `boolean`: ελέγχει αν το στοιχείο θα πρέπει να έχει ενσωματωμένη συνομιλία. Default: `false`.
* __accept__ | `string`: Κατάλογος [μοναδικών αναγνωριστικών αρχείων](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers), χωρισμένος με κόμμα, που γίνονται δεκτά από το στοιχείο (π.χ. "image/*", ".pdf" ή "audio/*").. Default: `'*/*'`.
* __until__ | `Date`: χρόνος μέχρι να επιτραπεί στους μαθητές να υποβάλουν απαντήσεις. Default: `none`.
* __points__ | `number`: μέγιστος αριθμός μορίων που χορηγούνται κατά τη βαθμολόγηση. Default: `10`.
* __className__ | `string`: όνομα κλάσης. Default: `''`.
* __style__ | `object`: Στυλ γραμμής CSS. Default: `{}`.
* __onChange__ | `function`: callback που θα κληθεί κατά τη λήψη ενός αρχείου. Default: `onChange() {}`.


## Παραδείγματα

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Only PDFs', value: 'onlyPDF' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<FileQuestion question="You may upload a file." feedback={false}  />
```
</TabItem>

<TabItem value="onlyPDF">

```jsx live
<FileQuestion question="Please upload a PDF file." feedback={false} accept=".pdf" />
```

</TabItem>

</Tabs>
