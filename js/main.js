const array = [
	{
		title: "Lorem ipsum",
		description:
			"Lorem ipsum dolor sit amet consectetur. Etiam auctor vitae morbi cursus id non. Cursus id semper ipsum nunc. Adipiscing massa ut morbi mattis proin. Mi id sit vulputate bibendum.",
		number: "10 ta kitob",
	},
	{
		title: "Lorem ipsum",
		description:
			"Lorem ipsum dolor sit amet consectetur. Etiam auctor vitae morbi cursus id non. Cursus id semper ipsum nunc. Adipiscing massa ut morbi mattis proin. Mi id sit vulputate bibendum.",
		number: "10 ta kitob",
	},
	{
		title: "Lorem ipsum",
		description:
			"Lorem ipsum dolor sit amet consectetur. Etiam auctor vitae morbi cursus id non. Cursus id semper ipsum nunc. Adipiscing massa ut morbi mattis proin. Mi id sit vulputate bibendum.",
		number: "10 ta kitob",
	},
	{
		title: "Lorem ipsum",
		description:
			"Lorem ipsum dolor sit amet consectetur. Etiam auctor vitae morbi cursus id non. Cursus id semper ipsum nunc. Adipiscing massa ut morbi mattis proin. Mi id sit vulputate bibendum.",
		number: "10 ta kitob",
	},
	{
		title: "Lorem ipsum",
		description:
			"Lorem ipsum dolor sit amet consectetur. Etiam auctor vitae morbi cursus id non. Cursus id semper ipsum nunc. Adipiscing massa ut morbi mattis proin. Mi id sit vulputate bibendum.",
		number: "10 ta kitob",
	},
];

const giveId = (arr) => {
	arr.forEach((el, i) => {
		el.id = i;
	});
};

const dom = (arr, list) => {
	arr.forEach(el => {
		let item = document.createElement("li");
		item.setAttribute("class", "hero__list-item list__item");
		let deleteBtn = document.createElement("button");
		let deleteBtnImg = document.createElement("img");
	});
};

giveId(array);
console.log(array);
