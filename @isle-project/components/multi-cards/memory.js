// MODULES //

import logger from 'debug';


// VARIABLES //

const debug = logger( 'isle:multi-cards:memory' );


// MAIN //

function MemoryGame(values, reset ) {
	this.pairs = [];
	this.drawCt = 0;
	this.counter = 0;
	this.solved = [];

	this.init = () => {
		this.values = values;
		for ( let i = 0; i < values.length; i++ ) {
			const item = values[ i ];
			if ( item.type !== void 0 ) {
				this.establishPairs( item.type );
			}
		}
	};

	this.resetGame = () => {
		this.solved = [];
		this.drawCt = 0;
		this.counter = 0;
		this.storedCard = null;
	};

	this.establishPairs = ( type ) => {
		let found = false;
		for ( let i = 0; i< this.pairs.length; i++ ) {
			const pair = this.pairs[ i ];
			if ( pair.first === type ) {
				found = true;
				pair.second = type;
			}
		}
		if ( found === false ) {
			const obj = { first: type };
			this.pairs.push( obj );
		}
	};

	this.checkPair = ( type, ndx, onSuccess ) => {
		if ( this.drawCt === 0 ){
			this.drawCt += 1;
			this.storedCard = { type: type, ndx: ndx };
		} else {
			this.drawCt = 0;
			if ( this.storedCard.type === type ) {
				this.solved.push( ndx );
				this.solved.push( this.storedCard.ndx );
				debug( 'Solved cards: ' + this.solved );
				this.checkSuccess( onSuccess );
				return true;
			}
			return false;
		}
	};

	this.checkSuccess = ( onSuccess ) => {
		this.counter += 1;
		if ( this.counter === this.pairs.length ) {
			const list = [];
			for ( let i = 0; i< this.pairs.length; i++ ) {
				list.push(i*2);
				list.push( (i*2) +1);
			}
			onSuccess( list );
			this.resetGame();
		}
	};

	this.checkDouble = ( ndx ) => {
		return ( this.drawCt === 1 && ndx === this.storedCard.ndx );
	};

	this.checkSolved = (ndx) => {
		let present = false;
		for ( let i = 0; i< this.solved.length; i++ ) {
			if ( ndx === this.solved[i] ) {
				present = true;
			}
		}
		return present;
	};

	this.draw = ( item, ndx, callback ) => {
		if ( item.type ) {
			if ( this.checkDouble(ndx) === true ) {
				debug( 'Card is already opened...' );
				reset( ndx );
				return null;
			}
			if ( this.checkSolved(ndx) === true ) {
				debug( 'Clicked on an already solved pair...' );
				reset( ndx );
				return null;
			}
			if ( this.checkPair( item.type, ndx, callback ) === false ) {
				debug( 'The two selected cards did not match...' );
				return callback( [ this.storedCard.ndx, ndx ] );
			}
		}
	};

	this.init();
	return this;
}


// EXPORTS //

export default MemoryGame;
