// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import Tooltip from 'react-bootstrap/Tooltip';
import isArray from '@stdlib/assert/is-array';
import OverlayTrigger from '@isle-project/components/overlay-trigger';
import SessionContext from '@isle-project/session/context.js';
import { VOICE_RECORDING_STATUS } from '@isle-project/constants/events.js';


// FUNCTIONS //

const createTooltip = ( commands, t ) => {
	if ( commands ) {
		const rows = commands.map( ( elem, idx ) => {
			return ( <tr key={idx} >
				<td>{ isArray( elem.trigger ) ? elem.trigger.join( ', ' ) : elem.trigger}</td>
				<td>{elem.description}</td>
			</tr> );
		});
		return ( <Tooltip style={{ fontSize: 10 }} id="voice_control_tooltip">
			<p>
				<b>{t( 'available-commands' )}</b>
			</p>
			<table className="table table-bordered table-condensed" >
				<thead>
					<tr>
						<th>{t( 'commands' )}</th>
						<th>{t( 'description' )}</th>
					</tr>
				</thead>
				<tbody>
					{rows}
				</tbody>
			</table>
			<p>{t( 'click-to-set-active' )}</p>
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
	constructor( props, context ) {
		super( props );

		this.state = {
			active: false,
			show: context ? context.voiceRecordingStatus : false
		};
	}

	componentDidMount() {
		const session = this.context;
		if ( session ) {
			session.speechInterface.register({
				name: this.props.id,
				reference: this.props.reference,
				commands: this.props.commands,
				control: this
			});
			this.unsubscribe = session.subscribe( ( type, value ) => {
				if ( type === VOICE_RECORDING_STATUS ) {
					this.setState({
						show: value
					});
				}
			});
		}
	}

	setInactive = () => {
		this.setState({
			active: false
		});
	};

	setActive = () => {
		this.setState({
			active: true
		});
	};

	handleClick = () => {
		if ( this.state.active ) {
			this.setInactive();
		} else {
			const session = this.context;
			session.speechInterface.setActive( this.props.id );
		}
	};

	render() {
		if ( !this.props.id || this.props.hide || !this.state.show ) {
			return null;
		}
		const variant = this.state.active ? 'success' : 'default';
		return (
			<OverlayTrigger
				placement="left"
				overlay={createTooltip( this.props.commands, this.props.t )}
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

export default withTranslation( 'internal/voice-control' )( VoiceControl );
