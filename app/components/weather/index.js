// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import './weather.css';
import SpeechInterface from 'speech-interface'; // this may be deleted


// MAIN //

class Weather extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			data: null,
			temperature: 'celsius'
		};
	}

	componentDidMount() {
		this.getData( this.props.location);
		if ( this.props.speechInterface ) {
			this.register();
		}
	}

	register() {
		if (!global.speechInterface) {
			global.speechInterface = new SpeechInterface();
		}
		global.speechInterface.register({
			name: ['weather'],
			ref: this,
			commands: [{
				command: 'trigger',
				trigger: ['weather', 'in'],
				text: true,
				params: {}
			}]
		});
	}

	trigger( text, callback ) {
		if (callback) {
			this.callback = callback;
		} else {
			this.callback = null;
		}
		var marker = 'in';

		switch ( this.props.language) {
		case 'en-US':
				marker= ' in';
			break;

		case 'de-DE':
			marker= ' in';
			break;

		case 'fr-FR':
			marker = ' à';
			break;
		}

		var n = text.search(marker);
		n += (marker.length + 1);
		if (n !== -1) {
			let location = text.substring( n, text.length);
			this.getData( location );
		}
	}

	getData( location ) {
		var base = 'http://api.apixu.com/v1';
		var json = '/current.json';
		var key = '3b94f972948543b8a1780701171211';
		var q = location;
		var url = base + json + '?key=' + key + '&q=' + q;
		var self = this;

		$.ajax({
			url: url,
			dataType: 'json',
			success: function success(data) {
				self.setWeatherData( data );
			}
		} );
	}

	setWeatherData( data ) {
		if (this.callback) {
			this.callback( data );
		}

		this.setState({
			data: data
		});

		global.data = this.state.data;
	}

	changeTemperatureType = () => {
		if (this.state.temperature === 'celsius') {
			this.setState({
				temperature: 'fahrenheit'
			});
		}
		else {
			this.setState({
				temperature: 'celsius'
			});
		}
	}

	renderTemperature(current) {
		if (this.state.temperature === 'celsius') {
			return (
				<div className="weather-temperature">{ current.temp_c } °
					<span onClick={this.changeTemperatureType} className="weather-temperature-type">C</span>
				</div>
			);
		}
		return (
			<div className="weather-temperature">{ current.temp_f } °
			<span onClick={this.changeTemperatureType} className="weather-temperature-type">F</span>
		</div>
		);
	}

	renderWind( current ) {
		if (this.state.temperature === 'celsius') {
			return (
				<div className="weather-wind">wind: { current.wind_kph } kmh / { current.wind_dir }</div>
			);
		}
		return (
			<div className="weather-wind">wind: { current.wind_mph } mph / { current.wind_dir }</div>
		);
	}

	renderDescription( current ) {
		let icon = 'http:' + current.condition.icon;
		return (
			<Fragment>
				<div className="weather-description">{ current.condition.text }
				<img className="weather-icon" src={icon} />
				</div>
			</Fragment>
		);
	}

	renderLocation( current ) {
		return (
			<div className="weather-location">
				<div className="weather-place">{ this.state.data.location.name }</div>
				<div className="weather-location-region">{ this.state.data.location.region }, </div>
				<div className="weather-location-country">{ this.state.data.location.country }</div>
			</div>
		);
	}

	renderPrecipitation( current ) {
		if ( this.state.temperature === 'celsius' ) {
			return (
				<div className="weather-wind">precipitation: { current.precip_mm } mm</div>
			);
		}
		return (
			<div className="weather-wind">precipitation: { current.precip_in } in</div>
		);
	}

	renderDetails( current ) {
	   return (
		<div className="weather-details">
			<div className="weather-humidity">humidity: { current.humidity }%</div>
			{ this.renderWind(current) }
			{ this.renderPrecipitation(current) }
		</div>
	   );
	}

	renderData() {
		if ( !this.state.data) return null;
		let current = this.state.data.current;
		return (
			<Fragment>
				{this.renderLocation(current)}
				{this.renderDescription(current)}
				<br />
				{this.renderTemperature(current)}
				{this.renderDetails(current)}
			</Fragment>
		);
	}

	render() {
		return (
			<div className="weather">
				{this.renderData()}
			</div>
		);
	}
}


// PROPERTY TYPES //

Weather.propTypes = {
	language: PropTypes.string,
	location: PropTypes.string,
	speechInterface: PropTypes.bool
};

Weather.defaultProps = {
	language: 'en-US',
	location: 'Berlin',
	speechInterface: false
};


// EXPORTS //

export default Weather;
