---
id: word-venn-diagram
title: Word Venn Diagram
sidebar_label: Word Venn Diagram
---

Ένα διάγραμμα venn που απεικονίζει τη συνύπαρξη λέξεων σε έγγραφα ενός παρεχόμενου πίνακα όρων-εισηγήσεων.

## Επιλογές

* __height__ | `number`: ύψος του διαγράμματος Venn σε pixels. Default: `350`.
* __nTexts__ | `number (required)`: αριθμός των πηγών από τις οποίες συγκεντρώθηκε το κείμενο. Default: `none`.
* __onClick__ | `function`: callback για το τι πρέπει να γίνει όταν γίνει κλικ στο "Draw Venn Diagram". Default: `onClick() {}`.
* __tdm__ | `array (required)`: "συστοιχία" που αντιπροσωπεύει έναν [πίνακα εγγράφων όρων](https://en.wikipedia.org/wiki/Document-term_matrix). Default: `none`.
* __vocabulary__ | `array (required)`: `array` με τη σειρά του πίνακα `tdm` που πέρασε, έτσι ώστε οι δείκτες να μπορούν να αντιστοιχούν στις λέξεις τους. Default: `none`.
* __width__ | `number`: πλάτος του διαγράμματος Venn σε pixels. Default: `600`.


## Παραδείγματα

```jsx live
<LearnWordVennDiagram vocabulary={[ 'hello', 'my', 'friend' ]} tdm={[{ "0": 1, "1": 1, "2": 1}, { "0": 1, "1": 0, "2": 1 }, { "0": 1, "1": 1, "2": 1}]} nTexts={2} />
```

