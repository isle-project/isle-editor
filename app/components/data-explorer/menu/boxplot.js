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
import BoxPlot from 'components/plots/boxplot';
import { DATA_EXPLORER_SHARE_BOXPLOT, DATA_EXPLORER_BOXPLOT } from 'constants/actions.js';
import QuestionButton from '../question_button.js';


// VARIABLES //

const DESCRIPTION = 'A box plot (full name: box and whisker plot, coined by famous statistician John Tukey) is a display for quantitative data. For any variable, the boxplot displays its 25% quantile (a value that is greater than 25% of the data), its median, and its 75% quantile as a box. The whiskers extend to the lower fence at the smallest value in the sample that is smaller than Q1 but greater than (Q1 - 1.5*IQR) and to analogously defined upper fence.';


// MAIN //

class BoxplotMenu extends Component {
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
		let { variable } = this.state;
		const plotId = randomstring( 6 );
		const action = {
			variable,
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
			this.props.logAction( DATA_EXPLORER_SHARE_BOXPLOT, action );
		};
		const output = <BoxPlot id={plotId} onShare={onShare} action={action} {...this.props} {...this.state} />;
		this.props.logAction( DATA_EXPLORER_BOXPLOT, action );
		this.props.onCreated( output );
	}

	render() {
		const { variables, groupingVariables } = this.props;
		return (
			<Card>
				<Card.Header as="h4">
					{this.props.t('Box Plot')}
					<QuestionButton title={this.props.t('Box Plot')} content={DESCRIPTION} />
				</Card.Header>
				<Card.Body>
					<SelectInput
						legend={`${this.props.t('variable')}:`}
						defaultValue={this.state.variable}
						options={variables}
						onChange={( variable ) => {
							this.setState({ variable });
						}}
					/>
					<FormGroup controlId="boxplot-form-select">
						<FormLabel>{this.props.t('group-by')}:</FormLabel>
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
						legend={this.props.t('overlay-points')}
						defaultValue={false}
						onChange={( overlayPoints ) => {
							this.setState({ overlayPoints });
						}}
					/>
					<Button variant="primary" block onClick={this.generateBoxplot}>
						{this.props.t('generate')}
					</Button>
				</Card.Body>
			</Card>
		);
	}
}


// PROPERTIES //

BoxplotMenu.defaultProps = {
	defaultValue: null,
	groupingVariables: null,
	logAction() {},
	onCreated() {},
	session: {}
};

BoxplotMenu.propTypes = {
	data: PropTypes.object.isRequired,
	defaultValue: PropTypes.string,
	groupingVariables: PropTypes.array,
	logAction: PropTypes.func,
	onCreated: PropTypes.func,
	session: PropTypes.object,
	variables: PropTypes.array.isRequired
};


// EXPORTS //

export default BoxplotMenu;
