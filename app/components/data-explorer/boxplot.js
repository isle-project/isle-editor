// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import SelectInput from 'components/input/select';
import CheckboxInput from 'components/input/checkbox';
import Plotly from 'components/plotly';
import RShell from 'components/r/shell';
import randomstring from 'utils/randomstring/alphanumeric';
import objectKeys from '@stdlib/utils/keys';
import isNull from '@stdlib/assert/is-null';
import { DATA_EXPLORER_SHARE_BOXPLOT, DATA_EXPLORER_BOXPLOT } from 'constants/actions.js';
import QuestionButton from './question_button.js';
import by from './by.js';


// VARIABLES //

const DESCRIPTION = 'A box plot (full name: box and whisker plot, coined by famous statistician John Tukey) is a display for quantitative data. For any variable, the boxplot displays its 25% quantile (a value that is greater than 25% of the data), its median, and its 75% quantile as a box. Whiskers extend from this box up to +-1.5*IQR or the minimum/maximum.';
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
			background: 'rgba(186, 204, 234, 0.3)',
			boxShadow: 'none',
			cursor: 'pointer'
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
	}
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
	return {
		data: traces,
		layout: {
			title: group.length > 0 ? `${variable} given ${group.join( ', ')}` : variable,
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
			overlayPoints: false,
			showRModal: false
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

	toggleRModal = () => {
		this.setState({
			showRModal: true
		});
	}

	generateRModal = () => {
		var preCode = [''];
		const nameReg = /\_(.*?).\w+/;
		const dataNameWUnderscore = nameReg.exec(this.props.url)[0]; // captures including the _, need to remove it
		const dataName = dataNameWUnderscore.substring(1, dataNameWUnderscore.length);
		if ( !isNull( this.props.url ) ) {
			preCode = [`${dataName} <- data.frame(jsonlite::fromJSON("${this.props.url}"))`, `attach(${dataName})`];
		}

		var RCode = `boxplot(${this.state.variable}`;

		// iterate through the groupings
		// NOTE: the array can only be of length 1?
		if ( this.state.group.length !== 0 ) {
			RCode += ` ~ ${this.state.group[0]}`;
		}

		RCode += ')';

		return (
			<Modal
				show={this.state.showRModal}
				onHide={
					()=>{
						this.setState({
							showRModal: false
						});
				}}>
				<Modal.Header closeButton>
					<Modal.Title>
						R Code
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<RShell
						prependCode={preCode}
						code={RCode}
						libraries={['jsonlite']}
						resettable
					/>
				</Modal.Body>
			</Modal>
		);
	}

	render() {
		const { variables, groupingVariables } = this.props;
		let modal = null;
		if ( this.state.showRModal ) {
			modal = this.generateRModal();
		}
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
					<Button variant="light" onClick={this.toggleRModal} disabled={isNull(this.props.url)}>Show R Code</Button>
				</Card.Body>
				{modal}
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
	session: {},
	url: null
};

Boxplot.propTypes = {
	data: PropTypes.object.isRequired,
	defaultValue: PropTypes.string,
	groupingVariables: PropTypes.array,
	logAction: PropTypes.func,
	onCreated: PropTypes.func,
	session: PropTypes.object,
	variables: PropTypes.array.isRequired,
	url: PropTypes.string
};


// EXPORTS //

export default Boxplot;
