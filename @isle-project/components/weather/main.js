// MODULES //

import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import axios from 'axios';
import { withTranslation } from 'react-i18next';
import round from '@stdlib/math/base/special/round';
import SessionContext from '@isle-project/session/context.js';
import { withPropCheck } from '@isle-project/utils/prop-check';
import Description from './description.js';
import Location from './location.js';
import './weather.css';


// VARIABLES //

const debug = logger( 'isle:weather' );
const DEGREES = '°';
const MSEC = 'm/sec';
const Temperature = ({ main, weather }) => {
	const [ unit, setUnit ] = useState( 'fahrenheit' );
	const toggleUnit = () => {
		setUnit( unit === 'celsius' ? 'fahrenheit' : 'celsius' );
	};
	let label;
	let type;
	if ( unit === 'celsius' ) {
		label = round( ( main.temp - 32 ) * (5/9), -2 );
		type = 'C';
	} else {
		label = round( main.temp );
		type = 'F';
	}
	// eslint-disable-next-line i18next/no-literal-string
	const icon = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;
	return (
		<div className="weather-temperature">{label}{DEGREES}
			<span
				role="button"
				onClick={toggleUnit}
				onKeyPress={toggleUnit}
				className="weather-temperature-type"
				tabIndex={0}
			>
				{type}
			</span>
			<img className="weather-icon" alt="Weather icon" src={icon} />
		</div>
	);
};
const Details = ({ main, wind, t }) => {
	return (
		<div className="weather-details" >
			<div className="weather-humidity" >
				{t('humidity')}: {main.humidity}%
			</div>
			<div className="weather-wind">
				{t('wind')}: {wind.speed} {MSEC}
				<br />
				{t('direction')}: {wind.deg}
			</div>
		</div>
	);
};


// MAIN //

/**
* A component for displaying the current weather at a designated location.
*
* @property {string} location - location name
* @property {Object} style - CSS inline styles
*/
class Weather extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			data: null
		};
	}

	componentDidMount() {
		this.getData( this.props.location );
	}

	reset = () => {
		this.setState({
			data: null
		});
	};

	trigger = ( text, callback ) => {
		debug( 'Trigger weather retrieval...' );
		if ( callback ) {
			this.callback = callback;
		} else {
			this.callback = null;
		}
		const marker = this.props.t( 'in' );
		let n = text.search( marker );
		n += ( marker.length + 1 );
		if ( n !== -1 ) {
			let location = text.substring( n, text.length );
			debug( 'Get weather info for location: '+ location );
			this.getData( location );
		}
	};

	getData = ( location ) => {
		const session = this.context;
		if ( location && session.server ) {
			axios.get( `${session.server}/weather?location=${location}` )
				.then( response => {
					this.setWeatherData( response.data );
				})
				.catch( ( err ) => {
					debug( 'Encountered an error: '+err.message );
				});
		}
	};

	setWeatherData = ( data ) => {
		if ( this.callback ) {
			this.callback( data );
		}
		this.setState({
			data: data
		});
	};

	render() {
		const data = this.state.data;
		if ( !data ) {
			return (
				<div className="weather" style={this.props.style} >
					<div className="weather-loading title" >
						{this.props.t('loading-weather-data-for', { loc: this.props.location })}
					</div>
				</div>
			);
		}
		return (
			<div className="weather" style={this.props.style} >
				<Location name={data.name} sys={data.sys} />
				<Description weather={data.weather[ 0 ]} />
				<Temperature main={data.main} weather={data.weather[ 0 ]} />
				<Details main={data.main} wind={data.wind} t={this.props.t} />
				<br />
			</div>
		);
	}
}


// PROPERTIES //

Weather.propTypes = {
	location: PropTypes.string,
	style: PropTypes.object
};

Weather.defaultProps = {
	location: null,
	style: {}
};

Weather.contextType = SessionContext;


// EXPORTS //

export default withTranslation( 'weather' )( withPropCheck( Weather ) );
