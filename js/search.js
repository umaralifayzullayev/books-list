const searchForm = document.querySelector(".search-form");
let result = [];

searchForm.addEventListener("submit", (evt) => {
	evt.preventDefault();

	result = [];
	list.innerHTML = "";

	let value = document.querySelector(".search-form__input").value;
	document.querySelector(".search-form__input").value = "";

	if (value === "") {
		return dom(array, list);
	}

	array.forEach((el) => {
		if (value === el.title) {
			result.push(el);
		}
	});

	giveId(result);
	dom(result, list);
});
