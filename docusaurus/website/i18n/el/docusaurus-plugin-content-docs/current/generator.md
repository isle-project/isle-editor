---
id: generator
title: Generator
sidebar_label: Generator
---

Ένα στοιχείο για τη δημιουργία άλλων στοιχείων (π.χ. αυτόματα παραγόμενες ερωτήσεις).

## Επιλογές

* __autoStart__ | `boolean`: ελέγχει αν θα γίνεται αυτόματη κλήση της γεννήτριας μετά την τοποθέτηση. Default: `true`.
* __buttonLabel__ | `(string|node)`: ετικέτα για το κουμπί. Default: `'Generate'`.
* __onGenerate__ | `function (required)`: συνάρτηση που θα πρέπει να επιστρέψει ένα νέο συστατικό που θα εμφανιστεί στο μάθημα. Default: `none`.


## Παραδείγματα

[Adaptive Review Questions](https://isle.stat.cmu.edu/adaptive-review/questions/)
