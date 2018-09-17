// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import isNull from '@stdlib/assert/is-null';
import hasOwnProperty from '@stdlib/assert/has-own-property';
import CheckboxInput from 'components/input/checkbox';
import NumberInput from 'components/input/number';
import SelectInput from 'components/input/select';
import SliderInput from 'components/input/slider';
import TextInput from 'components/input/text';
import './dashboard.css';


// VARIABLES //

const debug = logger( 'isle-editor:dashboard' );


// MAIN //

/**
* A dashboard for combining the handling of multiple child input fields.
*
* @property {string} title - panel title
* @property {string} description - dashboard description
* @property {boolean} autoStart - if set to `true`, the `onGenerate` function is executed at startup with the default input values
* @property {boolean} autoUpdate - controls whether the `onGenerate` function should be invoked automatically when one of the child input fields changes
* @property {boolean} disabled - controls whether the dashboard shall be disabled
* @property {string} label - button label
* @property {number} maxWidth - maximum width of dashboard
* @property {Function} onGenerate - function invoked when the button is clicked or one of the dashboard input values changes (if `autoUpdate` is set to `true`). The function is called with the values of the input fields, in the order in which they are placed in the dashboard
*/
class Dashboard extends Component {
	constructor( props ) {
		super( props );

		const initialState = {};
		this.nArgs = 0;

		const walk = ( children ) => {
			if ( !children ) {
				return;
			}
			React.Children.forEach( children, ( elem ) => {
				if ( isNull( elem ) ) {
					return;
				}
				if ( hasOwnProperty( elem.props, 'defaultValue' ) ) {
					initialState[ this.nArgs ] = elem.props.defaultValue;
					this.nArgs +=1;
				}
				if ( hasOwnProperty( elem.props, 'children' ) ) {
					walk( elem.props.children );
				}
			});
		};
		walk( props.children );
		debug( 'Initial state: %s', JSON.stringify( initialState ) );
		this.state = initialState;
	}

	componentDidMount() {
		if ( this.props.autoStart ) {
			this.handleClick();
		}
	}

	handleClick = () => {
		const args = new Array( this.nArgs );
		for ( let i = 0; i < this.nArgs; i++ ) {
			args[ i ] = this.state[ i ];
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

	getCounter = () => {
		if ( this._counter === void 0 ) {
			this._counter = 0;
		} else {
			this._counter += 1;
		}
		return this._counter;
	}

	handleFieldChange = ( fieldId, value ) => {
		debug( `Setting ${fieldId} to ${value}` );
		const newState = {};
		newState[ fieldId ] = value;
		this.setState( newState, () => {
			if ( this.props.autoUpdate ) {
				this.handleClick();
			}
		});
	}

	registerChildren = ( children, level ) => {
		if ( !children ) {
			return null;
		}
		debug( `Registering ${React.Children.count(children)} children...` );
		return React.Children.map( children,
			( child ) => {
				if ( React.isValidElement( child ) ) {
					const newProps = {};
					let newChildren = [];
					if (
						child.type === CheckboxInput ||
						child.type === NumberInput ||
						child.type === SelectInput ||
						child.type === SliderInput ||
						child.type === TextInput ||
						child.type.name === 'Input'
					) {
						debug( 'Encountering an input element...' );
						const idx = this.getCounter();
						newProps.onChange = ( value ) => {
							this.handleFieldChange( idx, value );
							child.props.onChange( value );
						};
					}
					if ( child.props && child.props.children ) {
						newChildren = this.registerChildren( child.props.children );
					}
					debug( 'Clone child element with new properties...' );
					return React.cloneElement( child, newProps, ...newChildren );
				}
				return child;
			}
		);
	}

	render() {
		this._counter = void 0;
		this._children = this.registerChildren( this.props.children );
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
					{this._children}
					{ !this.props.autoUpdate ?
						<Button
							bsStyle="primary"
							className="dashboard-button"
							disabled={this.props.disabled}
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


// PROPERTIES //

Dashboard.defaultProps = {
	autoStart: true,
	autoUpdate: false,
	description: '',
	disabled: false,
	label: 'Generate',
	maxWidth: 600,
	onGenerate() {},
	title: ''
};

Dashboard.propTypes = {
	autoStart: PropTypes.bool,
	autoUpdate: PropTypes.bool,
	description: PropTypes.string,
	disabled: PropTypes.bool,
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
