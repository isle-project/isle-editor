// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import capitalize from '@stdlib/string/capitalize';
import isElectron from 'utils/is-electron';
import VoiceInput from 'components/input/voice';
import newslist from './list.json';
import EXCEPTIONS from './exceptions.json';
import './styles.css';


// VARIABLES //

const rejectUnauthorized = isElectron ? false : true;
const debug = logger( 'isle-editor:news' );


// MAIN //

class News extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			articles: null,
			visible: null
		};
	}

	componentDidMount() {
		this.list = newslist;
		if ( this.props.speechInterface ) {
			this.register();
		}
	}

	register() {
		this.session.speechInterface.register({
			name: [ 'news' ],
			ref: this,
			commands: [{
				command: 'trigger',
				trigger: [ 'news', 'hey' ],
				text: true,
				params: {}
			}]
		});
	}

	displayArticles = ( data ) => {
		this.props.onArticles( data );
		this.setState({
			visible: true,
			articles: data
		});
	}

	getArticles( source ) {
		const base = 'https://newsapi.org/v1/articles?source=';
		const type = '&sortBy=latest&apiKey=';
		const url = base + source + type + this.props.key;
		fetch( url ).then( res => res.json() ).then( data => {
			if ( data.articles ) {
				this.displayArticles( data.articles );
			}
		}).catch( err => {
			this.addNotification({
				title: 'Couldn\'t retrieve data.',
				message: err.message,
				position: 'tr',
				level: 'failure'
			});
		});
	}

	exceptions( name ) {
		var x = EXCEPTIONS[ name ];
		if ( x ) {
			return x;
		}
		return capitalize( name );
	}

	find( name ) {
		name = name.replace( 'the ', '' );
		name = this.exceptions( name );

		var result = null;
		for ( var i = 0; i < newslist.length; i++ ) {
			var item = newslist[ i ].title;

			if ( item.search( name ) !== -1 ) {
				result = newslist[ i ].trig;
			}
		}
		if ( result ) {
			this.getArticles( result );
		}
	}

	trigger( value ) {
		debug( 'News component is externally triggered...' );
		var marker = 'in';
		switch ( this.props.language ) {
		case 'en-US':
			marker = 'in';
			break;
		case 'de-DE':
			marker = 'in';
			break;
		case 'fr-FR':
			marker = 'dans';
			break;
		default:
			marker = 'in';
			break;
		}

		var x = value.search( marker );
		if ( x !== -1 ){
			x += ( marker.length +1 );
			var text = value.substring( x, value.length );
			this.find( text );
		}
	}

	hide() {
		this.setState({
			visible: null
		});
	}

	getDate( date ) {
		return ( new Date( date ).toLocaleString( this.props.language ) );
	}

	getArticle( item, id ) {
		let author = item.author;
		if ( author === 'null' ) {
			author = '';
		}
		var date = this.getDate( item.publishedAt );
		return (
			<div className="article">
				<div className="article-author">{author}</div>
				<div className="article-title">{item.title}</div>
				<div className="image"><img src={item.urlToImage} /></div>
				<div className="article-description">{item.description}</div>
				<div className="article-source">
					<a href={item.url} >{date}</a>
				</div>
			</div>
		);
	}

	articles() {
		if ( !this.state.articles ) {
			return null;
		}
		const list = [];
		for ( let i = 0; i < this.state.articles.length; i++ ) {
			const item = this.state.articles[ i ];
			list.push(
				this.getArticle( item, i )
			);
		}
		return list;
	}

	renderArticles() {
		if ( !this.state.visible ) {
			return null;
		}
		return (
			<div className="articles">
				{this.articles()}
			</div>
		);
	}

	renderLogo() {
		if ( this.props.invisible ) {
			return null;
		}
		return (
			<div>
				<div className="article-header">NEWS</div>
				<VoiceInput
					placeholder="Pick a newspaper"
					style={{ float: 'left', width: '80%' }}
					language={this.props.language}
					onSubmit={this.find.bind(this)}
					onFinalText={this.trigger.bind(this)}
				/>
				<div onClick={this.hide.bind( this )} className="articles-exit">×</div>
			</div>

		);
	}

	render() {
		return (
			<div className="article-container" id={this.props.id}>
				{ this.renderLogo() }
				{ this.renderArticles() }
			</div>
		);
	}
}


// DEFAULT PROPERTIES //

News.defaultProps = {
	language: 'en-US',
	invisible: false,
	key: '2987fd19bd374249979c4e38e40ef8b8',
	onArticles() {},
	speechInterface: false
};


// PROPERTY TYPES //

News.propTypes = {
	invisible: PropTypes.bool,
	key: PropTypes.string,
	language: PropTypes.string,
	onArticles: PropTypes.func,
	speechInterface: PropTypes.bool
};

News.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default News;
