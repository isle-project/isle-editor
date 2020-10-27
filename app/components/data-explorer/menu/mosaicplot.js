// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckboxInput from 'components/input/checkbox';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import randomstring from 'utils/randomstring/alphanumeric';
import MosaicPlot from 'components/plots/mosaicplot';
import { DATA_EXPLORER_SHARE_MOSAIC, DATA_EXPLORER_MOSAIC } from 'constants/actions.js';
import QuestionButton from './../question_button.js';


// VARIABLES //

const DESCRIPTION = 'A mosaic plot can be used to visualize two or more categorical variables. The areas of the boxes in the plot are proportional to the cell frequencies of a contingency table of the selected variables. You may select as many variables as you wish. In the two-variable case the first variable selected will be the columns and the second variable will the rows conditioned on the columns. If colors are shown, blue means there are more observations than we would expect if no relationship is present and red indicates that there are less observations than we would expect if no relationship is present.';
const AXIS_OPTIONS = [
	'parallel to the axis',
	'horizontal',
	'perpendicular to the axis',
	'vertical'
];


// MAIN //

class MosaicPlotMenu extends Component {
	constructor( props ) {
		super( props );
	}

	generateMosaicPlot( variables, showColors, axisLabels ) {
		if ( !variables || variables.length < 2 ) {
			return this.props.session.addNotification({
				title: 'Select Variables',
				message: 'You need to select at least two variables for the mosaic plot',
				level: 'warning',
				position: 'tr'
			});
		}
		const plotId = randomstring( 6 );
		const action = {
			variables, showColors, plotId
		};
		const onShare = () => {
			this.props.session.addNotification({
				title: this.props.t('plot-shared'),
				message: this.props.t('plot-shared-message'),
				level: 'success',
				position: 'tr'
			});
			this.props.logAction( DATA_EXPLORER_SHARE_MOSAIC, {
				variables, showColors, plotId
			});
		};
		const output = <MosaicPlot
			data={this.props.data}
			variables={variables}
			showColors={showColors}
			axisLabels={axisLabels}
			id={plotId}
			action={action}
			onShare={onShare}
			onPlotDone={this.props.onPlotDone}
		/>;
		this.props.logAction( DATA_EXPLORER_MOSAIC, action );
		this.props.onCreated( output );
	}

	render() {
		const { variables } = this.props;
		return (
			<Dashboard
				autoStart={false}
				title={<span>{this.props.t('Mosaic Plot')}<QuestionButton title={this.props.t('Mosaic Plot')} content={DESCRIPTION} /></span>}
				onGenerate={this.generateMosaicPlot.bind( this )}
				style={{ minHeight: 380 }}
			>
				<SelectInput
					legend="Variables"
					options={variables}
					multi
				/>
				<CheckboxInput
					legend="Show Colors"
					defaultValue={false}
				/>
				<SelectInput
					legend="Axis Label Rotation"
					options={AXIS_OPTIONS}
				/>
			</Dashboard>
		);
	}
}


// PROPERTIES //

MosaicPlotMenu.defaultProps = {
	logAction() {},
	onPlotDone() {},
	session: {}
};

MosaicPlotMenu.propTypes = {
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	onPlotDone: PropTypes.func,
	session: PropTypes.object,
	variables: PropTypes.array.isRequired
};


// EXPORTS //

export default MosaicPlotMenu;
