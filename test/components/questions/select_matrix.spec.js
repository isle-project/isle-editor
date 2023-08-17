// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Session from '@isle-project/session';
import Provider from '@isle-project/components/internal/provider';
import SelectQuestionMatrix from '@isle-project/components/questions/select-matrix/main.js';


// VARIABLES //

const session = new Session( {}, true );


// TESTS //

describe( '<SelectQuestionMatrix />', function test() {
	it( 'renders a select question', () => {
		const question = renderer.create( <Provider session={session}>
			<SelectQuestionMatrix
				question="Test your art history knowledge"
				rows={[ 'Composer', 'Author' ]}
				cols={[ '18th Century', '19th Century' ]}
				options={{
					'0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],
					'0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'],
					'1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],
					'1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner']
				}}
				solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}
			/>
		</Provider> );
		expect( question ).toMatchSnapshot();
	});
});
