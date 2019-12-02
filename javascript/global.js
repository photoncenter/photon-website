function paper() {
	alert("Coming later...");
}

const details = document.querySelectorAll("details");
details.forEach((targetDetail) => {
	targetDetail.addEventListener("click", () => {
		details.forEach((detail) => {
			if (detail !== targetDetail) {
				detail.removeAttribute("open");
			}
		});
	});
});
