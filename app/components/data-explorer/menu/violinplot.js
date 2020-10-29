// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectInput from 'components/input/select';
import CheckboxInput from 'components/input/checkbox';
import Dashboard from 'components/dashboard';
import randomstring from 'utils/randomstring/alphanumeric';
import ViolinPlot from 'components/plots/violinplot';
import { DATA_EXPLORER_SHARE_VIOLINPLOT, DATA_EXPLORER_VIOLINPLOT } from 'constants/actions.js';
import QuestionButton from './../question_button.js';


// VARIABLES //

const DESCRIPTION = '';


// MAIN //

class ViolinPlotMenu extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			showBox: false
		};
	}

	generateViolinplot( variable, group ) {
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
			this.props.logAction( DATA_EXPLORER_SHARE_VIOLINPLOT, action );
		};
		const output = <ViolinPlot
			id={plotId} variable={variable} group={group}
			data={this.props.data} onShare={onShare} action={action}
			showBox={this.state.showBox}
		/>;
		this.props.logAction( DATA_EXPLORER_VIOLINPLOT, action );
		this.props.onCreated( output );
	}

	render() {
		const { variables, defaultValue, groupingVariables } = this.props;
		return (
			<Dashboard
				autoStart={false}
				title={<span>{this.props.t('Violin Plot')}<QuestionButton title={this.props.t('Violin Plot')} content={DESCRIPTION} /></span>}
				onGenerate={this.generateViolinplot.bind( this )}
			>
				<SelectInput
					legend={`${this.props.t('variable')}:`}
					defaultValue={defaultValue || variables[ 0 ]}
					options={variables}
				/>
				<SelectInput
					legend={this.props.t('group-by')}
					options={groupingVariables}
					clearable={true}
				/>
				<CheckboxInput
					legend="Show Boxplot"
					defaultValue={this.state.showBox}
					onChange={()=>{
						this.setState({
							showBox: !this.state.showBox
						});
					}}
				/>
			</Dashboard>
		);
	}
}


// PROPERTIES //

ViolinPlotMenu.defaultProps = {
	defaultValue: null,
	groupingVariables: null,
	logAction() {},
	onCreated() {},
	session: {}
};

ViolinPlotMenu.propTypes = {
	data: PropTypes.object.isRequired,
	defaultValue: PropTypes.string,
	groupingVariables: PropTypes.array,
	logAction: PropTypes.func,
	onCreated: PropTypes.func,
	session: PropTypes.object,
	variables: PropTypes.array.isRequired
};


// EXPORTS //

export default ViolinPlotMenu;
