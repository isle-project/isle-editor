// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Panel } from 'react-bootstrap';
import hasOwnProperty from '@stdlib/assert/has-own-property';
import CheckboxInput from 'components/input/checkbox';
import NumberInput from 'components/input/number';
import SelectInput from 'components/input/select';
import SliderInput from 'components/input/slider';
import TextInput from 'components/input/text';
import './dashboard.css';


// MAIN //

class Dashboard extends Component {

	constructor( props ) {
		super( props );

		const initialState = {};

		React.Children.forEach( props.children, ( elem, idx ) => {
			if ( hasOwnProperty( elem.props, 'defaultValue' ) ) {
				initialState[ idx ] = elem.props.defaultValue;
			}
		});
		this.state = initialState;
	}

	handleClick = () => {
		let args = [];
		React.Children.forEach( this.props.children, ( elem, idx ) => {
			if ( hasOwnProperty( this.state, idx ) ) {
				const value = this.state[ idx ];
				args.push( value );
			}
		});
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

	handleFieldChange = ( fieldId, value ) => {
		var newState = {};
		newState[ fieldId ] = value;
		this.setState( newState, () => {
			if ( this.props.autoUpdate ) {
				this.handleClick();
			}
		});
	}

	componentDidMount() {
		if ( this.props.autoStart ) {
			this.handleClick();
		}
	}

	render() {

		const children = React.Children.map( this.props.children,
			( child, idx ) => {
				if ( React.isValidElement( child ) ) {
					if (
						child.type === CheckboxInput ||
						child.type === NumberInput ||
						child.type === SelectInput ||
						child.type === SliderInput ||
						child.type === TextInput
					) {
						return React.cloneElement( child, {
							onChange: ( value ) => {
								this.handleFieldChange( idx, value );
								child.props.onChange( value );
							}
						});
					}
				}
				return child;
			}
		);

		return (
			<Panel
				className="dashboard"
				header={ this.props.title ? <h4>{this.props.title}</h4> : null }
				style={{
					maxWidth: this.props.maxWidth
				}}
			>
				<p>{this.props.description}</p>
				{children}
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

Dashboard.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default Dashboard;
