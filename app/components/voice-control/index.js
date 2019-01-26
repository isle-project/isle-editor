// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Tooltip from 'react-bootstrap/Tooltip';
import isArray from '@stdlib/assert/is-array';
import OverlayTrigger from 'components/overlay-trigger';
import SessionContext from 'session/context.js';


// FUNCTIONS //

const createTooltip = ( commands ) => {
	if ( commands ) {
		const rows = commands.map( ( elem, idx ) => {
			return ( <tr key={idx} >
				<td>{ isArray( elem.trigger ) ? elem.trigger.join( ', ' ) : elem.trigger}</td>
				<td>{elem.description}</td>
			</tr> );
		});
		return ( <Tooltip style={{ fontSize: 10 }} id="voice_control_tooltip">
			<p>
				<b>Available voice commands:</b>
			</p>
			<table className="table table-bordered table-condensed" >
				<thead>
					<tr>
						<th>Command(s)</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					{rows}
				</tbody>
			</table>
			<p>Click to set component as active</p>
		</Tooltip> );
	}
	return null;
};


// MAIN //

/**
* Component to register a reference with the speech control interface.
*
* @property {string} id - unique identifier
* @property {Array} commands - array of voice commands
* @property {Object} reference - reference object
* @property {boolean} hide - controls whether to hide control elements for toggling on/off voice control and display a list of available commands
*/
class VoiceControl extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			active: false
		};
	}

	componentDidMount() {
		if ( this.props.id ) {
			const session = this.context;
			session.speechInterface.register({
				name: this.props.id,
				reference: this.props.reference,
				commands: this.props.commands,
				control: this
			});
		}
	}

	setInactive = () => {
		this.setState({
			active: false
		});
	}

	setActive = () => {
		this.setState({
			active: true
		});
	}

	handleClick = () => {
		if ( this.state.active ) {
			this.setInactive();
		} else {
			const session = this.context;
			session.speechInterface.setActive( this.props.id );
		}
	}

	render() {
		if ( !this.props.id || this.props.hide ) {
			return null;
		}
		const variant = this.state.active ? 'success' : 'default';
		return (
			<OverlayTrigger
				placement="left"
				overlay={createTooltip( this.props.commands )}
			>
				<Button style={{ boxShadow: 'none', float: 'right' }} variant={variant} onClick={this.handleClick} size="sm" >
					<div className="fa fa-phone" />
					<span style={{ marginLeft: 4 }} >{this.props.id}</span>
				</Button>
			</OverlayTrigger>
		);
	}
}


// PROPERTIES //

VoiceControl.propTypes = {
	id: PropTypes.string,
	commands: PropTypes.array.isRequired,
	hide: PropTypes.bool,
	reference: PropTypes.object.isRequired
};

VoiceControl.defaultProps = {
	id: null,
	hide: false
};

VoiceControl.contextType = SessionContext;


// EXPORTS //

export default VoiceControl;
