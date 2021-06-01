---
id: flippable-card 
title: Flippable Card
sidebar_label: Flippable Card
---

Ένα στοιχείο ISLE που επιτρέπει την απόδοση δύο δύο πλευρών.

## Επιλογές

* __button__ | `string`: ετικέτα κουμπιού. Default: `none`.
* __draggable__ | `boolean`: ελέγχει αν η κάρτα μπορεί να μετακινηθεί. Default: `false`.
* __flipSpeedBackToFront__ | `number`: η ταχύτητα με την οποία η κάρτα μετατρέπεται από το φόντο στο προσκήνιο, σε δευτερόλεπτα. Default: `1`.
* __flipSpeedFrontToBack__ | `number`: η ταχύτητα με την οποία η κάρτα μετατρέπεται από το προσκήνιο στο φόντο, σε δευτερόλεπτα. Default: `1`.
* __oneTime__ | `boolean`: υποδεικνύει αν η διαδικασία flip μπορεί να εκτελεστεί μόνο μία φορά. Default: `false`.
* __perspective__ | `number`: Τιμή ιδιότητας CSS για να δώσετε προοπτική σε στοιχείο με 3d-τοποθέτηση. Default: `1000`.
* __size__ | `number`: μέγεθος της κάρτας (ορίζει το "πλάτος" και το "ύψος" της). Default: `250`.
* __disabled__ | `boolean`: ελέγχει αν η κάρτα με δυνατότητα αναδίπλωσης είναι απενεργοποιημένη. Default: `false`.
* __value__ | `boolean`: Κατάσταση αναδίπλωσης της κάρτας (για ελεγχόμενο εξάρτημα). Default: `none`.
* __defaultValue__ | `boolean`: αρχική κατάσταση αναστροφής της κάρτας. Default: `false`.
* __containerStyle__ | `object`: Στυλ CSS του περιέκτη. Default: `{}`.
* __frontStyle__ | `object`: CSS στυλ της μπροστινής κάρτας. Default: `{}`.
* __backStyle__ | `object`: Στυλ CSS της πίσω κάρτας. Default: `{}`.
* __onChange__ | `function`: callback που καλείται μόλις η κάρτα αναποδογυρίσει- λαμβάνει την τρέχουσα κατάσταση αναποδογυρίσματος ως μοναδικό όρισμα. Default: `onChange() {}`.


## Παραδείγματα

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With CSS', value: 'withCSS' },
        { label: 'Slow Motion', value: 'slowMo' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<FlippableCard containerStyle={{ float: 'none' }} size={200}>
  <img src="https://bit.ly/2YU5EbU" />
  <img src="https://bit.ly/3aGv9mp" />
</FlippableCard>
```

</TabItem>

<TabItem value="withCSS">

```jsx live
<FlippableCard 
  containerStyle={{ float: 'none' }} 
  frontStyle={{ fontSize: 50, textAlign: 'center' }} 
  backStyle={{ fontSize: 50, textAlign: 'center', background: 'purple', color: 'white' }} 
  >
    <div>
      FRONT
    </div>
    <div>
      BACK
    </div>
</FlippableCard>
```

</TabItem>

<TabItem value="slowMo">

```jsx live
<FlippableCard 
  flipSpeedBackToFront={7} 
  flipSpeedFrontToBack={7}   
  containerStyle={{ float: 'none' }} 
  frontStyle={{ fontSize: 50, textAlign: 'center' }} 
  backStyle={{ fontSize: 50, textAlign: 'center', background: 'purple', color: 'white' }} 
  >
    <div>
      FRONT
    </div>
    <div>
      BACK
    </div>
</FlippableCard>
```

</TabItem>

</Tabs>
