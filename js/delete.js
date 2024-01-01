list.addEventListener("click", (evt) => {
	if (evt.target.matches(".list__delete-btn")) {
		let deleteButtonId = evt.target.dataset.id;
		let findIndex = array.findIndex((el) => (el.id === deleteButtonId));
		array.splice(findIndex, 1);
	}
});
