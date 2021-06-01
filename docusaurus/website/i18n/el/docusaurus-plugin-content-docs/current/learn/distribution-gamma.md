---
id: distribution-gamma
title: Gamma Distribution
sidebar_label: Gamma Distribution
---

Ένα συστατικό μάθησης για τον υπολογισμό πιθανοτήτων μιας κατανομής γάμμα.

## Επιλογές

* __domain__ | `object`: αντικείμενο των πινάκων "x" και "y" με τα σημεία έναρξης και λήξης για τον αντίστοιχο άξονα. Default: `none`.
* __scaleParameterization__ | `boolean`: ελέγχει αν θα χρησιμοποιηθεί η παραμετροποίηση που περιλαμβάνει μια παράμετρο σχήματος και κλίμακας αντί για σχήμα και ρυθμό. Default: `false`.
* __step__ | `(number|string)`: μέγεθος βήματος της εισόδου κύλισης. Default: `0.01`.
* __symbols__ | `boolean`: αν θα εμφανίζονται ελληνικά σύμβολα για τις παραμέτρους. Default: `true`.
* __tabs__ | `array<string>`: ποιες καρτέλες θα εμφανίζονται (είτε "μικρότερες", "μεγαλύτερες" ή "εύρος"). Default: `[
  'smaller',
  'greater',
  'range'
]`.
* __style__ | `object`: Στυλ γραμμής CSS. Default: `{}`.


## Παραδείγματα

```jsx live
<LearnGammaDistribution />
```

