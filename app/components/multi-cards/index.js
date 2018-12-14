// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import copy from '@stdlib/utils/copy';
import FlippableCard from 'components/flippable-card';
import SessionContext from 'session/context.js';
import VoiceInput from 'components/input/voice';
import Memory from './memory.js';
import Bingo from './bingo.js';


// VARIABLES //

const debug = logger( 'isle:multi-cards' );


// FUNCTIONS //

function falseArray( n ) {
	const arr = [];
	for ( let i = 0; i < n; i++ ) {
		arr.push( false );
	}
	return arr;
}


// MAIN //

/**
* An ISLE component that allows you to create and control multiple flippable cards (e.g. in a game of Memory).
*
* @property {Array<Object>} values - the values for the respective cards, input in an array that has entry fields for a `front` and `back` value. Such a value could be a string, but also a full fledged ISLE component
* @property {Array<Object>} cardStyles - allows to override the given styles. Handles objects with  `container`, `front` and `back` keys
* @property {string} game - multi-card games. Can be either `memory` or `bingo`.
* @property {string} language - voice recognition language identifier
* @property {Function} onChange - a function that receives the matrix of the flippable cards
* @property {boolean} oneTime - indicates whether the flip process may be executed just once
* @property {Object} animation - if set the component uses an entry animation; the object contains a name (like `anim-scale-up`) and a duration (like `1.7s` = 1.7 seconds)
*/
class MultiCards extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			cardList: falseArray( this.props.values.length ),
			shaking: []
		};
	}

	componentDidMount() {
		if ( this.props.game === 'memory' ) {
			this.Memory = new Memory( this.props.values, this.flipCard );
		}
		else if ( this.props.game === 'bingo' ) {
			this.Bingo = new Bingo( this.flipCard, this.shake );
		}
	}

	getCard( ndx ) {
		const id = this.props.id + '_' + ndx;
		const values = this.props.values;
		let front = 'front value not defined';
		let back = 'back value not defined';
		if ( values[ ndx ] ) {
			if ( values[ ndx ].front ) {
				front = values[ ndx ].front;
			}
			if ( values[ ndx ].back ) {
				back = values[ ndx ].back;
			}
		}
		const styles = copy( this.props.cardStyles );
		if ( this.state.shaking.includes( ndx ) ) {
			styles.container.animation = 'shake-top 1.2s';
		}
		return (
			<FlippableCard
				value={this.state.cardList[ ndx ]}
				cardStyles={styles}
				onChange={this.changeFactory( ndx )}
				oneTime={this.props.oneTime}
				id={id}
				key={ndx}
			>
				<div>{front}</div>
				<div>{back}</div>
			</FlippableCard>
		);
	}

	gameDraw( ndx ) {
		const item = this.props.values[ ndx ];
		if ( this.props.game === 'memory' ) {
			this.Memory.draw( item, ndx, this.resetCards );
		}
		else if ( this.props.game === 'bingo' ) {
			this.Bingo.draw( item, ndx, this.state.cardList );
		}
	}

	shake = ( list ) => {
		this.setState({
			shaking: list
		});
		setTimeout( () => {
			this.setState({
				shaking: []
			});
		}, 1300 );
	}

	flipCard = (ndx) => {
		debug( 'Flip card at index: ' + ndx );
		let matrix = this.state.cardList.slice( 0 );
		matrix[ndx] = !matrix[ndx];
		this.setState({
			cardList: matrix
		}, () => {
			this.props.onChange( matrix );
		});
	}

	resetCards = ( list ) => {
		setTimeout( () => {
			const arr = this.state.cardList.slice( 0 );
			for ( let i = 0; i < list.length; i++ ) {
				const n = list[i];
				arr[ n ] = !arr[ n ];
			}
			this.props.onChange( arr );
			this.setState({
				cardList: arr
			});
		}, 1500 );
	}

	changeFactory = ( ndx ) => {
		return ( value ) => {
			const matrix = this.state.cardList.slice( 0 );
			matrix[ ndx ] = value;
			this.setState({
				cardList: matrix
			}, () => {
				if (this.props.game !== void 0) this.gameDraw( ndx );
				this.props.onChange( this.state.cardList );
			});
		};
	}

	trigger = ( value ) => {
		debug( `Received text: ${value}:` );
		for ( let i = 0; i < this.props.values.length; i++ ) {
			const item = this.props.values[i];
			if ( item.voiceKey ) {
				const marker = item.voiceKey;
				const x = value.search( marker );
				if ( x !== -1 ){
					debug( `Received ${marker}. This should flip card number ${i}.` );
					this.changeFactory( i )( true );
				}
			}
		}
	}

	renderCards() {
		const list = [];
		let needVoice = false;
		for ( let i = 0; i < this.props.values.length; i++ ) {
			list.push( this.getCard( i ) );
			if ( this.props.values[ i ].voiceKey ) {
				needVoice = true;
			}
		}
		if ( needVoice ) {
			list.push( <VoiceInput
				mode="none" autorecord language={this.props.language}
				onSegment={this.trigger}
			/> );
		}
		return list;
	}

	render() {
		const style = {
			overflow: 'auto',
			...{
				animationName: this.props.animation.name,
				animationDuration: this.props.animation.duration
			}
		};

		return (
			<div style={style} >
				{this.renderCards()}
			</div>
		);
	}
}


// PROPERTIES //

MultiCards.propTypes = {
	animation: PropTypes.object,
	cardStyles: PropTypes.shape({
		container: PropTypes.object,
		front: PropTypes.object,
		back: PropTypes.object
	}),
	game: PropTypes.string,
	language: PropTypes.string,
	onChange: PropTypes.func,
	oneTime: PropTypes.bool,
	values: PropTypes.arrayOf( PropTypes.object )
};

MultiCards.defaultProps = {
	animation: {},
	cardStyles: {
		container: {},
		front: {},
		back: {}
	},
	game: null,
	onChange() {},
	language: 'en-US',
	oneTime: false,
	values: []
};

MultiCards.contextType = SessionContext;


// EXPORTS //

export default MultiCards;
