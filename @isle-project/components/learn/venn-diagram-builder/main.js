/* eslint-disable @babel/no-invalid-this */

// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import * as venn from 'venn.js';
import * as d3 from 'd3';
import randu from '@stdlib/random/base/randu';
import round from '@stdlib/math/base/special/round';
import min from '@stdlib/math/base/special/min';
import NumberInput from '@isle-project/components/input/number';
import TextInput from '@isle-project/components/input/text';
import Dashboard from '@isle-project/components/dashboard';
import TeX from '@isle-project/components/tex';
import './venn_diagram_builder.css';


// MAIN //

/**
* A Venn diagram builder.
*
* @property {number} nobs - total number of observations
* @property {boolean} three - controls whether to display three circles
*/
class VennDiagramBuilder extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			id: 'venn'+round( randu()*1000 )
		};
	}

	generateTwoCategories( first, second, sizeA, sizeB, sizeAB ) {
		const { t } = this.props;
		const sets = [
			{ sets: [ first ], size: sizeA },
			{ sets: [ second ], size: sizeB },
			{ sets: [ first, second ], size: sizeAB }
		];
		const chart = d3.select( '#'+this.state.id );
		let tooltip;
		if ( !this.state.tooltip ) {
			tooltip = d3.select( 'body' ).append( 'div' )
				.attr( 'class', 'venn-builder-tooltip' );
		} else {
			tooltip = this.state.tooltip;
		}

		let vennDiagram;
		if ( !this.state.vennDiagram ) {
			vennDiagram = venn.VennDiagram();
		} else {
			vennDiagram = this.state.vennDiagram;
		}
		chart.datum( sets ).call( vennDiagram );
		chart.selectAll( 'g' )
			.on( 'mouseover', function onMouseOver( d, i ) {
				venn.sortAreas( chart, d );
				tooltip.transition().
					duration( 400 ).
					style( 'opacity', 0.9 );
				tooltip.text( d.sets.join( ` ${t('and')} ` ) + ' (' + d.size + ')' );
				const selection = d3.select( this ).
					transition( 'tooltip' ).
					duration( 400 );
				selection.select( 'path' )
					.style( 'stroke-width', 3 )
					.style( 'stroke', 'black' )
					.style( 'ill-opacity', d.sets.length === 1 ? 0.4 : 0.1 )
					.style( 'stroke-opacity', 1 );
			})
			.on( 'mousemove', function onMouseMove() {
				tooltip.style( 'left', ( d3.event.pageX ) + 'px' )
					.style( 'top', ( d3.event.pageY - 28 ) + 'px' );
			})
			.on( 'mouseout', function onMouseOut( d, i ) {
				tooltip.transition().
					duration( 400 ).
					style( 'opacity', 0 );
				const selection = d3.select( this ).
					transition( 'tooltip' ).
					duration( 400 );
				selection.select( 'path' )
					.style( 'fill-opacity', d.sets.length === 1 ? 0.25 : 0.0 )
					.style( 'stroke-opacity', 0 );
			});
		this.setState({
			first, second, vennDiagram, sizeA, sizeB, sizeAB, tooltip
		});
	}

	generateThreeCategories( first, second, third, sizeA, sizeB, sizeC, sizeAB, sizeBC, sizeAC, sizeABC ) {
		const { t } = this.props;
		const sets = [
			{ sets: [ first ], size: sizeA },
			{ sets: [ second ], size: sizeB },
			{ sets: [ third ], size: sizeC },
			{ sets: [ first, second ], size: sizeAB },
			{ sets: [ first, third ], size: sizeAC },
			{ sets: [ second, third ], size: sizeBC },
			{ sets: [ first, second, third ], size: sizeABC }
		];
		const chart = d3.select( '#'+this.state.id );

		let tooltip;
		if ( !this.state.tooltip ) {
			tooltip = d3.select( 'body' ).append( 'div' )
				.attr( 'class', 'venn-builder-tooltip' );
		} else {
			tooltip = this.state.tooltip;
		}

		let vennDiagram;
		if ( !this.state.vennDiagram ) {
			vennDiagram = venn.VennDiagram();
		} else {
			vennDiagram = this.state.vennDiagram;
		}
		chart.datum( sets ).call( vennDiagram );
		chart.selectAll( 'g' )
			.on( 'mouseover', function onMouseOver( d, i ) {
				venn.sortAreas( chart, d );
				tooltip.
					transition().
					duration( 400 ).
					style( 'opacity', 0.9 );
				tooltip.text( d.sets.join( ` ${t('and')} ` ) + ' (' + d.size + ')' );
				const selection = d3.select( this ).
					transition( 'tooltip' ).
					duration( 400 );
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
				tooltip.transition().
					duration( 400 ).
					style( 'opacity', 0 );
				const selection = d3.
					select( this ).
					transition( 'tooltip' ).
					duration( 400 );
				selection.select( 'path' )
					.style( 'fill-opacity', d.sets.length === 1 ? 0.25 : 0.0 )
					.style( 'stroke-opacity', 0 );
			});
		this.setState({
			first, second, third, vennDiagram, sizeA, sizeB, sizeC, sizeBC, sizeAB, sizeAC, sizeABC, tooltip
		});
	}

	render() {
		const { t } = this.props;
		let dashboard;
		if ( !this.props.three ) {
			const { first, second, sizeA, sizeB, sizeAB } = this.state;
			dashboard = <Dashboard
				title={t('venn-diagram-builder')}
				autoUpdate
				onGenerate={this.generateTwoCategories.bind( this )}
			>
				<TextInput
					legend={t('label-first-set')}
					defaultValue="A"
					width={120}
				/>
				<TextInput
					legend={t('label-second-set')}
					defaultValue="B"
					width={120}
				/>
				<NumberInput
					legend={<TeX raw={`|\\text{${first}}|`} />}
					defaultValue={12}
					step={1}
					min={0}
				/>
				<NumberInput
					legend={<TeX raw={`|\\text{${second}}|`} />}
					defaultValue={10}
					step={1}
					min={0}
				/>
				<br />
				<NumberInput
					legend={<TeX raw={`| \\text{${first}} \\cap \\text{${second}} | `} />}
					defaultValue={2}
					max={min( sizeA, sizeB )}
					step={1}
					min={0}
				/>
				<TeX style={{ marginLeft: '5px' }} raw={`| \\text{${first}}^c \\cap \\text{${second}}^c | = ${this.props.nobs - sizeA - sizeB + sizeAB }`} />
			</Dashboard>;
		}
		else {
			const { first, second, third, sizeA, sizeB, sizeC, sizeAB, sizeAC, sizeBC, sizeABC } = this.state;
			dashboard = <Dashboard
				title={t('venn-diagram-builder')}
				autoUpdate
				onGenerate={this.generateThreeCategories.bind( this )}
			>
				<TextInput
					legend={t('label-first-set')}
					defaultValue="A"
					width={120}
				/>
				<TextInput
					legend={t('label-second-set')}
					defaultValue="B"
					width={120}
				/>
				<TextInput
					legend={t('label-third-set')}
					defaultValue="C"
					width={120}
				/>
				<NumberInput
					legend={<TeX raw={`|\\text{${first}}|`} />}
					defaultValue={12}
					step={1}
					min={0}
				/>
				<NumberInput
					legend={<TeX raw={`|\\text{${second}}|`} />}
					defaultValue={10}
					step={1}
					min={0}
				/>
				<NumberInput
					legend={<TeX raw={`|\\text{${third}}|`} />}
					defaultValue={8}
					step={1}
					min={0}
				/>
				<NumberInput
					legend={<TeX raw={`| \\text{${first}} \\cap \\text{${second}} | `} />}
					defaultValue={2}
					max={min( sizeA, sizeB )}
					step={1}
					min={0}
				/>
				<NumberInput
					legend={<TeX raw={`| \\text{${second}} \\cap \\text{${third}} | `} />}
					max={min( sizeB, sizeC )}
					defaultValue={2}
					step={1}
					min={0}
				/>
				<NumberInput
					legend={<TeX raw={`| \\text{${first}} \\cap \\text{${third}} | `} />}
					defaultValue={2}
					max={min( sizeA, sizeC )}
					step={1}
					min={0}
				/>
				<NumberInput
					legend={<TeX raw={`| \\text{${first}}\\cap \\text{${second}} \\cap \\text{${third}} | `} />}
					defaultValue={1}
					max={min( sizeAC, sizeAB, sizeBC )}
					step={1}
					min={0}
				/>
				<TeX style={{ marginLeft: '5px' }} raw={`| \\text{${first}}^c \\cap \\text{${second}}^c \\cap \\text{${third}}^c | = ${this.props.nobs - sizeA - sizeB - sizeC + sizeAC + sizeAB + sizeBC - sizeABC }`} />
			</Dashboard>;
		}
		let count = null;
		if ( this.props.nobs ) {
			count = <span style={{
				position: 'absolute',
				right: 40
			}}>{t('total-number-observations')}: {this.props.nobs}</span>;
		}
		return (
			<div>
				<Container style={{ maxWidth: 1200, margin: '0 auto' }}>
					<Row>
						<Col md={4}>
							{dashboard}
						</Col>
						<Col md={8}>
							<Card>
							{count}
								<div id={this.state.id}></div>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}


// PROPERTIES //

VennDiagramBuilder.propTypes = {
	nobs: PropTypes.number,
	three: PropTypes.bool
};

VennDiagramBuilder.defaultProps = {
	nobs: null,
	three: false
};


// EXPORTS //

export default withTranslation( 'learn/venn-diagram' )( VennDiagramBuilder );
