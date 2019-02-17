// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Clock from 'components/clock';
import Portrait from './portrait.js';
import Progressbar from './progressbar.js';
import SessionContext from 'session/context.js';
import './score.css';


// MAIN //

/**
* An ISLE component that allows you display the user's score.
*
* @property {boolean} duration - indicates whether the time is displayed as a duration - beginning with session start
* @property {string} format - sets the format of the time string
* @property {string} type - sets the type of the score UI - available options: 'default', 'bottom', 'full'
*/
class Score extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			score: 72,
			hidden: false,
			handlerClass: 'score-full-handler circle'
		};
	}

	renderUser() {
		const session = this.context;
		var name = session.anonymous ? 'Anonymous' : session.user.name;

		return (
			<div className="score-user-info">
			<Portrait name={name}></Portrait>
				<div className="portrait-username">{ name}</div>
			</div>
		);
	}

	renderDate() {
		const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
		var d = new Date();
		var month = months[d.getMonth()];
		var year = d.getFullYear();
		var day = d.getUTCDate();

		const dateDefaultClock = {
			position: 'absolute',
			width: '100%',
			height: 12,
			textAlign: 'left',
			color: 'white',
			top: 0,
			left: 16,
			fontSize: 14,
			fontFamily: 'Open Sans Condensed'
		};

		return (
			<div className="date-default">
				<div className='date-default-month'>{month}</div>
				<div className='date-default-day'>{day}</div>
				<div className='date-default-year'>{year}</div>
				<Clock format={this.props.format} style={dateDefaultClock}></Clock>
			</div>
		);
	}

	toggle = () => {
		let hidden = !this.state.hidden;
		var style = 'score-full-handler';
		if (this.state.handlerClass === 'score-full-handler') style = 'score-full-handler circle';

		this.setState({
			hidden: hidden,
			handlerClass: style
		});
	}


	renderType() {
		const clock={
			fontWeight: 600,
			fontFamily: 'Open Sans',
			padding: 0
		};


		if (this.props.type === 'default') {
			return (
				<div className="score">
				<div className="score-header">SCORE</div>
				<div className="score-timer">
					<Clock duration={this.props.duration} style={clock} format={this.props.format}></Clock>
				</div>
				<div className="score-outer-circle2 i-rotating" />
				<div className="score-outer-circle i-rotating" />
				<div className="score-circle" />
				<div className="score-half-circle rotating" />

				<div className="score-points">
					{ this.state.score }
				</div>
			</div>
			);
		}

		if (this.props.type === 'bottom'){
			const clockStyle = {
				fontSize: 18,
				fontFamily: 'Open Sans'
			};

			return (
				<div className="score-bottom">
					<div className="score-bottom-time">
						<Clock style={clockStyle} duration={this.props.duration} format={this.props.format}></Clock>
					</div>
					<div className="score-bottom-content"></div>
					<div className="score-bottom-legend">SCORE</div>
					<div className="score-bottom-text">299</div>
					<div className="score-bottom-line moving"></div>
				</div>
			);
		}

		if (this.props.type === 'experiment') {
			return (
				<div className="score-grid-container anim-scale-up">
					<div className="score-grid-header">HEADER</div>
					<div className="score-grid-footer">
					</div>
				</div>
			);
		}


		if (this.props.type === 'full') {
			let toggled = 'score-full';
			if (this.state.hidden === true) toggled = 'score-full score-full-hidden';

			return (
				<div className={toggled} >
					<div className={this.state.handlerClass} onClick={this.toggle}></div>
					{ this.renderUser() }
					{ this.renderDate() }

					<div className="score-full-score">
						<div className="score-full-header">SCORE</div>

						<div className="score-full-outer-circle i-rotating" />
						<div className="score-full-circle" />
						<div className="score-full-half-circle rotating" />

						<div className="score-full-score-points">
							{ this.state.score }
						</div>
					</div>
					<div className="score-full-progressbar">
						<Progressbar />
					</div>
				</div>
			);
		}
	}

	render() {
		return (
			<div>
				{this.renderType()}
			</div>
		);
	}
}


// PROPERTIES //

Score.propTypes = {
	duration: PropTypes.bool,
	format: PropTypes.string,
	type: PropTypes.string
};

Score.defaultProps = {
	duration: false,
	format: 'HH:MM',
	type: 'default'
};

Score.contextType = SessionContext;


// EXPORTS //

export default Score;
