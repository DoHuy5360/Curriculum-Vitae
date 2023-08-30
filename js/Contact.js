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
		"https://res.cloudinary.com/dy57fdikk/image/upload/v1692856092/developer-blog-default/mail_ygh9hu.svg"
	),
	new ViewContact(
		"Binh Chanh - TP.HCM",
		"https://res.cloudinary.com/dy57fdikk/image/upload/v1692856092/developer-blog-default/home_zyuspt.svg"
	),
	new ViewContact(
		"0963758993",
		"https://res.cloudinary.com/dy57fdikk/image/upload/v1692856092/developer-blog-default/phone_nnpfx9.svg"
	),
	new ViewContact(
		"17/08/2002",
		"https://res.cloudinary.com/dy57fdikk/image/upload/v1692856092/developer-blog-default/birthday-cake_ud7wiz.svg"
	),
	new LinkContact(
		"github.com/DoHuy5360",
		"https://res.cloudinary.com/dy57fdikk/image/upload/v1692856092/developer-blog-default/link_qhyjec.svg",
		"https://github.com/DoHuy5360"
	),
];

const contact = document.querySelector(".contact");
arrInfo.forEach((infor) => {
	contact.insertAdjacentHTML("beforeend", infor.getHtml());
});
