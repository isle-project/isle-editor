// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import * as venn from 'venn.js';
import * as d3 from 'd3';
import isStringArray from '@stdlib/assert/is-string-array';
import lowercase from '@stdlib/string/lowercase';
import trim from '@stdlib/string/trim';
import copy from '@stdlib/utils/copy';
import NumberInput from '@isle-project/components/input/number';
import TextInput from '@isle-project/components/input/text';
import { withPropCheck } from '@isle-project/utils/prop-check';
import { withActionLogger } from '@isle-project/session/action_logger.js';
import './venn_diagram.css';


// MAIN //

/**
* A venn diagram visualizing co-occurrence of words in documents of a supplied term-document matrix.
*
* @property {Array} tdm - `array` that is to represent a [term document matrix](https://en.wikipedia.org/wiki/Document-term_matrix)
* @property {number} nTexts - number of sources from which text was gathered
* @property {number} vocabulary - `array` in the order of the `tdm` array passed so that the indices may be matches to their words
* @property {number} height - height of the Venn diagram in pixels
* @property {number} width - width of the Venn diagram in pixels
* @property {Function} onClick - callback for what is to be done when "Draw Venn Diagram" is clicked
*/
class WordVennDiagram extends Component {
	constructor( props ) {
		super( props );

		const tdm = props.tdm.map( obj => {
			const out = new Array( props.nTexts );
			for ( let i = 0; i < out.length; i++ ) {
				out[ i ] = obj[ i ] ? obj[ i ] : 0;
			}
			return out;
		});
		this.state = {
			disabled: true,
			words: new Array( 1 ),
			indices: new Array( 1 ),
			freqs: [],
			minCount: [ 1 ],
			nWords: 1,
			tdm
		};
	}

	componentDidUpdate( prevProps, prevState ) {
		let shouldUpdate = false;
		for ( let i = 0; i < this.state.nWords; i++ ) {
			if ( prevState.words[ i ] !== this.state.words[ i ]) {
				shouldUpdate = true;
			}
		}
		if ( shouldUpdate ) {
			const newIndices = new Array( this.state.nWords );
			const { vocabulary } = this.props;
			for ( let i = 0; i < this.state.nWords; i++ ) {
				for ( let j = 0; j < vocabulary.length; j++ ) {
					if ( vocabulary[ j ] === this.state.words[ i ]) {
						newIndices[ i ] = j;
					}
				}
			}
			this.setState({
				indices: newIndices
			});
		}
	}

	wordChangeFactory( idx ) {
		return ( value ) => {
			const newWords = Array.prototype.slice.call( this.state.words );
			newWords[ idx ] = lowercase( trim( value ) ) || null;
			this.setState({
				words: newWords,
				disabled: !isStringArray( newWords )
			});
		};
	}

	drawPlot = () => {
		const sets = this.state.freqs;
		const chart = d3.select( '#'+this.props.id+'-venn' );
		chart.select( 'svg' ).remove();

		let tooltip;
		if ( !this.state.tooltip ) {
			tooltip = d3.select( 'body' ).append( 'div' )
				.attr( 'class', 'venntooltip' );
		} else {
			tooltip = this.state.tooltip;
		}
		let vennDiagram = venn
			.VennDiagram()
			.width( this.props.width )
			.height( this.props.height );
		chart.datum( sets ).call( vennDiagram );
		chart.selectAll( 'g' )
			.on( 'mouseover', function onMouseOver( d, i ) {
				venn.sortAreas( chart, d );
				tooltip.transition()
					.duration( 400 )
					.style( 'opacity', 0.9 );
				tooltip.text( d.sets.join( ' and ' ) + ' (' + d.size + ')' );
				const selection = d3.select( this ) // eslint-disable-line @babel/no-invalid-this
					.transition( 'tooltip' )
					.duration( 400 );
				selection.select( 'path' )
					.style( 'stroke-width', 3 )
					.style( 'stroke', 'black' )
					.style( 'fill-opacity', d.sets.length === 1 ? 0.4 : 0.1 )
					.style( 'stroke-opacity', 1 );
			})
			.on( 'mousemove', function onMouseMove() {
				tooltip.style( 'left', ( d3.event.pageX ) + 'px' )
					.style( 'top', ( d3.event.pageY - 28 ) + 'px' );
			})
			.on( 'mouseout', function onMouseOut( d, i ) {
				tooltip
					.transition()
					.duration( 400 )
					.style( 'opacity', 0 );
				const selection = d3.select( this ) // eslint-disable-line @babel/no-invalid-this
					.transition( 'tooltip' )
					.duration( 400 );
				selection.select( 'path' )
					.style( 'fill-opacity', d.sets.length === 1 ? 0.25 : 0.0 )
					.style( 'stroke-opacity', 0 );
			});
		this.setState({
			tooltip
		});
	};

	calculateWordFrequency = ( i ) => {
		const { indices, minCount, tdm, words } = this.state;
		const word = words[ i ];
		const idx = indices[ i ];
		const docIndices = [];
		let freq = 0;
		if ( tdm[ idx ]) {
			const counts = tdm[ idx ].map( x => x >= minCount[ i ] ? 1 : 0 );
			for ( let i = 0; i < counts.length; i++ ) {
				freq += counts[ i ];
				if ( counts[ i ] === 1 ) {
					docIndices.push( i );
				}
			}
		}
		return { sets: [ word ], size: freq, docIndices: docIndices };
	};

