import Image from "../utils/Image.js";
const srcContactImgs = new Image("./imgs/contacts")

class ViewContact{
	constructor(name, logo) {
		this.name = name;
		this.logo = logo;
	}

	getHtml () {
		return `<div class="item">
                    <img
                        class="item_icon"
                        src="${this.logo}"
                    />
                    <p class="item_content">${this.name}</p>
                </div>`;
	};
}

class LinkContact extends ViewContact {
	constructor(name, logo, link) {
		super(name, logo);
		this.link = link;
	}

	getHtml () {
		return `<div class="item">
                    <img
                        class="item_icon"
                        src="${this.logo}"
                    />
                    <a class="item_content" href="${this.link}">${this.name}</a>
                </div>`;
	};
}

const arrInfo = [
	new ViewContact(
		"dohuy.200276@gmail.com",
		srcContactImgs.get("mail.svg")
	),
	new ViewContact(
		"Binh Chanh - TP.HCM",
		srcContactImgs.get("home.svg")
	),
	new ViewContact(
		"0963758993",
		srcContactImgs.get("phone.svg")
	),
	new ViewContact(
		"17/08/2002",
		srcContactImgs.get("birthday.svg")
	),
	new LinkContact(
		"github.com/DoHuy5360",
		srcContactImgs.get("link.svg"),
		"https://github.com/DoHuy5360"
	),
];

const contact = document.querySelector(".contact");
arrInfo.forEach((infor) => {
	contact.insertAdjacentHTML("beforeend", infor.getHtml());
});
