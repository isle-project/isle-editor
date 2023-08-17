// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import LearnWordVennDiagram from '@isle-project/components/learn/word-venn-diagram/main.js';
import data from './../fixtures/tdm_sparse.json';


// TESTS //

describe( '<LearnWordVennDiagram />', function test() {
	it( 'renders a learning component', () => {
		const learning = renderer.create(
			<LearnWordVennDiagram
				tdm={data.tdm} vocabulary={data.vocabulary} nTexts={118}
			/>
		);
		expect( learning ).toMatchSnapshot();
	});
});
