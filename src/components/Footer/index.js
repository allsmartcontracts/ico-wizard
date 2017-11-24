import React from 'react'
import '../../assets/stylesheets/application.css';
import { Link } from 'react-router-dom'

export const Footer = () => (
	<footer className="footer">
		<div className="container">
			<p className="rights">2017 Oracles Network. Russian by Allsmartcontracts.ru</p>
     
			<div className="socials">
			  <a href="https://twitter.com/" className="social social_twitter"></a>
        <a href="http://www.allsmartcontracts.ru" className="social social_oracles"></a>
        <a href="https://t.me" className="social social_telegram"></a>
        <a href="https://github.com/" className="social social_github"></a>
			</div>
		</div>
	</footer>
)
