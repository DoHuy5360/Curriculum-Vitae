import Image from '../utils/Image.js'
const srcSkillimgs = new Image("./imgs/skills")

const arrSkills = [
	{
		name: "HTML",
		image: srcSkillimgs.get("html.svg"),
	},
	{
		name: "CSS",
		image: srcSkillimgs.get("css.svg"),
	},
	{
		name: "JavaScript",
		image: srcSkillimgs.get("javascript.svg"),
	},
	{
		name: "TypeScript",
		image: srcSkillimgs.get("typescript.svg"),
	},
	{
		name: "NodeJS",
		image: srcSkillimgs.get("node.svg"),
	},
	{
		name: "ReactJS",
		image: srcSkillimgs.get("react.svg"),
	},
	{
		name: "Git",
		image: srcSkillimgs.get("git.png"),
	},
	{
		name: "Github",
		image: srcSkillimgs.get("github.svg"),
	},
	{
		name: "Postgresql",
		image: srcSkillimgs.get("postgres.png"),
	},
	{
		name: "Mongodb",
		image: srcSkillimgs.get("mongodb.png"),
	},
	{
		name: "Docker",
		image: srcSkillimgs.get("docker.png"),
	},
	{ name: "PHP", image: srcSkillimgs.get("php.png") },
	{
		name: "Laravel",
		image: srcSkillimgs.get("laravel.svg"),
	},
	{
		name: "Python",
		image: srcSkillimgs.get("python.png"),
	},
	{
		name: "Flask",
		image: srcSkillimgs.get("flask.png"),
	},
	{
		name: "Java",
		image: srcSkillimgs.get("java.png"),
	},
	{
		name: "SpringBoot",
		image: srcSkillimgs.get("springboot.png"),
	},
	{
		name: "C#",
		image: srcSkillimgs.get("csharp.png"),
	},
	{
		name: "ASP.Net",
		image: srcSkillimgs.get("dotnet.png"),
	},
	{
		name: "Database",
		image: srcSkillimgs.get("db.png"),
	},
	{
		name: "ChakraUI",
		image: srcSkillimgs.get("chakra.png"),
	},
];
const skillGroup = document.querySelector(".skills_group");
arrSkills.forEach((skillInfo) => {
	skillGroup.insertAdjacentHTML("beforeend", skillHtml.call(skillInfo));
});
function skillHtml() {
	return `<div class="skill">
                <img
                    class="skill_icon"
                    src="${this.image}"
                />
                <p class="skill_content">${this.name}</p>
            </div>`;
}
