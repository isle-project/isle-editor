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
import isnan from '@stdlib/assert/is-nan';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import { DATA_EXPLORER_SHARE_BOXPLOT, DATA_EXPLORER_BOXPLOT } from 'constants/actions.js';
import QuestionButton from './question_button.js';
import by from './by.js';


// VARIABLES //

const DESCRIPTION = 'A box plot (full name: box and whisker plot, coined by famous statistician John Tukey) is a display for quantitative data. For any variable, the boxplot displays its 25% quantile (a value that is greater than 25% of the data), its median, and its 75% quantile as a box. The whiskers extend to the lower fence at the smallest value in the sample that is smaller than Q1 but greater than (Q1 - 1.5*IQR) and to analogously defined upper fence.';


// FUNCTIONS //

function isNonMissingNumber( x ) {
	return isNumber( x ) && !isnan( x );
}

export function generateBoxplotConfig({ data, variable, group, orientation, overlayPoints }) {
	let traces;
	if ( group.length === 0 ) {
		const values = data[ variable ];
		const nonmissing = [];
		for ( let i = 0; i < values.length; i++ ) {
			const v = values[ i ];
			if ( isNonMissingNumber( v ) ) {
				nonmissing.push( v );
			}
		}
		const trace = {
			type: 'box',
			name: variable
		};
		if ( orientation === 'horizontal' ) {
			trace.x = nonmissing;
		} else {
			trace.y = nonmissing;
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
			const values = freqs[ key ];
			const nonmissing = [];
			for ( let i = 0; i < values.length; i++ ) {
				const v = values[ i ];
				if ( isNonMissingNumber( v ) ) {
					nonmissing.push( v );
				}
			}
			const trace = {
				name: key,
				type: 'box'
			};
			if ( orientation === 'horizontal' ) {
				trace.x = nonmissing;
			} else {
				trace.y = nonmissing;
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
			const values = freqs[ key ];
			const nonmissing = [];
			for ( let i = 0; i < values.length; i++ ) {
				const v = values[ i ];
				if ( isNonMissingNumber( v ) ) {
					nonmissing.push( v );
				}
			}
			if ( orientation === 'horizontal' ) {
				y = cats[ key ];
				x = nonmissing;
			} else {
				y = nonmissing;
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
	const config = {
		data: traces,
		layout: {
			title: group.length > 0 ? `${variable} given ${group.join( ', ')}` : variable,
			xaxis: {
				title: orientation === 'vertical' && group.length === 2 ? group[ 1 ] : '',
				type: orientation === 'vertical' ? 'category' : null,
				showticklabels: ( group.length > 0 || orientation === 'horizontal' )
			},
			yaxis: {
				title: orientation === 'horizontal' && group.length === 2 ? group[ 1 ] : '',
				type: orientation === 'horizontal' ? 'category' : null,
				showticklabels: ( group.length > 0 || orientation === 'vertical' )
			}
		}
	};
	if ( group.length === 2 ) {
		config.layout.boxmode = 'group';
	}
	return config;
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
		let group = ( this.state.group || [] ).map( e => e.value );
		const config = generateBoxplotConfig({
			data: this.props.data,
			variable: this.state.variable,
			group,
			orientation: this.state.orientation,
			overlayPoints: this.state.overlayPoints
		});
		let { variable } = this.state;
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
					<FormGroup controlId="boxplot-form-select">
						<FormLabel>Group By:</FormLabel>
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
							styles={selectStyles}
							menuPortalTarget={document.body}
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
