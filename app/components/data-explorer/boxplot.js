// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import SelectInput from 'components/input/select';
import CheckboxInput from 'components/input/checkbox';
import Plotly from 'components/plotly';
import randomstring from 'utils/randomstring/alphanumeric';
import objectKeys from '@stdlib/utils/keys';
import { DATA_EXPLORER_SHARE_BOXPLOT, DATA_EXPLORER_BOXPLOT } from 'constants/actions.js';
import QuestionButton from './question_button.js';
import by from './by.js';


// VARIABLES //

const DESCRIPTION = 'A box plot (full name: box and whisker plot, coined by famous statistician John Tukey) is a display for quantitative data. For any variable, the boxplot displays its 25% quantile (a value that is greater than 25% of the data), its median, and its 75% quantile as a box. The whiskers extend to the lower fence at the smallest value in the sample that is smaller than Q1 but greater than (Q1 - 1.5*IQR) and to analogously defined upper fence.';
const customStyles = {
	control: ( base, state ) => {
		if ( state.isDisabled ) {
			return {
				...base,
				background: 'none',
				color: '#aaa',
				opacity: 0.5
			};
		}
		return {
			...base,
			background: 'rgba(186, 204, 234, 0.15)',
			boxShadow: 'none',
			cursor: 'pointer'
		};
	},
	placeholder: ( base, state ) => {
		return {
			...base,
			color: 'rgb(112, 112, 112)'
		};
	},
	option: ( base, state ) => {
		let backgroundColor = '#fff';
		let color = '#666666';
		if ( state.isFocused ) {
			backgroundColor = 'rgba(204,88,0, 0.16)';
			color = '#333';
		}
		else if ( state.isSelected ) {
			backgroundColor = '#f5faff';
			color = '#333';
		}
		return {
			...base,
			boxSizing: 'border-box',
			backgroundColor: backgroundColor,
			color: color,
			cursor: 'pointer',
			display: 'block',
			padding: '8px 10px'
		};
	},
	menuPortal: base => ({ ...base, zIndex: 1010 })
};


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
							styles={customStyles}
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
