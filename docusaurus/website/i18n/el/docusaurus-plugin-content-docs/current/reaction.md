---
id: reaction 
title: Reaction
sidebar_label: Reaction
---

Εμφανίζει διαφορετικά στοιχεία ανάλογα με τις ενέργειες του χρήστη.

## Επιλογές

* __actionID__ | `string (required)`: ID του στοιχείου που πρέπει να παρακολουθείται. Default: `none`.
* __banner__ | `node`: προσαρμοσμένο μήνυμα που εμφανίζεται εάν ο χρήστης δεν έχει εκτελέσει ακόμη την ενέργεια. Default: `none`.
* __show__ | `(object|function)`: πίνακας κατακερματισμού των συστατικών που θα εμφανιστούν δεδομένων των διαφορετικών απαντήσεων (εάν κανένα "κλειδί" δεν ταιριάζει με την απάντηση, θα εμφανιστεί η τιμή που αντιστοιχεί στο "προεπιλεγμένο" κλειδί, εάν έχει οριστεί) ή μια συνάρτηση που επιστρέφει ένα συστατικό προς εμφάνιση (μοναδικό όρισμα της συνάρτησης είναι το τελευταίο αποτέλεσμα). Default: `{}`.


## Παραδείγματα

```jsx live
<div>
	<NumberQuestion
		question="What is the first prime number?"
		id="question-with-reaction"
	/>
	<Reaction actionID="question-with-reaction" show={( answer ) => {
		if ( answer === 2 ) {
			return <p>Awesome, that was correct.</p>
		}
		return <p>You might want to review the following video on prime numbers:
			<VideoPlayer url="https://www.youtube.com/watch?v=mIStB5X4U8M" />
		</p>;
	}} />
</div>
``` 

