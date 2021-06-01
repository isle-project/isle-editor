---
id: r-shell
title: R Shell
sidebar_label: R Shell
---

Ένα διαδραστικό R Shell που μπορεί να χρησιμοποιηθεί για την εκτέλεση εντολών R στο σύννεφο χρησιμοποιώντας το [OpenCPU](https://www.opencpu.org/).

## Επιλογές

* __code__ | `string`: Κώδικας R προς αξιολόγηση. Default: `''`.
* __solution__ | `string`: για ερωτήσεις προγραμματισμού, κωδικός R `string` που αντιπροσωπεύει την επίσημη λύση του προβλήματος. Default: `''`.
* __hints__ | `array<(string|node)>`: για ερωτήσεις προγραμματισμού, μια σειρά από συμβουλές που παρέχουν καθοδήγηση για τον τρόπο προσέγγισης του προβλήματος. Default: `[]`.
* __addPreceding__ | `boolean`: αν οριστεί σε true, το κέλυφος θα αξιολογήσει όλο τον κώδικα από το τρέχον συστατικό και όλα τα προηγούμενα που εμφανίζονται στο μάθημα. Default: `false`.
* __libraries__ | `array`: Βιβλιοθήκες R που θα πρέπει να φορτώνονται αυτόματα όταν εκτελείται ο "κώδικας" εισόδου. Default: `[]`.
* __precompute__ | `boolean`: ελέγχει αν ο προεπιλεγμένος κώδικας θα πρέπει να εκτελεστεί μόλις το στοιχείο έχει τοποθετηθεί. Default: `false`.
* __prependCode__ | `(string|array)`: Κώδικας R `string` (ή `array` από μπλοκ κώδικα R) που θα προστεθεί στον κώδικα που είναι αποθηκευμένος στο `code` κατά την αξιολόγηση. Default: `''`.
* __chat__ | `boolean`: ελέγχει αν θα πρέπει να ενεργοποιηθεί η λειτουργία ομαδικής συνομιλίας. Default: `false`.
* __disabled__ | `boolean`: ελέγχει αν θα απενεργοποιηθούν όλες οι είσοδοι του χρήστη και αν το μπλοκ κώδικα θα είναι στατικό. Default: `false`.
* __lines__ | `number`: αριθμός γραμμών που θα εμφανιστούν. Default: `5`.
* __resettable__ | `boolean`: ελέγχει αν θα εμφανίζεται ένα κουμπί επαναφοράς για την επαναφορά της προεπιλεγμένης εισαγωγής κωδικού. Default: `false`.
* __style__ | `object`: Στυλ γραμμής CSS. Default: `{}`.
* __onChange__ | `function`: callback που καλείται κάθε φορά που αλλάζει η είσοδος του πεδίου κειμένου. Default: `onChange() {}`.
* __onEvaluate__ | `function`: callback που καλείται κάθε φορά που γίνεται κλικ στο κουμπί "Αξιολόγηση".. Default: `onEvaluate(){}`.
* __onResult__ | `function`: callback που καλείται κάθε φορά που λαμβάνεται το αποτέλεσμα μιας εκτέλεσης κώδικα από το cloud. Το αποτέλεσμα `string` περνάει ως το μοναδικό όρισμα στη συνάρτηση επανάκλησης. Default: `onResult() {}`.


## Παραδείγματα

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Multiline', value: 'multiline' },
        { label: 'Precompute & Disabled', value: 'precompute' },
        { label: 'Using Libraries', value: 'usingLibraries' },
        { label: 'Add Preceding Code', value: 'addPreceding' },
        { label: 'Hints & Solution', value: 'hintsAndSolution' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<RShell
    code="abs(c(-2,3,-1))"
/>
```

</TabItem>

<TabItem value="multiline" >

```jsx live
<RShell code={`x <- runif( 100 );
y <- 3.0 * x + rnorm( 100 );
fit <- lm( y ~ x );
summary( fit );
`} resettable />
```

</TabItem>

<TabItem value="precompute" >

```jsx live
<RShell
    code="abs(c(-2,3,-1))"
    precompute
    disabled
    lines={2}
/>
```

</TabItem>

<TabItem value="usingLibraries" >

```jsx live
<RShell libraries={['dplyr']} code={'starwars %>% filter(species == "Droid")'} lines={2} />
```

</TabItem>

<TabItem value="addPreceding" >

```jsx live
<RShell code="library(dplyr)" lines={2} disabled />

<RShell code={'starwars %>% filter(species == "Droid")'} addPreceding lines={2} />
```

</TabItem>

<TabItem value="hintsAndSolution" >

```jsx live
**(a)** Use the lm() function to regress `Price` on: `EngineSize`, `Origin`, `MPG.highway`, `MPG.city` and `Horsepower`.

<RShell 
    id="prob1a"
    code="" 
    solution={`cars.lm <- lm(Price ~ EngineSize + Origin + MPG.highway + MPG.city + Horsepower,
data = Cars93)
summary(cars.lm)`} 
    lines={5} 
    hints={["Use the model formula syntax to specify your regression equation. Type ?formula if you don't remember how formulas work.","You can use the summary() function to retrieve a detailed regression output for a lm object"]}
/>
```

</TabItem>

</Tabs>
