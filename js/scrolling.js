window.onload = () => {
	const navbar = document.querySelector('.navbar');
	const intro_img = document.querySelector('.intro-div');

	const options = {
		rootMargin: '-150px 0px 0px 0px'
	};

	const observer = new IntersectionObserver(function(entries, observer) {
		entries.forEach(entry => {
			if (entry.rootBounds.width > 768) {
				if (!entry.isIntersecting) {
					navbar.classList.add('navbar-scrolled');
				} else {
					navbar.classList.remove('navbar-scrolled');
				}
			}
		});
	}, options);

	observer.observe(intro_img);

	const navbar_items = document.querySelectorAll('.navbar-items');
	const toggle_bar = document.querySelector('.toggle-bar');
	
	navbar_items.forEach(function(navbar_item) {
		navbar_item.addEventListener('click', function() {
			toggle_bar.checked = false;
		
		});
	});
	
};
