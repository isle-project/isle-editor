// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import randomstring from 'utils/randomstring/alphanumeric';
import SelectInput from 'components/input/select';
import ScatterPlotMatrix from 'components/plots/scatterplot-matrix';
import { DATA_EXPLORER_SHARE_SPLOM, DATA_EXPLORER_SPLOM } from 'constants/actions.js';
import QuestionButton from '../question_button.js';


// VARIABLES //

const DESCRIPTION = 'A scatterplot matrix is a grid of scatterplots visualizing the relationships between any two variables from a chosen set of quantitative variables.';


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
					>
						{this.props.t('generate')}
					</Button>
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
