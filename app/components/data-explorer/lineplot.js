// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import SelectInput from 'components/input/select';
import selectStyles from 'components/input/select/styles';
import CheckboxInput from 'components/input/checkbox';
import Plotly from 'components/plotly';
import randomstring from 'utils/randomstring/alphanumeric';
import objectKeys from '@stdlib/utils/keys';
import { DATA_EXPLORER_SHARE_LINEPLOT, DATA_EXPLORER_LINEPLOT } from 'constants/actions.js';
import QuestionButton from './question_button.js';
import by from './by.js';


// VARIABLES //

const DESCRIPTION = 'A line plot can be used to display one quantitative variable or the relationship between two quantitative variables as a number line. If no variable is supplied for the x-axis, the values of the y-axis variable are displayed according to their indices in the data table.';


// FUNCTIONS //

function createOption( label ) {
	return {
		label,
		value: label
	};
}

export function generateLineplotConfig({ data, xvar, yvar, group, showPoints }) {
	let traces;
	const nobs = data[ yvar ].length;
	const type = nobs > 2000 ? 'scattergl' : 'scatter';
	const mode = showPoints ? 'lines+markers' : 'lines';
	if ( !group ) {
		traces = [
			{
				x: data[ xvar ],
				y: data[ yvar ],
				type,
				mode
			}
		];
	} else {
		let xgrouped;
		if ( xvar ) {
			xgrouped = by( data[ xvar ], data[ group ], arr => {
				return arr;
			});
		} else {
			xgrouped = {};
		}
		const ygrouped = by( data[ yvar ], data[ group ], arr => {
			return arr;
		});
		traces = [];
		const keys = group.categories || objectKeys( ygrouped );
		for ( let i = 0; i < keys.length; i++ ) {
			const key = keys[ i ];
			traces.push({
				name: key,
				x: xgrouped[ key ],
				y: ygrouped[ key ],
				type,
				mode
			});
		}
	}
	const config = {
		data: traces,
		layout: {
			title: xvar ? `${yvar} against ${xvar}` : yvar,
			xaxis: {
				title: xvar ? xvar : 'Index'
			},
			yaxis: {
				title: yvar
			}
		}
	};
	return config;
}


// MAIN //

class LinePlot extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			xvar: null,
			yvar: props.defaultValue || props.variables[ 0 ],
			group: null,
			showPoints: false
		};
	}

	generateLinePlot = () => {
		const { xvar, yvar, group, showPoints } = this.state;
		const config = generateLineplotConfig({
			data: this.props.data,
			xvar,
			yvar,
			group,
			showPoints
		});
		const plotId = randomstring( 6 );
		const action = {
			xvar,
			yvar,
			group,
			plotId
		};
		const output = {
			variable: `${xvar} against ${yvar}`,
			type: 'Chart',
			value: <Plotly
				editable draggable id={plotId} fit
				data={config.data} layout={config.layout}
				meta={action}
				onShare={() => {
				this.props.session.addNotification({
					title: 'Plot shared.',
					message: 'You have successfully shared your plot.',
					level: 'success',
					position: 'tr'
				});
				this.props.logAction( DATA_EXPLORER_SHARE_LINEPLOT, action );
			}} />
		};
		this.props.logAction( DATA_EXPLORER_LINEPLOT, action );
		this.props.onCreated( output );
	}

	render() {
		const { categorical, variables, groupingVariables } = this.props;
		return (
			<Card>
				<Card.Header as="h4">
					Line Plot
					<QuestionButton title="Line Plot" content={DESCRIPTION} />
				</Card.Header>
				<Card.Body>
					<FormGroup controlId="lineplot-form-select">
						<FormLabel>x-axis:</FormLabel>
						<Select
							legend="x-axis:"
							defaultValue={null}
							options={[
								{
									label: 'Quantitative',
									options: variables.map( createOption )
								},
								{
									label: 'Categorical',
									options: categorical.map( createOption )
								}
							]}
							onChange={( elem ) => {
								this.setState({
									xvar: elem ? elem.value : null
								});
							}}
							placeholder="Select... (optional)"
							isClearable
							styles={selectStyles}
						/>
					</FormGroup>
					<SelectInput
						legend="y-axis:"
						defaultValue={this.state.yvar}
						options={variables}
						onChange={( yvar ) => {
							this.setState({ yvar });
						}}
					/>
					<SelectInput
						legend="Group By:"
						defaultValue={this.state.group}
						options={groupingVariables}
						clearable={true}
						menuPlacement="top"
						onChange={( value )=>{
							this.setState({
								group: value
							});
						}}
					/>
					<CheckboxInput
						legend="Show point markers?"
						defaultValue={this.state.showPoints}
						onChange={( value )=>{
							this.setState({
								showPoints: value
							});
						}}
					/>
					<Button variant="primary" block onClick={this.generateLinePlot}>Generate</Button>
				</Card.Body>
			</Card>
		);
	}
}


// PROPERTIES //

LinePlot.defaultProps = {
	defaultValue: null,
	groupingVariables: null,
	logAction() {},
	onCreated() {},
	session: {}
};

LinePlot.propTypes = {
	data: PropTypes.object.isRequired,
	defaultValue: PropTypes.string,
	groupingVariables: PropTypes.array,
	logAction: PropTypes.func,
	onCreated: PropTypes.func,
	session: PropTypes.object,
	categorical: PropTypes.array.isRequired,
	variables: PropTypes.array.isRequired
};


// EXPORTS //

export default LinePlot;
