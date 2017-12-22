// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, Panel } from 'react-bootstrap';
import * as venn from 'venn.js';
import * as d3 from 'd3';
import isStringArray from '@stdlib/assert/is-string-array';
import contains from '@stdlib/assert/contains';
import lowercase from '@stdlib/string/lowercase';
import randu from '@stdlib/math/base/random/randu';
import round from '@stdlib/math/base/special/round';
import copy from '@stdlib/utils/copy';
import NumberInput from 'components/input/number';
import TextInput from 'components/input/text';


// MAIN //

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
			tdm,
			id: 'venn'+round( randu()*1000 )
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
			const newWords = copy( this.state.words );
			newWords[ idx ] = lowercase( value ) || null;
			this.setState({
				words: newWords,
				disabled: !isStringArray( newWords ) && !contains( newWords, '' )
			});
		};
	}

	drawPlot = () => {
		var sets = this.state.freqs;
		var chart = d3.select( '#'+this.state.id );
		chart.select( 'svg' ).remove();

		var tooltip;
		if ( !this.state.tooltip ) {
			tooltip = d3.select( 'body' ).append( 'div' )
				.attr( 'class', 'venntooltip' );
		} else {
			tooltip = this.state.tooltip;
		}
		let vennDiagram = venn.VennDiagram();
		chart.datum( sets ).call( vennDiagram );
		chart.selectAll( 'g' )
			.on( 'mouseover', function onMouseOver( d, i ) {
				venn.sortAreas( chart, d );
				tooltip.transition().duration( 400 ).style( 'opacity', 0.9 );
				tooltip.text( d.sets.join( ' and ' ) + ' (' + d.size + ')' );
				var selection = d3.select( this ).transition( 'tooltip' ).duration( 400 );
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
				tooltip.transition().duration( 400 ).style( 'opacity', 0 );
				var selection = d3.select( this ).transition( 'tooltip' ).duration( 400 );
				selection.select( 'path' )
					.style( 'fill-opacity', d.sets.length === 1 ? 0.25 : 0.0 )
					.style( 'stroke-opacity', 0 );
			});
		this.setState({
			tooltip
		});
	}

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
	}

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
	}

	render() {
		const inputs = [];
		for ( let i = 0; i < this.state.nWords; i++ ) {
			inputs[ i ] = <div><TextInput
				legend={`Word ${i+1}`}
				defaultValue={this.state.words[ i ]}
				width={120}
				onChange={this.wordChangeFactory( i )}
			/><NumberInput
				legend="Min # of times "
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
			/></div>;
		}
		return (
			<div>
				<Panel header="Settings">
					<p>
						<label>Number of Words: </label>
					</p>
					<ButtonGroup>
						{[ 'One', 'Two', 'Three' ].map( ( w, i ) => (<Button key={i} bsStyle={( i === this.state.nWords-1 ) ? 'success' : 'default'} onClick={()=> {
							this.setState({
								nWords: i+1,
								disabled: true,
								words: new Array( i+1 ),
								minCount: new Array( i+1 ).fill( 1 )
							});
						}}>{w}</Button>))}
					</ButtonGroup>
					{inputs}
					<Button onClick={this.updatePlot} disabled={this.state.disabled}>Draw Venn Diagram</Button>
				</Panel>
				<Panel header="Venn Diagram" >
					<span style={{
						position: 'absolute',
						right: 40
					}}>Total # of Texts: {this.props.nTexts}</span>
					<div id={this.state.id}></div>
				</Panel>
			</div>
		);
	}
}


// PROPERTY TYPES //

WordVennDiagram.propTypes = {
	nTexts: PropTypes.number.isRequired,
	onClick: PropTypes.func,
	tdm: PropTypes.array.isRequired,
	vocabulary: PropTypes.array.isRequired
};


// DEFAULT PROPERTIES //

WordVennDiagram.defaultProps = {
	onClick(){}
};


// EXPORTS //

export default WordVennDiagram;
