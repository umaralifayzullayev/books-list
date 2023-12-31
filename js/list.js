// domga chiqarish
const dom = (arr, list) => {
	arr.forEach((el) => {
		let item = document.createElement("li");
		item.setAttribute("class", "hero__list-item list__item");

		let deleteBtn = document.createElement("button");
		deleteBtn.setAttribute("class", "hero__list-delete-btn list__delete-btn");
		let deleteBtnImg = document.createElement("img");
		deleteBtnImg.src = "../images/home/deleteIcon.svg";
		deleteBtnImg.setAttribute("class", "hero__list-delete-btn-img list__delete-btn-img");
		deleteBtn.appendChild(deleteBtnImg);
		item.appendChild(deleteBtn);

		let itemBodyBtn = document.createElement("button");
		itemBodyBtn.setAttribute("class", "hero__list-btn list__btn");

		let title = document.createElement("h2");
		title.textContent = el.title;
		title.setAttribute("class", "hero__list-title list__title");
		itemBodyBtn.appendChild(title);

		let descriptionText = document.createElement("p");
		descriptionText.textContent = el.description;
		descriptionText.setAttribute("class", "hero__list-desc-text list__desc-text");
		itemBodyBtn.appendChild(descriptionText);

		let numberText = document.createElement("p");
		numberText.textContent = el.number;
		numberText.setAttribute("class", "hero__list-number-text list__number-text");
		itemBodyBtn.appendChild(numberText);

		item.appendChild(itemBodyBtn);
		list.appendChild(item);
	});
};

const list = document.querySelector(".list");
dom(array, list);
