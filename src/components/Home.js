import React, { Component } from "react";
import Header from "./Header";
import HomeStart from "./HomeStart";
import HomeProjects from "./HomeProjects";
import Footer from "./Footer";
import moment from 'moment';

import scriptLoader from 'react-async-script-loader';

class Home extends Component {

	constructor(props){
		super(props);

		this.state = {
			isLoading: true
		}
	}

	componentDidMount(){
		this.setState({
			isLoading: false
		})
	}

	render() {
			return (
				<div className="arlo_tm_wrapper_all">
					<div id="arlo_tm_popup_blog">
						<div className="container">
							<div className="inner_popup scrollable" />
						</div>
						<span className="close"><a href="#" /></span>
					</div>
					{/* PRELOADER */}
					<div className={`arlo_tm_preloader ${this.state.isLoading ? "" : "loaded"}`}>
						<div className="spinner_wrap">
							<div className="spinner" />
						</div>
					</div>
					{/* /PRELOADER */}
					{/* MOBILE MENU */}
					<div ref='mobile_menu_wrap' className="arlo_tm_mobile_header_wrap">
						<div className="main_wrap">
							<div className="logo">
								<img src="/assets/img/logo/mobile_logo.png"/>
							</div>
							<div className="arlo_tm_trigger">
								<div ref='hamburger' className="hamburger hamburger--collapse-r">
									<div className="hamburger-box">
										<div className="hamburger-inner" />
									</div>
								</div>
							</div>
						</div>
						<div className="arlo_tm_mobile_menu_wrap">
							<div className="mob_menu">
								<ul className="anchor_nav">
									<li><a href="#home">Home</a></li>
									<li><a href="#about">About</a></li>
									<li><a href="#services">Services</a></li>
									<li><a href="#portfolio">Portfolio</a></li>
									<li><a href="#news">News</a></li>
									<li><a href="#contact">Contact</a></li>
								</ul>
							</div>
						</div>
					</div>
					{/* /MOBILE MENU */}

					{/* CONTENT */}
					<div className="arlo_tm_content">
						{/* LEFTPART */}
						<div className="arlo_tm_leftpart_wrap">
							<div className="leftpart_inner">
								<div className="logo_wrap">
									<a href="#"><img src="/assets/img/logo.svg"/></a>
								</div>
								<div className="menu_list_wrap">
									<ul className="anchor_nav">
										<li><a href="#home">Home</a></li>
										<li><a href="#about">About</a></li>
										<li><a href="#services">Services</a></li>
										<li><a href="#portfolio">Portfolio</a></li>
										<li><a href="#contact">Contact</a></li>
									</ul>
								</div>
								<div className="leftpart_bottom">
									<div className="social_wrap">
										<ul>
											<li><a href="#"><i className="xcon-facebook" /></a></li>
											<li><a href="#"><i className="xcon-twitter" /></a></li>
											<li><a href="#"><i className="xcon-linkedin" /></a></li>
											<li><a href="#"><i className="xcon-instagram" /></a></li>
											<li><a href="#"><i className="xcon-behance" /></a></li>
										</ul>
									</div>
								</div>
								<a className="arlo_tm_resize" href="#"><i className="xcon-angle-left" /></a>
							</div>
						</div>
						{/* /LEFTPART */}
						{/* RIGHTPART */}
						<div className="arlo_tm_rightpart">
							<div className="rightpart_inner">
								<div className="arlo_tm_section" id="home">
									<div className="arlo_tm_hero_header_wrap">
										<div className="arlo_tm_universal_box_wrap particle jarallax" data-speed="0.1">
											<div id="particles-js" /> 
											<div className="particle_overlay" />
											<div id='header_section' className="inner_content">
												<div className="image_wrap">
													<img src="/assets/img/newprofileimg.png"/>
												</div>
												<div className="name_holder">
													<h3>Alen <span>Budimir</span></h3>
												</div>
												<div className="text_typing">
													<p>I'm a <span className="arlo_tm_animation_text_word" /></p>
												</div>
											</div>
											<div className="arlo_tm_arrow_wrap bounce anchor">
												<a href="#about"><i className="xcon-angle-double-down" /></a>
											</div>
										</div>
									</div>
								</div>

								{/* ABOUT */}
								<div className="arlo_tm_section relative" id="about">
									<div className="arlo_tm_about_wrapper_all">
										<div className="container">
											<div className="arlo_tm_title_holder">
												<h3>About Me</h3>
												<span>Main informations about me</span>
											</div>
											<div className="arlo_tm_about_wrap">
												<div className="author_wrap">
													<div className="leftbox">
														<div className="about_image_wrap parallax" data-relative-input="true">
															<div className="image layer" data-depth="0.1">
																<img src="/assets/img/about/550x640.jpg"/>
																<div className="inner" data-img-url="/assets/img/about/1.jpg" />
															</div>
															<div className="border layer" data-depth="0.2">
																<img src="/assets/img/about/550x640.jpg"/>
																<div className="inner" />
															</div>
														</div>
													</div>
													<div className="rightbox">
														<div className="arlo_tm_mini_title_holder">
															<h4>I'm Alen Budimir and <span className="arlo_tm_animation_text_word" /></h4>
														</div>
														<div className="definition">
															<p>Hello! My name is <strong>Alen Budimir</strong>. I am a Web Developer, and I'm very passionate and dedicated to my work.</p>
														</div>
														<div className="about_short_contact_wrap">
															<ul>
																<li>
																	<span><label>Birthday:</label> December, 2000</span>
																</li>
																<li>
																	<span><label>Age:</label> {moment().diff('2000-12-01', 'years')}</span>
																</li>
																<li>
																	<span><label>Country:</label> Slovenia</span>
																</li>
																<li>
																	<span><label>Interests:</label> Tv series</span>
																</li>
																<li>
																	<span><label>Study:</label> ERŠ Velenje</span>
																</li>
																<li>
																	<span><label>Degree:</label> Soon</span>
																</li>	
																<li>
																	<span><label>Website:</label> <a href="https://budimir.si/">budimir.si</a></span>
																</li>
																<li>
																	<span><label>Mail:</label> <a href="mailto:alen.budimir20@gmail.com">alen.budimir20@gmail.com</a></span>
																</li>
																<li>
																	<span><label>Github:</label> <a href="https://github.com/budi1200">budi1200</a></span>
																</li>
																<li>
																	<span><label>LinkedIn:</label> <a href="https://www.linkedin.com/in/alen-budimir/">Alen Budimir</a></span>
																</li>
															</ul>
														</div>
														<div className="buttons_wrap">
															<ul>
																<li>
																	<a href="index.html"><span>Download CV</span></a>
																</li>
																<li className="anchor">
																	<a href="#contact"><span>Send Message</span></a>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* /ABOUT */}
								{/* SKILLS */}
								<div className="arlo_tm_section">
									<div className="arlo_tm_skills_wrap">
										<div className="container">
											<div className="inner_wrap">
												<div className="leftbox">
													<div className="arlo_tm_mini_title_holder">
														<h4>Some About my Abilities</h4>
													</div>
													<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry. Lorem Ipsum has been the industry's 				standard dummy text since. Lorem Ipsum is simply.</p>
												</div>
												<div className="rightbox">
													<div className="progress_bar_wrap_total">
														<div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
															<div className="arlo_tm_progress" data-value={95} data-color="#000">
																<span><span className="label">Wordpress - <span className="experience">5 years of experience</span></span><span className="number">95%</span></span>
																<div className="arlo_tm_bar_bg"><div className="arlo_tm_bar_wrap"><div className="arlo_tm_bar" /></div></div>
															</div>
															<div className="arlo_tm_progress" data-value={85} data-color="#000">
																<span><span className="label">Css - <span className="experience">3 years of experience</span></span><span className="number">85%</span></span>
																<div className="arlo_tm_bar_bg"><div className="arlo_tm_bar_wrap"><div className="arlo_tm_bar" /></div></div>
															</div>
															<div className="arlo_tm_progress" data-value={75} data-color="#000">
																<span><span className="label">HTML - <span className="experience">4 years of experience</span></span><span className="number">75%</span></span>
																<div className="arlo_tm_bar_bg"><div className="arlo_tm_bar_wrap"><div className="arlo_tm_bar" /></div></div>
															</div>
															<div className="arlo_tm_progress" data-value={90} data-color="#000">
																<span><span className="label">After Effect - <span className="experience">6 years of experience</span></span><span className="number">90%</span></span>
																<div className="arlo_tm_bar_bg"><div className="arlo_tm_bar_wrap"><div className="arlo_tm_bar" /></div></div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* /SKILLS */}
								{/* SERVICES */}
								<div className="arlo_tm_section" id="services">
									<div className="arlo_tm_services_wrap">
										<div className="container">
											<div className="arlo_tm_title_holder">
												<h3>Amazing Services</h3>
												<span>Meet my amazing services</span>
											</div>
											<div className="list_wrap">
												<ul>
													<li>
														<div className="inner">
															<div className="icon">
																<img className="svg" src="/assets/img/svg/camera-diaphragm.svg"/>
															</div>
															<div className="title_service">
																<h3>Front-End Development</h3>
															</div>
															<div className="text">
																<p>Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...</p>
															</div>
														</div>
													</li>
													<li>
														<div className="inner">
															<div className="icon">
																<img className="svg" src="/assets/img/svg/new-tab.svg"/>
															</div>
															<div className="title_service">
																<h3>Back-End Development</h3>
															</div>
															<div className="text">
																<p>Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...</p>
															</div>
														</div>
													</li>
													<li>
														<div className="inner">
															<div className="icon">
																<img className="svg" src="/assets/img/svg/layers.svg"/>
															</div>
															<div className="title_service">
																<h3>Branding</h3>
															</div>
															<div className="text">
																<p>Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...</p>
															</div>
														</div>
													</li>
													<li>
														<div className="inner">
															<div className="icon">
																<img className="svg" src="/assets/img/svg/share.svg"/>
															</div>
															<div className="title_service">
																<h3>Social Media</h3>
															</div>
															<div className="text">
																<p>Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...</p>
															</div>
														</div>
													</li>
													<li>
														<div className="inner">
															<div className="icon">
																<img className="svg" src="/assets/img/svg/adobe-illustrator.svg"/>
															</div>
															<div className="title_service">
																<h3>Illustrator</h3>
															</div>
															<div className="text">
																<p>Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...</p>
															</div>
														</div>
													</li>
													<li>
														<div className="inner">
															<div className="icon">
																<img className="svg" src="/assets/img/svg/seo-performance-marketing-graphic.svg"/>
															</div>
															<div className="title_service">
																<h3>Marketing</h3>
															</div>
															<div className="text">
																<p>Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...</p>
															</div>
														</div>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								{/* /SERVICES */}
								{/* PORTFOLIO */}
								<div className="arlo_tm_section relative" id="portfolio">
									<div className="arlo_tm_portfolio_wrapper_all">
										{/* PORTFOLIO FILTER */}
										<div className="arlo_tm_second_portfolio">
											<div className="container">
												<div className="arlo_tm_portfolio_wrap">
													<div className="arlo_tm_title_holder portfolio">
														<h3>Creative Works</h3>
														<span>Check out our latest creative works</span>
													</div>
													<div className="arlo_tm_portfolio_titles" />
													<ul className="arlo_tm_portfolio_filter">
														<li><a href="#" className="current" data-filter="*">All</a></li>
														<li><a href="#" data-filter=".design">Design</a></li>
														<li><a href="#" data-filter=".photography">Photography</a></li>
														<li><a href="#" data-filter=".development">Development</a></li>
													</ul>
													<ul className="arlo_tm_portfolio_list gallery_zoom">
														<li className="design">
															<div className="entry arlo_tm_portfolio_animation_wrap" data-title="Aoc Productions" data-category="Design">
																<a href="portfolio-single.html">
																	<img src="/assets/img/portfolio/600x600.jpg"/>
																	<div className="arlo_tm_portfolio_image_main" data-img-url="/assets/img/portfolio/1.jpg" />
																</a>
															</div>
														</li>
														<li className="photography">
															<div className="entry arlo_tm_portfolio_animation_wrap" data-title="Ind Hed" data-category="Photography">
																<a href="portfolio-single-2.html">
																	<img src="/assets/img/portfolio/600x600.jpg"/>
																	<div className="arlo_tm_portfolio_image_main" data-img-url="/assets/img/portfolio/2.jpg" />
																</a>
															</div>
														</li>
														<li className="development">
															<div className="entry arlo_tm_portfolio_animation_wrap" data-title="Paper Mockup" data-category="Development">
																<a href="portfolio-single-3.html">
																	<img src="/assets/img/portfolio/600x600.jpg"/>
																	<div className="arlo_tm_portfolio_image_main" data-img-url="/assets/img/portfolio/3.jpg" />
																</a>
															</div>
														</li>
														<li className="photography">
															<div className="entry arlo_tm_portfolio_animation_wrap" data-title="The Nordic" data-category="Photography">
																<a href="portfolio-single-4.html">
																	<img src="/assets/img/portfolio/600x600.jpg"/>
																	<div className="arlo_tm_portfolio_image_main" data-img-url="/assets/img/portfolio/4.jpg" />
																</a>
															</div>
														</li>
														<li className="design">
															<div className="entry arlo_tm_portfolio_animation_wrap" data-title="Creatives Castle" data-category="Design">
																<a href="portfolio-single-5.html">
																	<img src="/assets/img/portfolio/600x600.jpg"/>
																	<div className="arlo_tm_portfolio_image_main" data-img-url="/assets/img/portfolio/5.jpg" />
																</a>
															</div>
														</li>
														<li className="photography">
															<div className="entry arlo_tm_portfolio_animation_wrap" data-title="White Bag" data-category="Photography">
																<a href="portfolio-single-6.html">
																	<img src="/assets/img/portfolio/600x600.jpg"/>
																	<div className="arlo_tm_portfolio_image_main" data-img-url="/assets/img/portfolio/6.jpg" />
																</a>
															</div>
														</li>
													</ul>
												</div>
											</div>
										</div>
										{/* /PORTFOLIO FILTER */}
									</div>
								</div>
								{/* /PORTFOLIO */}
								{/* COUNTERBOX */}
								<div className="arlo_tm_section">
									<div className="container">
										<div className="arlo_tm_counter_wrap" data-col={4} data-delay={300}>
											<ul className="arlo_tm_counter_list arlo_tm_miniboxes">
												<li>
													<div className="inner arlo_tm_minibox">
														<h3><span><span className="arlo_tm_counter" data-from={0} data-to={30} data-speed={3000}>0</span></span></h3>
														<span>Projects Completed</span>
													</div>
												</li>
												<li>
													<div className="inner arlo_tm_minibox">
														<h3><span><span className="arlo_tm_counter" data-from={0} data-to={10} data-speed={3000}>0</span>K</span></h3>
														<span>Lines of Code</span>
													</div>
												</li>
												<li>
													<div className="inner arlo_tm_minibox">
														<h3><span><span className="arlo_tm_counter" data-from={0} data-to={20} data-speed={3000}>0</span></span></h3>
														<span>Happy Clients</span>
													</div>
												</li>
												<li>
													<div className="inner arlo_tm_minibox">
														<h3><span><span className="arlo_tm_counter" data-from={0} data-to={8000} data-speed={3000}>0</span>+</span></h3>
														<span>Random number</span>
													</div>
												</li>
											</ul>
										</div>
									</div>
								</div>
								{/* /COUNTERBOX */}
								{/* CONTACT & FOOTER */}
								<div className="arlo_tm_section" id="contact">
									<div className="container">
										<div className="arlo_tm_title_holder contact">
											<h3>Contact Me</h3>
											<span>Get in touch with me</span>
										</div>
									</div>
									<div className="arlo_tm_footer_contact_wrapper_all">
										<div className="arlo_tm_contact_wrap_all">
											<div className="container">
												<div className="leftbox">
													<div className="arlo_tm_mini_title_holder contact">
														<h4>Get in Touch</h4>
													</div>
													<div className="short_info_wrap">
														<ul>
															<li><p><label>Email:</label><span><a href="mailto:alen.budimir20@gmail.com">alen.budimir20@gmail.com</a></span></p></li>
															<li><p><label>Website:</label><span><a href="https://budimir.si/">budimir.si</a></span></p></li>
														</ul>
													</div>
												</div>
												<div className="rightbox">
													<div className="arlo_tm_contact_wrap">
														<div className="main_input_wrap">
															<form action="/" method="post" className="contact_form" id="contact_form">
																<div className="returnmessage" data-success="Your message has been received, We will contact you soon." />
																<div className="empty_notice"><span>Please Fill Required Fields</span></div>
																<div className="wrap">
																	<input id="name" type="text" placeholder="Your Name" />
																</div>
																<div className="wrap">
																	<input id="email" type="text" placeholder="Your Email" />
																</div>
																<div className="wrap">
																	<textarea id="message" placeholder="Your Message" defaultValue={""} />
																</div>
																<div className="arlo_tm_button">
																	<a id="send_message" href="#"><span>Send Message</span></a>
																</div>
															</form>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="arlo_tm_footer_wrap">
											<div className="container">
												<p>© Copyright 2019. All Rights are Reserved.</p>
											</div>
										</div>
									</div>
								</div>
								{/* /CONTACT & FOOTER */}
							</div>
						</div>
						{/* /RIGHTPART */}
						<a className="arlo_tm_totop" href="#" /> 
					</div>
				</div>
			);
	}
}

export default scriptLoader(
	[
		'/assets/js/jquery.js',
		'/assets/js/plugins.js'
	],
	'/assets/js/init.js'
  )(Home)
