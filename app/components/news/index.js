// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import newslist from './list.json';
import $ from 'jquery';

// MAIN //

class News extends Component {
	constructor( props, context ) {
		super( props );

		this.state = {
			recognized: 'recognized text',
			articles: null,
			visible: null
		};
	
		this.display_articles.bind( this );
	}

	componentDidMount() {
		this.list = newslist;
	}


	display_articles( data ) {
		this.setState({
			visible: true,
			articles: data
		});
	}

	get_articles ( source ) {
		var base = "https://newsapi.org/v1/articles?source=";
		var source = source;
		var type = "&sortBy=latest&apiKey=";
		var key = "2987fd19bd374249979c4e38e40ef8b8";
		var url = base + source + type + key;

		var self = this;
		$.ajax({
			type: "GET",
			url: url,
			async: false,
			dataType: "json",
			success: function ( data, textStatus, jqXHR ) {
				console.log( data );
				if ( data.articles ) self.display_articles( data.articles );
			}
		});
	}

	find ( name ) {
		name = name.replace( "the ", "" );
		var result = null;
		for ( var i = 0; i < newslist.length; i++ ) {
			var item = newslist[ i ].title;
			if ( item.search( name ) !== -1 ) {
				result = newslist[ i ].trig;
			}
		}
		if ( result ) this.get_articles( result );
	}


	trigger( value ) {
		var marker = "in";
	
		switch ( this.props.language ) {
		case "en-US": 
			marker = "in";	
			break;
		case "de-DE": 
			marker = "in";	
			break;
		case "fr-FR": 
			marker = "dans";	
			break;
		}

		var x = value.search( marker );
		if ( x !== -1 ){
			console.log( "gefunden" );
			x += ( marker.length +1 );
			var text = value.substring( x, value.length );
			this.find ( text );
		}
	}


	hide() {
		this.setState({
			visible: null
		});
	}


	get_article ( item, id ) {
		let author = item.author;
		if ( author === 'null' ) author = '';

		return (
			<div class = "article">
				<div class = "article_author">{ author }</div>
				<div class = "article_title">{ item.title }</div>
				<div class = "image"><img src = { item.urlToImage} /></div>
				<div class = "article_description">{ item.description}</div>
				<div class = "article_source">
					<a href = { item.url } >{item.publishedAt }</a>
				</div>
			</div>
		);
	}


	articles () {
		if ( this.state.articles === null ) return null;
		let list = [];
		for ( var i = 0; i < this.state.articles.length; i++ ) {
			   let item = this.state.articles[ i ];
			   console.log( item );

			   list.push(
				this.get_article( item, i )
			   );
			 }
		return list;
	}

	render_articles() {
		if ( this.state.visible === null ) return null;
		if (this.state.articles ) console.log( "sollte die Artikel rendern " + this.state.articles.length );

		return (
			<div class = "articles">
				<div onClick = { this.hide.bind( this ) } class = "articles_exit">×</div>
				{ this.articles() }
			</div>	
		);
	}

	render_logo() {
		if ( ! this.props.logo ) return null;
		return (
			<div onClick = {  this.click.bind( this ) } class = { this.state.class_name }>
				NEWS
			</div>
		);
	}


	render() {
		return (
			<div class = { this.props.className } id = { this.props.id }>
				{ this.render_logo() }
				{ this.render_articles() }
			</div>
		);
	}
}


// DEFAULT PROPERTIES //

News.defaultProps = {
	id: 'News',
	className: 'News',
	language: 'en-US',
	name: 'News',
};


// PROPERTY TYPES //

News.propTypes = {
	id: PropTypes.string,
	className: PropTypes.string,
	name: PropTypes.string,
	language: PropTypes.string,
};


// CONTEXT TYPES //

News.contextTypes = {
};


// EXPORTS //

export default News;
