import Image from "../utils/Image.js";

const srcFuncImgs = new Image("./imgs/functions");
const srcProjImgs = new Image("./imgs/projects");

class Function {
	constructor(logo, name) {
		this.logo = logo;
		this.name = name;
	}
	getHtml() {
		return `
        <div class="function">
            <img
                src="${this.logo}"
                class="function_icon"
				draggable="false"
            />
            <p class="function_content">${this.name}</p>
        </div>
        `;
	}
}
class Link {
	constructor(title, name, link) {
		this.title = title;
		this.name = name;
		this.link = link;
	}
	getHtml() {
		return `
        <div class="address">
            <div class="address_title">${this.title}</div>
            <a target="_blank" href="${this.link}" class="address_url">${this.name}</a>
        </div>
        `;
	}
}

class Project {
	constructor(logo, name, description, functions, links, frontend, backend, support) {
		this.logo = logo;
		this.name = name;
		this.description = description;
		this.functions = functions;
		this.links = links;
		this.backend = backend;
		this.frontend = frontend;
		this.support = support;
	}
	getHtml() {
		return `
        <div class="project">
                <div class="logo_name">
                    <img
                        class="logo"
                        src="${this.logo}"
						draggable="false"
                    />
                    <p class="name">${this.name}</p>
                </div>
                <div class="description">
                    <p class="description_title">
                        ${this.description}
                    </p>
                    <div class="description_functions">
                        ${this.functions
													.map((i) => i.getHtml())
													.toString()
													.replaceAll(",", "")}
                    </div>
                </div>
                <div class="addresses">
                    ${this.links
											.map((i) => i.getHtml())
											.toString()
											.replaceAll(",", "")}
                </div>
                <div class="techs">
                    <div class="tech">
                        <div class="tech_title">Front-end:</div>
                        <div class="tech_stacks">${this.frontend}</div>
                    </div>
                    <div class="tech">
                        <div class="tech_title">Back-end:</div>
                        <div class="tech_stacks">${this.backend}</div>
                    </div>
                    <div class="tech">
                        <div class="tech_title">Others:</div>
                        <div class="tech_stacks">${this.support}</div>
                    </div>
                </div>
            </div>
        `;
	}
}

const arrProjects = [
	new Project(
		srcProjImgs.get("octocat.png"),
		"Managing Urban Employee's Schedules [Management] - 05/2023 - 07/2023",
		"Building and developing an admin dashboard to manage employee's work schedules of Urban corporation. Includes several functions:",
		[
			new Function(srcFuncImgs.get("scheduling.png"), "Scheduling"),
			new Function(srcFuncImgs.get("management.png"), "Managing"),
			new Function(srcFuncImgs.get("monitoring.png"), "Monitoring"),
		],
		[
			new Link("Public:", "No public", "#"),
			new Link(
				"Source:",
				"github.com/DoHuy5360/BE_intern",
				"https://github.com/DoHuy5360/BE_intern"
			),
		],
		"Javascript [ReactJS], CSS [MUI]",
		"Java [Spring boot], Postgresql, ",
		"Git, Github"
	),
	new Project(
		srcProjImgs.get("raptor-transformed.png"),
		"Todo Task [ Todo ] - 11/2022 - 12/2022",
		"Building and developing a todo application. The task can be dragged and dropped by user. Includes several functions:",
		[
			new Function(srcFuncImgs.get("planing.png"), "Planning"),
			new Function(srcFuncImgs.get("drag-and-drop.png"), "Dragging & Dropping"),
		],
		[
			new Link("Public:", "https://todo-task-fe.vercel.app", "https://todo-task-fe.vercel.app/"),
			new Link(
				"Source:",
				"github.com/DoHuy5360/todo-task",
				"https://github.com/DoHuy5360/todo-task"
			),
		],
		"Javascript [ReactJS], CSS",
		"Javascript [NodeJS, ExpressJS], Mongodb",
		"Git, Github"
	),
	new Project(
		srcProjImgs.get("empty_cart.png"),
		"Shopbee [ Ecommerce ] - 09/2022 - 10/2022",
		"Building and developing an ecommerce website like Shopee. Includes several functions:",
		[
			new Function(srcFuncImgs.get("sale.png"), "Sale"),
			new Function(srcFuncImgs.get("cart.png"), "Cart"),
			new Function(srcFuncImgs.get("checkout.png"), "Checkout"),
			new Function(srcFuncImgs.get("search.png"), "Searching"),
		],
		[
			new Link("Public:", "No public", "#"),
			new Link(
				"Source:",
				"github.com/DoHuy5360/shopbee",
				"https://github.com/DoHuy5360/shopbee#login"
			),
		],
		"HTML [Blade], CSS, Javascript [Ajax]",
		"PHP [Laravel], Postgresql",
		"Git, Github"
	),
];

const project = document.querySelector(".projects");
setTimeout(()=>{
	arrProjects.forEach((p) => {
		project.insertAdjacentHTML("beforeend", p.getHtml());
	});
}, 500)
