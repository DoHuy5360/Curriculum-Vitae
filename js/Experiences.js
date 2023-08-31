class Experience {
	constructor(position, time, company, description, tasks) {
		this.position = position;
		this.time = time;
		this.company = company;
		this.description = description;
        this.tasks = tasks
	}
	getHtml = () => {
		return `<div class="experience">
                    <div class="position_time">
                        <div class="position">
                            ${this.position}
                        </div>
                        <div class="time">${this.time}</div>
                    </div>
                    <div class="company">
                       ${this.company}
                    </div> 
                    <div class="description_tasks">
                        <div class="description">
                            ${this.description}
                        </div>
                        <ul class="tasks">
                            ${this.tasks.map((t) => `<li class="task">${t}</li>`).toString().replaceAll(",","")}
                        </ul>
                    </div>
                </div>`;
	};
}
const arrExperiences = [
	new Experience(
		"Technical leader",
		"May 2023 - July 2023",
		"Urban Corporation",
		"Do the tasks below for web admin and web client of Urban Corporation:",
		[
			"Organize and mangage a team of 9 members.",
			"Discuss with the customer that the function wants to develop.",
			"Feature analysis needs to be developed with team members.",
			"Design project architecture and implement database, APIs, security,...",
			"Incorporates the front-end team that defines the APIs.",
			"Combine the testers to test the APIs.",
		]
	),
	new Experience(
		"Python teacher [ Teaching online ]",
		"Jan 2021 - Jan 2021",
		"Discord",
		"Do the tasks below for teaching high school students:",
		[
			"Planning Python course, prepare exercises & assignments.",
			"Answer questions about the lecture & task.",
		]
	),
];
const experience = document.querySelector(".experiences");
setTimeout(()=>{
	arrExperiences.forEach((ex) => {
		experience.insertAdjacentHTML("beforeend", ex.getHtml());
	});
}, 500)
