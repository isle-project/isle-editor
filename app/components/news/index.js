// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import newslist from './list.json';
import EXCEPTIONS from './exceptions.json';
import $ from 'jquery';
import capitalize from '@stdlib/string/capitalize';


// MAIN //

class News extends Component {
	constructor( props, context ) {
		super( props );

		this.state = {
			articles: null,
			visible: null
		};
		this.displayArticles.bind( this );
	}

	componentDidMount() {
		this.list = newslist;
	}


	displayArticles( data ) {
		this.setState({
			visible: true,
			articles: data
		});
	}

	getArticles( source ) {
		var base = 'https://newsapi.org/v1/articles?source=';
		var type = '&sortBy=latest&apiKey=';
		var key = '2987fd19bd374249979c4e38e40ef8b8';
		var url = base + source + type + key;

		var self = this;
		$.ajax({
			type: 'GET',
			url: url,
			async: false,
			dataType: 'json',
			success: function success( data, textStatus, jqXHR ) {
				console.log( data );
				if ( data.articles ) self.displayArticles( data.articles );
			}
		});
	}

	exceptions( name ) {
		var x = EXCEPTIONS[name];
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

	getArticle( item, id ) {
		let author = item.author;
		if ( author === 'null' ) author = '';

		return (
			<div className="article">
				<div className="article_author">{ author }</div>
				<div className="article_title">{ item.title }</div>
				<div className="image"><img src={item.urlToImage} /></div>
				<div className="article_description">{ item.description}</div>
				<div className="article_source">
					<a href={item.url} >{item.publishedAt }</a>
				</div>
			</div>
		);
	}

	articles() {
		if ( this.state.articles === null ) return null;
		let list = [];
		for ( var i = 0; i < this.state.articles.length; i++ ) {
			let item = this.state.articles[ i ];
			console.log( item );

			list.push(
				this.getArticle( item, i )
			);
		}
		return list;
	}

	renderArticles() {
		if ( this.state.visible === null ) return null;
		if (this.state.articles ) console.log( 'sollte die Artikel rendern ' + this.state.articles.length );

		return (
			<div className="articles">
				<div onClick={this.hide.bind( this )} className="articles_exit">×</div>
				{ this.articles() }
			</div>
		);
	}

	renderLogo() {
		if ( !this.props.logo ) return null;
		return (
			<div onClick={this.click.bind( this )} className={this.state.class_name}>
				NEWS
			</div>
		);
	}

	render() {
		return (
			<div className={this.props.className} id={this.props.id}>
				{ this.renderLogo() }
				{ this.renderArticles() }
			</div>
		);
	}
}


// DEFAULT PROPERTIES //

News.defaultProps = {
	id: 'News',
	className: 'News',
	language: 'en-US',
	logo: null
};


// PROPERTY TYPES //

News.propTypes = {
	className: PropTypes.string,
	id: PropTypes.string,
	language: PropTypes.string,
	logo: PropTypes.bool
};


// CONTEXT TYPES //

News.contextTypes = {};


// EXPORTS //

export default News;
