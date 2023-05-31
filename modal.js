const commentLinks = document.querySelectorAll('.modal')

document.addEventListener('click', function(e) {
	if (e.target == document.querySelector('.cover') || e.target == closeModal) {
		document.documentElement.classList.remove("modal-open");
	}
});

commentLinks.forEach(element => {
	element.addEventListener('click', function (e) {
		if (document.documentElement.classList.contains('modal-open')) {
			document.documentElement.classList.remove("modal-open");
		} else {
			document.documentElement.classList.add("modal-open");
		}
	});
});