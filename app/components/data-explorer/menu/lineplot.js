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
import randomstring from 'utils/randomstring/alphanumeric';
import LinePlot from 'components/plots/lineplot';
import { DATA_EXPLORER_SHARE_LINEPLOT, DATA_EXPLORER_LINEPLOT } from 'constants/actions.js';
import QuestionButton from '../question_button.js';


// VARIABLES //

const DESCRIPTION = 'A line plot can be used to display one quantitative variable or the relationship between two quantitative variables as a number line. If no variable is supplied for the x-axis, the values of the y-axis variable are displayed according to their indices in the data table.';


// FUNCTIONS //

function createOption( label ) {
	return {
		label,
		value: label
	};
}


// MAIN //

class LinePlotMenu extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			x: null,
			y: props.defaultValue || props.variables[ 0 ],
			group: null,
			showPoints: false
		};
	}

	generateLinePlot = () => {
		const { x, y, group, showPoints } = this.state;
		const plotId = randomstring( 6 );
		const action = {
			x,
			y,
			group,
			plotId
		};
		const onShare = () => {
			this.props.session.addNotification({
				title: this.props.t('plot-shared'),
				message: this.props.t('plot-shared-message'),
				level: 'success',
				position: 'tr'
			});
			this.props.logAction( DATA_EXPLORER_SHARE_LINEPLOT, action );
		};
		const output = <LinePlot
			data={this.props.data} x={x} y={y}
			group={group} showPoints={showPoints}
			onShare={onShare} action={action} id={plotId}
		/>;
		this.props.logAction( DATA_EXPLORER_LINEPLOT, action );
		this.props.onCreated( output );
	}

	render() {
		const { categorical, variables, groupingVariables, t } = this.props;
		return (
			<Card>
				<Card.Header as="h4">
					Line Plot
					<QuestionButton title="Line Plot" content={DESCRIPTION} />
				</Card.Header>
				<Card.Body>
					<FormGroup controlId="lineplot-form-select">
						<FormLabel>{t('x-axis')}</FormLabel>
						<Select
							legend={t('x-axis')}
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
									x: elem ? elem.value : null
								});
							}}
							placeholder="Select... (optional)"
							isClearable
							styles={selectStyles}
						/>
					</FormGroup>
					<SelectInput
						legend={t('y-axis')}
						defaultValue={this.state.y}
						options={variables}
						onChange={( y ) => {
							this.setState({ y });
						}}
					/>
					<SelectInput
						legend={`${this.props.t('group-by')}:`}
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
					<Button variant="primary" block onClick={this.generateLinePlot}>
						{this.props.t('generate')}
					</Button>
				</Card.Body>
			</Card>
		);
	}
}


// PROPERTIES //

LinePlotMenu.defaultProps = {
	defaultValue: null,
	groupingVariables: null,
	logAction() {},
	onCreated() {},
	session: {}
};

LinePlotMenu.propTypes = {
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

export default LinePlotMenu;
