// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import { withTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import { scaleOrdinal, schemeCategory10, select } from 'd3';
import cloud from 'd3-cloud';
import saveAs from '@isle-project/utils/file-saver';
import absdiff from '@stdlib/math/base/utils/absolute-difference';
import min from '@stdlib/math/base/special/min';
import removePunctuation from '@stdlib/string/remove-punctuation';
import replace from '@stdlib/string/replace';
import tokenize from '@stdlib/nlp/tokenize';
import contains from '@stdlib/assert/contains';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import lowercase from '@stdlib/string/lowercase';
import objectEntries from '@stdlib/utils/entries';
import isArray from '@stdlib/assert/is-array';
import PINF from '@stdlib/constants/float64/pinf';
import NINF from '@stdlib/constants/float64/ninf';
import STOPWORDS_EN from '@stdlib/datasets/stopwords-en';
import STOPWORDS_FIN from '@stdlib/datasets/savoy-stopwords-fin';
import STOPWORDS_FR from '@stdlib/datasets/savoy-stopwords-fr';
import STOPWORDS_GER from '@stdlib/datasets/savoy-stopwords-ger';
import STOPWORDS_IT from '@stdlib/datasets/savoy-stopwords-it';
import STOPWORDS_POR from '@stdlib/datasets/savoy-stopwords-por';
import STOPWORDS_SP from '@stdlib/datasets/savoy-stopwords-sp';
import STOPWORDS_SWE from '@stdlib/datasets/savoy-stopwords-swe';
import Tooltip from '@isle-project/components/tooltip';
import { svgString2Image, getSVGString } from '@isle-project/utils/svg';
import { withPropCheck } from '@isle-project/utils/prop-check';


// VARIABLES //

const fill = scaleOrdinal( schemeCategory10 );
const RE_NUMBERS = /[+-]?[\d.]+e?[+-]?\d*/g;
const BUTTON_STYLE = {
	position: 'absolute',
	right: -12,
	top: -12,
	zIndex: 2
};


// FUNCTIONS //

/**
 * Returns a list of stopwords.
 *
 * @private
 * @param {string} language - language code
 * @returns {Array} stopwords
 */
const generateStopwords = ( language ) => {
	let stopwords;
	switch ( language ) {
		default:
		case 'en':
			stopwords = STOPWORDS_EN();
		break;
		case 'fin':
			stopwords = STOPWORDS_FIN();
		break;
		case 'fr':
			stopwords = STOPWORDS_FR();
		break;
		case 'ger':
			stopwords = STOPWORDS_GER();
		break;
		case 'it':
			stopwords = STOPWORDS_IT();
		break;
		case 'por':
			stopwords = STOPWORDS_POR();
		break;
		case 'sp':
			stopwords = STOPWORDS_SP();
		break;
		case 'swe':
			stopwords = STOPWORDS_SWE();
		break;
	}
	return stopwords;
};

/**
 * Guess whether two arrays are equal.
 *
 * @private
 * @param {Array} x - first array
 * @param {Array} y - second array
 * @returns {boolean} boolean giving a guess of whether the two arrays are equal after checking the first ten values
 */
function guessEquality( x, y ) {
	let nobs = min( x.length, 10 );
	for ( let i = 0; i < nobs; i++ ) {
		if ( x[ i ] !== y[ i ] ) {
			return false;
		}
	}
	return true;
}

/**
 * Returns a bag-of-words representation of a set of texts.
 *
 * @private
 * @param {Object} options - function options
 * @param {Array} options.texts - array of texts
 * @param {Array} options.stopwords - array of stopwords
 * @param {number} options.minCount - minimum word frequency
 * @param {Array} options.customStopwords - array of custom stopwords
 * @returns {Object} bag-of-words representation with `min` and `max` counts and an array of word counts
 */
