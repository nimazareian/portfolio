import React from "react";

function SkillsCard(props) {
	return (
		<div className="col-lg-auto d-flex justify-content-center skills-col">
			<div className="skills-card">
				{props.children}
				<div className="skills-description">
					<h2>{props.title}</h2>
					<p>{props.description}</p>
				</div>
			</div>
		</div>
	);
}

export default SkillsCard;
