---
id: scrolling-text
title: Scrolling Text
sidebar_label: Scrolling Text
---

Ένα δυναμικό στοιχείο φόντου που ανακυκλώνει μια λίστα κειμένων σε ένα καθορισμένο χρονικό διάστημα.

## Επιλογές

* __text__ | `(string|array<string>)`: κείμενο ή λίστα κειμένων που θα εμφανιστούν. Default: `[]`.
* __loop__ | `boolean`: υποδεικνύει αν η διαδικασία θα εμφανίζεται απεριόριστα. Default: `false`.
* __direction__ | `string`: η κατεύθυνση της ροής του κειμένου (είτε `left`, `right`, `top`, `bottom`, "παρακολούθηση", "εστίαση" ή "στροβιλισμός"). Default: `'right'`.
* __hold__ | `number`: ο χρόνος που το κείμενο παραμένει ακίνητο (σε δευτερόλεπτα). Default: `5`.
* __wait__ | `number`: ο χρόνος πριν από την άφιξη ενός νέου κειμένου (σε δευτερόλεπτα). Default: `3`.
* __inTime__ | `number`: χρόνος του αποτελέσματος εισόδου (σε δευτερόλεπτα). Default: `1`.
* __outTime__ | `number`: χρόνος του αποτελέσματος εξόδου (σε δευτερόλεπτα). Default: `1`.
* __className__ | `string`: όνομα κλάσης. Default: `''`.
* __style__ | `object`: Στυλ CSS του κειμένου. Default: `{}`.


## Παραδείγματα


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'List of Texts', value: 'list' },
        { label: 'Background Image', value: 'backgroundImage' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<ScrollingText
    text="This is a text re-appearing every five seconds"
    style={{ fontSize: 44, color: 'blue' }}
    wait={5}
    hold={2}
    loop
/>
```

</TabItem>

<TabItem value="list">

```jsx live
<ScrollingText
    text={[ 'One', 'Two', 'Three', 'Four'  ]}
    style={{ fontSize: 84, color: 'red', textAlign: 'center' }}
    loop
    direction="left"
    wait={.5}
    hold={2}
/>
```

</TabItem>

<TabItem value="backgroundImage">

```jsx live
<ScrollingText
    text={[ 'One', 'Two', 'Three', 'Four'  ]}
    style={{ fontSize: 84, color: 'white', textAlign: 'center', backgroundImage: 'url(https://bit.ly/3qlRgoR)', backgroundSize: '1200px 200px' }}
    loop
    direction="left"
    wait={.5}
    hold={2}
/>
```

</TabItem>

</Tabs>
