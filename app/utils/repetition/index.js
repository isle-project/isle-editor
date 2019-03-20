// MAIN //

/**
*/
class Repetition extends Array {
	constructor( props ) {
		super( props );
		this.props = {
			frequency: 3,
			noElements: 100,
			noDisplayed: 4,
			start: 0,
			variation: 0.1,
			...props
		};
		console.log( this.props );

		this.list = [];
		this.remaining = [];
		this.done = new Set();

		console.log( 'Create repeater...' );
		this.createList();
	}

	nextElement( actNdx ) {
		console.log( 'Advance to the next element: '+this.remaining[ 0 ] );
		var x = this.remaining.shift();
		this[ actNdx ] = x;
	}

	// set random element
	randomElement( x ) {
		var el = parseInt( Math.random() * this.remaining.length, 10 );
		console.log( 'Set to randomly selected value ' + this.remaining[ el ] );
		this[ x ] = this.remaining[ el ];
		this.remaining.splice(el, 1);
	}

	// sets element
	setElement( x ) {
		console.log( 'Change element at position: '+x );
		let selected = this[ x ];
		console.log( selected );
		const actual = this.list[ selected ];
		actual.ct += 1;
		if ( actual.ct === this.props.frequency ) {
			this.done.add( selected );
			var rd = Math.random();
			if ( rd < this.props.variation ) {
				this.randomElement( x );
			}
			else {
				this.nextElement( x );
			}
		}
		return this;
	}

	// create list
	createList() {
		for ( let i = 0; i < this.props.noElements; i++) {
			this.list.push({
				ct: 0,
				id: i,
				done: false
			});
		}
		if ( this.props.start > 0 ) {
			if ( this.props.start + this.props.noDisplayed < this.props.noElements ) {
				for ( let i = 0; i < this.props.noDisplayed; i++ ) {
					const no = i + this.props.start;
					this[ i ] = this.list[ no ].id;
				}
				for ( let i = this.props.noDisplayed; i < this.props.noElements; i++ ) {
					const no = i + this.props.start;
					this.remaining.push( no );
				}
				for ( let i = 0; i < this.props.start; i++ ) {
					this.remaining.push( i );
				}
			}
		} else {
			for ( let i = 0; i < this.props.noDisplayed; i++) {
				this[ i ] = this.list[ i ].id;
			}
			for ( let i = this.props.noDisplayed; i < this.props.noElements; i++ ) {
				this.remaining.push( i );
			}
		}
		console.log( this.remaining );
	}
}


// EXPORTS //

export default Repetition;

