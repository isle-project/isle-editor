---
id: js-shell
title: JavaScript Shell
sidebar_label: JavaScript Shell
---

Ένα διαδραστικό κέλυφος Javascript που μπορεί να χρησιμοποιηθεί για την εκτέλεση εντολών JavaScript. Το κέλυφος περιέχει μια κονσόλα που εμφανίζει μηνύματα σφάλματος, προειδοποιήσεις κ.λπ.

## Επιλογές

* __code__ | `string`: Κώδικας JavaScript προς αξιολόγηση. Default: `''`.
* __solution__ | `string`: για ερωτήσεις προγραμματισμού, κωδικός "string" που αντιπροσωπεύει την επίσημη λύση του προβλήματος. Default: `''`.
* __hints__ | `array<(string|node)>`: για ερωτήσεις προγραμματισμού, μια σειρά από συμβουλές που παρέχουν καθοδήγηση για τον τρόπο προσέγγισης του προβλήματος. Default: `[]`.
* __precompute__ | `boolean`: ελέγχει αν ο προεπιλεγμένος κώδικας θα πρέπει να εκτελεστεί μόλις το στοιχείο έχει τοποθετηθεί. Default: `false`.
* __chat__ | `boolean`: ελέγχει αν θα πρέπει να ενεργοποιηθεί η λειτουργία ομαδικής συνομιλίας. Default: `false`.
* __check__ | `string`: προσαρτημένος κώδικας JavaScript για να ελέγξει τον "κώδικα" που πρέπει να αξιολογηθεί. Default: `none`.
* __disabled__ | `boolean`: ελέγχει αν θα απενεργοποιηθούν όλες οι είσοδοι του χρήστη και αν το μπλοκ κώδικα θα είναι στατικό. Default: `false`.
* __lines__ | `number`: αριθμός γραμμών που θα εμφανιστούν. Default: `5`.
* __className__ | `string`: όνομα κλάσης. Default: `''`.
* __style__ | `object`: Στυλ γραμμής CSS. Default: `{}`.
* __onChange__ | `function`: callback που καλείται κάθε φορά που αλλάζει η είσοδος του πεδίου κειμένου. Default: `onChange() {}`.
* __onEvaluate__ | `function`: callback που καλείται κάθε φορά που γίνεται κλικ στο κουμπί "Αξιολόγηση".. Default: `onEvaluate() {}`.
* __vars__ | `object`: αντικείμενο εμβέλειας με μεταβλητές που θα πρέπει να είναι διαθέσιμες για την αξιολόγηση του "κώδικα. Default: `none`.


## Παραδείγματα

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'Ten Lines', value: 'mLines' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<JSShell code = {`var a = 2; 
var b = 2;
console.log(a + b);`} />
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<JSShell style={{ fontSize: 18, boxShadow: '0 0 4px black' }}  />
```

</TabItem>

<TabItem value="mLines">

```jsx live
<JSShell lines={10} />
```

</TabItem>

</Tabs>