const createBagOfWords = ({ texts, stopwords, minCount, customStopwords }) => {
	if ( !isArray( texts ) || texts.length === 0 ) {
		return { min: PINF, max: NINF, wordCounts: [] };
	}
	stopwords = stopwords.concat( customStopwords );
	let tokens = [];
	for ( let i = 0; i < texts.length; i++ ) {
		let text = texts[ i ];
		if ( isString( text ) ) {
			text = removePunctuation( text );
			text = replace( text, RE_NUMBERS, ' ' );
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
	if ( !minCount ) {
		return { min, max, wordCounts };
	}
	const filtered = [];
	for ( let i = 0; i < wordCounts.length; i++ ) {
		if ( wordCounts[ i ].value >= minCount ) {
			filtered.push( wordCounts[ i ] );
		}
	}
	return { min, max, wordCounts: filtered };
};


// MAIN //

/**
* A word cloud component built on top of [d3-cloud](https://github.com/jasondavies/d3-cloud).
*
* @property {Array} data - either an array of texts from which to generate the word cloud or, if `precalculated` is set to `true`, and array of word count objects (with `text` and `value` keys)
* @property {Function} font - accessor function specifying the font face for each word. Also accepts a constant instead of a function
* @property {Function} fontSizeMapper - accessor function indicating the font size for each word. Defaults to `( count - min + 1 ) / ( max - min + 6 ) * 30.0 + 12.0`, where `min` and `max` denote the minimum and maximum word `counts`, respectively
* @property {boolean} precalculated - controls whether the word cloud expects an array of precalculated word counts or will generate them for given texts
* @property {(Function|number)} rotate - accessor function indicating the rotation angle (in degrees) for each word. Also accepts a constant instead of a function
* @property {number} width - width of the word cloud (in px)
* @property {number} height - height of the word cloud (in px)
* @property {string} language - language identifier (determines the stopwords to be removed)
* @property {number} minCount - if set, only include words that appear more than `minCount` times in the given data
* @property {boolean} saveButton - controls whether to display a button for saving the word cloud as an image
* @property {(Function|number)} padding - accessor function or constant indicating the numerical padding for each word
* @property {number} updateThreshold - batch size of new documents in `data` before the word cloud is re-rendered
* @property {boolean} triggerRender - rerender when the data set is exchanged
* @property {Array} stopwords - additional stopwords to remove before rendering the word cloud
* @property {Object} style - CSS inline styles
* @property {Function} onClick - callback function invoked when a word on the word cloud is clicked
*/
class Wrapper extends Component {
	constructor( props ) {
		super( props );

		let stopwords = generateStopwords( props.language );
		if ( !props.precalculated ) {
			const { min, max, wordCounts } = createBagOfWords({
				texts: props.data,
				stopwords,
				minCount: props.minCount,
				customStopwords: props.stopwords
			});
			this.state = {
				wordCounts,
				min,
				max,
				stopwords,
				nRecords: props.data.length
			};
		} else {
			this.state = {
				wordCounts: props.data.slice(),
				stopwords,
				nRecords: props.data.length
			};
		}
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		let newState;
		if ( !nextProps.precalculated ) {
			const { min, max, wordCounts } = createBagOfWords({
				texts: nextProps.data,
				stopwords: prevState.stopwords,
				minCount: nextProps.minCount,
				customStopwords: nextProps.stopwords
			});
			newState = {
				wordCounts,
				min,
				max,
				stopwords: prevState.stopwords
			};
		} else {
			newState = {
				wordCounts: nextProps.data.slice()
			};
		}
		return newState;
	}

	componentDidMount() {
		this.addWordCloud();
	}

	shouldComponentUpdate( nextProps ) {
		const diff = absdiff( nextProps.data.length, this.state.nRecords );
		if (
			diff >= this.props.updateThreshold ||
			( this.props.triggerRender && !guessEquality( nextProps.data, this.props.data ) ) ||
			nextProps.stopwords.length !== this.props.stopwords.length
		) {
			return true;
		}
		return false;
	}

	componentDidUpdate() {
		if ( this.state.wordCounts.length > 0 ) {
			this.updateWordCloud();
		}
		if ( this.state.nRecords !== this.props.data.length ) {
			this.setState({
				nRecords: this.props.data.length
			});
		}
	}

	fontSizeMapper = ( word ) => {
		const { min, max } = this.state;
		if ( max === min ) {
			return 50.0;
		}
		return ( word.value - min + 1 ) / ( max - min + 6 ) * 30.0 + 12.0;
	}

	addWordCloud() {
		const fontSizeMapper = this.props.fontSizeMapper || this.fontSizeMapper;
		select( findDOMNode( this ) )
			.selectAll( 'svg' )
			.remove();
		this.svg = select( findDOMNode( this ) )
			.append( 'svg' )
				.attr( 'width', this.props.width )
				.attr( 'height', this.props.height )
				.style( 'background', '#ffffff' );
		this.svg.append( 'g' )
			.attr( 'transform', `translate(${this.props.width / 2},${this.props.height / 2})` ); // eslint-disable-line i18next/no-literal-string
		this.cloudLayout = cloud()
			.size([ this.props.width, this.props.height ])
			.font( this.props.font )
			.words( this.state.wordCounts )
			.padding( this.props.padding )
			.rotate( this.props.rotate )
			.fontSize( fontSizeMapper )
			.on( 'end', words => {
				const text = this.svg.select( 'g' )
					.selectAll( 'text' )
					.data( words, d => d.text );

				text.transition()
					.duration(750)
					.style( 'font-size', d => `${d.size}px` )
					.attr( 'transform',
						d => `translate(${[d.x, d.y]})rotate(${d.rotate})`
					);

				text.enter()
					.append( 'text' )
					.style( 'font-size', d => `${d.size}px` )
					.style( 'font-family', this.props.font )
					.style( 'fill', ( d, i ) => fill( i ) )
					.style( 'cursor', 'pointer' )
					.attr( 'text-anchor', 'middle' )
					.attr( 'transform',
						d => `translate(${[d.x, d.y]})rotate(${d.rotate})`
					)
					.text( d => d.text )
					.on( 'click', this.props.onClick );

				text.exit()
					.transition()
					.duration( 750 )
					.style( 'fill-opacity', 1.0e-6 )
					.remove();
			})
			.start();
	}

	updateWordCloud( ){
		const wordCounts = this.state.wordCounts;
		this.cloudLayout
			.stop()
			.words( wordCounts.map( d => {
				return { text: d.text, value: d.value };
			}))
			.start();
	}

	saveToPNG = () => {
		const { width, height } = this.props;
		const svgString = getSVGString( this.svg.node() );
		svgString2Image( svgString, 2.0*width, 2.0*height, save );

		let name;
		if ( this.props.id ) {
			name = this.props.id+'.png';
		} else {
			name = 'wordcloud.png';
		}
		function save( dataBlob ) {
			saveAs( dataBlob, name );
		}
	}

	render() {
		return ( <div style={{ width: this.props.width, position: 'relative', ...this.props.style }} >
			{ this.props.saveButton && this.state.wordCounts.length > 0 ? <Tooltip placement="left" tooltip={this.props.t('save-word-cloud')} >
				<Button
					size="sm" variant="light" onClick={this.saveToPNG}
					style={BUTTON_STYLE} aria-label={this.props.t('save-word-cloud')}
				>
					<div className="fa fa-save" />
				</Button>
			</Tooltip> : null }
		</div> );
	}
}


// PROPERTIES //

Wrapper.defaultProps = {
	data: [],
	font: 'serif',
	fontSizeMapper: null,
	precalculated: false,
	rotate: word => word.value % 360,
	width: 700,
	height: 600,
	language: 'en',
	minCount: null,
	saveButton: true,
	updateThreshold: 5,
	stopwords: [],
	triggerRender: true,
	padding: 5,
	onClick() {},
	style: {}
};

Wrapper.propTypes = {
	data: PropTypes.array,
	font: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.func
	]),
	fontSizeMapper: PropTypes.func,
	height: PropTypes.number,
	language: PropTypes.oneOf([
		'en', 'fin', 'fr', 'ger', 'it', 'por', 'sp', 'swe'
	]),
	minCount: PropTypes.number,
	saveButton: PropTypes.bool,
	onClick: PropTypes.func,
	padding: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.number
	]),
	precalculated: PropTypes.bool,
	rotate: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.number
	]),
	updateThreshold: PropTypes.number,
	stopwords: PropTypes.array,
	triggerRender: PropTypes.bool,
	style: PropTypes.object,
	width: PropTypes.number
};


// EXPORTS //

export default withTranslation( 'word-cloud' )( withPropCheck( Wrapper ) );