	calculateJointAB( i, j ) {
		const { indices, minCount, tdm, words } = this.state;
		const idxA = indices[ i ];
		const idxB = indices[ j ];
		let freq = 0;
		if ( tdm[ idxA ] && tdm[ idxB ]) {
			const countA = tdm[ idxA ].map( x => x >= minCount[ i ] ? 1 : 0 );
			const countB = tdm[ idxB ].map( x => x >= minCount[ j ] ? 1 : 0 );
			for ( let i = 0; i < countA.length; i++ ) {
				if ( countA[ i ] && countB[ i ]) {
					freq += 1;
				}
			}
		}
		return { sets: [ words[ i ], words[ j ] ], size: freq };
	}

	calculateJointABC( i, j, k ) {
		const { indices, minCount, tdm, words } = this.state;
		const idxA = indices[ i ];
		const idxB = indices[ j ];
		const idxC = indices[ k ];
		let freq = 0;
		if ( tdm[ idxA ] && tdm[ idxB ] && tdm[ idxC ]) {
			const countA = tdm[ idxA ].map( x => x >= minCount[ i ] ? 1 : 0 );
			const countB = tdm[ idxB ].map( x => x >= minCount[ j ] ? 1 : 0 );
			const countC = tdm[ idxC ].map( x => x >= minCount[ k ] ? 1 : 0 );
			for ( let i = 0; i < countA.length; i++ ) {
				if ( countA[ i ] && countB[ i ] && countC[ i ]) {
					freq += 1;
				}
			}
		}
		return { sets: [ words[ i ], words[ j ], words[ k ] ], size: freq };
	}

	wordNumberClickFactory = ( i ) => {
		return () => {
			this.setState({
				nWords: i+1,
				disabled: true,
				words: new Array( i+1 ),
				minCount: new Array( i+1 ).fill( 1 )
			});
		};
	};

	updatePlot = () => {
		const newFreqs = [];
		for ( let i = 0; i < this.state.nWords; i++ ) {
			const freq = this.calculateWordFrequency( i );
			newFreqs.push( freq );
		}
		if ( this.state.nWords === 2 ) {
			const freq = this.calculateJointAB( 0, 1 );
			newFreqs.push( freq );
		} else if ( this.state.nWords === 3 ) {
			let freq = this.calculateJointAB( 0, 1 );
			newFreqs.push( freq );
			freq = this.calculateJointAB( 0, 2 );
			newFreqs.push( freq );
			freq = this.calculateJointAB( 1, 2 );
			newFreqs.push( freq );
			freq = this.calculateJointABC( 0, 1, 2 );
			newFreqs.push( freq );
		}
		this.setState({
			freqs: newFreqs
		}, () => {
			this.drawPlot();
			this.props.onClick( this.state );
		});
	};

	render() {
		const { t } = this.props;
		const inputs = [];
		for ( let i = 0; i < this.state.nWords; i++ ) {
			inputs[ i ] = <div key={`outer-${i}`} className="d-grid gap-1" >
				<TextInput
					key={`text-${i}`}
					legend={`${t('word')} ${i+1}`}
					defaultValue={this.state.words[ i ]}
					width={120}
					onChange={this.wordChangeFactory( i )}
				/><NumberInput
					key={`number-${i}`}
					legend={t('min-of-times')}
					defaultValue={1}
					max={50}
					min={1}
					step={1}
					onChange={( value ) => {
						const newMinCount = copy( this.state.minCount );
						newMinCount[ i ] = value;
						this.setState({
							minCount: newMinCount
						});
					}}
				/>
			</div>;
		}
		return (
			<Fragment>
				<Card>
					<Card.Header as="h4">
						{t('settings')}
					</Card.Header>
					<Card.Body>
						<p>
							<span className="title">{t('number-of-words')}</span>
						</p>
						<ButtonGroup>
							{[ t('one'), t('two'), t('three') ].map( ( w, i ) => (<Button key={i} variant={( i === this.state.nWords-1 ) ? 'success' : 'default'} onClick={this.wordNumberClickFactory( i )}>
								{w}
							</Button>))}
						</ButtonGroup>
						{inputs}
						<Button onClick={this.updatePlot} disabled={this.state.disabled}>{t('draw-venn-diagram')}</Button>
					</Card.Body>
				</Card>
				<br />
				<Card>
					<Card.Header as="h4">
						{t('venn-diagram')}
					</Card.Header>
					<Card.Body style={{ minHeight: 200 }}>
						<span style={{
							position: 'absolute',
							right: 40,
							top: 50
						}}>{t('total-texts')}: {this.props.nTexts}</span>
						<div id={`${this.id}-venn`}></div>
					</Card.Body>
				</Card>
			</Fragment>
		);
	}
}


// PROPERTIES //

WordVennDiagram.propTypes = {
	height: PropTypes.number,
	nTexts: PropTypes.number.isRequired,
	onClick: PropTypes.func,
	tdm: PropTypes.array.isRequired,
	vocabulary: PropTypes.array.isRequired,
	width: PropTypes.number
};


// DEFAULT PROPERTIES //

WordVennDiagram.defaultProps = {
	height: 350,
	onClick() {},
	width: 600
};


// EXPORTS //

export default withActionLogger( 'WORD_VENN_DIAGRAM' )( withTranslation( 'learn/venn-diagram' )( withPropCheck( WordVennDiagram ) ) );
