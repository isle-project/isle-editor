---
id: accordion
title: Accordion
sidebar_label: Accordion
---

Ένα στοιχείο ακορντεόν που ελέγχει κάθετα ρυθμιστικά.

## Επιλογές

* __active__ | `number`: δείκτης του slider που θα ανοίξει στην αρχή. Default: `none`.
* __canCloseAll__ | `boolean`: αν μπορεί κανείς να καταρρεύσει όλες τις επικεφαλίδες. Default: `false`.
* __headers__ | `array<(string|node)>`: πίνακας ονομάτων επικεφαλίδων. Default: `none`.
* __headerStyle__ | `object`: μπορείτε επίσης να ορίσετε ένα στυλ στις μπάρες κεφαλίδας. Default: `none`.
* __headerClassName__ | `string`: αυτό παρακάμπτει το δεδομένο όνομα κλάσης των επικεφαλίδων. Default: `none`.
* __onChange__ | `function`: callback που καλείται με το δείκτη του νέου ενεργού κάθετου ολισθητήρα. Default: `onChange() {}`.
* __className__ | `string`: όνομα κλάσης για το εξωτερικό div. Default: `''`.
* __style__ | `object`: Στυλ CSS inline για εξωτερικό div. Default: `none`.


## Παραδείγματα

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="firstOpened"
    values={[
        { label: 'First item opened', value: 'firstOpened' },
        { label: 'All items can close', value: 'allClosed' },
    ]}
    lazy
>
<TabItem value="firstOpened">

```jsx live
<Accordion headers={[ 'First Question', 'Second Question' ]} active={0} >
    <FreeTextQuestion />
    <FreeTextQuestion />
</Accordion>
```

</TabItem>
<TabItem value="allClosed">

```jsx live
<Accordion headers={[ 'First Question', 'Second Question' ]} canCloseAll >
    <FreeTextQuestion />
    <FreeTextQuestion />
</Accordion>
```

</TabItem>
</Tabs>

