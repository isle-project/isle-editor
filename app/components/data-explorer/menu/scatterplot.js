// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import contains from '@stdlib/assert/contains';
import isArray from '@stdlib/assert/is-array';
import CheckboxInput from 'components/input/checkbox';
import SelectInput from 'components/input/select';
import SliderInput from 'components/input/slider';
import randomstring from 'utils/randomstring/alphanumeric';
import ScatterPlot from 'components/plots/scatterplot';
import { DATA_EXPLORER_SHARE_SCATTERPLOT, DATA_EXPLORER_SCATTERPLOT } from 'constants/actions.js';
import QuestionButton from './../question_button.js';


// VARIABLES //

const DESCRIPTION = 'A scatterplot is used to display the values of two quantitative variables inside a Cartesian coordinate system. Three additional variables can be displayed on the plot in this implementation: The color and type of the dots corresponding to each observation can represent categorical variables, and a quantitative variable can be chosen to govern the size of the dots. In cases where there is a textual identifier for each observation, it can be displayed as a label next to the dots. It is also possible to overlay a linear and/or smoothed regression line.';


// MAIN //

class ScatterplotMenu extends Component {
	constructor( props ) {
		super( props );

		const { variables, defaultX, defaultY } = props;

		this.state = {
			xval: defaultX || variables[ 0 ],
			yval: defaultY || variables[ 1 ],
			color: null,
			type: null,
			text: null,
			regressionLine: false,
			regressionMethod: ['linear'],
			lineBy: null,
			smoothSpan: 0.66
		};
	}

	generateScatterplot = () => {
		const plotId = randomstring( 6 );
		const action = { ...this.state, plotId };

		const onShare = () => {
			this.props.session.addNotification({
				title: 'Plot shared.',
				message: 'You have successfully shared your plot.',
				level: 'success',
				position: 'tr'
			});
			this.props.logAction( DATA_EXPLORER_SHARE_SCATTERPLOT, action );
		};
		const output = <ScatterPlot
			data={this.props.data}
			{...this.state}
			id={plotId}
			action={action}
			onShare={onShare}
		/>;
		this.props.logAction( DATA_EXPLORER_SCATTERPLOT, action );
		this.props.onCreated( output );
	}

	renderInputs() {
		const { variables, groupingVariables } = this.props;
		return ( <Fragment>
			<div style={{ width: '100%' }}>
				<SelectInput
					legend="x-axis:"
					defaultValue={this.state.xval}
					options={variables}
					style={{ float: 'left', paddingRight: 10, width: '33.3%' }}
					onChange={( value ) => {
						this.setState({
							xval: value
						});
					}}
				/>
				<SelectInput
					legend="y-axis:"
					defaultValue={this.state.yval}
					style={{ float: 'left', paddingLeft: 10, paddingRight: 10, width: '33.3%' }}
					options={variables}
					onChange={( value ) => {
						this.setState({
							yval: value
						});
					}}
				/>
				<SelectInput
					legend="Labels:"
					style={{ float: 'left', paddingLeft: 10, width: '33.3%' }}
					clearable={true}
					options={groupingVariables}
					onChange={( value ) => {
						this.setState({
							text: value
						});
					}}
				/>
			</div>
			<div style={{ width: '100%' }}>
				<SelectInput
					legend="Color:"
					options={groupingVariables}
					clearable={true}
					style={{ float: 'left', paddingRight: 10, width: '33.3%' }}
					onChange={( value ) => {
						this.setState({
							color: value
						});
					}}
				/>
				<SelectInput
					legend="Type:"
					options={groupingVariables}
					clearable={true}
					style={{ float: 'left', paddingLeft: 10, paddingRight: 10, width: '33.3%' }}
					onChange={( value ) => {
						this.setState({
							type: value
						});
					}}
				/>
				<SelectInput
					legend="Size:"
					options={variables}
					clearable={true}
					style={{ float: 'left', paddingLeft: 10, width: '33.3%' }}
					onChange={( value ) => {
						this.setState({
							size: value
						});
					}}
				/>
			</div>
		</Fragment> );
	}

	renderRegressionLineOptions() {
		return ( <div style={{
			opacity: this.props.showRegressionOption ? 1.0 : 0.0
		}}>
			<CheckboxInput
				inline
				legend="Show Regression Model"
				defaultValue={false}
				onChange={() => {
					this.setState({
						regressionLine: !this.state.regressionLine
					});
				}}
			/>
			<div style={{ width: '100%' }}>
				<SelectInput
					legend="Method:"
					defaultValue="linear"
					multi={true}
					options={[ 'linear', 'smooth' ]}
					style={{ float: 'right', paddingLeft: 10, width: '45%' }}
					disabled={!this.state.regressionLine}
					onChange={( value ) => {
						if ( !isArray(value) ) {
							value = [value];
						}
						this.setState({
							regressionMethod: value
						});
					}}
				/>
				<SelectInput
					legend="Split By:"
					options={this.props.groupingVariables}
					clearable={true}
					style={{ float: 'right', paddingLeft: 10, width: '45%' }}
					disabled={!this.state.regressionLine}
					onChange={( value ) => {
						this.setState({
							lineBy: value
						});
					}}
				/>
				<SliderInput
					legend="Smoothing Parameter"
					disabled={!contains(this.state.regressionMethod, 'smooth')}
					min={0.01}
					max={1}
					step={0.01}
					defaultValue={0.66}
					onChange={( value ) => {
						this.setState({
							smoothSpan: value
						});
					}}
				/>
			</div>
		</div> );
	}

	render() {
		return (
			<Card style={{ minWidth: 650 }} >
				<Card.Header as="h4" >
					Scatterplot<QuestionButton title="Scatterplot" content={DESCRIPTION} />
				</Card.Header>
				<Card.Body>
					{this.renderInputs()}
					<div style={{ clear: 'both' }}></div>
					{this.renderRegressionLineOptions()}
					<div style={{ clear: 'both' }}></div>
					<Button variant="primary" block onClick={this.generateScatterplot}>Generate</Button>
				</Card.Body>
			</Card>
		);
	}
}


// PROPERTIES //

ScatterplotMenu.defaultProps = {
	defaultX: null,
	defaultY: null,
	groupingVariables: null,
	logAction() {},
	onSelected() {},
	session: {},
	showRegressionOption: true
};

ScatterplotMenu.propTypes = {
	data: PropTypes.object.isRequired,
	defaultX: PropTypes.string,
	defaultY: PropTypes.string,
	groupingVariables: PropTypes.array,
	logAction: PropTypes.func,
	onSelected: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	session: PropTypes.object,
	showRegressionOption: PropTypes.bool,
	variables: PropTypes.array.isRequired
};


// EXPORTS //

export default ScatterplotMenu;
