// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import Gate from 'components/gate';


// MAIN //

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
		// Send message to other users at call
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


// DEFAULT PROPERTIES //

Revealer.defaultProps = {
	message: 'Content hidden by instructor'
};


// TYPES //

Revealer.propDescriptions = {
	message: 'Message to be displayed when content is hidden'
};

Revealer.propTypes = {
	message: PropTypes.string
};

Revealer.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default Revealer;
