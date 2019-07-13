// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/FormGroup';
import SelectInput from 'components/input/select';
import CheckboxInput from 'components/input/checkbox';
import Plotly from 'components/plotly';
import randomstring from 'utils/randomstring/alphanumeric';
import objectKeys from '@stdlib/utils/keys';
import { DATA_EXPLORER_SHARE_BOXPLOT, DATA_EXPLORER_BOXPLOT } from 'constants/actions.js';
import QuestionButton from './question_button.js';
import by from './by.js';


// VARIABLES //

const DESCRIPTION = 'A box plot (full name: box and whisker plot, coined by famous statistician John Tukey) is a display for quantitative data. For any variable, the boxplot displays its 25% quantile (a value that is greater than 25% of the data), its median, and its 75% quantile as a box. Whiskers extend from this box up to +-1.5*IQR or the minimum/maximum.';


// FUNCTIONS //

export function generateBoxplotConfig({ data, variable, group, orientation, overlayPoints }) {
	let traces;
	if ( group.length === 0 ) {
		let values = data[ variable ];
		const trace = {
			type: 'box',
			name: variable
		};
		if ( orientation === 'horizontal' ) {
			trace.x = values;
		} else {
			trace.y = values;
		}
		traces = [ trace ];
	}
	else if ( group.length === 1 ) {
		let freqs = by( data[ variable ], data[ group[0] ], arr => {
			return arr;
		});
		traces = [];
		const keys = group[ 0 ].categories || objectKeys( freqs );
		for ( let i = 0; i < keys.length; i++ ) {
			const key = keys[ i ];
			const val = freqs[ key ];
			const trace = {
				name: key,
				type: 'box'
			};
			if ( orientation === 'horizontal' ) {
				trace.x = val;
			} else {
				trace.y = val;
			}
			traces.push( trace );
		}
	}
	else if ( group.length === 2 ) {
		let freqs = by( data[ variable ], data[ group[0] ], arr => {
			return arr;
		});
		let cats = by( data[ group[1] ], data[ group[0] ], arr => {
			return arr;
		});
		traces = [];
		const keys = group.categories || objectKeys( freqs );
		for ( let i = 0; i < keys.length; i++ ) {
			const key = keys[ i ];
			let x;
			let y;
			if ( orientation === 'horizontal' ) {
				y = cats[ key ];
				x = freqs[ key ];
			} else {
				y = freqs[ key ];
				x = cats[ key ];
			}
			traces.push({
				x,
				y,
				name: key,
				type: 'box',
				orientation: orientation === 'horizontal' ? 'h' : 'v'
			});
		}
	}
	if ( overlayPoints ) {
		for ( let i = 0; i < traces.length; i++ ) {
			const trace = traces[ i ];
			trace.boxpoints = 'all';
			trace.jitter = 0.5;
		}
	}
	return {
		data: traces,
		layout: {
			title: group ? `${variable} given ${group.join( ', ')}` : variable,
			xaxis: {
				type: orientation === 'vertical' ? 'category' : null
			},
			yaxis: {
				type: orientation === 'horizontal' ? 'category' : null
			},
			boxmode: group.length === 2 ? 'group' : null
		}
	};
}


// MAIN //

class Boxplot extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			variable: props.defaultValue || props.variables[ 0 ],
			group: [],
			orientation: 'vertical',
			overlayPoints: false
		};
	}

	generateBoxplot = () => {
		const config = generateBoxplotConfig({
			data: this.props.data,
			variable: this.state.variable,
			group: this.state.group.map( e => e.value ),
			orientation: this.state.orientation,
			overlayPoints: this.state.overlayPoints
		});
		let { variable, group } = this.state;
		group = group.map( e => e.value );
		const plotId = randomstring( 6 );
		const action = {
			variable,
			group,
			plotId
		};
		const output = {
			variable: variable,
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
				this.props.logAction( DATA_EXPLORER_SHARE_BOXPLOT, action );
			}} />
		};
		this.props.logAction( DATA_EXPLORER_BOXPLOT, action );
		this.props.onCreated( output );
	}

	render() {
		const { variables, groupingVariables } = this.props;
		return (
			<Card>
				<Card.Header as="h4">
					Box Plot
					<QuestionButton title="Box Plot" content={DESCRIPTION} />
				</Card.Header>
				<Card.Body>
					<SelectInput
						legend="Variable:"
						defaultValue={this.state.variable}
						options={variables}
						onChange={( variable ) => {
							this.setState({ variable });
						}}
					/>
					<FormGroup controlId="form-controls-select">
						<label>Group By:</label>
						<Select
							value={this.state.group}
							options={groupingVariables.map( e => ( { 'label': e, 'value': e } ))}
							isClearable
							isMulti
							onChange={( value ) => {
								if ( !value || value.length <= 2 ) {
									this.setState({
										group: value
									});
								}
							}}
						/>
					</FormGroup>
					<SelectInput
						legend="Orientation:"
						options={[ 'vertical', 'horizontal' ]}
						defaultValue="vertical"
						menuPlacement="top"
						onChange={( orientation ) => {
							this.setState({ orientation });
						}}
					/>
					<CheckboxInput
						legend="Overlay Points?"
						defaultValue={false}
						onChange={( overlayPoints ) => {
							this.setState({ overlayPoints });
						}}
					/>
					<Button variant="primary" block onClick={this.generateBoxplot}>Generate</Button>
				</Card.Body>
			</Card>
		);
	}
}


// PROPERTIES //

Boxplot.defaultProps = {
	defaultValue: null,
	groupingVariables: null,
	logAction() {},
	onCreated() {},
	session: {}
};

Boxplot.propTypes = {
	data: PropTypes.object.isRequired,
	defaultValue: PropTypes.string,
	groupingVariables: PropTypes.array,
	logAction: PropTypes.func,
	onCreated: PropTypes.func,
	session: PropTypes.object,
	variables: PropTypes.array.isRequired
};


// EXPORTS //

export default Boxplot;
