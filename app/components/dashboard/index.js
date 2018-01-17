// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
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

	componentDidMount() {
		if ( this.props.autoStart ) {
			this.handleClick();
		}
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
				style={{
					maxWidth: this.props.maxWidth
				}}
			>
				{ this.props.title ?
					<Panel.Heading>
						<Panel.Title componentClass="h4">{this.props.title}</Panel.Title>
					</Panel.Heading>:
					null
				}
				<Panel.Body>
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
				</Panel.Body>
			</Panel>
		);
	}
}


// DEFAULT PROPERTIES //

Dashboard.defaultProps = {
	autoStart: true,
	autoUpdate: false,
	description: '',
	label: 'Generate',
	maxWidth: 600,
	onGenerate() {},
	title: ''
};


// TYPES //

Dashboard.propTypes = {
	autoStart: PropTypes.bool,
	autoUpdate: PropTypes.bool,
	description: PropTypes.string,
	label: PropTypes.string,
	maxWidth: PropTypes.number,
	onGenerate: PropTypes.func,
	title: PropTypes.string
};

Dashboard.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default Dashboard;
