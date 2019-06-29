/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function imgUrl(img) {
	return `${siteConfig.baseUrl}img/${img}`;
}

function docUrl(doc, language) {
	return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
}

const Button = props => (
	<div className="pluginWrapper buttonWrapper">
		<a className="button" href={props.href} target={props.target}>
			{props.children}
		</a>
	</div>
);

const SplashContainer = props => (
	<div className="homeContainer">
		<div className="homeSplashFade">
			<div className="wrapper homeWrapper">{props.children}</div>
		</div>
	</div>
);

const Logo = props => (
	<div className="projectLogo">
		<img src={props.img_src} alt="Project Logo" style={{ borderRadius: 30 }} />
	</div>
);

const ProjectTitle = () => (
	<h2 className="projectTitle">
		{siteConfig.title}
		<small>{siteConfig.tagline}</small>
	</h2>
);

const PromoSection = props => (
	<div className="section promoSection">
		<div className="promoRow">
			<div className="pluginRowBlock">{props.children}</div>
		</div>
	</div>
);

const WELCOME = `Welcome to the documentation of the *interactive statistics learning environment* (ISLE) and the ISLE Editor for authoring interactive lessons for statistics and related disciplines.
The ISLE project is an initiative aimed at enhancing e-learning in statistics education at Carnegie Mellon University. It has been generously supported by two Carnegie Mellon [ProSEED][proseed] grant for the development of technology-enhanced learning (TEL) projects.

The project is licensed under a permissive open-source license (Apache 2.0). One of our aims is to encourage statistics instructors at other universities to use it for their purposes. Since ISLE lessons are easy to embed on any given website, hosting one's own lessons is simple. For questions, please contact us via email at pgb AT andrew.cmu.edu.

[proseed]: http://www.cmu.edu/proseed/`;


class Index extends React.Component {
	render() {
		const language = this.props.language || '';

		const Block = props => (
			<Container
				padding={['bottom', 'top']}
				id={props.id}
				background={props.background}>
				<GridBlock
					align="left"
					contents={props.children}
					layout={props.layout}
				/>
			</Container>
		);

		const FeatureCallout = () => (
			<div
				className="productShowcaseSection paddingBottom"
				style={{ textAlign: 'center' }}>
				<h2>Features</h2>
			</div>
		);

		const VideoTutorials = () => (
			<div>
				<Block id="video-tutorials">
					{[
						{
							content: 'A selection of video tutorials help you get started and see how ISLE may be incorporated into your classroom.',
							image: imgUrl( 'undraw_youtube_tutorial.svg' ),
							imageAlign: 'left',
							title: 'Video Tutorials'
						}
					]}
				</Block>
			</div>
		);

		const Welcome = () => (
			<Block background="light">
				{[
					{
						content: WELCOME,
						image: imgUrl( 'undraw_welcome.svg' ),
						imageAlign: 'right',
						title: 'Welcome'
					}
				]}
			</Block>
		);

		const Features = () => (
			<Block layout="threeColumn">
				{[
					{
						content: 'Use the ISLE editor to create new ISLE lessons, ranging from interactive lectures to lab activities or homework assignments',
						image: imgUrl( 'undraw_editor.svg' ),
						imageAlign: 'top',
						title: 'ISLE Editor'
					},
					{
						content: 'Use the ISLE dashboard to manage your course, administer lessons, and monitor student progress',
						image: imgUrl( 'undraw_dashboard.svg' ),
						imageAlign: 'top',
						title: 'ISLE Dashboard'
					},
					{
						content: 'Host an ISLE server instance for user management and data collection or deploy to an existing server',
						image: imgUrl( 'undraw_server.svg' ),
						imageAlign: 'top',
						title: 'ISLE Server'
					}
				]}
			</Block>
		);

		return (
			<div>
				<SplashContainer>
					<Logo img_src={imgUrl('isle_logo_black.png')} />
					<div className="inner">
						<ProjectTitle siteConfig={siteConfig} />
						<PromoSection>
							<Button href={docUrl('video-tutorials', language)}>
								Video Tutorials
							</Button>
							<Button href="http://stat.cmu.edu/isle">Project Website</Button>
							<Button href="http://www.stat.cmu.edu/isle/faq.html">FAQ</Button>
						</PromoSection>
					</div>
				</SplashContainer>
				<div className="mainContainer">
					<Welcome />
					<FeatureCallout />
					<Features />
					<VideoTutorials />
				</div>
			</div>
		);
	}
}

module.exports = Index;
