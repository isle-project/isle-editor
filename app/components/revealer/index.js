// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import Gate from 'components/gate';


// MAIN //

/**
* An ISLE component that instructors to selectively reveal or hide children content.
*
* @property {string} message - message to be displayed when content is hidden
*/
class Revealer extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			showChildren: false
		};
	}

	componentDidMount() {
		const { session } = this.context;
		if ( session ) {
			this.unsubscribe = session.subscribe( ( type, action ) => {
					if ( type === 'member_action' ) {
						if ( action.id === this.props.id ) {
							if ( action.type === 'REVEAL_CONTENT' ) {
								this.setState({
									showChildren: true
								});
							} else if ( action.type === 'HIDE_CONTENT' ) {
								this.setState({
									showChildren: false
								});
							}
						}
					} else if ( type === 'user_joined' ) {
						// When new users join, make sure they can see the component when it was already revealed:
						if ( this.state.showChildren ) {
							this.context.session.log({
								id: this.props.id,
								type: 'REVEAL_CONTENT',
								value: this.state.showChildren,
								noSave: true
							}, 'members' );
						}
					}
				});
		}
	}

	componentWillUnmount() {
		if ( this.unsubscribe ) {
			this.unsubscribe();
		}
	}

	toggleContent = () => {
		this.setState({
			showChildren: !this.state.showChildren
		}, () => {
			// Send message to other users:
			if ( this.state.showChildren ) {
				this.context.session.log({
					id: this.props.id,
					type: 'REVEAL_CONTENT',
					value: this.state.showChildren
				}, 'members' );
			} else {
				this.context.session.log({
					id: this.props.id,
					type: 'HIDE_CONTENT',
					value: this.state.showChildren
				}, 'members' );
			}
		});
	}

	render() {
		const header = <h3 className="center" >{this.props.message}</h3>;
		return (<div>
			<Gate owner >
				<Button
					className="centered"
					onClick={this.toggleContent}
					style={{
						marginBottom: '10px'
					}}
				>
					Click to {this.state.showChildren ? 'hide from' : 'reveal to'} users
				</Button>
			</Gate>
				{this.state.showChildren ? this.props.children : header}
		</div> );
	}
}


// PROPERTIES //

Revealer.defaultProps = {
	message: 'Content hidden by instructor'
};

Revealer.propTypes = {
	id: PropTypes.string.isRequired,
	message: PropTypes.string
};

Revealer.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default Revealer;
