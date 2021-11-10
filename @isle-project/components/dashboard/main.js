// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { withTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import isNull from '@stdlib/assert/is-null';
import hasOwnProperty from '@stdlib/assert/has-own-property';
import generateUID from '@isle-project/utils/uid';
import CheckboxInput from '@isle-project/components/input/checkbox';
import NumberInput from '@isle-project/components/input/number';
import SelectInput from '@isle-project/components/input/select';
import SliderInput from '@isle-project/components/input/slider';
import TextInput from '@isle-project/components/input/text';
import TextArea from '@isle-project/components/input/text-area';
import ProportionsInput from '@isle-project/components/input/proportions';
import SessionContext from '@isle-project/session/context.js';
import { DASHBOARD_CLICK_GENERATE } from '@isle-project/constants/actions.js';
import { withPropCheck } from '@isle-project/utils/prop-check';
import './dashboard.css';


// VARIABLES //

const debug = logger( 'isle:dashboard' );
const uid = generateUID( 'dashboard' );


// MAIN //

/**
* A dashboard for combining the handling of multiple child input fields.
*
* @property {(string|node)} title - card title
* @property {string} description - dashboard description
* @property {boolean} autoStart - if set to `true`, the `onGenerate` function is executed at startup with the default input values
* @property {boolean} autoUpdate - controls whether the `onGenerate` function should be invoked automatically when one of the child input fields changes
* @property {boolean} disabled - controls whether the dashboard shall be disabled
* @property {string} label - button label
* @property {number} maxWidth - maximum width of dashboard
* @property {string} className - class name
* @property {string} bodyClassName - class name for the card body
* @property {Object} style - CSS inline styles
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
					this.nArgs += 1;
				}
				if ( hasOwnProperty( elem.props, 'children' ) ) {
					walk( elem.props.children );
				}
			});
		};
		walk( props.children );
		debug( 'Initial state: %s', JSON.stringify( initialState ) );
		this.id = props.id || uid( props );
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
		if ( !this.props.autoUpdate ) {
			const session = this.context;
			session.log({
				id: this.id,
				type: DASHBOARD_CLICK_GENERATE,
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
	};

	handleFieldChange = ( fieldId, value ) => {
		debug( `Setting ${fieldId} to ${value}` );
		const newState = {};
		newState[ fieldId ] = value;
		this.setState( newState, () => {
			if ( this.props.autoUpdate ) {
				this.handleClick();
			}
		});
	};

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
						child.type === TextArea ||
						child.type === ProportionsInput ||
						child.type.name === 'CheckboxInput' ||
						child.type.name === 'NumberInput' ||
						child.type.name === 'SelectInput' ||
						child.type.name === 'SliderInput' ||
						child.type.name === 'TextInput' ||
						child.type.name === 'TextArea' ||
						child.type.name === 'Input' ||
						child.type.name === 'ProportionsInput'
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
	};

	render() {
		this._counter = void 0;
		this._children = this.registerChildren( this.props.children );
		return (
			<Card
				className={`dashboard ${this.props.className}`}
				style={{
					maxWidth: this.props.maxWidth,
					...this.props.style
				}}
			>
				{ this.props.title ?
					<Card.Header as="h4">
						{this.props.title}
					</Card.Header>:
					null
				}
				<Card.Body className={this.props.bodyClassName} >
					<p>{this.props.description}</p>
					{this._children}
					{ !this.props.autoUpdate ?
						<Button
							variant="primary"
							disabled={this.props.disabled}
							onClick={this.handleClick}
						>{this.props.label || this.props.t('generate')}</Button> :
						<span />
					}
				</Card.Body>
			</Card>
		);
	}
}


// PROPERTIES //

Dashboard.defaultProps = {
	autoStart: true,
	autoUpdate: false,
	description: '',
	disabled: false,
	label: null,
	maxWidth: 600,
	className: '',
	bodyClassName: 'd-grid gap-3',
	style: {},
	onGenerate() {},
	title: ''
};

Dashboard.propTypes = {
	autoStart: PropTypes.bool,
	autoUpdate: PropTypes.bool,
	description: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	disabled: PropTypes.bool,
	label: PropTypes.string,
	maxWidth: PropTypes.number,
	className: PropTypes.string,
	bodyClassName: PropTypes.string,
	style: PropTypes.object,
	onGenerate: PropTypes.func,
	title: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	])
};

Dashboard.contextType = SessionContext;


// EXPORTS //

export default withTranslation( 'dashboard' )( withPropCheck( Dashboard ) );
