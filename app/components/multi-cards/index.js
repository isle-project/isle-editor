// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlippableCard from 'components/flippable-card';
import SessionContext from 'session/context.js';
import VoiceInput from 'components/input/voice';

// MAIN //

/**
* An ISLE component that allows you to create and control multiple flippable cards (e.g. in a game of Memory).
*
* @property {Array<Object>} values - the values for the respective cards, input in an array that has entry fields for a `front` and `back` value. Such a value could be a string, but also a full fledged ISLE component
* @property {Array<Object>} cardStyles - allows to override the given styles. Handles objects with  `container`, `front` and `back` keys
* @property {Function} onChange - a function that receives the matrix of the flippable cards
* @property {boolean} oneTime - indicates whether the flip process may be executed just once
*/
class MultiCards extends Component {
	constructor( props ) {
		super( props );
		this.flippableCards = [];

		this.state = {
			cardMatrix: this.setMatrix()
		};
	}

	UNSAFE_componentWillMount() {
		this.createRefs();
	}

	componentDidMount() {
		if ( this.props.voiceID ) {
			this.register();
		}
		global.multicards = this;
	}

	createRefs() {
		for (var i = 0; i < this.props.values.length; i++) {
			var item = React.createRef();
			this.flippableCards.push( item );
		}
	}


	register() {
		const session = this.context;
		session.speechInterface.register({
			name: this.props.voiceID,
			ref: this,
			commands: [
				{
					command: 'flip',
					trigger: [ 'number'],
					text: true
				},
				{
					command: 'hide',
					trigger: [ 'close' ]
				}
			]
		});
	}

	setMatrix() {
		const matrix = [];
		for ( let i = 0; i < this.props.values.length; i++ ) {
			matrix.push( false );
		}
		return matrix;
	}


	getCard( ndx ) {
		const id = this.props.id + '_' + ndx;
		const values = this.props.values;
		let front = 'front value not defined';
		let back = 'back value not defined';
		let fc = this.flippableCards[ndx];

		if ( values[ndx] ) {
			if ( values[ndx].front ) {
				front = values[ndx].front;
			}
			if ( values[ndx].back ) {
				back = values[ndx].back;
			}
		}

		return (
			<FlippableCard
				ref={fc}
				parent={this}
				cardStyles={this.props.cardStyles}
				onChange={this.change}
				oneTime={this.props.oneTime}
				ndx={ndx}
				id={id}
			>
				<div>{front}</div>
				<div>{back}</div>
			</FlippableCard>
		);
	}

	change = ( ndx, value ) => {
		let matrix = this.state.cardMatrix.slice( 0 );
		matrix[ ndx ] = value;
		this.setState({
			cardMatrix: matrix
		}, () => {
			this.props.onChange( this.state.cardMatrix );
		});
	}

	getVoice() {
		return (
			<div>
			<VoiceInput
				placeholder="Start voice control"
				style={{ float: 'left', width: '45%', marginTop: 10 }}
				language={this.props.language}
				onSubmit={this.find}
				onFinalText={this.trigger}
				/>
			<hr></hr>
			</div>
		);
	}


	flip( ndx ) {
		let matrix = this.state.cardMatrix.slice( 0 );
		var actual = matrix[ ndx ];
		actual = !actual;
		console.log('should flip the card with the ndx' + ndx + ' - actual value ' + actual);
		var card = this.flippableCards[ndx].current;
		card.externalTrigger();
	}

	trigger = ( value ) => {
		for (var i = 0; i < this.props.values.length; i++) {
			var item = this.props.values[i];
			if (item.voiceKey) {
				var marker = item.voiceKey;
				var x = value.search( marker );
				if ( x !== -1 ){
					console.log(marker + ' - this should flip card number ' + i);
					this.flip(i);
				}
			}
		}
	}

	renderCards() {
		const list = [];
		if (this.props.voiceID) list.push( this.getVoice() );

		for ( let i = 0; i < this.props.values.length; i++ ) {
			list.push( this.getCard( i ) );
		}
		return list;
	}

	render() {
		return (
			<div>
				{this.renderCards()}
			</div>
		);
	}
}


// PROPERTIES //

MultiCards.propTypes = {
	cardStyles: PropTypes.shape({
		container: PropTypes.object,
		front: PropTypes.object,
		back: PropTypes.object
	}),
	language: PropTypes.string,
	onChange: PropTypes.func,
	oneTime: PropTypes.bool,
	values: PropTypes.arrayOf(PropTypes.object),
	voiceID: PropTypes.string
};

MultiCards.defaultProps = {
	cardStyles: {
		container: {},
		front: {},
		back: {}
	},
	onChange() {},
	language: 'en-US',
	oneTime: false,
	values: [],
	voiceID: null
};


MultiCards.contextType = SessionContext;

// EXPORTS //

export default MultiCards;
