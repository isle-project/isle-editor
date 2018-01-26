// MODULES //

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import WordCloud from 'react-d3-cloud';
import removePunctuation from '@stdlib/string/remove-punctuation';
import tokenize from '@stdlib/nlp/tokenize';
import contains from '@stdlib/assert/contains';
import isString from '@stdlib/assert/is-string';
import lowercase from '@stdlib/string/lowercase';
import objectEntries from '@stdlib/utils/entries';
import isArray from '@stdlib/assert/is-array';
import PINF from '@stdlib/constants/math/float64-pinf';
import NINF from '@stdlib/constants/math/float64-ninf';
import STOPWORDS_EN from '@stdlib/datasets/stopwords-en';


// VARIABLES //

const stopwords = STOPWORDS_EN();


// MAIN //

class Wrapper extends Component {
	constructor( props ) {
		super( props );

		if ( !props.precalculated ) {
			const { min, max, wordCounts } = this.createBagOfWords( props.data );
			this.state = {
				wordCounts,
				min,
				max
			};
		} else {
			this.state = {
				wordCounts: props.data
			};
		}
	}

	componentWillReceiveProps( nextProps ) {
		if (
			nextProps.data !== this.props.data
		) {
			const newState = this.createBagOfWords( nextProps.data );
			this.setState( newState );
		}
	}

	shouldComponentUpdate( nextProps ) {
		if ( nextProps.data !== this.props.data ) {
			return true;
		}
		return false;
	}

	createBagOfWords = ( texts ) => {
		if ( !isArray( texts ) || texts.length === 0 ) {
			return { min: PINF, max: NINF, wordCounts: []};
		}
		let tokens = [];
		for ( let i = 0; i < texts.length; i++ ) {
			let text = texts[ i ];
			if ( isString( text ) ) {
				text = removePunctuation( text );
				let newTokens = tokenize( text );
				tokens = tokens.concat( newTokens );
			}
		}
		for ( let i = 0; i < tokens.length; i++ ) {
			tokens[ i ] = lowercase( tokens[ i ] );
		}
		for ( let i = tokens.length; i > 0; i-- ) {
			if ( tokens[i] && contains( stopwords, lowercase( tokens[i] ) ) ) {
				tokens.splice( i, 1 );
			}
		}
		let bagOfWords = {};
		for ( let i = 0; i < tokens.length; i++ ) {
			if ( bagOfWords[ tokens[ i ] ] ) {
				bagOfWords[ tokens[ i ] ] += 1;
			} else {
				bagOfWords[ tokens[ i ] ] = 1;
			}
		}
		let max = NINF;
		let min = PINF;
		const wordCounts = objectEntries( bagOfWords ).map( arr => {
			if ( arr[ 1 ] > max ) {
				max = arr[ 1 ];
			}
			if ( arr[ 1 ] < min ) {
				min = arr[ 1 ];
			}
			return {
				text: arr[ 0 ],
				value: arr[ 1 ]
			};
		});
		return { min, max, wordCounts };
	}

	fontSizeMapper = ( word ) => {
		const { min, max } = this.state;
		return ( word.value - min ) / ( max - min ) * 36.0 + 14.0;
	}

	render() {
		if ( this.state.wordCounts.length === 0 ) {
			return null;
		}
		return (
			<WordCloud
				data={this.state.wordCounts}
				fontSizeMapper={this.fontSizeMapper}
				rotate={this.props.rotate}
				width={this.props.width}
				height={this.props.height}
			/>
		);
	}
}


// DEFAULT PROPERTIES //

Wrapper.defaultProps = {
	data: [],
	precalculated: false,
	rotate: word => word.value % 360,
	width: 700,
	height: 600
};


// PROPERTY TYPES //

Wrapper.propTypes = {
	data: PropTypes.array,
	height: PropTypes.number,
	precalculated: PropTypes.bool,
	rotate: PropTypes.func,
	width: PropTypes.number
};


// EXPORTS //

export default Wrapper;
