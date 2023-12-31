// overall array
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

// id berish
const giveId = (arr) => {
	arr.forEach((el, i) => {
		el.id = i;
	});
};
giveId(array);
