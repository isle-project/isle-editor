// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MEMBER_ACTION } from '@isle-project/constants/events.js';
import { ENGAGEMENT_SURVEY_START, ENGAGEMENT_SURVEY_END } from '@isle-project/constants/actions.js';
import SurveyGenerator from './survey_generator.js';
import Binary from './binary.js';
import Meter from './meter.js';
import './engagement.css';


// MAIN //

class Engagement extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			inProgress: false
		};
	}

	componentDidMount() {
		const session = this.props.session;
		this.unsubscribe = session.subscribe( ( type, action ) => {
			if ( type === MEMBER_ACTION && action.id === 'engagement' ) {
				const actionType = action.type;
				if ( actionType === ENGAGEMENT_SURVEY_START ) {
					this.setState({
						inProgress: action.value
					});
				}
				else if ( actionType === ENGAGEMENT_SURVEY_END ) {
					this.setState({
						inProgress: false
					});
				}
			}
		});
	}

	componentWillUnmount() {
		if ( this.unsubscribe ) {
			this.unsubscribe();
		}
	}

	render() {
		switch ( this.state.inProgress ) {
			case 'yes:no':
			case 'too-slow:too-fast':
				return <Binary type={this.state.inProgress} session={this.props.session} onHide={this.props.onHide} />;
			case 'like:dislike':
				return <Meter session={this.props.session} onHide={this.props.onHide} />;
			case 'survey':
				return <SurveyGenerator session={this.props.session} onHide={this.props.onHide} />;
			default:
				return null;
		}
	}
}


// PROPERTIES //

Engagement.propTypes = {
	session: PropTypes.object.isRequired,
	onHide: PropTypes.func.isRequired
};


// EXPORTS //

export default Engagement;
