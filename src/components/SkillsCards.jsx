import React from "react";
import SkillsCard from "./SkillsCard";
import KeyboardOutlinedIcon from "@material-ui/icons/KeyboardOutlined";

function SkillsCards() {
	return (
		<div className="row justify-content-center skills" id="skills">
			<SkillsCard className="col-md-6" title="Web Development" description="React, HTML, and CSS">
				<KeyboardOutlinedIcon className="skills-icon" fontSize="large" />
			</SkillsCard>
			<SkillsCard className="col-md-6" title="Mobile Development" description="Flutter and Dart">
				<KeyboardOutlinedIcon className="skills-icon" fontSize="large" />
			</SkillsCard>
			<SkillsCard className="col-md-12" title="Software Engineer" description="React, Flutter, HTML, and CSS">
				<KeyboardOutlinedIcon className="skills-icon" fontSize="large" />
			</SkillsCard>
		</div>
	);
}

export default SkillsCards;
