// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import expit from '@stdlib/math/base/special/expit';
import Plotly from 'components/plotly';
import Dashboard from 'components/dashboard';
import SliderInput from 'components/input/slider';
import CheckboxInput from 'components/input/checkbox';


// MAIN //

/**
* A learning component illustrating the impact of a confounding variable when assessing a causal relationship between two variables and of randomization.
*
* @property {(string|node)} x - name of explanatory variable
* @property {(string|node)} y - name of response variable
* @property {(string|node)} z - name of confounding variable
*/
class LearnCausalityDiagram extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			alpha0: 0,
			beta0: -2,
			ea0a1: null,
			eb0b2: null,
			eb0b1b2: null,
			ea0: 0.5,
			eb0: 0.11920292202211755,
			obsLHeight: null,
			obsRHeight: null,
			randomized: false,
			alpha1: 1
		};
	}

	renderCausalityDiagram() {
		return (
			<Plotly
				removeButtons
				data={[
				]}
				layout={{
					xaxis: {
						showgrid: false,
						zeroline: false,
						visible: false,
						range: [ 0, 10 ],
						fixedrange: true
					},
					yaxis: {
						showgrid: false,
						zeroline: false,
						visible: false,
						range: [ 0, 6 ],
						fixedrange: true
					},
					annotations: [
						{
							x: 10,
							y: 6,
							text: this.props.y,
							mode: 'text',
							font: {
								size: 22,
								color: 'darkblue'
							},
							axref: 'x',
							ayref: 'y',
							ax: 10,
							ay: 6,
							textangle: 45
						},
						{
							x: this.state.beta1 > 0 ? 9.5 : 0,
							y: 6,
							text: this.props.x,
							ax: 0,
							ay: 6,
							font: {
								size: 22,
								color: 'darkblue'
							},
							axref: 'x',
							ayref: 'y',
							arrowsize: 3,
							arrowwidth: 1,
							arrowhead: 1,
							textangle: 320,
							showarrow: this.state.beta1 > 0
						},
						{
							x: this.state.beta2 ? 10 : 5,
							y: this.state.beta2 ? 5.5 : 2,
							text: this.props.z,
							textangle: 0,
							ax: 5,
							ay: 2,
							font: {
								size: 22,
								color: 'darkblue'
							},
							axref: 'x',
							ayref: 'y',
							arrowsize: 3,
							arrowwidth: 1,
							arrowhead: 1,
							showarrow: this.state.beta2 > 0
						},
						{
							x: 0.5,
							y: 5.5,
							textangle: 0,
							ax: 5,
							ay: 2.2,
							text: '',
							axref: 'x',
							ayref: 'y',
							arrowsize: 3,
							arrowwidth: 1,
							arrowhead: 1,
							showarrow: this.state.alpha1 > 0
						}
					]
				}}
			/>
		);
	}

	renderSankeyDiagram() {
		return (
			<Plotly
				data={[
					{
						type: 'sankey',
						orientation: 'h',
						arrangement: 'fixed',
						node: {
							pad: 40,
							thickness: 15,
							line: {
								color: 'black',
								width: 0.5
							},
							label: [ this.props.z, `No ${this.props.z}`, this.props.x, `No ${this.props.x}`, this.props.y, `No ${this.props.y}` ],
							color: [ '#B1D0F0', '#EEF19D', 'darkgrey', 'darkgrey', 'darkgrey', 'darkgrey' ],
							x: [ 0.1, 0.1, 0.5, 0.5, 1, 1 ],
							y: [ 0.1, 0.9, 0.1, 0.9, 0.1, 0.9 ]
						},
						link: {
							source: [ 0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3 ],
							target: [ 2, 3, 2, 3, 4, 4, 5, 5, 4, 4, 5, 5 ],
							value: [
								0.4 * this.state.ea0a1,
								0.4 * ( 1 - this.state.ea0a1 ),
								0.6 * this.state.ea0,
								0.6 * ( 1 - this.state.ea0 ),
								0.6 * this.state.eb0b1 * this.state.ea0,
								0.4 * this.state.eb0b1b2 * this.state.ea0a1,
								0.6 * ( 1 - this.state.eb0b1 ) * this.state.ea0,
								0.4 * ( 1 - this.state.eb0b1b2 ) * this.state.ea0a1,
								0.6 * this.state.eb0 * ( 1 - this.state.ea0 ),
								0.4 * this.state.eb0b2 * ( 1 - this.state.ea0a1 ),
								0.6 * ( 1 - this.state.eb0 ) * ( 1 - this.state.ea0 ),
								0.4 * ( 1 - this.state.eb0b2 ) * ( 1 - this.state.ea0a1 )
							],
							color: [
								'#B1D0F0', '#B1D0F0', '#EEF19D', '#EEF19D', '#EEF19D', '#B1D0F0', '#EEF19D', '#B1D0F0', '#EEF19D', '#B1D0F0', '#EEF19D', '#B1D0F0'
							]
						}
					}
				]}
				layout={{
					font: {
						size: 16
					}
				}}
			/>
		);
	}

	renderMosaicPlots() {
		return (
			<Row>
				<Col md={4} >
					<Plotly
						data={[
							{
								mode: 'text',
								type: 'scatter',
								x: [
									0.1,
									0.7
								],
								y: [
									1.1,
									1.1
								],
								text: [
									this.props.x,
									`No ${this.props.x}`
								],
								textfont: {
									size: 14,
									family: 'Arial'
								},
								hoverinfo: 'text'
							},
							{
								mode: 'text',
								type: 'scatter',
								x: [
									-0.4,
									-0.4
								],
								y: [
									0.1,
									0.9
								],
								text: [
									`No ${this.props.y}`,
									this.props.y
								],
								textfont: {
									size: 14,
									family: 'Arial'
								},
								hoverinfo: 'text'
							}
						]}
						layout={{
							title: this.props.z,
							autolayout: true,
							showlegend: false,
							xaxis: {
								showgrid: false,
								zeroline: false,
								showticklabels: false,
								range: [ -0.75, 1 ]
							},
							yaxis: {
								showgrid: false,
								zeroline: false,
								showticklabels: false
							},
							shapes: [
								{
									x0: 0,
									x1: this.state.ea0a1,
									y0: this.state.eb0b1b2,
									y1: 0,
									line: {
										width: 1
									},
									opacity: 0.4,
									type: 'rect',
									fillcolor: 'red'
								},
								{
									x0: this.state.ea0a1,
									x1: 1,
									y0: this.state.eb0b2,
									y1: 0,
									line: {
										width: 1
									},
									opacity: 0.4,
									type: 'rect',
									fillcolor: 'blue'
								},
								{
									x0: 0,
									x1: this.state.ea0a1,
									y0: 1,
									y1: this.state.eb0b1b2,
									line: {
										width: 1
									},
									opacity: 0.4,
									type: 'rect',
									fillcolor: 'green'
								},
								{
									x0: this.state.ea0a1,
									x1: 1,
									y0: 1,
									y1: this.state.eb0b2,
									line: {
										width: 1
									},
									opacity: 0.4,
									type: 'rect',
									fillcolor: 'yellow'
								}
							]
						}}
					/>
				</Col>
				<Col md={4} >
					<Plotly
						data={[
							{
								mode: 'text',
								type: 'scatter',
								x: [
									0.1,
									0.7
								],
								y: [
									1.1,
									1.1
								],
								text: [
									this.props.x,
									`No ${this.props.x}`
								],
								textfont: {
									size: 14,
									family: 'Arial'
								},
								hoverinfo: 'text'
							},
							{
								mode: 'text',
								type: 'scatter',
								x: [
									-0.4,
									-0.4
								],
								y: [
									0.1,
									0.9
								],
								text: [
									`No ${this.props.y}`,
									this.props.y
								],
								textfont: {
									size: 14,
									family: 'Arial'
								},
								hoverinfo: 'text'
							}
						]}
						layout={{
							title: `No ${this.props.z}`,
							autolayout: true,
							showlegend: false,
							xaxis: {
								showgrid: false,
								zeroline: false,
								showticklabels: false,
								range: [ -0.75, 1 ]
							},
							yaxis: {
								showgrid: false,
								zeroline: false,
								showticklabels: false
							},
							shapes: [
								{
									x0: 0,
									x1: this.state.ea0,
									y0: this.state.eb0b1,
									y1: 0,
									line: {
										width: 1
									},
									opacity: 0.4,
									type: 'rect',
									fillcolor: 'red'
								},
								{
									x0: this.state.ea0,
									x1: 1,
									y0: this.state.eb0,
									y1: 0,
									line: {
										width: 1
									},
									opacity: 0.4,
									type: 'rect',
									fillcolor: 'blue'
								},
								{
									x0: 0,
									x1: this.state.ea0,
									y0: 1,
									y1: this.state.eb0b1,
									line: {
										width: 1
									},
									opacity: 0.4,
									type: 'rect',
									fillcolor: 'green'
								},
								{
									x0: this.state.ea0,
									x1: 1,
									y0: 1,
									y1: this.state.eb0,
									line: {
										width: 1
									},
									opacity: 0.4,
									type: 'rect',
									fillcolor: 'yellow'
								}
							]
						}}
					/>
				</Col>
				<Col md={4} >
					<Plotly
						data={[
							{
								mode: 'text',
								type: 'scatter',
								x: [
									0.1,
									0.7
								],
								y: [
									1.1,
									1.1
								],
								text: [
									this.props.x,
									`No ${this.props.x}`
								],
								textfont: {
									size: 14,
									family: 'Arial'
								},
								hoverinfo: 'text'
							},
							{
								mode: 'text',
								type: 'scatter',
								x: [
									-0.4,
									-0.4
								],
								y: [
									0.1,
									0.9
								],
								text: [
									`No ${this.props.y}`,
									this.props.y
								],
								textfont: {
									size: 14,
									family: 'Arial'
								},
								hoverinfo: 'text'
							}
						]}
						layout={{
							title: 'Observed Relationship',
							autolayout: true,
							showlegend: false,
							xaxis: {
								showgrid: false,
								zeroline: false,
								showticklabels: false,
								range: [ -0.75, 1 ]
							},
							yaxis: {
								showgrid: false,
								zeroline: false,
								showticklabels: false
							},
							shapes: [
								{
									x0: 0,
									x1: this.state.obsWidth,
									y0: this.state.obsLHeight,
									y1: 0,
									line: {
										width: 1
									},
									opacity: 0.4,
									type: 'rect',
									fillcolor: 'red'
								},
								{
									x0: this.state.obsWidth,
									x1: 1,
									y0: this.state.obsRHeight,
									y1: 0,
									line: {
										width: 1
									},
									opacity: 0.4,
									type: 'rect',
									fillcolor: 'blue'
								},
								{
									x0: 0,
									x1: this.state.obsWidth,
									y0: 1,
									y1: this.state.obsLHeight,
									line: {
										width: 1
									},
									opacity: 0.4,
									type: 'rect',
									fillcolor: 'green'
								},
								{
									x0: this.state.obsWidth,
									x1: 1,
									y0: 1,
									y1: this.state.obsRHeight,
									line: {
										width: 1
									},
									opacity: 0.4,
									type: 'rect',
									fillcolor: 'yellow'
								}
							]
						}}
					/>
				</Col>
			</Row>
		);
	}

	render() {
		return ( <Container style={{ backgroundColor: 'white', border: '2px solid black' }}>
			<Row>
				<Col md={3} style={{ height: '450px' }} >
					<Dashboard autoUpdate onGenerate={( randomized, beta1, beta2 ) => {
						const { alpha0, beta0, ea0, eb0, alpha1 } = this.state;

						const ea0a1 = expit( alpha0 + alpha1 );
						const px1 = 0.4 * ea0a1 + 0.6 * ea0;

						const eb0b1 = expit( beta0 + beta1 );
						const eb0b1b2 = expit( beta0 + beta1 + beta2 );
						const eb0b2 = expit( beta0 + beta2 );
						let obsLHeight = 0.6 * eb0b1 * ea0;
						obsLHeight += 0.4 * eb0b1b2 * ea0a1;
						obsLHeight /= px1;

						let obsRHeight = 0.6 * eb0 * ( 1 - ea0 );
						obsRHeight += 0.4 * eb0b2 * ( 1 - ea0a1 );
						obsRHeight /= ( 1 - px1 );

						this.setState({
							ea0a1,
							eb0b1b2,
							eb0b2,
							eb0b1,
							obsLHeight,
							obsRHeight,
							obsWidth: px1,
							beta1,
							beta2
						});
					}}>
						<CheckboxInput
							legend="Randomized Assignment"
							defaultValue={this.state.randomized}
							onChange={( randomized ) => {
								this.setState({
									randomized,
									alpha1: randomized ? 0 : 1
								});
							}}
						/>
						<SliderInput
							legend={<span>{this.props.x} → {this.props.y}</span>}
							defaultValue={1}
							min={0}
							max={5}
							step="any"
							hideTooltip
							numberInputStyle={{ display: 'none' }}
						/>
						<SliderInput
							legend={<span>{this.props.z} → {this.props.y}</span>}
							defaultValue={1}
							min={0}
							max={5}
							step="any"
							hideTooltip
							numberInputStyle={{ display: 'none' }}
						/>
						<SliderInput
							legend={<span>{this.props.z} → {this.props.x}</span>}
							defaultValue={this.state.alpha1}
							min={0}
							max={5}
							step="any"
							hideTooltip
							disabled={this.state.randomized}
							onChange={( alpha1 ) => {
								this.setState({
									alpha1
								});
							}}
							numberInputStyle={{ display: 'none' }}
						/>
					</Dashboard>
				</Col>
				<Col md={3} style={{ height: '450px' }} >
					{this.renderCausalityDiagram()}
				</Col>
				<Col md={6} style={{ height: '450px' }} >
					{this.renderSankeyDiagram()}
				</Col>
			</Row>
			{this.renderMosaicPlots()}
			</Container>
		);
	}
}


// PROPERTIES //

LearnCausalityDiagram.defaultProps = {
	x: 'Lights at Night',
	y: 'Child Myopia',
	z: 'Parental Myopia'
};

LearnCausalityDiagram.propTypes = {
	x: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	y: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	z: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	])
};


// EXPORTS //

export default LearnCausalityDiagram;
