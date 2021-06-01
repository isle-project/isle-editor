---
id: polaroid
title: Polaroid
sidebar_label: Polaroid
---

Ένα στοιχείο που εμφανίζει μια εικόνα σε στυλ polaroid.

## Επιλογές

* __image__ | `string`: τη διεύθυνση URL της εικόνας που θα εμφανιστεί στο πλαίσιο polaroid. Default: `none`.
* __draggable__ | `boolean`: ελέγχει αν μπορεί κανείς να σύρει το polaroid γύρω από την οθόνη. Default: `false`.
* __showPin__ | `boolean`: ελέγχει αν θα εμφανιστεί μια καρφίτσα. Default: `false`.
* __stain__ | `boolean`: ελέγχει αν θα εμφανίζεται ένας λεκές από καφέ. Default: `false`.
* __width__ | `number`: πλάτος polaroid (σε px). Default: `350`.
* __style__ | `object`: Στυλ γραμμής CSS. Default: `{}`.
* __onClick__ | `function`: χειριστής συμβάντος που καλείται όταν γίνεται κλικ στην εικόνα (λαμβάνει το id της Polaroid ως παράμετρο). Default: `none`.


## Παραδείγματα

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Pin & Draggable', value: 'pinnedAndDraggable' },
        { label: 'Custom Width', value: 'customWidth' },
        { label: 'Handling Clicks', value: 'handlingClicks' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Polaroid image="https://bit.ly/2MGl7K0" />
```

</TabItem>

<TabItem value="pinnedAndDraggable">

```jsx live
<Polaroid showPin draggable image="https://bit.ly/2MGl7K0" />
```

</TabItem>

<TabItem value="customWidth">

```jsx live
<Polaroid width={200}
 image="https://bit.ly/2MGl7K0" />
```

</TabItem>

<TabItem value="handlingClicks">

```jsx live
<Polaroid image="https://bit.ly/2MGl7K0" 
 onClick={() => {
     alert( 'The polaroid has been clicked...' );
 }} />
```

</TabItem>

</Tabs>
