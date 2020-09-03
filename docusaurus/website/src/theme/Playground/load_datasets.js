import { json } from 'd3';

json( 'https://isle.heinz.cmu.edu/data-explorers_heartdisease.json' ).then( res => {
	global.heartdisease = res;
});
