// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import floor from '@stdlib/math/base/special/floor';
import objectKeys from '@stdlib/utils/keys';
import randomstring from 'utils/randomstring/alphanumeric';
import SelectInput from 'components/input/select';
import Plotly from 'components/plotly';
import { DATA_EXPLORER_SHARE_SPLOM, DATA_EXPLORER_SPLOM } from 'constants/actions.js';
import { CAT20 } from 'constants/colors';
import QuestionButton from './question_button.js';


// VARIABLES //

const DESCRIPTION = 'A scatterplot matrix is a grid of scatterplots visualizing the relationships between any two variables from a chosen set of quantitative variables.';
const RE_AXIS_IDX = /[xy](\d+)/;


// FUNCTIONS //

const axis = () => ({
	showline: false,
	zeroline: false,
	gridcolor: '#ffff',
	ticklen: 4
});

const colors = ( values ) => {
	const mapping = {};
	const out = new Array( values.length );
	let nKeys = 0;
	for ( let i = 0; i < values.length; i++ ) {
		const v = values[ i ];
		if ( !mapping[ v ] ) {
			mapping[ v ] = CAT20[ nKeys ];
			nKeys += 1;
		}
		out[ i ] = mapping[ v ];
	}
	return out;
};

export function generateScatterplotMatrixConfig({ data, variables, color }) {
	const traces = [{
		type: 'splom',
		dimensions: variables.map( x => {
			return {
				label: x,
				values: data[ x ]
			};
		})
	}];
	if ( color ) {
		traces[ 0 ].text = data[ color ];
		traces[ 0 ].marker = {
			color: colors( data[ color ] )
		};
	}
	const layout = {
		hovermode: 'closest',
		dragmode: 'select',
		plot_bgcolor: 'rgba(240,240,240, 0.95)'
	};
	layout[ 'xaxis' ] = axis();
	layout[ 'yaxis' ] = axis();
	for ( let i = 1; i < variables.length; i++ ) {
		layout[ 'xaxis'+(i+1) ] = axis();
		layout[ 'yaxis'+(i+1) ] = axis();
	}
	layout.height = 300 + ( ( floor( variables.length / 2 ) - 1 ) * 150 );
	return {
		data: traces,
		layout
	};
}

export function ScatterPlotMatrix( props ) {
	const config = generateScatterplotMatrixConfig( props );
	return (
		<Plotly
			editable
			draggable
			id={props.id}
			fit
			meta={props.action}
			data={config.data}
			layout={config.layout}
			onShare={props.onShare}
			onSelected={( selected ) => {
				const keys = objectKeys( selected.range );
				const range = {};
				const names = {};
				let match = RE_AXIS_IDX.exec( keys[ 0 ] );
				let idx = 0;
				if ( match && match[ 1 ] ) {
					idx = Number( match[ 1 ] ) - 1;
				}
				names.x = props.variables[ idx ];
				range.x = selected.range[ keys[ 0 ] ];
				match = RE_AXIS_IDX.exec( keys[ 1 ] );
				idx = 0;
				if ( match && match[ 1 ] ) {
					idx = Number( match[ 1 ] ) - 1;
				}
				names.y = props.variables[ idx ];
				range.y = selected.range[ keys[ 1 ] ];
				this.props.onSelected( names, { range });
			}}
		/>
	);
}


// MAIN //

class ScatterplotMatrixMenu extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			variables: null,
			color: null
		};
	}

	generate = () => {
		const plotId = randomstring( 6 );
		const action = {
			...this.state, plotId
		};
		const onShare = () => {
			this.props.session.addNotification({
				title: 'Plot shared.',
				message: 'You have successfully shared your plot.',
				level: 'success',
				position: 'tr'
			});
			this.props.logAction( DATA_EXPLORER_SHARE_SPLOM, action );
		};
		const output = <ScatterPlotMatrix
			id={plotId}
			data={this.props.data}
			{...this.state}
			action={action}
			onShare={onShare}
		/>;
		this.props.logAction( DATA_EXPLORER_SPLOM, action );
		this.props.onCreated( output );
	}

	render() {
		return (
			<Card>
				<Card.Header as="h4" >
					Scatterplot Matrix<QuestionButton title="Scatterplot Matrix" content={DESCRIPTION} />
				</Card.Header>
				<Card.Body>
					<SelectInput
						legend="Variables"
						options={this.props.variables}
						multi
						onChange={( vars ) => {
							this.setState({
								variables: vars
							});
						}}
					/>
					<SelectInput
						legend="Color:"
						options={this.props.groupingVariables}
						clearable={true}
						onChange={( value ) => {
							this.setState({
								color: value
							});
						}}
					/>
					<Button
						variant="primary" block
						onClick={this.generate}
						disabled={!this.state.variables || this.state.variables.length < 2}
					>Generate</Button>
				</Card.Body>
			</Card>
		);
	}
}


// PROPERTIES //

ScatterplotMatrixMenu.defaultProps = {
	groupingVariables: null,
	logAction() {},
	onSelected() {},
	session: {}
};

ScatterplotMatrixMenu.propTypes = {
	data: PropTypes.object.isRequired,
	groupingVariables: PropTypes.array,
	logAction: PropTypes.func,
	onSelected: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	session: PropTypes.object,
	variables: PropTypes.array.isRequired
};


// EXPORTS //

export default ScatterplotMatrixMenu;
