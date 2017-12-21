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

	exceptions ( name ) {
		if ( name === "techcrunch" ) 		return "TechChrunch";
		if ( name === "tech crunch" ) 		return "TechChrunch";
		if ( name === "next web" )   		return "Next Web";
		if ( name === "LAD Bible" )   		return "Lad Bible";
		if ( name === "talkSPORT" )   		return "TalkSport";
		if ( name === "Redditch" )   		return "Reddit/r/all";

		if ( name === "polygon" )   		return "Polygon";		
		if ( name === "New York magine" )   return "New York Magazine";
		if ( name === "new Scientist" )   	return "New Scientist";
		if ( name === "mirror" )   			return "Mirror";

		if ( name === "mashable" )   		return "Mashable";		
		if ( name === "hacker news" )   	return "Hacker News";
		if ( name === "Google News" )   	return "GoogleNews";
		if ( name === "four four two" )   	return "FourFourTwo";

		if ( name === "football Italia" )   return "Football Italia";		
		if ( name === "BuzzFeed" )   		return "Buzzfeed";
		if ( name === "Turkish speaker" )   return "Tagesspiegel";
		if ( name === "associated Press" )   return "Associated Press";		

		if ( name === "wired" )   			return "Wired";
		if ( name === "Wyatt" )   			return "Wired";
		if ( name === "time" )   			return "The Time";
		if ( name === "times of India" )   	return "Times of India";
		if ( name === "sport Bible" )  		return "Sport Bible";	

		if ( name === "t3n" )   			return "T3n";
		if ( name === "Rogers" || name === "writers" ) return "Reuters";
		if ( name === "recalled" )   		return "Recode";
		if ( name === "Leek Road" )  		return "Recode";

		if ( name === "newsweek" )   		return "Newsweek";
		if ( name === "Rogers" )   			return "Reuters";
		if ( name === "recalled" )   		return "Recode";
		if ( name === "Leek Road" )  		return "Recode";


		if ( name === "Frodsham" )   		return "Fortune";
		if ( name === "entertainment weekly" ) return "Entertainment Weekly";
		if ( name === "Deeside" )   		return "Die Zeit";
		if ( name === "bild" )  			return "Bild";

		if ( name === "newsweek" )   		return "Newsweek";
		if ( name === "ask Technica" || name === "ars Technica" ) return "Ars Technica";

		return name;
	}
 

	find ( name ) {
		name = name.replace( "the ", "" );
		name = this.exceptions( name );
		
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
