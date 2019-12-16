function menu() {
	var ul = document.querySelector("header ul");
	var el = document.querySelector("header span");
	if (ul.className === "open") {
		ul.removeAttribute("class");
		el.removeAttribute("class");
	} else {
		ul.classList.add("open");
		el.classList.add("active");
	}
}
