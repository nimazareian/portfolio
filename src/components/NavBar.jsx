import React from "react";
import SvgLogo from "./SvgLogo";

function NavBar() {
	return (
		<nav class="navbar navbar-expand-lg navbar-dark">
			<a class="navbar-brand" href="">
				<h2 className="app-bar-logo">NZ</h2>
			</a>
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarTogglerDemo03"
				aria-controls="navbarTogglerDemo03"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo03">
				<ul className="navbar-nav">
					<li className="nav-item">
						<a className="nav-link" href="#heading">
							HOME <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#skills">
							ABOUT
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							CONTACT
						</a>
					</li>
					<button type="button" className="btn btn-outline-light">
						Resume
					</button>
				</ul>
			</div>
		</nav>
	);
}

export default NavBar;
