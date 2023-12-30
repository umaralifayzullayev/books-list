// continue with google
document.getElementById("sign-in-with-google").onclick = () => {
	window.location.href = "index.html";
};

// continue with facebook
document.getElementById("sign-in-with-facebook").onclick = () => {
	window.location.href = "index.html";
};

// form
document.getElementById("sign-in-form").addEventListener("submit", (evt) => {
	evt.preventDefault();

	// value olish
	let nameValue = document.getElementById("sign-in-input-name");
	let emailValue = document.getElementById("sign-in-input-email");
	let usernameValue = document.getElementById("sign-in-input-username");
	let passwordValue = document.getElementById("sign-in-input-password");

	// value tozalash
	document.getElementById("sign-in-input-name").value = "";
	document.getElementById("sign-in-input-email").value = "";
	document.getElementById("sign-in-input-username").value = "";
	document.getElementById("sign-in-input-password").value = "";

	// value tekshirish
	if (nameValue === "" && emailValue === "" && usernameValue === "" && passwordValue === "") {
		// bor bulsa yuq qilish
		document.getElementById("sign-in-label-name").classList.remove("active");
		document.getElementById("sign-in-label-email").classList.remove("active");
		document.getElementById("sign-in-label-username").classList.remove("active");
		document.getElementById("sign-in-label-password").classList.remove("active");
		// qushish
		document.getElementById("sign-in-label-name").classList.add("active");
		document.getElementById("sign-in-label-email").classList.add("active");
		document.getElementById("sign-in-label-username").classList.add("active");
		document.getElementById("sign-in-label-password").classList.add("active");
		return;
	}
	if (nameValue === "" && emailValue === "" && usernameValue === "") {
		// bor bulsa yuq qilish
		document.getElementById("sign-in-label-name").classList.remove("active");
		document.getElementById("sign-in-label-email").classList.remove("active");
		document.getElementById("sign-in-label-username").classList.remove("active");
		// qushish
		document.getElementById("sign-in-label-name").classList.add("active");
		document.getElementById("sign-in-label-email").classList.add("active");
		document.getElementById("sign-in-label-username").classList.add("active");
		return;
	}
	if (nameValue === "" && emailValue === "" && passwordValue === "") {
		// bor bulsa yuq qilish
		document.getElementById("sign-in-label-name").classList.remove("active");
		document.getElementById("sign-in-label-email").classList.remove("active");
		document.getElementById("sign-in-label-password").classList.remove("active");
		// qushish
		document.getElementById("sign-in-label-name").classList.add("active");
		document.getElementById("sign-in-label-email").classList.add("active");
		document.getElementById("sign-in-label-password").classList.add("active");
		return;
	}
	if (emailValue === "" && passwordValue === "" && usernameValue === "") {
		// bor bulsa yuq qilish
		document.getElementById("sign-in-label-username").classList.remove("active");
		document.getElementById("sign-in-label-email").classList.remove("active");
		document.getElementById("sign-in-label-password").classList.remove("active");
		// qushish
		document.getElementById("sign-in-label-username").classList.add("active");
		document.getElementById("sign-in-label-email").classList.add("active");
		document.getElementById("sign-in-label-password").classList.add("active");
		return;
	}
	if (nameValue === "" && emailValue === "") {
		// bor bulsa yuq qilish
		document.getElementById("sign-in-label-name").classList.remove("active");
		document.getElementById("sign-in-label-email").classList.remove("active");
		// qushish
		document.getElementById("sign-in-label-name").classList.add("active");
		document.getElementById("sign-in-label-email").classList.add("active");
		return;
	}
	if (nameValue === "" && usernameValue === "") {
		// bor bulsa yuq qilish
		document.getElementById("sign-in-label-name").classList.remove("active");
		document.getElementById("sign-in-label-username").classList.remove("active");
		// qushish
		document.getElementById("sign-in-label-name").classList.add("active");
		document.getElementById("sign-in-label-username").classList.add("active");
		return;
	}
	if (emailValue === "" && usernameValue === "") {
		// bor bulsa yuq qilish
		document.getElementById("sign-in-label-email").classList.remove("active");
		document.getElementById("sign-in-label-username").classList.remove("active");
		// qushish
		document.getElementById("sign-in-label-email").classList.add("active");
		document.getElementById("sign-in-label-username").classList.add("active");
		return;
	}
	if (nameValue === "" && passwordValue === "") {
		// bor bulsa yuq qilish
		document.getElementById("sign-in-label-name").classList.remove("active");
		document.getElementById("sign-in-label-password").classList.remove("active");
		// qushish
		document.getElementById("sign-in-label-name").classList.add("active");
		document.getElementById("sign-in-label-password").classList.add("active");
		return;
	}
	if (emailValue === "" && passwordValue === "") {
		// bor bulsa yuq qilish
		document.getElementById("sign-in-label-email").classList.remove("active");
		document.getElementById("sign-in-label-password").classList.remove("active");
		// qushish
		document.getElementById("sign-in-label-email").classList.add("active");
		document.getElementById("sign-in-label-password").classList.add("active");
		return;
	}
	if (usernameValue === "" && passwordValue === "") {
		// bor bulsa yuq qilish
		document.getElementById("sign-in-label-username").classList.remove("active");
		document.getElementById("sign-in-label-password").classList.remove("active");
		// qushish
		document.getElementById("sign-in-label-username").classList.add("active");
		document.getElementById("sign-in-label-password").classList.add("active");
		return;
	}
	if (nameValue === "") {
		// bor bulsa yuq qilish
		document.getElementById("sign-in-label-name").classList.remove("active");
		// qushish
		document.getElementById("sign-in-label-name").classList.add("active");
		return;
	}
	if (emailValue === "") {
		// bor bulsa yuq qilish
		document.getElementById("sign-in-label-email").classList.remove("active");
		// qushish
		document.getElementById("sign-in-label-email").classList.add("active");
		return;
	}
	if (usernameValue === "") {
		// bor bulsa yuq qilish
		document.getElementById("sign-in-label-username").classList.remove("active");
		// qushish
		document.getElementById("sign-in-label-username").classList.add("active");
		return;
	}
	if (passwordValue === "") {
		// bor bulsa yuq qilish
		document.getElementById("sign-in-label-password").classList.remove("active");
		// qushish
		document.getElementById("sign-in-label-password").classList.add("active");
		return;
	}
	// ishlasa
	window.location.href = "index.html";
});
