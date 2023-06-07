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

const likeButton = document.querySelectorAll('._icon-like'),
	saveButton = document.querySelectorAll('._icon-save')

function like(e) {
	if (e.target.style.color != 'rgb(255, 100, 100)') {
		e.target.style.color = '#FF6464'
	} else {
		e.target.style.color = '#000'
	}
}

function save(e) {
	if (e.target.style.color != 'rgb(251, 238, 124)') {
		e.target.style.color = '#FBEE7C'
	} else {
		e.target.style.color = '#000'
	}
}

likeButton.forEach(element => {
	element.addEventListener('click', like)
});

saveButton.forEach(element => {
	element.addEventListener('click', save)
});