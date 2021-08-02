---
id: seal 
title: Seal
sidebar_label: Seal
---

Μια σφραγίδα έγκρισης.

## Επιλογές

* __active__ | `boolean`: ελέγχει αν η σφραγίδα είναι ενεργή ή γκριζαρισμένη. Default: `true`.
* __onClick__ | `function`: συνάρτηση επανάκλησης που καλείται όταν γίνεται κλικ στη σημείωση. Default: `onClick() {}`.
* __scale__ | `number`: μέγεθος αντικειμένου (αν δεν οριστεί ρητά, η σφραγίδα δεν αλλάζει κλίμακα). Default: `none`.
* __innerStyle__ | `object`: το στυλ για τον στενό κύκλο. Default: `{}`.
* __lower__ | `string`: το κάτω μέρος του κειμένου. Default: `'The lower text'`.
* __lowerArc__ | `number`: το τόξο για το κατώτερο κείμενο. Default: `150`.
* __noOrnaments__ | `boolean`: εμποδίζει την απόδοση των διακοσμητικών στοιχείων. Default: `false`.
* __removable__ | `boolean`: ελέγχει αν η σημείωση αφαιρείται όταν γίνεται κλικ. Default: `false`.
* __style__ | `object`: το στυλ για το στοιχείο. Default: `none`.
* __title__ | `(string|node)`: τίτλος σφραγίδας. Default: `'Enter a title'`.
* __upper__ | `string`: το άνω κείμενο. Default: `'The upper text'`.
* __upperArc__ | `number`: το τόξο για το άνω κείμενο. Default: `150`.


## Παραδείγματα

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'Removable', value: 'removable' },
        { label: 'Scaled', value: 'scaled' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Seal title="LESSON DONE" upper="Carnegie Mellon" upperArc={120} lower="University" lowerArc={105} />
```

</TabItem>


<TabItem value="withStyle">

```jsx live

<Seal 
  title="LESSON DONE" 
  style={{ backgroundImage: 'linear-gradient(white, silver, gainsboro)'}}
  innerStyle={{ backgroundImage:  'linear-gradient(gold, silver, white)' }}
  upper="Carnegie Mellon"  upperArc={120} 
  lower="University" lowerArc={105}
/>
```

</TabItem>

<TabItem value="removable">

```jsx live
<Seal 
  title="LESSON DONE" 
  noOrnaments
  removable
  style={{ backgroundImage: 'linear-gradient(white, silver, gainsboro)'}}
  innerStyle={{ backgroundImage:  'linear-gradient(gold, silver, white)' }}
  upper="Carnegie Mellon"  upperArc={120} 
  lower="University" lowerArc={105}
/>
```

</TabItem>

<TabItem value="scaled">

```jsx live
<Seal 
  title="BIG SEAL" 
  scale={1.15}
  style={{ fontWeight: 800, color: 'darkred', backgroundImage: 'linear-gradient(white, silver, gainsboro)'}}
  innerStyle={{ backgroundImage:  'linear-gradient(gold, silver, white)' }}
  upper="Carnegie Mellon" upperArc={120} 
  lower="University" lowerArc={105}
/>
```

</TabItem>

</Tabs>
