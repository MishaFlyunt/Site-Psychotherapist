document.getElementById("registration-form").addEventListener("submit", e => {
	const email = e.target.email.value;
	if (!email.includes("@")) {
		alert("Будь ласка, введіть правильний email");
		e.preventDefault();
	}
});
