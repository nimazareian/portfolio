import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Footer() {
	return (
		<div className="footer">
			<a
				className="social-btn"
				target="_blank"
				rel="noopener noreferrer"
				href="https://github.com/nimazareian/"
			>
				<GitHubIcon id="social-icon" fontSize="large" />
			</a>
			<a
				className="social-btn"
				target="_blank"
				rel="noopener noreferrer"
				href="https://www.linkedin.com/in/nima-zareian/"
			>
				<LinkedInIcon id="social-icon" fontSize="large" />
			</a>
			<a
				className="social-btn"
				target="_blank"
				rel="noopener noreferrer"
				href="mailto:nimazareian80@gmail.com"
			>
				<EmailIcon id="social-icon" fontSize="large" />
			</a>
		</div>
	);
}

export default Footer;
