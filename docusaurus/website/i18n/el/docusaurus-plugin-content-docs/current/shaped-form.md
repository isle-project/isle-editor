---
id: shaped-form 
title: Shaped Form
sidebar_label: Shaped Form
---

Ένα στοιχείο που επιτρέπει την εμφάνιση σχημάτων, που ενεργοποιούνται από εικόνες με κανάλι άλφα.

## Επιλογές

* __type__ | `string`: τύπος μορφής (είτε "οκτάγωνο", "τρίγωνο", "τραπεζοειδές", "παραλληλόγραμμο", "ρόμβος", "πεντάγωνο", "εξάγωνο", "επτάγωνο", "μηνάγωνο", "δεκάγωνο", "λοξός", "rabbet", "αριστερό βέλος", "δεξί βέλος", "αριστερό σημείο", "δεξί σημείο", "αριστερό σεβρόν", "δεξί σεβρόν", "αστέρι", "σταυρός", "μήνυμα", "κλείσιμο" ή "πλαίσιο"). Default: `'star'`.
* __src__ | `string`: το URL της εικόνας φόντου. Default: `none`.
* __style__ | `object`: το στυλ του αντικειμένου, μπορεί να περιέχει οποιοδήποτε CSS, συμπεριλαμβανομένων των κινούμενων σχεδίων. Default: `{}`.
* __onClick__ | `function`: χειριστής συμβάντος που καλείται όταν γίνεται κλικ στην εικόνα. Default: `none`.


## Παραδείγματα

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'Size Variation', value: 'sizeVariation' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
<ShapedForm type="star" />
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
```
</TabItem>

<TabItem value="withStyle">

```jsx live
<div style= {{ background: 'black', color: 'white', height: 280, width: 280}}>
<ShapedForm type="star"  style={{ background: 'red', boxShadow: 'inset 100px 88px 5px yellow'}}/>
</div>
```
</TabItem>

<TabItem value="SizeVariation">

```jsx live
<div style= {{ background: 'darkgray', color: 'black', height: 280, width: '100%'}}>
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
<ShapedForm type="cross"  style={{ background: 'gold', width: 85, height: 100, margin: 10, marginTop: 22 }}/>
sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
</div>
```
</TabItem>

</Tabs>
