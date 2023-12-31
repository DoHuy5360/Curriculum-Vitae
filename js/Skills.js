import Image from "../utils/Image.js";
const srcSkillimgs = new Image("./imgs/skills");

class Skill {
	constructor(name, logo) {
		this.name = name;
		this.logo = logo;
		this.parser = new DOMParser();
		this.skill = "skill";
	}
	createHtml() {
		this.html = `
					<div class="${this.skill}">
						<img
							class="skill_icon"
							src="${this.logo}"
							draggable="false"
						/>
						<p class="skill_content">${this.name}</p>
					</div>
				`;
		return this;
	}
	toDom() {
		const doc = this.parser.parseFromString(this.html, "text/html");
		return  doc.querySelector(`.${this.skill}`);
	}
}

const arrSkills = [
	new Skill("HTML", srcSkillimgs.get("html.svg")),
	new Skill("CSS", srcSkillimgs.get("css.svg")),
	new Skill("JavaScript", srcSkillimgs.get("javascript.svg")),
	new Skill("TypeScript", srcSkillimgs.get("typescript.svg")),
	new Skill("ReactJS", srcSkillimgs.get("react.svg")),
	new Skill("NodeJS", srcSkillimgs.get("node.svg")),
	new Skill("Postgresql", srcSkillimgs.get("postgres.png")),
	new Skill("Mongodb", srcSkillimgs.get("mongodb.png")),
	new Skill("PHP", srcSkillimgs.get("php.png")),
	new Skill("Laravel", srcSkillimgs.get("laravel.svg")),
	new Skill("C#", srcSkillimgs.get("csharp.png")),
	new Skill("ASP.Net", srcSkillimgs.get("dotnet.png")),
	new Skill("Java", srcSkillimgs.get("java.png")),
	new Skill("SpringBoot", srcSkillimgs.get("springboot.png")),
	new Skill("Git", srcSkillimgs.get("git.png")),
	new Skill("Github", srcSkillimgs.get("github.svg")),
	// new Skill("Docker", srcSkillimgs.get("docker.png")),
	// new Skill("Python", srcSkillimgs.get("python.png")),
	// new Skill("Flask", srcSkillimgs.get("flask.png")),
	// new Skill("Database", srcSkillimgs.get("db.png")),
	// new Skill("ChakraUI", srcSkillimgs.get("chakra.png")),
];
const skillGroup = document.querySelector(".skills_group");
setTimeout(() => {
	arrSkills.forEach((skillInfo) => {
		skillGroup.insertAdjacentElement("beforeend", skillInfo.createHtml().toDom());
	});
}, 500);
