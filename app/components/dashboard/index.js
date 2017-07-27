// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Panel } from 'react-bootstrap';
import { isArray } from '@stdlib/assert';
import Input from 'components/input/base';
import CheckboxInput from 'components/input/checkbox';
import NumberInput from 'components/input/number';
import SelectInput from 'components/input/select';
import SliderInput from 'components/input/slider';
import TextInput from 'components/input/text';
import { findAllChildren } from 'utils/find-nodes';
import './dashboard.css';


// MAIN //

class Dashboard extends Component {

	constructor() {
		super();

		this.handleClick = () => {
			let inputs = findAllChildren( this, Input );
			let args;
			if ( inputs ) {
				args = inputs.map( v => {
					if (
						v instanceof NumberInput ||
						v instanceof SliderInput
					) {
						return parseFloat( v.state.value );
					}
					else if ( v instanceof SelectInput ) {
						const val = v.state.value;
						if ( isArray( val ) ) {
							return val.map( x => x.value );
						}
						if ( val ) {
							return val.value;
						}
						// Case: val is null
						return val;
					}
					else if (
						v instanceof CheckboxInput ||
						v instanceof TextInput
					) {
						console.log( v );
						return v.state.value;
					}
				});
			} else {
				args = [];
			}

			if ( this.props.id ) {
				const { session } = this.context;
				session.log({
					id: this.props.id,
					type: 'DASHBOARD_CLICK_GENERATE',
					value: args
				});
			}
			this.props.onGenerate( ...args );
		};
	}

	componentDidMount() {
		if ( this.props.autoStart ) {
			this.handleClick();
		}
	}

	getChildContext() {
		return {
			triggerDashboardClick : this.handleClick,
			autoUpdate: this.props.autoUpdate
		};
	}

	render() {
		return (
			<Panel
				className="dashboard"
				header={ this.props.title ? <h4>{this.props.title}</h4> : null }
				style={{
					maxWidth: this.props.maxWidth
				}}
			>
				<p>{this.props.description}</p>
				{ this.props.children }
				{ !this.props.autoUpdate ?
					<Button
						bsStyle="primary"
						className="dashboard-button"
						onClick={this.handleClick}
						block
					>{this.props.label}</Button> :
					<span />
				}
			</Panel>
		);
	}
}


// DEFAULT PROPERTIES //

Dashboard.defaultProps = {
	onGenerate: function(){},
	label: 'Generate',
	autoUpdate: false,
	autoStart: true,
	maxWidth: 600
};


// TYPES //

Dashboard.propTypes = {
	onGenerate: PropTypes.func,
	description: PropTypes.string,
	title: PropTypes.string,
	label: PropTypes.string,
	autoUpdate: PropTypes.bool,
	autoStart: PropTypes.bool,
	maxWidth: PropTypes.number
};

Dashboard.childContextTypes = {
	triggerDashboardClick: PropTypes.func,
	autoUpdate: PropTypes.bool
};

Dashboard.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default Dashboard;
