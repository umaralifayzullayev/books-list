// continue with google
document.getElementById("sign-up-with-google").onclick = () => {
	window.location.href = "index.html";
};

// continue with facebook
document.getElementById("sign-up-with-facebook").onclick = () => {
	window.location.href = "index.html";
};

// form
document.getElementById("sign-up-form").addEventListener("submit", (evt) => {
	evt.preventDefault();

	// value olish
	let nameValue = document.getElementById("sign-up-input-name");
	let emailValue = document.getElementById("sign-up-input-email");
	let usernameValue = document.getElementById("sign-up-input-username");

	// value tozalash
	document.getElementById("sign-up-input-name").value = "";
	document.getElementById("sign-up-input-email").value = "";
	document.getElementById("sign-up-input-username").value = "";

	// value tekshirish
	if (nameValue === "" && emailValue === "" && usernameValue === "") {
		// bor bulsa yuq qilish
		document.getElementById("sign-up-label-name").classList.remove("active");
		document.getElementById("sign-up-label-email").classList.remove("active");
		document.getElementById("sign-up-label-username").classList.remove("active");
		// qushish
		document.getElementById("sign-up-label-name").classList.add("active");
		document.getElementById("sign-up-label-email").classList.add("active");
		document.getElementById("sign-up-label-username").classList.add("active");
		return;
	}
	if (nameValue === "" && emailValue === "") {
		// bor bulsa yuq qilish
		document.getElementById("sign-up-label-name").classList.remove("active");
		document.getElementById("sign-up-label-email").classList.remove("active");
		// qushish
		document.getElementById("sign-up-label-name").classList.add("active");
		document.getElementById("sign-up-label-email").classList.add("active");
		return;
	}
	if (nameValue === "" && usernameValue === "") {
		// bor bulsa yuq qilish
		document.getElementById("sign-up-label-name").classList.remove("active");
		document.getElementById("sign-up-label-username").classList.remove("active");
		// qushish
		document.getElementById("sign-up-label-name").classList.add("active");
		document.getElementById("sign-up-label-username").classList.add("active");
		return;
	}
	if (emailValue === "" && usernameValue === "") {
		// bor bulsa yuq qilish
		document.getElementById("sign-up-label-email").classList.remove("active");
		document.getElementById("sign-up-label-username").classList.remove("active");
		// qushish
		document.getElementById("sign-up-label-email").classList.add("active");
		document.getElementById("sign-up-label-username").classList.add("active");
		return;
	}
	if (nameValue === "") {
		// bor bulsa yuq qilish
		document.getElementById("sign-up-label-name").classList.remove("active");
		// qushish
		document.getElementById("sign-up-label-name").classList.add("active");
		return;
	}
	if (emailValue === "") {
		// bor bulsa yuq qilish
		document.getElementById("sign-up-label-email").classList.remove("active");
		// qushish
		document.getElementById("sign-up-label-email").classList.add("active");
		return;
	}
	if (usernameValue === "") {
		// bor bulsa yuq qilish
		document.getElementById("sign-up-label-username").classList.remove("active");
		// qushish
		document.getElementById("sign-up-label-username").classList.add("active");
		return;
	}

	// ishlasa
	window.location.href = "index.html";
});
