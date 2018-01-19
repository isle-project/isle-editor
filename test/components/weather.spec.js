// MODULES //
/*
import test from 'tape';
import React from 'react';
import { shallow, mount } from 'enzyme';
import Weather from 'components/weather';
import contains from '@stdlib/assert/contains';


// TESTS //

test( 'the component renders a div element', t => {
	const div = shallow( <Weather /> );
	t.ok( div.find( 'div' ).length > 0, 'expected length is greater than 0' );
	t.end();
});

test( 'the component gets certain props', t => {
	const wrapper = shallow( <Weather location="Paris" language='fr-FR' /> );

	t.strictEqual( wrapper.instance().props.location, 'Paris', 'returns expected location' );
	t.strictEqual( wrapper.instance().props.language, 'fr-FR', 'returns expected language' );
	t.end();
});

test( 'the component performs a valid Apixu call', t => {
	const wrapper = mount( <Weather location='Baltimore' language='fr-FR' /> );
	setTimeout( function onRendered(){
		t.strictEqual( wrapper.instance().state.data.location.name, 'Baltimore', 'returns the valid location' );
		let humidity = 'humidity';
		t.ok( contains( wrapper.text(), humidity ), 'contains humidity info' );
		let wind = 'wind';
		t.ok( contains( wrapper.text(), wind ), 'contains wind info' );
		wrapper.instance().changeTemperatureType();
		let fahrenheit = '°F';
		t.ok( contains( wrapper.text(), fahrenheit ), 'contains Fahrenheit' );
		t.end();
	}, 3000 );
});

test( 'the component registers itself', t => {
	const wrapper = shallow( <Weather speechInterface location="Paris" language='fr-FR' /> );
	t.strictEqual( wrapper.instance().props.speechInterface, true, 'gets registered' );
	t.end();
});
*/
