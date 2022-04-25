---
id: word-cloud 
title: Word Cloud
sidebar_label: Word Cloud
---

Ένα συστατικό σύννεφο λέξεων που βασίζεται στο [d3-cloud](https://github.com/jasondavies/d3-cloud).

## Επιλογές

* __data__ | `array`: είτε ένας πίνακας κειμένων από τα οποία θα δημιουργηθεί το νέφος λέξεων είτε, αν το `precalculated` έχει οριστεί σε `true`, ένας πίνακας αντικειμένων μέτρησης λέξεων (με κλειδιά `text` και `value`). Default: `[]`.
* __font__ | `(string|function)`: συνάρτηση προσπέλασης που καθορίζει την όψη γραμματοσειράς για κάθε λέξη. Δέχεται επίσης μια σταθερά αντί για μια συνάρτηση. Default: `'serif'`.
* __fontSizeMapper__ | `function`: συνάρτηση προσπέλασης που υποδεικνύει το μέγεθος γραμματοσειράς για κάθε λέξη. Προεπιλογή είναι `( count - min + 1 ) / ( max - min + 6 ) * 30.0 + 14.0`, όπου `min` και `max` υποδηλώνουν τον ελάχιστο και μέγιστο αριθμό λέξεων, αντίστοιχα.. Default: `none`.
* __height__ | `number`: ύψος του σύννεφου λέξεων (σε px). Default: `600`.
* __language__ | `string`: αναγνωριστικό γλώσσας (καθορίζει τις λέξεις παύσης που πρέπει να αφαιρεθούν). Default: `'en'`.
* __minCount__ | `number`: αν έχει οριστεί, περιλαμβάνει μόνο λέξεις που εμφανίζονται περισσότερες από `minCount` φορές στα δεδομένα που δίνονται. Default: `none`.
* __saveButton__ | `boolean`: ελέγχει αν θα εμφανίζεται ένα κουμπί για την αποθήκευση του νέφους λέξεων ως εικόνα. Default: `true`.
* __onClick__ | `function`: συνάρτηση επανάκλησης που καλείται όταν γίνεται κλικ σε μια λέξη στο σύννεφο λέξεων. Default: `onClick() {}`.
* __padding__ | `(function|number)`: συνάρτηση προσπέλασης ή σταθερά που υποδεικνύει το αριθμητικό γέμισμα για κάθε λέξη. Default: `5`.
* __precalculated__ | `boolean`: ελέγχει αν το σύννεφο λέξεων αναμένει έναν πίνακα προ-υπολογισμένων αριθμών λέξεων ή αν θα τους δημιουργήσει για συγκεκριμένα κείμενα. Default: `false`.
* __rotate__ | `(function|number)`: συνάρτηση προσπέλασης που υποδεικνύει τη γωνία περιστροφής (σε μοίρες) για κάθε λέξη. Δέχεται επίσης μια σταθερά αντί για μια συνάρτηση. Default: `word => word.value % 360`.
* __updateThreshold__ | `number`: μέγεθος παρτίδας νέων εγγράφων στα "δεδομένα" πριν από την εκ νέου απόδοση του νέφους λέξεων. Default: `5`.
* __stopwords__ | `array`: πρόσθετες λέξεις που πρέπει να αφαιρεθούν πριν από την απόδοση του νέφους λέξεων. Default: `[]`.
* __triggerRender__ | `boolean`: επαναπροβολή όταν ανταλλάσσεται το σύνολο δεδομένων. Default: `true`.
* __style__ | `object`: Στυλ γραμμής CSS. Default: `{}`.
* __width__ | `number`: πλάτος του σύννεφου λέξεων (σε px). Default: `700`.


## Παραδείγματα

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'With Stopwords', value: 'withStopwords' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<WordCloud data={[
  'This is my holiday', 
  'Breakfast is great', 
  'My house is my castle', 
  'A castle for a kingdom', 
  'I am longing for breakfast',
  'Having rolls for breakfast is a must',
  'A horse for a kingdom',
  'Mom like rolls',
  'Orange juice is fine',
  'Where is the butter',
  'I am looking for a spoon',
  'Coffee for coffee drinkers',
  'Tea for the sleepy ones',
  'The sleepy, sloppy, crazy King lives in a castle',
  'A house for everybody'
]} />
```
</TabItem>

<TabItem value="withStyle">

```jsx live
<WordCloud 
  style={{ boxShadow: '10px 0 25px black' }}
  rotate={-7}
  data={[
    'This is my castle', 
    'Breakfast is great', 
    'My house is my castle', 
    'A castle for a kingdom', 
    'I am longing for breakfast',
    'Having rolls for breakfast is a must',
    'A horse for a kingdom',
    'Mom like rolls',
    'Orange juice is a castle drink',
    'Where is the butter',
    'I am looking for a castle',
    'Coffee for coffee drinkers',
    'Tea for the sleepy ones',
    'The sleepy, sloppy, crazy King lives in a castle',
    'A holiday for everybody'
]} />
```
</TabItem>

<TabItem value="withStopwords">

```jsx live
<WordCloud 
  stopwords={[ 'castle', 'crap', 'damn' ]}
  data={[
    'This is my holiday', 
    'Breakfast is great', 
    'My house is my castle', 
    'A castle for a kingdom', 
    'I am longing for breakfast',
    'Having rolls for breakfast is a must',
    'A horse for a kingdom',
    'Mom like rolls',
    'Orange juice is fine',
    'Where is the butter',
    'I am looking for a spoon',
    'Coffee for coffee drinkers',
    'Tea for the sleepy ones',
    'The sleepy, sloppy, crazy King lives in a castle',
    'A house for everybody',
    'castle castle castle castle castle castle castle castle castle castle',
    'crap crap crap crap crap crap crap damn damn damn dam'
]} />
```

</TabItem>

</Tabs>
