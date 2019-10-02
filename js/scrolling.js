window.onload=()=>{
	const navbar = document.querySelector('.navbar');
	const intro_img = document.querySelector('.intro-div');

	const options = {
		rootMargin: '-150px 0px 0px 0px'
	};

	const observer = new IntersectionObserver(function(entries, observer) {
		entries.forEach(entry => {
			if(!entry.isIntersecting){
            navbar.classList.add("navbar-scrolled");
        }
        else{
            navbar.classList.remove("navbar-scrolled");
        }
			console.log(entry.target);
		});
	}, options);

	observer.observe(intro_img);
}
