// MODULES //

import React, { Component, Fragment } from 'react';
import logger from 'debug';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import isNull from '@stdlib/assert/is-null';
import Panel from 'components/panel';
import Gate from 'components/gate';
import generateUID from 'utils/uid';
import SessionContext from 'session/context.js';
import { REVEAL_CONTENT, HIDE_CONTENT } from 'constants/actions.js';
import { MEMBER_ACTION, RETRIEVED_COHORTS, RECEIVED_LESSON_INFO } from 'constants/events.js';
import './load_translations.js';


// VARIABLES //

const debug = logger( 'isle:revealer' );
const uid = generateUID( 'revealer' );


// MAIN //

/**
* An ISLE component that instructors may use to selectively reveal or hide children content to all students during class.
*
* @property {(string|node)} message - message to be displayed when content is hidden
* @property {boolean} show - controls whether to initially display child elements
*/
class Revealer extends Component {
	constructor( props ) {
		super( props );

		this.id = props.id || uid( props );

		this.state = {
			showChildren: props.show,
			selectedCohort: null,
			showProp: props.show
		};
	}

	static getDerivedStateFromProps( props, state ) {
		if ( props.show !== state.showProp ) {
			return {
				showChildren: props.show,
				showProp: props.show
			};
		}
		return null;
	}

	componentDidMount() {
		debug( `Component ${this.id} did mount...` );
		const session = this.context;
		if ( session ) {
			this.readMetadata();
			this.unsubscribe = session.subscribe( ( type, action ) => {
				if ( type === RETRIEVED_COHORTS ) {
					this.forceUpdate();
				}
				else if ( type === RECEIVED_LESSON_INFO ) {
					this.readMetadata();
				}
				else if ( type === MEMBER_ACTION ) {
					if ( action.id === this.id ) {
						const cohortName = action.value;
						debug( `Received action for cohort ${cohortName}: ` );
						if (
							!cohortName ||
							( session.cohort && session.cohort === cohortName )
						) {
							if ( action.type === REVEAL_CONTENT ) {
								debug( `Reveal content for ${this.id}...` );
								this.setState({
									showChildren: true
								});
							} else if ( action.type === HIDE_CONTENT ) {
								debug( `Hide content for ${this.id}...` );
								this.setState({
									showChildren: false
								});
							}
						}
						else if ( this.state.selectedCohort === cohortName ) {
							if ( action.type === REVEAL_CONTENT ) {
								debug( `Reveal content of ${this.id} for cohort ${cohortName}...` );
								this.setState({
									showChildren: true
								});
							} else if ( action.type === HIDE_CONTENT ) {
								debug( `Hide content of ${this.id} for cohort ${cohortName}...` );
								this.setState({
									showChildren: false
								});
							}
						}
					}
				}
			});
		}
	}

	componentWillUnmount() {
		debug( `Component ${this.id} will unmount...` );
		if ( this.unsubscribe ) {
			this.unsubscribe();
		}
	}

	readMetadata = () => {
		const session = this.context;
		if (
			session &&
			session.metadata &&
			session.metadata.revealer &&
			session.metadata.revealer[ this.id ]
		) {
			const show = session.metadata.revealer[ this.id ][ session.cohort || 'all' ];
			if ( show === true || show === false ) {
				this.setState({
					showChildren: show
				});
			}
		}
	}

	toggleContent = () => {
		this.setState({
			showChildren: !this.state.showChildren
		}, () => {
			// Send message to other users:
			const session = this.context;
			let status;
			if (
				session &&
				session.metadata &&
				session.metadata.revealer &&
				session.metadata.revealer[ this.id ]
			) {
				status = session.metadata.revealer[ this.id ];
			} else {
				status = {};
			}
			if ( this.state.showChildren ) {
				session.log({
					id: this.id,
					type: REVEAL_CONTENT,
					value: this.state.selectedCohort
				}, 'members' );
				status[ this.state.selectedCohort || 'all' ] = true;
				session.updateMetadata( 'revealer', this.id, status );
			} else {
				session.log({
					id: this.id,
					type: HIDE_CONTENT,
					value: this.state.selectedCohort
				}, 'members' );
				status[ this.state.selectedCohort || 'all' ] = false;
				session.updateMetadata( 'revealer', this.id, status );
			}
		});
	}

	handleCohortChange = ( event ) => {
		const value = event.target.value;
		if (
			value !== this.state.selectedCohort ||
			( value === 'all' && isNull( this.state.selectedCohort ) )
		) {
			debug( 'Handle cohort change: '+value );
			this.setState({
				selectedCohort: value === 'all' ? null : value
			});
		}
	}

	stopPropagation = ( event ) => {
		event.stopPropagation();
	}

	render() {
		const cohorts = this.context.cohorts || [];
		const header = <h3 className="center" >{this.props.message || this.props.t('message')}</h3>;
		return (<Fragment>
			<Gate owner >
				<Panel
					className="center"
					style={{
						marginBottom: '10px',
						width: 'fit-content'
					}}
				>
					<Button
						onClick={this.toggleContent}
						style={{ marginRight: 10 }}
					>{this.state.showChildren ? this.props.t('hide') : this.props.t('reveal')}</Button>
					{this.props.t('contents-of')}<i>{this.id}</i> {this.state.showChildren ? this.props.t('from') : this.props.t('to')}
					<select
						style={{ width: '150px', background: '#2e4468', marginLeft: '10px', padding: '2px', color: 'white' }}
						onChange={this.handleCohortChange}
						onBlur={this.handleCohortChange}
						onClick={this.stopPropagation}
						value={this.state.selectedCohort || 'all'}
					>
						<option value="all">{this.props.t('all-students')}</option>
						{cohorts.map( ( v, key ) => {
							return (
								<option
									key={key}
									value={v.title}
								>{v.title}</option>
							);
						})}
					</select>
				</Panel>
			</Gate>
			{!this.state.showChildren ? header : null}
			<div className="revealer outer-element" style={{
				display: this.state.showChildren ? 'inherit' : 'none'
			}}>{this.props.children}</div>
		</Fragment> );
	}
}


// PROPERTIES //

Revealer.defaultProps = {
	message: null,
	show: false
};

Revealer.propTypes = {
	message: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	show: PropTypes.bool
};

Revealer.contextType = SessionContext;


// EXPORTS //

export default withTranslation( 'revealer' )( Revealer );
