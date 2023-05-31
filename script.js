const burgerMenuButton = document.querySelector('.aside__button')

document.addEventListener('click', function(e) {
	if (e.target == burgerMenuButton) {
		if (document.documentElement.classList.contains('menu-open')) {
			document.documentElement.classList.remove("menu-open");
		} else {
			document.documentElement.classList.add("menu-open");
		}
	}
});
