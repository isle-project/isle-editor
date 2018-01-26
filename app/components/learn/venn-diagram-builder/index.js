// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';
import * as venn from 'venn.js';
import * as d3 from 'd3';
import randu from '@stdlib/random/base/randu';
import round from '@stdlib/math/base/special/round';
import min from '@stdlib/math/base/special/min';
import NumberInput from 'components/input/number';
import TextInput from 'components/input/text';
import Dashboard from 'components/dashboard';
import TeX from 'components/tex';


// MAIN //

class VennDiagramBuilder extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			id: 'venn'+round( randu()*1000 )
		};
	}

	generateTwoCategories( first, second, sizeA, sizeB, sizeAB ) {
		var sets = [
			{ sets: [ first ], size: sizeA },
			{ sets: [ second ], size: sizeB },
			{ sets: [ first, second ], size: sizeAB }
		];
		var chart = d3.select( '#'+this.state.id );
		var tooltip;
		if ( !this.state.tooltip ) {
			tooltip = d3.select( 'body' ).append( 'div' )
				.attr( 'class', 'venntooltip' );
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
				tooltip.text( d.sets.join( ' and ' ) + ' (' + d.size + ')' );
				var selection = d3.select( this ).
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
				var selection = d3.select( this ).
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
		var sets = [
			{ sets: [ first ], size: sizeA },
			{ sets: [ second ], size: sizeB },
			{ sets: [ third ], size: sizeC },
			{ sets: [ first, second ], size: sizeAB },
			{ sets: [ first, third ], size: sizeAC },
			{ sets: [ second, third ], size: sizeBC },
			{ sets: [ first, second, third ], size: sizeABC }
		];
		var chart = d3.select( '#'+this.state.id );

		var tooltip;
		if ( !this.state.tooltip ) {
			tooltip = d3.select( 'body' ).append( 'div' )
				.attr( 'class', 'venntooltip' );
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
				tooltip.text( d.sets.join( ' and ' ) + ' (' + d.size + ')' );
				var selection = d3.select( this ).
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
				var selection = d3.
					select( this ).
					transition( 'tooltip' ).
					duration( 400 );
				selection.select( 'path' )
					.style( 'fill-opacity', d.sets.length === 1 ? 0.25 : 0.0 )
					.style( 'stroke-opacity', 0 );
			});
		this.setState({
			first, second, third, vennDiagram, sizeA, sizeB, sizeC, sizeBC, sizeAB, sizeAC, tooltip
		});
	}

	render() {
		let dashboard;
		if ( !this.props.three ) {
			dashboard = <Dashboard
				title="Venn Diagram Builder"
				autoUpdate
				onGenerate={this.generateTwoCategories.bind( this )}
			>
				<TextInput
					legend="Label of first set"
					defaultValue="A"
					width={120}
				/>
				<TextInput
					legend="Label of second set"
					defaultValue="B"
					width={120}
				/>
				<NumberInput
					legend={<TeX raw={`|\\text{${this.state.first}}|`} />}
					defaultValue={12}
					step={1}
					min={0}
				/>
				<NumberInput
					legend={<TeX raw={`|\\text{${this.state.second}}|`} />}
					defaultValue={10}
					step={1}
					min={0}
				/>
				<br />
				<NumberInput
					legend={<TeX raw={`| \\text{${this.state.first}} \\cap \\text{${this.state.second}} | `} />}
					defaultValue={2}
					max={min( this.state.sizeA, this.state.sizeB )}
					step={1}
					min={0}
				/>
			</Dashboard>;
		}
		else {
			dashboard = <Dashboard
				title="Venn Diagram Builder"
				autoUpdate
				onGenerate={this.generateThreeCategories.bind( this )}
			>
				<TextInput
					legend="Label of first set"
					defaultValue="A"
					width={120}
				/>
				<TextInput
					legend="Label of second set"
					defaultValue="B"
					width={120}
				/>
				<TextInput
					legend="Label of third set"
					defaultValue="C"
					width={120}
				/>
				<NumberInput
					legend={<TeX raw={`|\\text{${this.state.first}}|`} />}
					defaultValue={12}
					step={1}
					min={0}
				/>
				<NumberInput
					legend={<TeX raw={`|\\text{${this.state.second}}|`} />}
					defaultValue={10}
					step={1}
					min={0}
				/>
				<NumberInput
					legend={<TeX raw={`|\\text{${this.state.third}}|`} />}
					defaultValue={8}
					step={1}
					min={0}
				/>
				<br />
				<NumberInput
					legend={<TeX raw={`| \\text{${this.state.first}} \\cap \\text{${this.state.second}} | `} />}
					defaultValue={2}
					max={min( this.state.sizeA, this.state.sizeB )}
					step={1}
					min={0}
				/>
				<NumberInput
					legend={<TeX raw={`| \\text{${this.state.second}} \\cap \\text{${this.state.third}} | `} />}
					max={min( this.state.sizeB, this.state.sizeC )}
					defaultValue={2}
					step={1}
					min={0}
				/>
				<NumberInput
					legend={<TeX raw={`| \\text{${this.state.first}} \\cap \\text{${this.state.third}} | `} />}
					defaultValue={2}
					max={min( this.state.sizeA, this.state.sizeC )}
					step={1}
					min={0}
				/>
				<NumberInput
					legend={<TeX raw={`| \\text{${this.state.first}}\\cap \\text{${this.state.second}} \\cap \\text{${this.state.third}} | `} />}
					defaultValue={1}
					max={min( this.state.sizeAC, this.state.sizeAB, this.state.sizeBC )}
					step={1}
					min={0}
				/>
			</Dashboard>;
		}
		return (
			<div>
				<Grid>
					<Row>
						<Col md={4}>
							{dashboard}
						</Col>
						<Col md={8}>
							<Panel>
								<div id={this.state.id}></div>
							</Panel>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}


// PROPERTY TYPES //

VennDiagramBuilder.propTypes = {
	three: PropTypes.bool
};

VennDiagramBuilder.defaultProps = {
	three: false
};


// EXPORTS //

export default VennDiagramBuilder;
