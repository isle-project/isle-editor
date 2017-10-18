// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Panel } from 'react-bootstrap';
import hasOwnProperty from '@stdlib/assert/has-own-property';
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
		for ( let i = 0; i < this.props.children.length; i++ ) {
			if ( hasOwnProperty( this.state, i ) ) {
				const value = this.state[ i ];
				args.push( value );
			}
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

	handleFieldChange = ( fieldId, value ) => {
		var newState = {};
		newState[ fieldId ] = value;

		this.setState( newState );
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

		const children = React.Children.map( this.props.children,
			( child, idx ) => React.cloneElement( child, {
				onChange: ( value ) => {
					this.handleFieldChange( idx, value );
				}
			})
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

Dashboard.childContextTypes = {
	triggerDashboardClick: PropTypes.func,
	autoUpdate: PropTypes.bool
};

Dashboard.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default Dashboard;
