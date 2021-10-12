// MODULES //

import { resolve } from 'path';


// VARIABLES //

const ELECTRON_REGEXP = /node_modules[\\/]electron[\\/]dist/;
const IS_PACKAGED = !( ELECTRON_REGEXP.test( process.resourcesPath ) );
const basePath = IS_PACKAGED ? process.resourcesPath : '.';


// MAIN //

const eslintOpts = {
	baseConfig: {
		parser: '@babel/eslint-parser',
		env: {
			es6: true,
			browser: true,
			node: true
		},
		rules: {
			'no-case-declarations': 2,
			'no-const-assign': 2,
			'no-constant-condition': 2,
			'no-control-regex': 2,
			'no-debugger': 2,
			'no-delete-var': 2,
			'no-dupe-args': 2,
			'no-dupe-keys': 2,
			'no-duplicate-case': 2,
			'no-empty-character-class': 2,
			'no-empty-pattern': 2,
			'no-empty': 2,
			'no-ex-assign': 2,
			'no-extra-boolean-cast': 2,
			'no-extra-semi': 2,
			'no-func-assign': 2,
			'no-global-assign': 2,
			'no-inner-declarations': 2,
			'no-invalid-regexp': 2,
			'no-irregular-whitespace': 2,
			'no-mixed-spaces-and-tabs': 2,
			'no-self-assign': 2,
			'no-sparse-arrays': 2,
			'no-unexpected-multiline': 2,
			'no-unreachable': 2,
			'no-unsafe-finally': 2,
			'no-unsafe-negation': 2,
			'no-unused-labels': 2,
			'no-useless-escape': 2,
			'require-yield': 2,
			'use-isnan': 2,
			'valid-typeof': 2,
			'no-regex-spaces': 2,
			'react/jsx-closing-bracket-location': 0,
			'react/jsx-closing-tag-location': 0,
			'react/jsx-curly-spacing': [ 2, 'never' ],
			'react/jsx-equals-spacing': [ 2, 'never' ],
			'react/jsx-key': 0,
			'react/jsx-no-bind': 0,
			'react/jsx-no-comment-textnodes': 2,
			'react/jsx-no-duplicate-props': 2,
			'react/jsx-pascal-case': 2,
			'react/jsx-tag-spacing': [ 2, {
				'beforeSelfClosing': 'always'
			}],
			'react/jsx-uses-react': 2,
			'react/jsx-uses-vars': 2,
			'enforce-ids-in-jsx/missing-ids': 0,
			'enforce-ids-in-jsx/unique-ids': 2
		},
		'extends': [
			'plugin:jsx-a11y/recommended'
		],
		'plugins': [
			'react',
			'jsx-a11y',
			'enforce-ids-in-jsx'
		],
		'settings': {
			'react': {
				'version': '16'
			}
		}
	},
	cwd: resolve( basePath ),
	useEslintrc: false
};


// EXPORTS //

export default eslintOpts;
